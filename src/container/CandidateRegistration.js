import React, { Component } from 'react';
import axios from 'axios';
import {server} from "../lib/API.js"

class CandidateRegistration extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	name:"",
	  	major:"",
	  	college:"",
	  	resume:"",
	  	election_id:"",

	  };
	}

	handleChangeInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		const candidate = {
			name:this.state.name,
			major:this.state.major,
			college:this.state.college,
			resume:this.state.resume,
			election_id: this.props.location.state.election_id
		}
		axios.post('http://'+server+':8080/admin/candidates/create',candidate)
		.then(res => {
			console.log(res)
		})
		e.preventDefault()

		this.props.history.push('/')
	}

	render() {
		return(
			<div className="candidate-registration">
				<div className="title m-b-50" >
				후보자 등록
				</div>
				<form className="ui form" onSubmit={this.handleSubmit}>
					<div className="ui equal width grid">
						<div className="row">
							<div className="column text-left">
								<div className="field">
									<label>후보자 이름</label>
									<input type="text" 
									value={this.state.name}
									name="name" 
									placeholder="후보자 이름"
									onChange={this.handleChangeInput}/>
								</div>
								<div className="field">
									<label>전공</label>
									<input type="text" 
									value={this.state.major}
									name="major" 
									placeholder="전공"
									onChange={this.handleChangeInput}/>
								</div>
								<div className="field">
									<label>단과대</label>
									<input type="text" 
									value={this.state.college}
									name="college" 
									placeholder="단과대"
									onChange={this.handleChangeInput}/>
								</div>
								<div className="field">
									<label>공약</label>
									<textarea name="resume" 
									placeholder="후보자 공약"
									onChange={this.handleChangeInput}></textarea>
								</div>
								<div className="field">
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

export default CandidateRegistration;