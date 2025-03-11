<?php  // Moodle configuration file

unset($CFG);
global $CFG;
$CFG = new stdClass();

$CFG->dbtype    = 'mysqli';
$CFG->dblibrary = 'native';
$CFG->dbhost    = 'localhost';
$CFG->dbname    = 'moodle';
$CFG->dbuser    = 'root';
$CFG->dbpass    = 'newpassword';
$CFG->prefix    = 'sq_';
$CFG->dboptions = array (
  'dbpersist' => 0,
  'dbport' => 3306,
  'dbsocket' => '',
  'dbcollation' => 'utf8mb4_unicode_ci',
);

$CFG->wwwroot   = 'http://localhost/moodle';
$CFG->dataroot  = '/var/www/moodledata';
$CFG->admin     = 'admin';

$CFG->directorypermissions = 0777;

$CFG->additionaljavascripts = [
  'https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js'
];

require_once(__DIR__ . '/lib/setup.php');

// @error_reporting(E_ALL | E_STRICT);
// @ini_set('display_errors', '1');
// $CFG->debug = (E_ALL | E_STRICT);
// $CFG->debugdisplay = 1;
