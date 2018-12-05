import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { convertTimestamp } from "../lib/lib.js"
import {server} from "../lib/API.js"

class ElectionRegistration extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      title:"",
	      major:"",
	      college:"",
	      content:"",
	      start_date: new Date(),
	      end_date: new Date(),
	    };
	    
	  }

	  handleChangeStartDate = (date) => {
	    this.setState({
	      start_date: date
	    });
	  }

	   handleChangeEndDate = (date) => {
	    this.setState({
	      end_date: date
	    });
	  }


	handleChangeInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		const election = {
			title: this.state.title,
			major: this.state.major,
			college: this.state.college,
			content: this.state.content,
			start_time : convertTimestamp(new Date(this.state.start_date).getTime()/1000),
			end_time : convertTimestamp(new Date(this.state.end_date).getTime()/1000)
		}

		axios.post('http://'+server+':8080/admin/elections/create',election)
		.then(res => {
			console.log(res)
		})
		e.preventDefault()
		this.props.history.push('/')
	}

	render() {
		return(
			<div className="election-registration">
				<div className="title m-b-50" >
				선거 등록
				</div>
				<form className="ui form" onSubmit={this.handleSubmit}>
					<div className="ui equal width grid">
						<div className="row">
							<div className="column text-left">
								<div className="field">
									<label>선거 이름</label>
									<input type="text" 
									value={this.state.title} 
									placeholder="선거 이름"
									name="title"
									onChange={this.handleChangeInput}/>
								</div>
								<div className="field">
									<label>전공</label>
									<input type="text" 
									value={this.state.major} 
									placeholder="전공"
									name="major"
									onChange={this.handleChangeInput}/>
								</div>
								<div className="field">
									<label>단과대</label>
									<input type="text" 
									value={this.state.college} 
									placeholder="단과대"
									name="college"
									onChange={this.handleChangeInput}/>
								</div>
								<div className="field">
									<label>선거 기간</label>
									<span>시작일</span>
									<DatePicker
								        selected={this.state.start_date}
								        onChange={this.handleChangeStartDate}
								        showTimeSelect
								        dateFormat="yyyy/MM/dd hh:mm aa"
								      /> 
								      {'  -  '}
								    종료일
							      <DatePicker
							        selected={this.state.end_date}
							        onChange={this.handleChangeEndDate}
							        showTimeSelect
									dateFormat="yyyy/MM/dd hh:mm aa"
							      /> 
								</div>
								<div className="field">
									<label>선거 내용</label>
									<textarea placeholder="선거 내용"
										name="content"
									onChange={this.handleChangeInput}></textarea>
								</div>
								<div className="field">
									<label>썸네일</label>
									<input type="file"/>
								</div>
								<div className="field">
									<button type='submit' className='ui button' role='button'>
									    Submit
									</button>
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