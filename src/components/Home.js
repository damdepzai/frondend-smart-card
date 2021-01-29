import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent([...response.data]);
      },
      (error) => {
       console.log(error);
      }
    );
  }, []);
  console.log(content);
  return (
    <div className="container">
      <p>Home</p>
    </div>
  );
};

export default Home;
