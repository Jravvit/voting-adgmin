import React, { Component } from 'react';
import CandidateContent from "../component/candidateContent/CandidateContent.js"
import { withRouter } from "react-router-dom";
import axios from 'axios';
import {server} from "../lib/API.js"

class CandidateList extends Component {
	constructor(props) {
	  super(props);
		

	  this.state = {
	  	candidate_list: []
	  };
	}

	handleHistroy = (election_id,candidate_id, num) => {
		let url = "/voting/"+election_id+"/candidate/"+candidate_id+"/edit"
		this.props.history.push({
			pathname:url,
			state: this.state.candidate_list[num]
		})
	}

	renderCandidateListRender = () => {
		let count = Math.ceil(this.state.candidate_list.length/4)
		let candidateListComponents = []

		for(let i=0;i<count;i++) {
			let data = this.state.candidate_list.slice(i*4,i*4+4)
			console.log(data)
			candidateListComponents.push(
				<div className="row">
					{
						data.map((c, index) => {
							
							return (
								<div className="column" key={index}>
									<CandidateContent data={c}  temp = {index} handleHistory={this.handleHistroy}/>
								</div>
							)
						})
					}
				</div>
			)
		}
		return candidateListComponents;
	}

	fetchCandidate = (election_id) => {
		axios('http://'+server+':8080/admin/elections/info/'+election_id+'/candidates').
		then((rs) => {
			console.log(rs)
			if(rs.data['error']){
				console.log(rs.data.error)
			} else {
				this.setState({
					candidate_list:rs.data.candidate
				})
			}
			
		})
		.catch((rs) => {console.log(rs)})
	}
	
	componentDidMount() {
		this.fetchCandidate(this.props.location.state.election_id)
	}

	render() {
		return(
			<div className="CandidateList row">
				<div className="ui equal width grid row">
					{this.renderCandidateListRender()}
				</div>				
			</div>
		)
	}
}

export default withRouter(CandidateList);