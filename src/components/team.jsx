import React from 'react'

const Team = () => {
  return (
    <div className='container mt-5 pt-5 '>
        <div className="row  d-flex justify-content-between  mt-5">
            <div className="col-sm-12 col-md-5 ">
                <img src="assets/img/mane.jpg"  className='img-fluid' alt="Shots S"  height="510px" />
            <h5 className="fw-light text-center mt-4">
                Kelvin Addae
            </h5>
            <p className='fs-6 fw-lighter'> It all begins with an idea. Maybe you want to launch a business.</p>
            </div>
            <div className="col-sm-12 col-md-6">
          
            <img className='d-flex justify-content-end img-fluid' src="assets/img/redstop.jpg"  alt="Shots S"  height="510px" />
            <h5 className="fw-light text-center mt-4 ">
                John D. Jnr Kwarteng
            </h5>
            <p className='fs-6 fw-lighter'> It all begins with an idea. Maybe you want to launch a business.</p>
           
            </div>
        </div>
      
    </div>
  )
}

export default Team
