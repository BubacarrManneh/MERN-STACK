import { useEffect} from "react"
import { useSelector } from 'react-redux'
import { useNavigate }from 'react-router-dom'
import BlogsForm from "../Components/BlogsForm"

const Home = () => {
  const navigate = useNavigate()
  const { user } = useSelector ((state) => state.auth)

  useEffect(() => {
    if(!user){
      navigate("login")
    }
  },[user, navigate])
  return (
    <>
      <section className="heading">
        Welcome {user && user.firstName + " " + user.lastName}
        <p>Home Page</p>
      </section>
      <BlogsForm />
    </>
  );
}

export default Home