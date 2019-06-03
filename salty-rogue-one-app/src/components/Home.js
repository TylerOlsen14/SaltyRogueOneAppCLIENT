import React from 'react';
import {
  Button,
  NavLink
} from 'reactstrap';

const Home = () => {
  return (
    <div>
      <div className="main">
        <div className="title" style={{textAlign:"center"}}>
          <h1>Salty Rogue Real Estate</h1>
        </div>
        <div className="HomeButtonGroup">
          <Button style={{margin:"5em"}}>
            <NavLink href="/address" style={{color: "white"}}>
              Address Book
            </NavLink>
          </Button>
          <Button style={{margin:"5em"}}>
            <NavLink href="/Records" style={{color: "white"}}>
              Records
            </NavLink>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home