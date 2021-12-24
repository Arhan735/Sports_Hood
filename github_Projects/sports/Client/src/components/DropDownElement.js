import React from "react";
import styled from "styled-components";
// import Images from "../components/Images"


export const Row = styled.div`
display:flex;
flex-direction: column;
/* background-color: orange; */
justify-content: center;
padding: 3px 3px;
width: 320px;
 
@media (max-width: 500px){
    display: flex;
    align-items: center;  
}
@media (max-width: 850px){
    display: flex;
    align-items: center;  
}
`

export const UserDisplay = styled.div`
display:flex;
flex-direction: row;
padding: 5px 2px 0px 2px;
background-image: linear-gradient(90deg, #9cf0f8 0%, #7aacef 100%);
border: solid;
border-color: #DCDCDC;
border-width: thin;
width: 800px;
justify-content: space-between; 
align-items: center; 
@media (max-width: 500px){
    flex-direction: column;
    width: 340px; 
}

@media (max-width: 850px){
    flex-direction: column;
    width: 400px;
}
`

const Button = styled.button`
display: flex;
justify-content: center;
flex-direction: row-reverse;
align-items: center;
width: 70px;
border:none;
padding: 15px;
background-color: rgb(110, 94, 254);
color: white;
border-radius: 2px;
letter-spacing: 1px;
font-size: 15px;
`

const BtnWrap = styled.div`
/* background-color: white; */
display: flex; 
align-items: center;
padding-right: 10px;
@media (max-width: 500px){
    flex-direction: column;
    padding-bottom: 5px;
}
`

const Picture = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   background-color: transparent;
   height: 100%;
   width: 90px;
   @media (max-width: 500px){
       width:90px;
    }
`;

const ProfileImage = styled.div`
   width: 70%;
   height: 0;
   padding-top: 70%;
   background-image: ${({ backgroundUrl }) => `url("${backgroundUrl}")`};
   background-size: cover;
   background-position: center;
   border-radius: 50%;  
`;

const A = styled.div`
display: flex;


@media (max-width: 500px){
justify-content: center;
}
`;
const Color = styled.div`
color: black; 
letter-spacing: 1px;
`

const Color1 = styled.div`
color: black;
font-weight:bold;
letter-spacing: 1px;
`

const LeftWrapper = styled.div`
display: flex;
flex-direction: row;
align-items:center;  
@media (max-width: 500px){
    flex-direction: column;
    width: 340px; 
    
}

@media (max-width: 850px){
    flex-direction: column;
    width: 400px;
}
`


export default function ResultPage(props) {
    console.log(props.imageurl);
    return(
        <>
            <UserDisplay>
                {/* <BackgroundClr></BackgroundClr> */}
                <LeftWrapper>
                <A class= "picture">
                    <Picture >
                        <ProfileImage backgroundUrl={props.imageURL}/>
                    </Picture>
                </A>
                <Row class="main" >
                    <Row>
                        <Color1>{props.name}</Color1>
                    </Row>
                    <Row>
                        <Color>{props.sports} </Color>
                    </Row>
                    <Row>
                        <Color>{props.city} </Color>
                    </Row>
                </Row>
                </LeftWrapper>
              
                <BtnWrap class= "button">
                    <Button>Chat</Button>
                </BtnWrap> 
            </UserDisplay>
            
        </>
        
    );  
}


