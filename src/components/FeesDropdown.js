import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const FeesDropdown = () => {
  return (
    <>
     <Dropdown>
      <Dropdown.Toggle variant="success" id='fees-dropdown'>
        Fees
      </Dropdown.Toggle>    

      <Dropdown.Menu>
        <Dropdown.Item  href=""> <Link to={'/publication'}>Publications</Link> </Dropdown.Item>
        {/* <Dropdown.Item href="/assets/POSTER PRESENTATION GUILDLINES.docx">Guidelines For Poster Presentation</Dropdown.Item>
        <Dropdown.Item href="/assets/ORAL PRESENTATION GUILDLINES.docx">Guidelines for Oral Presentations</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
    </>
  )
}

export default FeesDropdown