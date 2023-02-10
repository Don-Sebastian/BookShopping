import React, {useEffect} from 'react'
import { useNavigate } from 'react-router';
import { useCookies } from "react-cookie";
import axios from "axios";

import Navbar from "../Components/Navbar";
import Book from '../Components/Book';

function Home() {

  const navigate = useNavigate;
  const [cookies, removeCookies] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          'http://localhost:5000/api/books',
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
        <Navbar />
        <div className="homePage_Products">
          <Book />
        </div>
      </>
    );
}

export default Home