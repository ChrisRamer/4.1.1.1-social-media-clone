import React from "react";
import userImage from "./../img/user-icon.png";

function UserSummarySection() {
	return (
		<div id="userSummarySection" class="panel">
			<img src={userImage} id="userImage" alt="User avatar" align="left" />
			<p>Hello, world!</p>
			<p>This is the user summary section</p>
		</div>
	);
}

export default UserSummarySection;