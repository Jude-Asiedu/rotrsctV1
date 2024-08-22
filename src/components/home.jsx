import React from 'react'
import { useNavigate } from "react-router-dom"
import Form from './form'

const Home = () => {
  const nav = useNavigate()
  return (
    <div className='container-fluid'>
    <div className='row heroSection pb-5'>
      <div className='col-sm-12 col-md-12  d-flex align-items-end pb-3' >
       <h1 className='text-white  mx-3 mb-0 display-3'>
          Empowering teachers  and students for a brighter future
        </h1>
      </div>
    </div>
    <div className='row mx-1 my-5 py-5'>
        <div className="col-sm-12 col-md-6">
        <h3 className='fs-2 mb-3' > Supporting education  and  <br/> innovation </h3>
      <button  className="btn btn-danger text-center mx-auto rounded-0 btn-sm px-4 py-2" onClick={()=>nav('vision')}> Our Vision </button>
        </div>
        <div className="col-sm-12 col-md-6 fw-light">
        <p>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente alias illo adipisci pariatur perspiciatis saepe magni omnis ab quasi natus?</p>
        <p>   Sapiente alias illo riores facere quo veniam aspernatur iste quam quia vel ipsum amet optio, soluta doloremque. Laboriosam natus maxime dolore ad minima possimus!

        </p>
        </div>
     </div>
     <div className="row homesectionbg">
      <div className="col-sm-12 col-md-6 p-5">
        <img src="/assets/img/school_nigeria.png" className='img-fluid' alt=""  height="400" />
      </div>
      <div className="col-sm-12 col-md-6 p-5 text-white">
        <h3 className='mt-2'> Materials for learning</h3>
        <p className=' fs-6 mt-4 mb-3 fw-lighter'>
        Many educational materials in local languages are often out of date.
         We work with school leaders and publishers to ensure that students have access to current 
         textbooks that are age appropriate and written in their primary language.
        </p>

        <button type="button" className="btn btn-light px-5 py-3 rounded-0"> <small> Learn More </small> </button>
      </div>
      <div className="col-sm-12 col-md-6 p-5 text-white">
        <h3 className='mt-2'>Continuing Education for Teachers</h3>
        <p className='fw-lighter mt-4 mb-3'>
          <small>
        We create bespoke continuing education programs to address the needs of teachers and their student communities.
        From training on the latest technology to new pedagogical methods, 
        we help teachers make their classrooms engaging and successful.
        </small>
        </p>
        <button type="button" className="btn btn-light px-5 py-3 rounded-0"> <small> Learn More </small> </button>
      </div>     
       <div className="col-sm-12 col-md-6 p-5">
        <img src="/assets/img/hane.jpeg" className='img-fluid' alt="" width="480" height="300" />
       </div>
      <div className="col-sm-12 col-md-6 p-5">
        <img src="/assets/img/sda.jpg" className='img-fluid' alt="" width="480" height="300" />
      </div>
      <div className="col-sm-12 col-md-6 p-5 text-white">
        <h3 className='mt-2'> Support  for Communities</h3>
        <p className='fs-6 fw-lighter'>
        <small>
        Education happens within the context of a larger community. 
        Our approach extends beyond the school to help ensure students have the necessary support to do their best learning
        </small>
        </p>

        <button type="button" className="btn btn-light px-5 py-3 rounded-0"> <small> Learn More </small> </button>
      </div>
     </div>
     <div className="row mx-2 my-5">
      <div className="col-sm-12 col-md-6 mt-5">
      <h2 className='fs-1'>
        "With the support from Lusaka, we have been able to serve our students better than ever."
      </h2>
     <p className='fs-6'>  <small className=' fw-lighter mt-4'> -- Alonzo F, School Principal </small>
     </p>
      </div>
     </div>
     <div className="row mx-2 mt-4">
      <div className="col-11 mx-auto text-center mt-4">
      <img src="/assets/img/school_nigeria.png"  className='img-fluid' alt="dropImage"  height="550" />
      </div>
     </div>
     {/* CONTSCT SECTION */}
     <div className="row mx-5 mt-5 pt-5">
    <div className="col-sm-12 col-md-6  ">
      <h3 className="fw-normal fs-1 "> Contact   </h3>
      <p className='fs-6 fw-light'> Feel free to contact us with any questions</p>
      <h6 className='fw-bold mb-0 mt-5'>Email</h6>
      <p className='fw-light'> email@example.com</p>
      <h6 className='fw-bold mb-0 mt-5'>Phone</h6>
      <p className='fw-light'> (555) 555-5555 </p>
    </div>
    <div className="col-sm-12 col-md-6 ">
    <Form/>
    </div>
     </div>
    </div>
  )
}

export default Home
