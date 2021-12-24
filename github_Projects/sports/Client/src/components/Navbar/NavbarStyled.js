import styled from "styled-components";
import { FaBasketballBall } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  /* background: linear-gradient(90deg, rgb(110, 94, 254) 0%, rgba(156, 240, 248, 1) 100%); */
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;

export const NavbarLogo = styled(Link)`
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  color: rgb(239, 239, 239);
  color: #fff;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bolder;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(25%, 50%);
  }

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-5%, 60%);
  }
`;

export const NavbarIcon = styled(FaBasketballBall)`
  font-size: 1.6rem;
`;

export const BurgerMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const MenuCloseIcon = styled(AiOutlineMenu)`
  display: none;
`;

export const NavbarMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
  transition: all 0.5s ease;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 90px;
    left: ${({ clickBurgerMenu }) => (clickBurgerMenu ? 0 : "-100%")};
    z-index: 999 !important;
    opacity: 1;
    background: #7aacef;
    padding-top: 3rem;
  }
`;

export const NavbarItem = styled.li``;

export const NavbarLinks = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: rgb(239, 239, 239);
  color: #fff;
  letter-spacing: 1.5px;
  font-weight: lighter;
  transition: 1s;

  &:hover {
    background: linear-gradient(
      90deg,
      rgb(110, 94, 254) 0%,
      rgb(123, 109, 245) 70%
    );
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      background: linear-gradient(
        90deg,
        rgb(110, 94, 254) 0%,
        rgb(123, 109, 245) 70%
      );
      display: block;
      padding: 2rem;
      text-align: center;
      margin: auto;
      width: 70%;
    }
  }
`;

export const NavbarLogin = styled(Link)`
  margin-left: 100px;
  color: white;
  padding: 0.6rem 1.1rem;
  background: rgb(110, 94, 254);
  text-decoration: none;
  letter-spacing: 1px;

  @media screen and (max-width: 960px) {
    display: block;
    text-align: center;
    padding: 1.5rem;
    margin: auto;
    width: 70%;
    background: rgb(110, 94, 254);
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }
  &:hover {
    background: linear-gradient(
      90deg,
      rgb(110, 94, 254) 0%,
      rgb(123, 109, 245) 70%
    );
  }
`;


export const NavbarLogOut  = styled(Link)`
  margin-left: 100px;
  color: white;
  padding: .9rem 1.5rem;
  border-radius: 50%;
  background: rgb(110, 94, 254);
  text-decoration: none;
  letter-spacing: 1px;

  @media screen and (max-width: 960px) {
    display: block;
    text-align: center;
    padding: 1.5rem;
    margin: auto;
    width: 70%;
    background: rgb(110, 94, 254);
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 960px) {
    padding: .8rem 1.1rem;
    width: 4rem;
  }
  &:hover {
    background: linear-gradient(
      90deg,
      rgb(110, 94, 254) 0%,
      rgb(123, 109, 245) 70%
    );
  }
`;

export const NavbarLogout = styled(Link)`
  /* margin-left: 100px; */
  color: white;
  padding: 0.6rem 1rem;
  background: #ffff;
  text-decoration: none;
  letter-spacing: 1px;
  border-radius: 50%;
  width: 20px;

  @media screen and (max-width: 960px) {
    display: block;
    text-align: center;
    padding: 1.5rem;
    margin: auto;
    width: 20%;
    background: rgb(110, 94, 254);
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }
  &:hover {
    background: linear-gradient(
      90deg,
      rgb(110, 94, 254) 0%,
      rgb(123, 109, 245) 70%
    );
  }
`;
