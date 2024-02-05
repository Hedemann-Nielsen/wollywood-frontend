import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../Providers/AuthProvider"; 
import style  from "./CartModalContent.module.scss";

import { BsFillTrash3Fill } from "react-icons/bs";

export function CartModalContent({ isLoggedIn, closeModal }) {
    const [apiData, setApiData] = useState([])
    const { loginData } = useAuth()

    
    const getData = async () => {
      
      const options = {
        headers: {
          Authorization: `Bearer ${loginData.access_token}`
        }
      }
      
      const endpoint = `http://localhost:3000/cart`
      const result = await axios.get(endpoint, options) 
      console.log(result.data);
      setApiData(result.data);

    }
    useEffect(() => {
        getData()
    }, [setApiData])
        const totalPrice = apiData.reduce((acc, item) => acc + item.quantity * item.poster.price, 0); 
        const totalQuantity = apiData.reduce((acc, item) => acc + item.quantity, 0);    return (
      <>
        <h2>Kurv</h2>
        {isLoggedIn ? (
          <>
            {apiData.length > 0 ? (
              <>
                {/* Vis varer i kurven */}

                <div className={style.cartContentDes}>
                  <h3>Title</h3>
                  <p className={style.right}>Pris</p>
                  <p className={style.right}>Antal</p>
                  <p className={style.right}>Pris i alt</p>
                  
                </div>
                  {apiData && apiData.map(item => {
                    return (
                      <div key={item.id}  className={style.cartContent}>
                        <h3>{item.poster.name}</h3>
                        <p className={style.right}>{item.poster.price} kr.</p>
                        <p className={style.right}>{item.quantity}</p>
                        <p className={style.right}>{item.poster.price * item.quantity} kr.</p>
                        <p><BsFillTrash3Fill className={style.BsFillTrash3Fill}/></p>
                      </div>
                    )
                  }

                  )}
                <div className={style.cartContentSum}>
                  <h3>Total</h3>
                  <p> </p>
                  <p className={style.right}>{totalQuantity}</p>
                  <p className={style.right}>{totalPrice} kr.</p> 
                
                </div>

                <button onClick={closeModal}>Luk Kurv</button>
              </>
            ) : (
              // Hvis der ikke er varer i kurven
              <>
                <p>Du har ingen varer i kurven</p>
                <button onClick={closeModal}>Luk Kurv</button>
              </>
            )}
          </>
        ) : (
          <>
            <p>Du skal være logget ind for at tilføje varer til kurven</p>
            <button onClick={closeModal}>Luk Kurv</button>
          </>
        )}
      </>
    );
}