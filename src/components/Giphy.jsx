import axios from "axios";
import React, { useEffect } from "react";
import "../css/style.css";
import Loader from "./Loader"

require('dotenv').config();

// 8hkwhIfm2gdrAnpBGMTeatP6tnLXbCrH


const Giphy = (props) => {
  console.log("props: "+props.text);

  const [data, setData] = React.useState([]);
  const [isload,setLoad]=React.useState(true)


  useEffect(() => {

    setLoad(true)
    // console.log("use effect called");
    const fetchData = async () => {

      const giphyResults = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          q:props.text,
          limit: "5",
          
        },
      });

      console.log(giphyResults);
      setData(giphyResults.data.data)
      setTimeout(() => {
        setLoad(false)

      }, 4000);
      //console.log("use effect called again");
      

    };

    fetchData();


  },[props.text]);


  const show=()=>{

    if (isload){
      // setLoad(false);
      return <Loader />
    }

    return (
      data.map(value =>{
        return (
          <div className="gif col-md-2 ">
             <img  className="images" src={value.images.original.url} />
         </div>
        )

      })
      
      
    )

  }

  return <div className="row">{show()}</div>;
};


export default Giphy;
