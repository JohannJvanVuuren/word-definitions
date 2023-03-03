import styled from "styled-components";
import { Link } from 'react-router-dom'

/* Styling for styled-component in WordBoc.js - input form field */
export const StyledInput = styled.input`
  border-radius: 2rem;
  font-family: "Lato", Arial, sans-serif;
  background-color: #DEDEDE;
  border: none;
  outline: none;
  width: 60rem;
`

/* Styling for styled-component WordBox.js- home route */
export const StyledLink = styled(Link)`
  text-decoration: none;
  border-radius: 2rem;
  box-shadow: 1rem 1rem 3rem #000000,
-1px -1px 3rem #DEDEDE;
  margin: 0 0 5rem 5rem;
  width: 10rem;
  padding: 1rem 2rem 1rem 2rem;
  text-align: center;
  background-color: #DEDEDE;
  color: #080808;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  position: absolute;
  bottom: 1rem;
  right: 5rem;
`

/* Styling for styled component LandingPage.js- wordBox route */
export const StyledPrimaryLink = styled(Link)`
  text-decoration: none;
  border-radius: 2rem;
  box-shadow: 1rem 1rem 3rem #000000,
    -1px -1px 3rem #DEDEDE;
  margin-top: 5rem;
  width: 20rem;
  padding: 1rem 2rem 1rem 2rem;
  text-align: center;
  background-color: #DEDEDE;
  color: #080808;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
`

/* Styling of styled component search button in WordBox.js to link to ResultsPage.js */
export const StyledSearchButton = styled(Link)`
  padding: 2rem 4rem;
  background-color: #DEDEDE;
  color: #080808;
  text-transform: uppercase;
  font-size: 2rem;
  margin-top: 3rem;
  font-weight: 700;
  border-radius: 2rem;
  box-shadow: 1rem 1rem 3rem #000000,
    -1px -1px 3rem #DEDEDE;
  border: none;
  outline: none;
  text-decoration: none;
`

export const StyledForm = styled.form``

export const StyledLabel = styled.label``