import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "165akGbtTD6GYg6gR17aLrr0isjla1_JyGJ9GB_5d1Ig",
      
      simpleSheet: true
    })
      .then((data) => {
        setData([...data]);
      })
      .catch((err) => console.warn(err));
  }, []);
let arr = []
  return (
    <ul>
      {data.map((item, i) => (
        <Fragment key={i}>
          {
            // console.log('nya miro',item.)
            arr.push({parcel_id : item.PARCEL_ID, })
            
          }
          {/* <li>Parel ID -- {item.PARCEL_ID}</li>
          <li>Sale Status --{item.IN_SALE}</li> */}
          {/* <li>Email - {item.email}</li>
          <li>Token - {item.token}</li> */}
          <br />
          
        </Fragment>
      ))}
      {console.log('Got data:' , arr)}
    </ul>
  );
}
