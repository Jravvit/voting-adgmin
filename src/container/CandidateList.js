import React, { Component } from 'react';
import CandidateContent from "../component/candidateContent/CandidateContent.js"

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
		}]

	  this.state = {};
	}

	render() {
		return(
			<div className="CandidateList">
				<CandidateContent />				
			</div>
		)
	}
}

export default CandidateList;