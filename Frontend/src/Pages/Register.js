/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  })

  const { firstName, lastName, email, password, password2 } = formData

  const onSubmit = (e)=> {
    e.preventDefault()
  }

  const onChange = (e) => {
    setFormData((prevState) = ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create and account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              type="text"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
              type="text"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter your email"
              type="email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="password"
              id="password"
              placeholder="Enter password"
              type="password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="password2"
              id="password2"
              placeholder="Confirm password"
              type="text"
              onChange={onChange}
            />
          </div>
          <div className="form-control">
            <button className="btn btn-block" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register