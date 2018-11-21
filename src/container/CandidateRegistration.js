import React, { Component } from 'react';

class CandidateRegistration extends Component {
	render() {
		return(
			<div className="candidate-registration">
				<div className="title m-b-50" >
				후보자 등록
				</div>
				<form className="ui form">
					<div className="ui equal width grid">
						<div className="row">
							<div className="column">
								<div className="field">
									<input type="text" placeholder="후보자 이름"/>
								</div>
								<div className="field">
									<input type="text" placeholder="후보자 소속"/>
								</div>
								<div className="field">
									<textarea placeholder="후보자 공약"></textarea>
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