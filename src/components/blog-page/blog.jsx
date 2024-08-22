import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="col-sm-12 col-md-6 p-4">
            <img src="assets/img/shape.jpg"  className='mb-2 img-fluid' alt="Shots" height="410px" />
            <p className='mt-2'> 8/14/19 </p>
            <h3 className="my-2 fw-light">
                Blog Post Four
            </h3>
            <p className='fw-lighter fs-6 '> <small>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
             </p>
             <Link to='blog1'  className='text-danger  fw-lighter fs-6 '> Read More </Link>
             {/* <a href="blog1" className='text-danger fw-lighter fs-6 '> Read More</a> */}
            </div>
            <div className="col-sm-12 col-md-6 p-4">
             <img src="assets/img/sdsa.png" className='img-fluid'  alt="Shots" height="410px" />
             <p className='mt-2'> 8/14/19 </p>
            <h3 className="my-2 fw-light">
                Blog Post Two
            </h3>
            <p className='fw-lighter fs-6 '> <small>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
             </p>
             <Link to='blog2'  className='text-danger  fw-lighter fs-6 '> Read More </Link>
             
             {/* <a href="blog/blog2" className='text-danger fw-lighter fs-6 '> Read More</a> */}
            </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Blog
