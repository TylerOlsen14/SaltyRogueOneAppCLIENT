import React from 'react';
import {
  Button,
  NavLink
} from 'reactstrap';
import AddressScrape from '../assets/SaltyRogueAddressScrapeScreeShot.png'
import PhoneRecords from '../assets/SaltyRoguePhoneRecordsScreenShot.png'

const Home = () => {
  return (
    <div>
      <div className="main">
        <div className="title" style={{textAlign:"center"}}>
          <h1>Salty Rogue Real Estate</h1>
        </div>
        <div className="HomeButtonGroup">
          <div className="addressScrape">
            <Button style={{margin:"auto"}} width="5rem" id="HomeButton">
              <NavLink href="/address" style={{color: "white"}}>
                Address Book
              </NavLink>
            </Button>
            <img
              src={AddressScrape}
              alt="Address Scrape"
              width="80%"
              className="HomeImage"
            />
          </div>
          <div className="phoneRecords">
            <Button style={{margin:"auto"}} width="5rem" id="HomeButton">
              <NavLink href="/Records" style={{color: "white"}}>
                Records
              </NavLink>
            </Button>
            <img
              src={PhoneRecords}
              alt="Phone Records"
              width="80%"
              className="HomeImage"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home