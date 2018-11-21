import React, { Component } from 'react';

class VotingResultContent extends Component {
	render() {
		return (
			<div className="voting-result-content">
				<div className='ui card'>
					<div className='content'>
				    <div className='header'>{this.props.data.title} 의 결과</div>
				    <div className='meta'>
				      <span className='date'>Joined in 2015</span>
				    </div>
				    <div className='description'>Matthew is a musician living in Nashville.</div>
				  </div>
				  <div className='extra content'>
				    {this.props.data.title}
				  </div>
				</div>
			</div>
		)
	}
}

export default VotingResultContent;