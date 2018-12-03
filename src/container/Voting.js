import React, { Component } from 'react';
import VotingList from "../component/votingList/VotingList.js"
import axios from 'axios';
import {server} from "../lib/API.js"

class Voting extends Component {
	constructor(props) {
	  super(props)

	  this.state = {
	  	list:[],
	  };
	}


	fetchElections = () => {
	    axios('http://'+server+':8080/admin/elections')
	    .then((rs) => {
	    	this.setState({
	    		list:rs.data.list
	    	})
	    })
	    .catch((rs) => {console.log(rs)})
  	}

  	componentDidMount() {
   	 this.fetchElections()
 	 }

  render() {
    return (
      <div className="">
         <VotingList list={this.state.list}/>
      </div>
    );
  }
}

export default Voting;
