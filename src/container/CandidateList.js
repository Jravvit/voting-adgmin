import React, { Component } from 'react';
import CandidateContent from "../component/candidateContent/CandidateContent.js"
import { withRouter } from "react-router-dom";
import axios from 'axios';
import {server} from "../lib/API.js"

class CandidateList extends Component {
	constructor(props) {
	  super(props);
		
		this.candidateList =  [{
		  	name:"김진수",
		  	thumbnail:"",
		  	resume:"안녕하세요 제 100대 회장선거 후보 김진수 입니다.",
		  	party:"1",
		  	election_id: 1,
		  	id: 1
		  },{
		  	name:"최지현",
		  	thumbnail:"",
		  	resume:"안녕하세요 제 100대 회장선거 후보 최지현 입니다.",
		  	party:"2",
		  	election_id: 1,
		  	id: 2

		  },{
		  	name:"김숙자",
		  	thumbnail:"",
		  	resume:"안녕하세요 제 100대 회장선거 후보 김숙자 입니다.",
		  	party:"3",
		  	election_id: 1,
		  	id: 3
		},{
		  	name:"김숙자",
		  	thumbnail:"",
		  	resume:"안녕하세요 제 100대 회장선거 후보 김숙자 입니다.",
		  	party:"3",
		  	election_id: 1,
		  	id: 4
		},{
		  	name:"김숙자",
		  	thumbnail:"",
		  	resume:"안녕하세요 제 100대 회장선거 후보 김숙자 입니다.",
		  	party:"3",
		  	election_id: 1,
		  	id: 5
		},{
		  	name:"김숙자",
		  	thumbnail:"",
		  	resume:"안녕하세요 제 100대 회장선거 후보 김숙자 입니다.",
		  	party:"3",
		  	election_id: 1,
		  	id: 6
		},{
		  	name:"김숙자",
		  	thumbnail:"",
		  	resume:"안녕하세요 제 100대 회장선거 후보 김숙자 입니다.",
		  	party:"3",
		  	election_id: 1,
		  	id: 7
		},{
		  	name:"김숙자",
		  	thumbnail:"",
		  	resume:"안녕하세요 제 100대 회장선거 후보 김숙자 입니다.",
		  	party:"3",
		  	election_id: 1,
		  	id: 8
		}]

	  this.state = {
	  	candidate_list: []
	  };
	}

	handleHistroy = (id,candidate_id) => {
		let url = "/voting/"+id+"/candidate/"+candidate_id+"/edit"
		this.props.history.push({
			pathname:url,
			state:this.candidateList[candidate_id-1]
		})
	}

	renderCandidateListRender = () => {
		let count = Math.ceil(this.state.candidate_list.length/4)
		let candidateListComponents = []

		for(let i=0;i<count;i++) {
			let data = this.state.candidate_list.slice(i*4,i*4+4)

			candidateListComponents.push(
				<div className="row">
					{
						data.map((c, index) => {
							return (
								<div className="column" key={index}>
									<CandidateContent data={c} handleHistory={this.handleHistroy}/>
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