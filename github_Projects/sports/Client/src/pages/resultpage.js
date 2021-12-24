import React, { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import { Images } from "../components";
import { InputFormSearch } from "../components";
import Map from "../components/Map";
import { Link } from "react-router-dom";
import { ContextApp } from "../ContextApp";




const Div = styled.div`
display: flex; 
flex-direction:column; 
background-color:white;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items:center;
grid-gap: 10px;
padding: 10px 10px;


@media (max-width: 500px){
    flex-direction: column;
}
`;

const Button = styled(Link)`
min-width:90px;
padding:16px, 32px;
border-radius: 4px;
border:none;
background: rgb(110, 94, 254);
color: #fff;
font-size: 18px;
cursor:pointer;
text-decoration: none;
letter-spacing: 1px;
`;

const Div1 = styled.div`
padding-left: 200px;
padding-right: 200px;
`;
const Wrapper= styled.div`
display: flex; 
justify-content: center; 
`;
const MainWrapper = styled.div`
height:100vh; 
background-color: white; 
`

const ButtonWrapper = styled.div`
display: flex;
justify-content:space-around;
background: rgb(110, 94, 254);
padding: 8px;
`;


export default function ResultPage() {
  const { loggedIn, sportData, setSportData, cityData, setCityData, handleSubmit } = useContext(ContextApp);

    const [users, setUsers] = useState("");

    useEffect((props) => {
        let queryParameter = window.location.href;
        console.log("Url", queryParameter);
        let sportsName="";
        let city=""; 
        if(queryParameter.includes("="))
        {
            console.log("Url", queryParameter);
            queryParameter = queryParameter.split("=");
            // let sportsName = queryParameter[1].replaceAll("%20", ""); 
            sportsName = queryParameter[1].split("&"); 
            sportsName= sportsName[0];
            // let city = queryParameter[2].replaceAll("%20", ""); 
            city = queryParameter[2];
      
        }
        
        console.log("sportsName",sportsName);
        console.log("city",city);
        const requestOptionsGet = {
            method: "GET",
            mode: "cors",
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
            headers: { "Content-Type": "application/json" },
          };
      
          const url =
            "http://localhost:8080/api/v1/findAvailableUsers?sportsName=" +
            sportsName +
            "&" +
            "city=" +
            city;
          const proxyurl = "";
          console.log(url);
          fetch(url, requestOptionsGet)
            .then((response) => response.json())
            // .then((data) => this.setState({ postId: data.id }));
      
            .then((data) => {
              console.log("You have sent the request yo yo yo \n\n\n\n\n\n\n\n\n\n\n\n");
              console.log(data);
              setUsers(data);
            })
            .catch(() =>
              console.log(
                "Can’t access response. Blocked by browser?"
              )
            );
      },[]);
      const map =
      users !== "" ? (
        <Map data={users} />
      ) : null;
  
    return(
        <MainWrapper>
        <Div>
            <Div>
            {/* <Div1><Images/></Div1> */}
            <Images/>
            </Div>
            <Div>
            <Container>
            {/* <input type="text" placeholder="Sport" name="search"/>
            <input type="text" placeholder="City" name="search"/> */}
            {/* <InputFormSearch    
            sportData={sportData}
            setSportData={setSportData}
            cityData={cityData}
            setCityData={setCityData}
            handleSubmit={handleSubmit}
/> */}

            <ButtonWrapper>
              <Button to="/" >Search Again</Button>
            </ButtonWrapper>
            </Container>
            </Div> 
            <Wrapper>
            {map}
            </Wrapper>
            
        </Div>  
        </MainWrapper>
    );  
}