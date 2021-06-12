import React, {useState, useEffect} from  "react";
import postService from "../../services/post";

import "./home.scss";

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect( ()=>{
    async function fetchData (){
      const response = await postService.allPosts() 
      
    }

   
  },[])


  return (
    <div className="home">
      <div className="card home-card">
        <h5>harly</h5>
        <div className="card-content">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQuXk1IUa_J0SZMbvaRqoCg7ouSOypIodLng&usqp=CAU"
            alt="harly"
          />
        </div>
        <div className="card-content">
          <i className="material-icons">favorite</i>

          <h6>title</h6>
          <p>this is the content</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>harly</h5>
        <div className="card-content">
          <img
            src="https://images.unsplash.com/photo-1617802757500-f34db2339a70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFybGV5JTIwcXVpbm58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="harly"
          />
        </div>
        <div className="card-content">
          <i className="material-icons">favorite</i>

          <h6>title</h6>
          <p>this is the content</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>harly</h5>
        <div className="card-content">
          <img
            src="https://images.unsplash.com/photo-1617802757500-f34db2339a70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFybGV5JTIwcXVpbm58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="harly"
          />
        </div>
        <div className="card-content">
          <i className="material-icons">favorite</i>

          <h6>title</h6>
          <p>this is the content</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>harly</h5>
        <div className="card-content">
          <img
            src="https://images.unsplash.com/photo-1617802757500-f34db2339a70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFybGV5JTIwcXVpbm58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="harly"
          />
        </div>
        <div className="card-content">
          <i className="material-icons">favorite</i>
          <h6>title</h6>
          <p>this is the content</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <h5>harly</h5>
        <div className="card-content">
          <img
            src="https://images.unsplash.com/photo-1617802757500-f34db2339a70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFybGV5JTIwcXVpbm58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="harly"
          />
        </div>
        <div className="card-content">
          <i className="material-icons">favorite</i>
          <h6>title</h6>
          <p>this is the content</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
    </div>
  );
};

export default Home;
