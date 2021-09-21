import React from "react";
import Header from "./Header";
import StatusSection from "./StatusSection";
import SummarySection from "./SummarySection";

function App() {
	return (
		<React.Fragment>
			<Header />
			<div class="grid-container">
				<div class="grid-item"><SummarySection /></div>
				<div class="grid-item"><StatusSection /></div>
				<div class="grid-item"><StatusSection /></div>
				<div class="grid-item"><SummarySection /></div>
				<div class="grid-item"><SummarySection /></div>
				<div class="grid-item"><SummarySection /></div>
			</div>
		</React.Fragment>
	);
}

export default App;