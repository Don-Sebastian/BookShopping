import React, {useEffect} from 'react'
import { useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';
import { useCookies } from "react-cookie";
import axios from "axios";

function Home() {

  const navigate = useNavigate;
  const [cookies, removeCookies] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      console.log(cookies.jwt,'.............')
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        console.log(`${process.env.BACKEND_PORT}`);
        console.log(process.env.PORT);
        const { data } = await axios.post(
          'http://localhost:5000',
          // `${process.env.BACKEND_PORT}`,
          {},
          { withCredentials: true }
        );
        console.log(data, '---------')
        if (!data.status) {
          removeCookies("jwt");
          navigate("/login");
        } else {
          console.log('Welcome to home page');
        }
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookies]);
  
    return (
      <>
        <Navbar/>
      </>
    );
}

export default Home