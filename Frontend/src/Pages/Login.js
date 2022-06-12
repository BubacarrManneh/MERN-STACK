// import { useState, useEffect} from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {
  // const [userData, setUserData ] = useState({
  //   email: '',
  //   password : ''
  // })

  // const { email, password } = userData;

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    // setUserData((prevState) => ({
    //   ...prevState,
    //   [e.target.name]: e.target.value,
    // }));
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Sign In
        </h1>
        <p>Login to post a blog</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control:email"
              name="email"
              placeholder="Email"
              id="email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control:email"
              name="email"
              placeholder="Password"
              id="password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login