import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, CardFooter } from 'reactstrap'
import UpdateAddressModal from './UpdateAddressModal'
import ReadModal from './ReadModal'

class AddressCard extends Component{
  constructor() {
    super();
    this.state = { date: []}
  }

  componentDidMount() {
    fetch(`http://localhost:5000`)
    .then(res => res.json()) //put it all in JSON
    .then(json => this.setState({ data: json })) // puts it back out as 'data'
  }

  onDeleteClick = async _id => {
    await fetch(`http://localhost:5000`+ _id, {
      method: 'DELETE'
    }).then(resp => {
      this.componentDidMount();
    })
  }

  render(){
    return (
      <div className="AddressCard">
        {this.state.data.map(scrape => (
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
                <Button
                  style={{height: '2.35em'}}
                  onClick={() => this.onDeleteClick(scrape._id)}
                  color="danger"
                >
                  Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }
}
export default AddressCard