import React from "react";
import userImage from "./../img/user-icon.png";

function FeedSection() {
	return (
		<div id="feedSection" class="panel">
			<img src={userImage} id="userImage" alt="User avatar" align="left" />
			<p>Hello, world!</p>
			<p>This is a user's tweet!</p>
		</div>
	);
}

export default FeedSection;