import React, { useEffect } from "react"
import "../css/style.css"
import Giphy from "./Giphy"
import Loader from "./Loader"

const Search = () => {

  const [inputVal,setInputVal]=React.useState("Trending");


  const handleSubmit=(e)=>{
    // setInputVal(e.target)
    const val=document.getElementById("name").value;
    setInputVal(val);


    e.preventDefault();

  }

  

 
 
 
 
 

  
  
  

  return (
    <div>
      <form class="ui form" onSubmit={handleSubmit}>
        <div class="field">
          <input type="text" name="name"  id="name" className="inputTag"
       placeholder="Trending"></input>
        
        <button class="btn btn-outline-primary" type="submit" >
          Search
        </button>
        </div>
      </form>

      
      
      
     
     
     
     
      <Giphy text={inputVal}   />

    </div>

  );
};
export default Search;
