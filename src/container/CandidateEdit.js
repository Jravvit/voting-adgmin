import React, { Component } from 'react';

class CandidateRegistration extends Component {
	render() {
		console.log(this.props)
		return(
			<div className="candidate-registration">
				<div className="title m-b-50" >
				후보자 수정
				</div>
				<form className="ui form">
					<div className="ui equal width grid">
						<div className="row">
							<div className="column">
								<div className="field">
									<input type="text" value={this.props.location.state.name} placeholder="후보자 이름"/>
								</div>
								<div className="field">
									<input type="text" value={this.props.location.state.party} placeholder="후보자 소속"/>
								</div>
								<div className="field">
									<textarea placeholder="후보자 공약" value={this.props.location.state.resume}></textarea>
								</div>
								<div>
									<input type="file"/>
								</div>
							</div>
						</div>
					</div>
				</form>
				
			</div>
			
		)
	}
}

export default CandidateRegistration;