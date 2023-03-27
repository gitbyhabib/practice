import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Postitem from "./components/Postitem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 text-dark" to="/">
                Home
              </Link>{" "}
              &nbsp;
              <Link className="p-2 text-dark" to="/posts">
                Posts
              </Link>{" "}
              &nbsp;
              <Link className="p-2 text-dark" to="/profile">
                Profile
              </Link>
            </nav>
          </div>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/posts" exact element={<Posts />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/posts/:id" exact element={<Postitem />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
