import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const AbstractDropdown = () => {
  return (
    <>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Abstracts
      </Dropdown.Toggle>    

      <Dropdown.Menu>
        <Dropdown.Item href="/assets/NBC2023 Asbstract Template.docx">Download Abstract template</Dropdown.Item>
        <Dropdown.Item href="/assets/POSTER PRESENTATION GUILDLINES.docx">Guidelines For Poster Presentation</Dropdown.Item>
        <Dropdown.Item href="/assets/ORAL PRESENTATION GUILDLINES.docx">Guidelines for Oral Presentations</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  )
}

export default AbstractDropdown