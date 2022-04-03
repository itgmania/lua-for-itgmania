import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"



ReactDOM.render((
	<BrowserRouter basename="/lua-for-itgmania">
		<App />
	</BrowserRouter>
),  document.getElementById("root"));
