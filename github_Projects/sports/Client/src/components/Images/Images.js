import React from 'react';
import logo from './logo.jpg'; // Tell webpack this JS file uses this image
import styled from "styled-components";
import { Picture } from 'react-responsive-picture';

const Temp = styled(Picture)`
display:flex;
padding-top:100px;
display: flex; 
align-self:center;   
overflow: hidden;
max-width: 355px; 
`;

function Images() { 
return <Temp src = {logo}/>
}
export default Images;
