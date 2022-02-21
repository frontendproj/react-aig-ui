import React, { Component } from 'react'
import footerAig from '../assets/footer-aig-two.png';

export default class Footer extends Component {
  render() {
    return (
      
          <>
              <div className='footerMain'>
                  <div className='footerLinkDiv'>
                      <a href="#about" >About Our Ads</a>
                      <a href="#about" >Privacy Policy</a>
                      <a href="#about" >Legal Notice</a>
                      <a href="#about" >Accessibility Statement</a>
                      <a href="#about" >Terms of Use</a>
                      <a href="#about" >Fraud Warning</a>
                      <img src={footerAig} alt="aig-logo"></img>
                  </div>
                  <div className='footerParagraphDiv'>
                      <p>Electronic Concent</p>
                      <p>Copyright&copy; 2021 American International Group, Inc. All Right Reserved.</p>

                      <p>Policies issued by American General life Insurance Company(AGL).
                      Houston TX,except in New York,where issued by the United states life insurance company in the city of new york (US life).Issuing Companies AGL and US life are responsible for financial obligations of insurance product and are member of American International Group,Inc.(AIG).agl does not solicit,issue or deliver
                      policies or contracts in the stateof new york.Guarenties are backed by the claims-paying ability of the issuing insurance company .Product may not be 
                      available in all states and product features may vary by states .Please refer to
                      your policy.
                      </p>
                  </div>
              </div>
          </>
      
    )
  }
}
