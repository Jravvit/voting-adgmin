import React, { Component } from 'react';
import "./VotingContent.css";
import CandidateList from "../../container/CandidateList.js"
import { withRouter} from "react-router-dom";
import {convertTimestamp} from "../../lib/lib.js"

class VotingContent extends Component {

	moveToCandidateRegist = (id) => {
	  	let url = '/voting/'+id+'/candidate/regist'
	  	this.props.history.push({
	  		pathname: url,
	  		state: this.props.location.state
	  	})
	 }

	render() {
		return(
			<div className="voting-content">
				<div className="title text-left m-b-50 ">
					{this.props.location.state.title}
				</div>
				<div className="ui  internally grid">
					<div className="row">
						<div className="four wide column">
							photo
						</div>
						<div className="twelve wide column text-left">
							<div className="voting-content-title">
								선거기간
							</div>
							<div className="m-t-20 m-b-20">
								{this.props.location.state.start_time} ~ {this.props.location.state.end_time}
							</div>
							<div className="voting-content-title">
								선거내용
							</div>
							<div className="m-t-20 m-b-20">
								{this.props.location.state.content}
							</div>
						</div>
					</div>
					<div className="row m-t-50 ui grid">
						<div className="row title text-left m-b-50">
							선거에 등록 된 후보자 목록 <button className="ui primary button" onClick={() => this.moveToCandidateRegist(this.props.location.state.election_id)}> 후보자 등록</button>
						</div>
						<CandidateList election_id={this.props.location.state.id}/>
					</div>
				</div>
			</div>
			
		)
	}
}

export default VotingContent;