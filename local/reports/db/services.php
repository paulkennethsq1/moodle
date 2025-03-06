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
 * @author    Paul Kenneth K
 * @copyright 2025, SQ1 Cybersecurity
 */

defined('MOODLE_INTERNAL') || die();

// Define the web service functions to install.
$functions = array(
    'local_reports_course' => array(
        'classname'   => 'local_report_external',
        'methodname'  => 'reports_course',
        'classpath'   => 'local/reports/externallib.php',
        'description' => 'Sends a test email.',
        'type'        => 'write',
        'ajax'        => true, // Set to true if the function is available for AJAX calls.
    ),
);

// Define the services to install as pre-built services.
// A pre-built service is not editable by the administrator.
$services = array(
    'Local Reports' => array(
        'functions' => array(
            'local_reports_course',
        ),
        'restrictedusers' => 0,
        'enabled' => 1,
    ),
);
