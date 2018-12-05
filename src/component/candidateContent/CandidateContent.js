import React, { Component } from 'react';
import testImg from "../../assets/img/matthew.png";
import {navLink} from "react-router-dom";

class CandidateContent extends Component {
	render() {
		console.log(this.props.temp)
		return(
			<div className="candidate-content"  onClick={() => this.props.handleHistory(this.props.data.election_id,this.props.data.candidate_id, this.props.temp)}>
				<div className='ui card'>
				  <img src={testImg} className='ui image' />
				  <div className='extra content'>
				    <a>{this.props.data.name}</a>
				  </div>
				</div>
			</div>
			
		)
	}
}

export default CandidateContent;