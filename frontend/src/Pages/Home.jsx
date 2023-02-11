import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router';
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";

// Components
import Navbar from "../Components/Navbar";
import Book from '../Components/Book';

// Actions
import {getProducts as listProducts} from '../Redux/actions/productActions'

function Home() {

  const navigate = useNavigate;
  const [list, setList] = useState([])
  const [cookies, removeCookies] = useCookies([]);

  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;
  // let list = products.booksList;
  // setList(products.booksList);
  console.log(products.booksList, "............");
  
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          'http://localhost:5000',
          // `${process.env.BACKEND_PORT}`,
          {},
          { withCredentials: true }
        );
        if (!data.status) {
          removeCookies("jwt");
          navigate("/login");
        } else {
          console.log('Welcome to home page');
        }
      }
    };
    verifyUser();

    dispatch(listProducts());
    

  }, [cookies, navigate, removeCookies, dispatch]);
  
    return (
      <div>
        <Navbar />
        <div className="homePage_Products">
          <div class="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div class="relative m-3 flex flex-wrap mx-auto justify-center">
              {loading ? (
                <h2>Loading...</h2>
              ) : error ? (
                <h2>{error}</h2>
              ) : (
                products.booksList?.map((book) => (
                  <Book
                    key={book._id}
                    bookId={book._id}
                    name={book.name}
                    price={book.price}
                    description={book.description}
                    imageUrl={book.imageUrl}
                  />
                ))
                // <Book />
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home