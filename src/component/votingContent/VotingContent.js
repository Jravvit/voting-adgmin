import React, { Component } from 'react';
import "./VotingContent.css";

class VotingContent extends Component {
	render() {
		return(
			<div className="voting-content">
				<div className="title text-left m-b-50 ">
					선거이름
				</div>
				<div className="ui celled internally grid">
					<div className="row">
						<div className="four wide column">
							photo
						</div>
						<div className="twelve wide column text-left">
							<div className="voting-content-title">
								선거기간
							</div>
							<div className="m-t-20 m-b-20">
								2018/09/30 ~ 2018/10/07
							</div>
							<div className="voting-content-title">
								선거내용
							</div>
							<div className="m-t-20 m-b-20">
								100대 회장선거
							</div>
						</div>
					</div>
					<div className="row">

					</div>
				</div>
			</div>
			
		)
	}
}

export default VotingContent;