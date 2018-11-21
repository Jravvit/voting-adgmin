import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class ElectionRegistration extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      startDate: new Date(),
	      endDate: new Date(),
	    };
	    
	  }

	  handleChangeStartDate = (date) => {
	    this.setState({
	      startDate: date
	    });
	  }

	   handleChangeEndDate = (date) => {
	    this.setState({
	      endDate: date
	    });
	  }

	render() {
		return(
			<div className="election-registration">
				<div className="title m-b-50" >
				선거 등록
				</div>
				<form className="ui form">
					<div className="ui equal width grid">
						<div className="row">
							<div className="column">
								<div className="field">
									<input type="text" placeholder="선거 이름"/>
								</div>
								<div className="field">
									<span>시작일</span>
									<DatePicker
								        selected={this.state.startDate}
								        onChange={this.handleChangeStartDate}
								        showTimeSelect
								        dateFormat="Pp"
								      /> 
								      {'  -  '}
								    종료일
							      <DatePicker
							        selected={this.state.endDate}
							        onChange={this.handleChangeEndDate}
							        showTimeSelect
									dateFormat="Pp"
							      /> 
								</div>
								<div className="field">
									<textarea placeholder="선거 내용"></textarea>
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

export default ElectionRegistration;