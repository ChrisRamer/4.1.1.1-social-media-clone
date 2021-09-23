import React from "react";
import userImage from "./../img/user-icon.png";

function FollowSection() {
	return (
		<div id="followSection" class="panel">
			<img src={userImage} id="userImage" alt="User avatar" align="left" />
			<p>Person to follow #1</p>
			<br />
			<img src={userImage} id="userImage" alt="User avatar" align="left" />
			<p>Person to follow #2</p>
			<br />
			<img src={userImage} id="userImage" alt="User avatar" align="left" />
			<p>Person to follow #3</p>
		</div>
	);
}

export default FollowSection;