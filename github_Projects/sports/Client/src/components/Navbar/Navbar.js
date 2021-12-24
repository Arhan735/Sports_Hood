import React, { useState, useContext } from "react";
import styled from "styled-components";
import Modal from "../Modal/ModalRegistr";
import InputForm from "../InputForm/InputFormRegistr";
import { FaBasketballBall } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Login } from "../Login.js";
import { GlobalStyle } from "../globalStyles.js";
import { ContextApp } from "../../ContextApp";

import {
  Nav,
  NavbarLogo,
  NavbarIcon,
  BurgerMenuIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
  NavbarLogin,
  NavbarLogOut,
} from "./NavbarStyled";

const Wrapper = styled.div
`
// background-image: linear-gradient(90deg, #9cf0f8 0%, #7aacef 100%);
`
const Navbar = () => {
  const { openModal, showModal, setModal, openModalUserInfo, modalUserInfo, setModalUserInfo, modalRef, showLogin, setShowLogin, openLogin, setLoggedIn, loggedIn } = useContext(ContextApp);


  const [clickBurgerMenu, setClickBurgerMenu] = useState(false);

  const handleClickBurgerMenu = () => setClickBurgerMenu(!clickBurgerMenu);

  return (
    <Wrapper>
      <Login
        showLogin={showLogin}
        setShowLogin={setShowLogin}
        setLoggedIn={setLoggedIn}
      />

      <Nav>
        <NavbarLogo to="/">
          SportsHood <NavbarIcon></NavbarIcon>
        </NavbarLogo>

        <BurgerMenuIcon onClick={handleClickBurgerMenu}>
          {clickBurgerMenu ? <FaTimes /> : <AiOutlineMenu />}
        </BurgerMenuIcon>

        <NavbarMenu
          onClick={handleClickBurgerMenu}
          clickBurgerMenu={clickBurgerMenu}
        >
          <NavbarItem>
            <NavbarLinks to="/">Home</NavbarLinks>
          </NavbarItem>

          <NavbarItem>
            {
              // if (loggedIn){
            }
            <NavbarLinks onClick={openModal} to="/">
              Register for sports
            </NavbarLinks>
            {
              //}else {
              //OPEN MODAL 2 WITH PHRASE "YOU SHOULD LOG IN FIRST"
            }
          </NavbarItem>

          {/* <NavbarItem>
            <NavbarLinks to="/results">Results</NavbarLinks>
          </NavbarItem> */}

          <NavbarItem>
            {
              // <NavbarLogOut onClick={openModalUserInfo}>L</NavbarLogOut>
            }
            {
              // IF LOGGED IN:
              //if (loggedIn) {
              // <NavbarLogOut
              // onClick={openLogout}
              // setLoggedIn={setLoggedIn}
              // loggedIn={loggedIn} />
              //} else {
            }
            {
              <NavbarLogin onClick={openLogin}> Log in </NavbarLogin>
            }
          </NavbarItem>
        </NavbarMenu>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
