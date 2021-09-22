import React from "react";

function StatusSection() {
	return (
		<div id="statusSection" class="panel">
			<h3>Talk about your day!</h3>
			<form id="statusInput">
				<div class="form-group">
					<input id="statusText" class="form-control" type="text" placeholder="What's on your mind?"></input>
				</div>
			</form>
		</div>
	);
}

export default StatusSection;