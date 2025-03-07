<?php
/**
 * This function is used to redirect users to micro-learning courses.
 * @param  object $data
 * @return bool Returns true or false.
 * @author Chaitra E
 */
function local_reports_course($user) {
    try {
        global $DB;
        print_r(22);die;
    } catch (Exception $e) {
        
    }
}

function local_reports_get_courses() {
    try {
        global $DB, $USER;

        $sql = "SELECT id,
            fullname
            FROM {course} c
            WHERE c.category = 5";
        $result = $DB->get_records_sql($sql);
        
        return array_values($result);
    } catch (Exception $e) {
        local_micro_learning_exception_logs(
            'micro_learning_lib: local_micro_learning_ml_lib_get_smtps'
        );
    }
}