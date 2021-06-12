import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";
import postService from "../../services/post";

import "./style.scss";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [pic, setPic] = useState("");
  const history = useHistory();

  const sendImages = async () => {
    const imageData = new FormData();
    imageData.append("file", image);
    imageData.append("upload_preset", "Insta-clone");
    imageData.append("cloud_name", "dtcitssiu");

    try {
      const response = await fetch(
        " https://api.cloudinary.com/v1_1/dtcitssiu/image/upload",
        {
          method: "post",
          body: imageData,
        }
      );
      const data = await response.json();
      setPic(data.url);
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await postService.userPost(title,body,pic)
      M.toast({ html: "welcome", classes: "#43a047 green darken-1" });
      history.push("/");
    } catch (error) {
      M.toast({
        html: error.response.data.message,
        classes: "#c62828 red darken-3",
      });
    }
  };

  return (
    <div className="card input-failed">
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="content"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <div className="file-field input-field">
        <div className="btn #64b5f6 blue darken-1">
          <span>Upload Image</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        className="btn waves-effect waves-light  #64b5f6 blue darken-1"
        onClick={sendImages}
      >
        Submit
      </button>
    </div>
  );
};

export default Posts;
