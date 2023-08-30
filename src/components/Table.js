import React from 'react'
const table = () => {
  return (
    <>
    <table>
  <tbody>
    <tr id="fees-header">
      <th>Participants</th>
      <th>Early Bird registration ends on 10th Oct 2023</th>
      <th>Registration ends on 25th Oct 2023</th>
    </tr>
    <tr id="fees-single">
      <td />
      <td>Indian nationals</td>
      <td />
    </tr>
    <tr className="fees-row">
      <td>Students</td>
      <td>Rs. 3500 (including GST)</td>
      <td>Rs. 4000/- (including GST)</td>
    </tr>
    <tr className="fees-row">
      <td>Academicians</td>
      <td>Rs. 5500/- (including GST)</td>
      <td>Rs. 6000/- (including GST)</td>
    </tr>
    <tr className="fees-row">
      <td>Industrialists/ R&amp;Ds</td>
      <td>Rs. 6500/- (including GST)</td>
      <td>Rs. 7000/- (including GST)</td>
    </tr>
    <tr id="fees-single">
      <td></td>
      <td>Foreign nationals/Exchange participants</td>
      <td />
    </tr>
    <tr className="fees-row">
      <td>Students</td>
      <td>100 USD</td>
      <td>120 USD</td>
    </tr>
    <tr className="fees-row">
      <td>Academicians</td>
      <td>200 USD</td>
      <td>250 USD</td>
    </tr>
    <tr className="fees-row">
      <td>Industrialists/ R&amp;Ds</td>
      <td>350 USD</td>
      <td>400 USD</td>
    </tr>
  </tbody>
</table>

    </>
  )
}

export default table