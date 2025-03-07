define([
    'jquery',
    'core/notification',
    'core/ajax',
    'core/url',
    'datatables.net',
    'datatables.net-bs4',
    'datatables.net-buttons',
    'datatables.net-buttons-bs4',
    'datatables.net-buttons-colvis',
    'datatables.net-buttons-print',
    'datatables.net-buttons-html5',
    'datatables.net-responsive',
    'datatables.net-responsive-bs4'
], function(
    $,
    notification,
    ajax,
    moodleurl
) {
    var userList = {
        init: function(id) {
            var table = $('#userTable').DataTable({
                responsive: true,
                dom: 'Bfrtip',
                buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
                processing: true,
                serverSide: true,
                ajax: function(data, callback) {
                    data.id = id;
                    ajax.call([{
                        methodname: 'local_reports_get_user_list',
                        args: data
                    }])[0].done(callback).fail(notification.exception);
                },
                columns: [
                    {data: 'name'},
                    {data: 'email'},
                    {data: 'course_start'},
                    {data: 'course_complete'},
                    {data: 'total_score'},
                    {
                        data: 'id',
                        orderable: false,
                        render: function(data) {
                            return `<a href="${moodleurl.relativeUrl('/local/reports/view_user.php?id=' + data)}" class="btn btn-primary btn-sm">View</a>`;
                        }
                    }
                ]
            });
        }
    };

    return userList;
});
