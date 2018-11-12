import React, { Component } from 'react';
import VotingList from "../component/votingList/VotingList.js"

class Voting extends Component {
	constructor(props) {
	  super(props);
		

	  this.list = {
	  	status:"success",
	  	current_page:1,
	  	election:[{
	  		title: "100대 회장선거",
	  		text:"회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거회장선거",
	  		start_time:1541989543,
	  		end_time:1542680743,
	  		state:2,
	  		id:1

	  	},{
	  		title: "101대 회장선거",
	  		text:"회장선거",
	  		start_time:1541989543,
	  		end_time:1542680743,
	  		state:2,
	  		id:2

	  	},{
	  		title: "99대 회장선거",
	  		text:"회장선거",
	  		start_time:1541989543,
	  		end_time:1542680743,
	  		state:3,
	  		id:3

	  	},{
	  		title: "102대 회장선거",
	  		text:"회장선거",
	  		start_time:1541989543,
	  		end_time:1542680743,
	  		state:1,
	  		id:4

	  	},{
	  		title: "98대 회장선거",
	  		text:"회장선거",
	  		start_time:1541989543,
	  		end_time:1542680743,
	  		state:3,
	  		id:1

	  	}]
	  }

	  this.state = {};
	}
  render() {
    return (
      <div className="">
         <VotingList list={this.list.election}/>
      </div>
    );
  }
}

export default Voting;
