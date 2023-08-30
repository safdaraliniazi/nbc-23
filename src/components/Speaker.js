import React from 'react'

const Speaker = (props) => {
  return (
    <>
         <div className="col-lg-3 mb-4">
                  <div className="card rounded-0">
                      
                      <img
                        src= {"/images/speakers/" + props.image}
                        className="card-img-top rounded-0"
                        alt=""
                      />
                  
                    <div className="card-body">
                      <h4 className="card-title mb-2">{props.name}</h4>
                      <div className="card-text mb-3">
                      <div className="meta">{props.designation}</div>
                      <div className="meta">{props.location}</div>
                        <div className="meta">
                          <strong>SPECIALISATION:</strong> {props.specialisation}
                        </div>
                      </div>
                      {/*//card-text*/}
                    </div>
                    {/*//card*/}
                  </div>
                  {/*//card*/}
                </div>

    </>
  )
}

export default Speaker