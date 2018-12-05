import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
import {convertTimestamp} from "../../lib/lib.js"


class VotingResultContent extends Component {
	constructor(props) {
	  super(props);
		
	  this.state = {};
	

	}

	renderList = () => {
		let list = [];
		console.log(this.props.data.candidate)
		for(let i =0; i<3;i++) {
			list.push(
				<div className="ui segment" key={i}>
					{this.props.data.candidate[i].poll}표 | {this.props.data.candidate[i].name}
				</div>
				)
		}

		return list;
	}

	renderChart = () => {
		let datasets = []
		let labels = []

		const data = {
			labels: [
				'Red',
				'Green',
				'Yellow'
			],
			datasets: [{
				data: [300, 50, 100],
				backgroundColor: [
				"#FF6384",
							"#36A2EB",
							"#FFCE56",
							"#FF6384",
							"#36A2EB",
							"#FFCE56",
							"#FF6384",
							"#36A2EB",
							"#FFCE56",
							"#FF6384",
							"#36A2EB",
							"#FFCE56",
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
				],
				hoverBackgroundColor: [
				"#FF6384",
							"#36A2EB",
							"#FFCE56",
							"#FF6384",
							"#36A2EB",
							"#FFCE56",
							"#FF6384",
							"#36A2EB",
							"#FFCE56",
							"#FF6384",
							"#36A2EB",
							"#FFCE56",
							"#FF6384",
							"#36A2EB",
							"#FFCE56"
				]
			}]
		};

		this.props.data.candidate.forEach((d) => {
			datasets.push(d.poll)
			labels.push(d.name)
		})

		data.datasets[0]['data'] = datasets
		data.labels = labels

		return(

			<Pie data={data}
				    	options = {{
							responsive : true,
							legend:{
								display:true, 
								position : 'bottom',
							},
							maintainAspectRatio: false
						}}
						width={400}
						height={350}
			 		/>
			)
	}

	render() {
		return (
			<div className="voting-result-content">
				<div className='ui card'>
					<div className='content'>
				    <div className='header'>{this.props.data.title} 의 결과</div>
				    <div className='meta'>
				      <span className='date'>{convertTimestamp(this.props.data.start_time)} - {convertTimestamp(this.props.data.end_time)}</span>
				    </div>
				    <div className='description'>
				    	{this.renderChart()}
				    </div>
				  </div>
				  <div className='extra content'>
				  		{this.renderList()}
				  </div>
				</div>
			</div>
		)
	}
}

export default VotingResultContent;