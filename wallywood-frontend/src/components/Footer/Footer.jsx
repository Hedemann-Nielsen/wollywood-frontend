import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Footer.module.scss";

export const Footer = () => {
  const [footer, setFooter] = useState({});

  useEffect(() => {
    
    getData();
  }, []); 

  const getData = async () => {
    const url = "http://localhost:3000/orgs?attributes=id,name,address,zipcode,city";
    try {
      const result = await axios.get(url);
      setFooter(result.data[0]);
    } catch (error) {
      console.error(error);
    }
  };


  

  return (
    <>
    <footer className={style.footer}>
        <p>{footer.name}</p>
        <p>{footer.address}</p>
        <p>{footer.zipcode}</p>
        <p>{footer.city}</p>
    </footer>
    </>
  );
};
