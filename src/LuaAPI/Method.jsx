import React, { Component } from "react"
import ReactDOMServer from 'react-dom/server'
import Octicon, {Link, LogoGithub} from '@primer/octicons-react'

class Method extends Component {

	constructor(props){

		super(props)

		// class methods will have an sm_class prop, but GlobalFunctions will not
		const sm_class = (this.props.sm_class !== undefined) ?  ("-" + this.props.sm_class) : ""
		const _name    = "-" + this.props.method.name
		this.id = this.props.grouping + sm_class + _name

		// ensure that updateHash has access to "this"
		this.updateHash = this.updateHash.bind(this)

		if (this.props.method.url !== undefined){
			const base = "https://github.com/itgmania/itgmania/tree/"
			const hash = "HEAD"
			const url  = base + hash + this.props.method.url

			this.github_anchor = <a className="logo-github" href={url} target="_blank" rel="noopener noreferrer"><Octicon icon={LogoGithub} /></a>

		} else {
			this.github_anchor = ""
		}

		this.description = this.props.method.desc

		if (this.props.method.since !== undefined) {
			window.foo = <em>New in {this.props.method.since}</em>
			this.description += "<br>"
			this.description += ReactDOMServer.renderToString(<em>New in {this.props.method.since}.</em>)
		}
	}

	updateHash(){
		window.location.hash = "#" + this.id
	}

	render(){
		return(
			<div id={this.id} className="method">
				<div className="method-signature">
					<span className="octicon-link" onClick={this.updateHash}><Octicon icon={Link} /></span>
					<span>
						{this.props.method.name}
						(<code>{this.props.method.arguments}</code>)
					</span>
					{this.github_anchor}
				</div>

				<span className="method-return"><em>return: </em> <span dangerouslySetInnerHTML={{__html: this.props.method.return}} />  </span>
				<div className="description description" dangerouslySetInnerHTML={{ __html: this.description }} />
			</div>
		)
	}
}

export default Method
