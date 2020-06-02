import React, { Component } from "react";

class Resources extends Component {
	render() {
		return (
			<div className="other-resources">
				<h1>Other Resources</h1>

				<h2>Learning Lua</h2>

				<ul>
					<li>
						<a target="_blank" rel="noopener noreferrer" href="https://www.lua.org/pil/contents.html">Programming in Lua</a><br />
						Authored by the chief language architect for Lua 5.0, this is a thorough, academic approach to the language's features.
					</li>

					<li>
						<a target="_blank" rel="noopener noreferrer" href="https://www.tutorialspoint.com/lua/">TutorialsPoint Lua Guide</a><br />
						This is a practical guide for getting up and running with Lua's basic syntax and features quickly.
					</li>
				</ul>

				<h2>StepMania GitHub Wiki</h2>
				<ul>
					<li>
						<a target="_blank" rel="noopener noreferrer" href="https://github.com/stepmania/stepmania/wiki/Theming">
							Theming
						</a>
					</li>
					<li>
						<a target="_blank" rel="noopener noreferrer" href="https://github.com/stepmania/stepmania/wiki/Actor-Definitions">
							Actor Definitions
						</a>
					</li>
					<li>
						<a target="_blank" rel="noopener noreferrer" href="https://github.com/stepmania/stepmania/wiki/Noteskins">
							NoteSkins
						</a>
					</li>
				</ul>

				<h2>Lua 5.1 Reference</h2>
				<ul>
					<li>
						<a target="_blank" rel="noopener noreferrer" href="https://www.lua.org/manual/5.1/">Lua 5.1 Reference Manual</a><br />
						This is the official reference manual for Lua 5.1, which StepMania 5 and 5.1 use.  It is complete,
						though not easy to follow along with.
					</li>
				</ul>
			</div>
		);
	}
}

export default Resources;