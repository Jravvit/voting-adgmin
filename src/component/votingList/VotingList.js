import React, { Component } from 'react';

class VotingList extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  renderTableRow = () => {
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

  		return (<tr className={color} key={index}>
  			<td>
  				{status}
  			</td>
  			<td>
  				{row.title}
  			</td>
  			<td>
  				{row.text}
  			</td>
  			<td>
  				{row.start_time}
  			</td>
  			<td>
  				{row.end_time}
  			</td>
  		</tr>)
  	})
  }

  render() {
    return (
      <div className="voting-list">
      	<div className="title m-b-50">
      		선거 목록
      	</div>
      	<div className="ui grid centered">
      		<div className="fourteen wide computer column">
      			<table className="ui celled table selectable">
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
					          <a className="item">1</a>
					          <a className="item">2</a>
					          <a className="item">3</a>
					          <a className="item">4</a>
					          <a className="icon item">
					            <i aria-hidden="true" className="chevron right icon" />
					          </a>
					        </div>
					      </th>
					    </tr>
				    </tfoot>
         		</table>
      		</div>
      	</div>
   
      </div>
    );
  }
}

export default VotingList;
