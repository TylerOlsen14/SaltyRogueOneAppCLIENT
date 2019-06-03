import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Card, CardText, CardBody, CardTitle, Button, CardFooter } from 'reactstrap'
import UpdateAddressModal from './UpdateAddressModal'
import ReadModal from './ReadModal'

class AddressCard extends Component{
  constructor() {
    super();
    this.state = {data: []}
  }

  componentDidMount() {
    fetch(`https://salty-address-scrape5kitchen.herokuapp.com/`)
    // fetch(`http://localhost:5000/address`)
      .then(res => res.json()) //put it all in JSON
      .then(json => this.setState({ data: json })) // puts it back out as 'data'
  }

  onDeleteClick = async _id => {
    await fetch(`https://salty-address-scrape5kitchen.herokuapp.com/`+ _id, {
      method: 'DELETE'
    }).then(resp => {
      this.componentDidMount();
    })
  }

  render(){
    return (
      <div className="AddressCard">
        {this.state.data.map( scrape => (
          <Card className="p-3 m-3" style={{width:"300px"}} key={scrape._id}>
            <CardTitle>{scrape.name}</CardTitle>
            <CardBody>
              <CardText className="Address">{scrape.address}</CardText>
              <CardText className="notes">{scrape.notes}</CardText>
            </CardBody>
            <CardFooter>
              <div className="ButtonGroup">
                <ReadModal scrape={scrape} />
                <UpdateAddressModal scrape={scrape} refresh={this.getAddress} />
                <button
                  style={{height: '2.4em'}}
                  onClick={() => this.onDeleteClick(scrape._id)}
                  color="danger"
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }
}
export default AddressCard