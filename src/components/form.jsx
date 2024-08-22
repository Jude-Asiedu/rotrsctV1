import React,{ useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
  const form = useRef();
  const [loader,setLoader] = useState(null);
  const [success,setSuccess] = useState(null);

const handleSubmit = e=>{
    setLoader(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('from_name');
    const email = formData.get('email_address');
    const msg = formData.get('message');
    if (!name || !email || !msg) {
    setLoader(false);

        // Display an error message or perform any other action for incomplete form
        // alert('Please fill in all required fields.');
        return; // Prevent form submission
    }
    emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE_ID,process.env.REACT_APP_MAIL_TEMPLATE_ID, form.current,process.env.REACT_APP_MAIL_PUBLIC_KEY)
    .then((result) => { 
        setLoader(false);
        setSuccess(true);
        form.current.reset();
        setTimeout(() => {
            setSuccess(false);
        }, 5000);
    }, (error) => { 
        setSuccess(false);
    })
}


return (
    <div className='mt-0'>
       <form  className='row no-gutters ' ref={form}  onSubmit={handleSubmit}>
            {/* <h1> Hit us up 👋 </h1> */}
            <div className="row mb-2">
                <div className="col-sm-12 col-md-6">
                 <label className='fs-6 text-muted fw-light'> <small>  First  Name</small> </label>
                 <input className='form-control rounded-0' placeholder=''  name='from_name' required/> 
                </div>
                <div className="col-sm-12 col-md-6">
                <label className='fs-6 text-muted fw-light'> <small>  Last  Name</small> </label>
                <input className='form-control rounded-0' placeholder=''  name='from_name' required/> 
              </div>
            </div>
            <div className="form-group row mt-3">
                <div className="col-sm-12 ">
                <label className='fs-6 text-muted fw-light'> <small>  Email <i>(required)</i> </small> </label>

                <input className='form-control rounded-0' placeholder='' name='email_address' type='email' required /> 
                </div>
                <div className="col-sm-12  mt-4">
                <label className='fs-6 text-muted fw-light'> <small>  Message <i>(required)</i> </small> </label>
                    <textarea className='form-control' placeholder='' name='message' required rows={3}/>
                </div>
            </div>
            </form>
            <button className='btn px-5  mt-4 py-2 btn-danger rounded-0'> Submit </button>
            {/* <Button type='submit' disabled={success}>
               {loader ? (<Svg viewBox="5 5 10 10"><Circle r="4" cy="10" cx="10"></Circle></Svg>): ``}
              SEND 
             </Button> */}
              {/* {success ? (
                <Alert>  {success && "Message sent.😊 Will reach out soon!!"}  </Alert>
                ): ``} */}
    </div>
 
)}

export default Form
