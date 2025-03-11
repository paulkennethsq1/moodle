define(['jquery', 'core/ajax', 'core/str','core/url', 'https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js'], 
    function($, ajax, str,moodleurl) {
    
    var index = {
        dom: {
            main: null,
        },

        variables: {
            dataTableReference: null,
        },

        actions: {
            getString: function(id) {
                index.variables.id = id;
                str.get_strings([
                ]).done(function() {
                    index.init();
                });
            },
        },

        init: function() {
        
            index.variables.dataTableReference = $('#userTable').DataTable({
                responsive: true,
                serverSide: true,
                processing: true,
                pageLength: 10,
                order: [[0, "DESC"]], 
                ajax: function(data, callback, settings) {  
                    var courseid = index.variables.id;
                    console.log("Course ID:", courseid);
                    var promises = ajax.call([{
                        methodname: "local_reports_get_users",
                        args: { courseid: courseid }
                    }]);
                
                    promises[0].done(function(response) {
                        console.log("Response from AJAX:", response);
                
                        if (typeof callback === "function") {
                            callback({ data: response.users || [] }); // Ensure it's an array
                        } else {
                            console.error("Callback is not a function!", callback);
                        }
                    }).fail(function(jqXHR, textStatus, errorThrown) {
                        console.error("AJAX Error:", textStatus, errorThrown, jqXHR.responseText);
                        if (typeof callback === "function") {
                            callback({ data: [] }); 
                        }
                    });
                },
                
                columns: [
                    { 
                        data: "id",
                        visible: false
                     },
                    { 
                        data: "firstname",
                        render: function(data, type, row) {
                            return data + " " + row.lastname;
                        }
                    },
                    { data: "email" },
                    { data: "Coursestatus" },
                    { data: "startdate" },
                    { data: "completiondate" },
                    { data: "grade" },
                    
                    { 
                        data: "id",
                        orderable: false,
                        searchable: false,
                        render: function(data, type, row) {
                            return `
                                <i class="fa fa-eye view" data-value="${data}" title="view" aria-hidden="true"></i> 
                                
                            `;
                        }
                    }
                ]
            });

            $('#userTable tbody').on('click', '.view', function() {
                var userId = $(this).data('value'); 
                window.location = moodleurl.relativeUrl(
                    '/local/reports/user_report.php?id=' + userId
                );
            });
            
        },
    };

    return {
        init: index.actions.getString,
    };
});
