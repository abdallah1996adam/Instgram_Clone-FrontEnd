import React from "react";
import './style.scss'

const Posts = () => {
  return (
    <div className="card input-failed">
      <input type="text" placeholder="title" />
      <input type="text" placeholder="content" />
      <div className="file-field input-field">
        <div className="btn #64b5f6 blue darken-1">
          <span>Upload Image</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button className="btn waves-effect waves-light  #64b5f6 blue darken-1">
          Submit
        </button>
    </div>
  );
};

export default Posts;