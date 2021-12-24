import React, { useRef, useEffect, useCallback, useContext } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import InputFormReg from "../InputForm/InputFormRegistr";
import { ContextApp } from "../../ContextApp";

// STYLING COMPONENTS
// ==================
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(57, 105, 119, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999 !important;

`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  background-image: linear-gradient(90deg, #9cf0f8 0%, #7aacef 100%);
  color: #7aacef;
  display: grid;
  grid-template-rows: 1fr 1fr;
  z-index: 10;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 600px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ModalContentInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  line-height: 1.8;
  color: #7aacef;

  h1 {
    margin-top: 20px;
    color: #ffffff;
  }

  p {
    margin-bottom: 1rem;
    color: #ffffff;
  }
  @media screen and (max-width: 600px) {
    p {
      font-size: 11px;
    }
  }
`;

const ModalContentMessage = styled.div`

`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
// END STYLING COMPONENTS
// ======================

const Modal = () => {
  
  const { openModal, showModal, setModal, setLoggedIn, loggedIn,  handleLogin } = useContext(ContextApp);


  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateX(0%)` : `translateX(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setModal(false);
        console.log("I pressed");
      }
    },
    [setModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation} closeModal={closeModal}>
            <ModalWrapper showModal={showModal}>
              {
                //if (loggedIn){
              }

              <ModalContentInput>
                <h1>Are you ready?</h1>
                <p>Let others know about what sport you practice</p>
                <InputFormReg />
              </ModalContentInput>

              
              {/* <ModalContentMessage>
                  <h1>Please, login first</h1>
                    <LoginGoogle
                      onClick={handleLogin}
                      href="http://localhost:8080/signIn"
                    >
                      Log In with Google
                    </LoginGoogle>
                  </ModalContentMessage>
               */}
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
