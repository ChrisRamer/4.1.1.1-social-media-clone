import React from "react";
import Header from "./Header";
import StatusSection from "./StatusSection";
import UserSummarySection from "./UserSummarySection";
import UserInfoSection from "./UserInfoSection";

function App() {
	return (
		<React.Fragment>
			<Header />
			<div class="grid-container">
				<div class="grid-item"><UserSummarySection /></div>
				<div class="grid-item"><StatusSection /></div>
				<div class="grid-item"><UserInfoSection /></div>
			</div>
		</React.Fragment>
	);
}

export default App;