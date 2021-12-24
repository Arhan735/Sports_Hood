import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import SelectSport from "./SelectSport";
import GoogleMap from "./GoogleMap";
import Axios from "axios";
import { Redirect, withRouter } from "react-router-dom";

// STYLING COMPONENTS
const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 60vw;

  @media screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 60px 60px 60px;
    justify-items: center;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 55px 55px 55px;
    justify-items: center;
  }
`;

const BtnGetMatch = styled.button`
  padding: 0.5rem;
  font-size: 2rem;
  border: none;
  width: 150px;
  height: 52px;
  font-size: 18px;
  letter-spacing: 1px;
  color: rgb(110, 94, 254);
  color: #ffff;
  font-family: poppins;
  /* font-weight:400; */
  border: 2px solid rgb(110, 94, 254);
  border: 2px solid #ffff;
  background: transparent;
  /* text-transform: uppercase; */
  transition: 1s;

  &:hover {
    opacity: 0.2;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 960px) {
    width: 300px;
  }
`;
// END STYLING COMPONENTS
// ----------------------

export default function InputForm(  {
  sportData,
  setSportData,
  cityData,
  setCityData,
  handleSubmit
}) {

  
  const [goToResult, setGoToResult] = useState("");
  // const [sportData, setSportData] = useState("");
  // const [cityData, setCityData] = useState("");
 

  // // const [matcNoEmail, setmatcNoEmail] = useState("");

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();

  //   //IF NOT LOGGED IN:
  //   //MODAL
  //   //ELSE:
  //   //HANDLE GET REQUEST TO REGISTER USER
  //   console.log("sportData: ", sportData);
  //   console.log("cityData: ", cityData);

  //   const requestOptionsGet = {
  //     method: "GET",
  //     mode: "cors",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     headers: { "Content-Type": "application/json" },
  //   };

  //   const url =
  //     "http://localhost:8080/api/v1/findAvailableUsers?sportsName=" +
  //     sportData +
  //     "&" +
  //     "city=" +
  //     cityData;
  //   const proxyurl = "";
  //   fetch(url, requestOptionsGet)
  //     .then((response) => response.json())
  //     // .then((data) => this.setState({ postId: data.id }));

  //     .then((data) => {
  //       console.log("You have sent the request \n\n\n\n\n\n\n\n\n\n\n\n");
  //     })
  //     .catch(() =>
  //       console.log(
  //         "Can’t access response. Blocked by browser?"
  //       )
  //     );
  // };
const goToResults = () => { 
  setGoToResult("true");
  let sd = sportData.replaceAll(" ","");
  let city = cityData.replaceAll(" ","");
  setSportData(sd);
  setCityData(city);
}
  //END HANDLE POST REQUEST
if(goToResult==="true")
{
  return (
    <Redirect
    push
    to={{
      pathname: "/results",
      search: `?sportsName=${sportData}&city=${cityData}`,
    }}
  />
  )
}
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SelectSport setSportData={setSportData} />

        <GoogleMap setCityData={setCityData} />

        <BtnGetMatch onClick={goToResults}type="submit">Get match</BtnGetMatch>
      </Form>
    </>
  );
}
