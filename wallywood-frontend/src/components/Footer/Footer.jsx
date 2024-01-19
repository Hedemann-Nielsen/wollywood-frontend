import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Footer.module.scss";

import { FaPinterestSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

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
      <div className={style.leftSection}>
        <div>
        <h2 className={style.name}>wallywood</h2>
        <p>{footer.address}</p>
        <p>{footer.zipcode} {footer.city}</p>
        </div>
        <div className={style.contactInfo}>
          <p>cvr: 12345678</p>
          <a href="mailto:info@plakatshoppen.dk">mail: info@plakatshoppen.dk</a>
          <p>mobil: +45 98123456</p>
        </div>
      </div>
      <div className={style.social}>
        <FaPinterestSquare />
        <FaInstagramSquare />
        <FaFacebookSquare />
        <FaTwitterSquare />
      </div>
    </footer>
    </>
  );
};
