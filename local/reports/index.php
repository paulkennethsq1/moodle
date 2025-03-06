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

 require_once('/var/www/html/moodle/config.php');


// require_once($CFG->dirroot . '/local/keka/lib.php');

defined('MOODLE_INTERNAL') || die();

require_login();

$PAGE->set_url(new moodle_url('/local/reports/index.php'));

$PAGE->set_title(get_string('pluginname', 'local_report'));
// $PAGE->set_pagelayout('admininistrator');
// $id = optional_param('id', null, PARAM_TEXT);

echo $OUTPUT->header();
$hash = array(
    'report' => array(
        array('value' => 'hippa', 'label' => 'HIPPA'),
    )
);



echo $OUTPUT->render_from_template('local_reports/index', $hash);
$PAGE->requires->js_call_amd('local_reports/index', 'init');

echo $OUTPUT->footer();
