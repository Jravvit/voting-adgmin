import React, { Component } from 'react';
import {server} from "../lib/API.js"
import axios from 'axios';
class CandidateRegistration extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
			'candidate_id': '',
			'college': "공과대학",
			'election_id':'',
			'major': "",
			'name': "",
			'resume': "",
			'student_id': "",
			'thumbnail': ""
		};
		this.handleChangeName = this.handleChangeName.bind(this)
		this.handleChangeResume = this.handleChangeResume.bind(this)
		this.handleChangeMajor = this.handleChangeMajor.bind(this)
	}

	  componentDidMount(){
		  this.setState({
			name : this.props.location.state.name,
			major : this.props.location.state.major,
			resume : this.props.location.state.resume
		  })
	  }
	handleChangeName = (e) => {
		this.setState({
			name : e.target.value
		})
	}
	handleChangeMajor = (e) => {
		this.setState({
			major : e.target.value
		})
	}
	handleChangeResume = (e) => {
		this.setState({
			resume : e.target.value
		})
	}

	handleSubmit = (e) => {
		const revise = {
			candidate_id: this.props.location.state.candidate_id,
			college: this.props.location.state.college,
			election_id:this.props.location.state.election_id,
			major: this.state.major,
			name: this.state.name,
			resume: this.state.resume,
			student_id: this.props.location.state.student_id,
			thumbnail: this.props.location.state.thumbnail
		}
		e.preventDefault()
		axios.post('http://'+server+':8080/admin/candidates/edit/'+this.props.location.state.candidate_id, revise)
		.then(res => {
			console.log(res)
			this.props.history.goBack()
		})
		
	}

	render() {
		return(
			<div className="candidate-registration">
				<div className="title m-b-50" >
				후보자 수정
				</div>
				<form className="ui form" onSubmit = {this.handleSubmit}>
					<div className="ui equal width grid">
						<div className="row">
							<div className="column text-left">
								<div className="field">
									<input type="text" placeholder={this.props.location.state.name} onChange = {this.handleChangeName} />
								</div>
								<div className="field">
									<input type="text" placeholder={this.props.location.state.major} onChange = {this.handleChangeMajor} />
								</div>
								<div className="field">
									<textarea placeholder="후보자 공약" placeholder={this.props.location.state.resume} onChange = {this.handleChangeResume} ></textarea>
								</div>
								<div className = 'field'>
									<input type="file"/>
								</div>
								<div className="field">
									<button type='submit' className='ui button' role='button'>
									    수정하기
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