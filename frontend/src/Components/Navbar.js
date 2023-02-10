import React from 'react'
import { useNavigate } from 'react-router';
import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';



function Navbar() {

  const navigate = useNavigate();
  const [cookies, removeCookies] = useCookies([]);
  
  const logOut = () => {
    removeCookies("jwt");
    navigate('/login');
  }

  return (
    <>
      <nav className="bg-white p-4 fixed top-0 z-50 w-full">
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap mx-4">
            <div className="col flex-initial w-3/12 items-center justify-start"></div>
            <div className="col flex-initial w-6/12 items-center justify-center">
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">
                  Search
                </label>
                <div class="relative w-full">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5 "
                    placeholder="Search by Title, Author, Publisher or ISBN"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="p-2.5 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </form>
            </div>
            <div className="col flex-initial w-3/12 items-center justify-end">
              <div className="row pl-20 m-2.5 ">
                <span className="col mr-2 text-center flex">
                  <span className="text-gray p-1 w-6 h-6" onClick={logOut}>
                    <img
                      width={30}
                      height={30}
                      src="https://img.icons8.com/dusk/100/000000/user-female-circle.png"
                      alt=""
                    />
                  </span>
                  <span>My Account</span>
                  <span className="text-rose-400 ml-2 text-lg">|</span>
                  <Link to="/cart">
                    <span className="ml-2 mt-1 flex">
                      <span className="">
                        <img
                          width={30}
                          height={30}
                          src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/cart_white.svg"
                          alt=""
                        />
                      </span>
                      <span className="cartCouterBadge w-4 mb-3">0</span>
                    </span>
                  </Link>
                  <Link to="/wishlist">
                    <span className="ml-2 mt-1 flex">
                      <span className="">
                        <img
                          width={30}
                          height={30}
                          src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/wishlist_white.svg"
                          alt=""
                        />
                      </span>
                      <span className="wishListCouterBadge w-4 mb-3">0</span>
                    </span>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar