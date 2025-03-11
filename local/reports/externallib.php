<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.
/**
 * @package   local_report
 * @author    paul kenneth k 
 * @copyright 2025, sq1 cybersecurity
 */


require_once(__DIR__ . '/../../config.php');
require_once($CFG->libdir . '/externallib.php');
require_once($CFG->dirroot . '/local/reports/lib.php');


require_login();

class local_report_external extends external_api {

    public static function reports_course_parameters() {
        return new external_function_parameters(array(
            'idnumber' => new external_value(PARAM_INT, 'idnumber'),
        ));
    }

    public static function reports_course() {
        return local_reports_course($idnumber);
    }

    public static function reports_course_returns() {
        return new external_value(PARAM_TEXT, '');
    }



    public static function get_users_parameters() {
        return new external_function_parameters(array(
           'courseid' => new external_value(PARAM_INT, 'courseid'),
        ));
    }

    public static function get_users($courseid) {
        return local_reports_get_users($courseid);
       
    }

    public static function get_users_returns() {
        return new external_single_structure([
            'users' => new external_multiple_structure(
                new external_single_structure([
                    'id' => new external_value(PARAM_INT, 'id'),
                    'firstname' => new external_value(PARAM_TEXT, 'firstname'),
                    'lastname' => new external_value(PARAM_TEXT, 'lastname'),
                    'email' => new external_value(PARAM_TEXT, 'email'),
                    'grade' => new external_value(PARAM_FLOAT, 'grade', VALUE_OPTIONAL),
                    'Coursename' => new external_value(PARAM_TEXT, 'Coursename'),
                    'startdate' => new external_value(PARAM_TEXT, 'startdate'),
                    'completiondate' => new external_value(PARAM_TEXT, 'completiondate'),
                    'Coursestatus' => new external_value(PARAM_TEXT, 'Coursestatus')
                ])
            )
        ]);
    } 
}
