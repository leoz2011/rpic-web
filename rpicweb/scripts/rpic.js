///////////////////////////////////////////////////////////////////////////////

function rpic_cmd_forward() {
	rpic_show_command("Forward");
    rpic_command("rpic_fwrd");
}

function rpic_cmd_left() {
	rpic_show_command("Left");
    rpic_command("rpic_left");
}

function rpic_cmd_stop() {
	rpic_show_command("Stop");
    rpic_command("rpic_stop");
}

function rpic_cmd_right() {
	rpic_show_command("Right");
    rpic_command("rpic_rght");
}

function rpic_cmd_backward() {
	rpic_show_command("Backward");
    rpic_command("rpic_bkwd");
}

function rpic_cmd_deccelerate() {
	rpic_show_command("Deccelerate");
    rpic_command("rpic_dcl");
}

function rpic_cmd_accelerate() {
	rpic_show_command("Accelerate");
    rpic_command("rpic_acl");
}

// Command
function rpic_command(command) {
    $.get(window.location.protocol+ "//" + window.location.host + "?" + command);
}

function rpic_get_version() {
    var command = "rpic_ver";
    $.get(window.location.protocol+ "//" + window.location.host + "?" + command, rpic_show_version);
}

function rpic_show_version(response) {
    $("#rpic_info_version").text("Version: " + response);
}

function rpic_show_status(response) {
    $("#rpic_info_status").text("Status: " + response);
}

function rpic_show_command(response) {
    $("#rpic_info_command").text("Command: " + response);
}


