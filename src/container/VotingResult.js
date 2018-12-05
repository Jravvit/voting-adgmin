import React, { Component } from 'react';
import VotingResultList from '../component/votingResultList/votingResultList.js'
import {server} from "../lib/API.js"
import axios from 'axios';

class VotingResult extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		  'list':[]
	  };
	}
	componentDidMount(){
		this.resultInfo();
	}
	resultInfo = () => {
		axios.get("http://"+server+":8080/admin/elections/result")
		.then((data) => {
			this.setState({
				list : data.data.election
			});
		})
	}
  render() {
	  console.log(this.state)
    return (
      <div className="voting-result">
      	<div className="title m-b-50">
      		 종료된 투표
      	</div>
         <VotingResultList data={this.state.list}/>
      </div>
    );
  }
}

export default VotingResult;
