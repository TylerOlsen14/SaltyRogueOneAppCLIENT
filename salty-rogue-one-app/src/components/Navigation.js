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
              <NavbarBrand href="/">
                <img
                  src={logo}
                  alt="Salty Rogue Real Estate" 
                  width="50px"
                  className="ImgNavBar"
                />
                  Salty Rogue Real Estate
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/Records">Records</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Address">Address Book</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/TylerOlsen14">
                      Github - TylerOlsen14
                    </NavLink>
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