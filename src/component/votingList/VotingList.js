import React, { Component } from 'react';
import { withRouter} from "react-router-dom";
import VotingContent from "../votingContent/VotingContent.js";
import './VotingList.css'
import {server} from "../../lib/API.js"
import axios from 'axios'
class VotingList extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
			'current_page':'',
			'list':[],
			'status':''
		};
  }

  handleHistory = (id,row) => {
  	let url = '/voting/'+id
  	this.props.history.push({
  		pathname: url,
  		state: row
  	})
  }

  moveToEelectionRegist = () => {
  	this.props.history.push('/election/regist')
  }

  convertTimestamp = (timestamp) => {
	  var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
			yyyy = d.getFullYear(),
			mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
			dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
			hh = d.getHours(),
			h = hh,
			min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
			ampm = 'AM',
			time;
				
		if (hh > 12) {
			h = hh - 12;
			ampm = 'PM';
		} else if (hh === 12) {
			h = 12;
			ampm = 'PM';
		} else if (hh == 0) {
			h = 12;
		}
		
		// ie: 2013-02-18, 8:35 AM	
		time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
			
		return time;
	}
	pagination =(pagenum) => {
		const tempPage = pagenum;
		axios('http://'+server+':8080/admin/elections?page='+tempPage)
		.then((rs) => {
			this.setState({
				current_page : rs.data.current_page,
				list:rs.data.list,
				status:rs.status
			})
		})
		.catch((rs) => {console.log(rs)})
	}

  renderTableRow = () => {
		if(this.state.current_page > 0){
			return this.state.list.map((row, index) => {
					let color = ""
  				let status = ""

  		if(row.state == 1) {
  			color = "negative"
  			status = "투표전"
  		} else if(row.state == 3) {
  			color = "warning"
  			status = "투표완료"
  		} else {
  			status = "투표중"
  		}
  		return (
	  			<tr className={color} key={index} onClick={() => this.handleHistory(row.election_id,row)}>
			  			<td>
			  				{status}
			  			</td>
			  			<td>
			  				{row.title}
			  			</td>
			  			<td className="voting-text">
			  				{row.content}
			  			</td>
			  			<td>
			  				{row.start_time}
			  			</td>
			  			<td>
			  				{row.end_time}
			  			</td>
		  		</tr>
	  		)
  	})
	}
	else if(this.state.status === 400){
		return(
		<tr>
			<td colSpan = '5'>
				<h1>선거가 없습니다 생성해주세요</h1>
			</td>
		</tr>
		)
	}
		else{
  	return this.props.list.map((row, index) => {
  		let color = ""
  		let status = ""

  		if(row.state == 1) {
  			color = "negative"
  			status = "투표전"
  		} else if(row.state == 3) {
  			color = "warning"
  			status = "투표완료"
  		} else {
  			status = "투표중"
  		}

  		return (
	  			<tr className={color} key={index} onClick={() => this.handleHistory(row.election_id,row)}>
			  			<td>
			  				{status}
			  			</td>
			  			<td>
			  				{row.title}
			  			</td>
			  			<td className="voting-text">
			  				{row.content}
			  			</td>
			  			<td>
			  				{row.start_time}
			  			</td>
			  			<td>
			  				{row.end_time}
			  			</td>
		  		</tr>
	  		)
  	})
	}
	}

  render() {
    return (
      <div className="voting-list">
      	<div className="title m-b-50">
      		선거 목록
      	</div>
      	<div className="ui grid centered">
      		<div className="fourteen wide computer column">
      			<table className="ui celled table selectable fixed">
		        	<thead>
			         	<tr>
			         		<th>
			         			상태
			         		</th>
			         		<th>
			         			제목
			         		</th>
			         		<th>
			         			내용
			         		</th>
			         		<th>
			         			시작일
			         		</th>
			         		<th>
			         			종료일
			         		</th>
			         	</tr>
		         	</thead>
		         	<tbody>
			         	{this.renderTableRow()}
		         	</tbody>
		         	<tfoot className=''>
					    <tr className=''>
					      <th colSpan='5' className=''>
					        <div className="ui pagination right floated menu">
					          <a className="icon item">
					            <i aria-hidden="true" className="chevron left icon" />
					          </a>
					          <a className="item" onClick = {(e)=> this.pagination(1)}>1</a>
					          <a className="item" onClick = {(e)=> this.pagination(2)}>2</a>
					          <a className="item"onClick = {(e)=> this.pagination(3)}>3</a>
					          <a className="item"onClick = {(e)=> this.pagination(4)}>4</a>
					          <a className="icon item">
					            <i aria-hidden="true" className="chevron right icon" />
					          </a>
					        </div>
					      </th>
					    </tr>
				    </tfoot>
         		</table>
         		<button className='ui button' role='button' onClick={this.moveToEelectionRegist}>
				    Submit
				</button>
      		</div>

      	</div>

      </div>
    );
  }
}

export default withRouter(VotingList);
