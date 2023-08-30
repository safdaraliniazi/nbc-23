import React from "react";
import Table from "./Table";

const Ticket = () => {
  return (
    <>
      <section
        id="tickets-section"
        className="tickets-section section theme-bg-light active"
      >
        <div
          style={{
            alignItems: "center",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="container-md"
        >
          <h3 className="section-heading text-center mb-3">
            Registration Fees
          </h3>
          <div style={{fontSize: '1.2rem'}} className="section-intro single-col-max mx-auto text-center mb-4">
            The registration fees can be paid directly by account transfer. Bank
            name: SBI, Branch Name : NIT Rourkela Campus, IFSC code :
            SBIN0002109 Account Name : CONFERENCE, NIT ROURKELA , Account
            Number: 36734418111, Account type: Savings Email ID:{" "}
            <a href="mailto:bioengineering23@gmail.com">
              bioengineering23@gmail.com
            </a>{" "}
          </div>
          <Table />

          {/*//pricing*/}
        
          {/*//offers*/}
        </div>
        {/*//container*/}
      </section>
    </>
  );
};

export default Ticket;
