import React from "react";
// import {data} from "./DummyDB";
import DropDownElement from "./DropDownElement";

export default function ResultPage({data}) {
    console.log("DATA", data);
    let list =  data.map((data) =>{
        return(
            <DropDownElement key={0}name={data[1].name} city={data[0].city} sports={data[0].sportsName} imageURL={data[1].imageURL}/>
          )  }       
    )
    return(
       <div>
           {list}
        </div>
        
    );  
}