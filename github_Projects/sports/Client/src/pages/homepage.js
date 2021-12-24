import React, { useState, useContext } from "react";
import styled from "styled-components";
import { InputFormSearch } from "../components";
import { ContextApp } from "../ContextApp";



// STYLING COMPONENTS
// ==================
const HomepageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(90deg, #9cf0f8 0%, #7aacef 100%);
  @media screen and (max-width: 600px) {
    margin-top: 4rem;
  }
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  /* color: rgb(239, 239, 239); */
  font-size: 2rem;

  @media screen and (max-width: 600px) {
    font-size: 1.1rem;
    margin-top: 3rem;
  }
`;

const h1 = styled.h1`
  text-align: center;

  @media screen and (max-width: 600px) {
    
    text-align: center;
    margin-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  
  }
`;

const RegisterBlock = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-self: center;
    font-size: 1.2rem;
  }
`;

const RegisterBtn = styled.button`
  margin-left: 10px;
  width: 110px;
  height: 45px;
  border: none;
  color: #9b9999;
  color: #ffff;
  font-size: 15px;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  font-family: poppins;
  font-weight:400;
  border: 1.5px solid #ffff;
  background: transparent;
  /* text-transform: uppercase; */
  transition: 1s;

  &:hover {
    opacity: 0.2;
  }
  

  @media screen and (max-width: 600px) {
    width: 30vw;
    height: 10vw;
    align-self: center;
    margin-bottom: 1rem;
  }
`;

const Paragraph1 = styled.p`
  text-align: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 600px) {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

const Paragraph2 = styled.p`
  text-align: center;
`;

const Circle1 = styled.div`
background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.5)
  );
  height: 24rem;
  width: 24rem;
  position: absolute;
  border-radius: 50%;
  top: 15%;
  right: -18%;

  @media screen and (max-width: 600px) {
    height: 14rem;
    width: 14rem;
    top: 80%;
    right: -20%;
    }
`

const Circle2 = styled.div`
background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  height: 20rem;
  width: 20rem;
  position: absolute;
  border-radius: 50%;
  bottom: 0%;
  left: -12%;

  @media screen and (max-width: 600px) {
    height: 8rem;
    width: 8rem;
    background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
    bottom: 75%;
    left: -11%;
    }
`
// END STYLING COMPONENTS
// ======================

export default function Homepage() {

  const { modalUserInfo, openModalUserInfo, openModal, showModal, setModal, modalRef, showLogin, setLoggedIn, loggedIn, openLogin, sportData, setSportData, cityData, setCityData, handleSubmit } = useContext(ContextApp);


  return (
    <>
      <HomepageStyle>
        <Head>
          <h1>Find Sports Partners</h1>

          <RegisterBlock>
            <Paragraph1>Let others know about youself</Paragraph1>


            {
              // IF LOGGED IN:
                  //:
            }
            <RegisterBtn onClick={openModal}>Register</RegisterBtn>
            { 
            // ELSE:
                  //OPEN MODAL 2 WITH PHRASE "YOU SHOULD LOG IN FIRST"
            }
        
          </RegisterBlock>

          <Paragraph2>Type sport name and your city </Paragraph2>
        </Head>

        {showLogin ? null : <InputFormSearch />
            }

      </HomepageStyle>
    </>
  );
}
