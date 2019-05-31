import React, { Component } from 'react';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from  'reactstrap';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

class Navigation extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
      return (
        <div>
          <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container className="NavigationContainer">
              <img src={logo} alt="Salty Rogue Real Estate" width="5%" />
              <NavbarBrand href="/">
                Scraped address
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="https://github.com/TylerOlsen14">
                      Github
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <Link to="/Records">Records</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/Address">Address Book</Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      )
  }
}

export default Navigation