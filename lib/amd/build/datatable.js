define(['jquery'], function($) {
    require(['core/first'], function() {
        require(['lib/datatables/js/jquery.dataTables.min'], function() {
            console.log("DataTables loaded!");
        });
    });
});
