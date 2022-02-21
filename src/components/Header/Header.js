import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCaretDown } from '@fortawesome/free-solid-svg-icons'


export default class Header extends Component {
  render() {
    return (
      <div className="userIcon">
          <span className='user'><FontAwesomeIcon icon={faUser} color="blue" /></span>
         <span className='caretdown'><FontAwesomeIcon icon={faCaretDown} color="blue" /></span>
       </div>
    )
  }
}
