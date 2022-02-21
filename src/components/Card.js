import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
// import NavBar from '../components/NavBar';


export default class Card extends Component {
  render() {
    return (
      <>
      
      {/* **************************ROW ONE START********************* */}
      <div className='main-card'>
      <div className='profile'>my profile</div>
      <div className='card-div'>
      <div className='card-one'>
      
    
          <div className='login-security'>
              <h5>Login and security</h5>
              <div className="line"></div>
              <div className='username'>
                  <p>UserName</p>
                  <p>A*******1</p>
              </div>
              <div className='password'>
                  <p>Password</p>
                  <p>********</p>
              </div>
              <div className='security'>
              <p> Security Questions</p>
                  <p>Hidden for your security</p>
                  <Button variant="outline-primary">UPDATE LOGIN AND SECURITY</Button>{' '}
              </div>
          </div>
      </div>


      <div className='card-two'>
      <div className='personal-information'>
              <h5>Personal Information</h5>
              <div className="line-two"></div>
              <div className='firstName'>
                  <p>FirstName</p>
                  <p>Kerry</p>
              </div>
              <div className='ssn'>
                  <p>SSN</p>
                  <p>XXX-XX3731</p>
              </div>
              <div className='lastname'>
                  <p>LastName</p>
                  <p>SNMMMMMTESTCASKK</p>
              </div>
              <div className='dob'>
              <p>Date of Birth</p>
                  <p>05/011971</p>
              </div>
          </div>
         
          
      </div>
      </div>
</div>


       {/* ***********************ROW ONE END********************* */}


            {/********************  Row two Start******** */}
      <div className='row-two'>
          <div className='row-two-card-one'>
              <h5>Communication Preferences</h5>
              <div className="line-two"></div>
              <div className='card-text'>
              <p>Emails are currently sent to A*****@*****M when documents or 

              statements are posted</p>
              <p>Text notification are currently sent to </p>
              <Button variant="outline-primary">UPDATE LOGIN AND SECURITY</Button>{' '}
              </div>
          </div>
          <div className='row-two-card-two'>
              <h5>Contact Information</h5>
              <div className="line-two"></div>
              <div className='card-text-two'>
              <h5>Owner Address</h5>
              <p>KERRY SNMMMMMMTESTCASEKK<br></br>
               190 Cactus Circle<br></br>
                Park avenue<br></br>
               phoenix road<br></br>
               INDIANAPOLIS, 18 46203
                </p>
                <Button variant="outline-primary">UPDATE ADDRESS</Button>{' '}
                <p>Primary Number</p>
                <p>Secondary Number</p>
                <p>Email</p>
                <p>A*****@A****M</p>
                <Button variant="outline-primary" className='contact-btn'>UPDATE CONTACT DETAIL</Button>{' '}
              </div>
              </div>
      </div>
                  {/* *******************ROW TWO END******************************* */}
      
      
      
      </>
    )
  }
}
