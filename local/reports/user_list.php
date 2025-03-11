<?php
require_once(dirname(__FILE__) . '/../../config.php');

$id = required_param('id', PARAM_INT); 

require_login();

$PAGE->set_url(new moodle_url('/local/reports/user_list.php', ['id' => $id]));
$PAGE->set_context(context_system::instance());
$PAGE->set_title(get_string('course_reports', 'local_reports'));
$PAGE->set_heading(get_string('course_reports', 'local_reports'));
$PAGE->requires->css(new moodle_url('/local/reports/styles.css'));

$PAGE->requires->js_call_amd('local_reports/user_list', 'init', [$id]); 

echo $OUTPUT->header();

$template_data = ['id' => $id];
echo $OUTPUT->render_from_template('local_reports/user_list', $template_data);

echo $OUTPUT->footer();
?>
