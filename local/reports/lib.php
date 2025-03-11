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

function local_reports_get_users($courseid) {
    global $DB;

    try {
        // Fetch enrolled users
        $sql = "SELECT u.id, u.firstname, u.lastname, u.email
                FROM {user} u
                JOIN {user_enrolments} ue ON u.id = ue.userid
                JOIN {enrol} e ON ue.enrolid = e.id
                WHERE e.courseid = ?
                  AND ue.status = 0  
                  AND u.suspended = 0 
                  AND u.deleted = 0";
        $users = $DB->get_records_sql($sql, [$courseid]);
        
        // Fetch course details
        $sql = "SELECT c.fullname AS course_name, c.startdate, cc.timecompleted
                FROM {course} c
                LEFT JOIN {course_completions} cc ON c.id = cc.course
                WHERE c.id = ?";
        $course = $DB->get_record_sql($sql, [$courseid]);

        // Process course details
        $course_name = $course->course_name;
        $start_date = date('Y-m-d', $course->startdate);
        $completion_date = $course->timecompleted ? date('Y-m-d', $course->timecompleted) : 'Not Completed';
        $course_status = $course->timecompleted ? 'Completed' : 'In Progress';

        // Fetch the quiz ID for the course
        $sql= "SELECT id, name FROM {quiz} WHERE course = ?";
        $quiz = $DB->get_record_sql($sql, [$courseid]);
        $quizid = $quiz ? $quiz->id : null;

        // Build user list with grades
        $userlist = [];

        foreach ($users as $user) {
            // Fetch quiz grade for the user (only if quiz exists)
            $grade_value = 'Not Graded';
            if ($quizid) {
                $sql = "SELECT qg.finalgrade
                        FROM {grade_items} gi
                        JOIN {grade_grades} qg ON gi.id = qg.itemid
                        WHERE gi.iteminstance = ?
                          AND gi.courseid = ?
                          AND gi.itemmodule = 'quiz'
                          AND qg.userid = ?";
                $grade = $DB->get_record_sql($sql, [$quizid, $courseid, $user->id]);

                if ($grade && is_numeric($grade->finalgrade)) {
                    // Convert float to int if it's a whole number
                    $grade_value = (intval($grade->finalgrade) == $grade->finalgrade) 
                        ? intval($grade->finalgrade) 
                        : round($grade->finalgrade, 2);
                } else {
                    $grade_value = 0;
                }
            }

            $userlist[] = [
                'id' => $user->id,
                'firstname' => $user->firstname,
                'lastname' => $user->lastname,
                'email' => $user->email,
                'grade' => $grade_value, // Integer if whole, float if decimal
                'Coursename' => $course_name,
                'startdate' => $start_date,
                'completiondate' => $completion_date,
                'Coursestatus' => $course_status,
            ];
        } 
        return ['users' => $userlist];

    } catch (Exception $e) {
        return ['error' => $e->getMessage()];
    }
}



