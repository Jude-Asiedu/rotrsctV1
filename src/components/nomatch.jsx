import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../extra.css'


const NoMatch = () => {
    const returnNav = useNavigate()

  return (
    <div className='notFound mt-5 mb-4 py-5'>
        <div className="fof">
        		<h1>Error 404</h1>
                <p> Page not Found </p>
                <button  className='backHomeBtn' onClick={()=> returnNav('/')} > HOME </button>
    	</div>
    </div>
  )
}

export default NoMatch
