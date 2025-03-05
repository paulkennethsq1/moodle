<?php
var_dump(1);die;
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

 require_once(__DIR__ . '/../../../config.php');

// require_once($CFG->dirroot . '/local/keka/lib.php');

defined('MOODLE_INTERNAL') || die();

require_login();

$PAGE->set_url(new moodle_url('/local/report/index.php'));

$PAGE->set_title(get_string('pluginname', 'local_report'));
// $PAGE->set_pagelayout('admininistrator');
// $id = optional_param('id', null, PARAM_TEXT);

echo $OUTPUT->header();

$hash = [];

echo $OUTPUT->render_from_template('local_report/index', 'report' => [
    ['value' => 'report1', 'label' => 'Report 1'],
    ['value' => 'report2', 'label' => 'Report 2'],
    ['value' => 'report3', 'label' => 'Report 3']
]);
// $PAGE->requires->js_call_amd('local_report/index', 'init');

echo $OUTPUT->footer();
