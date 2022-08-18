import React from 'react';
import logo from "../../logo.svg"
import { AnimatedImage, FancyButton, StyledButton, SubmitButton, ThemeButton } from './Button.styles';
import { ThemeProvider,createGlobalStyle } from 'styled-components';

const Button = () => {
    const theme = {
        Dark:{
            primary:'white',
            text:'black',
        },
        Light:{
            primary:'black',
            text:'white',
        }
    }
    const GlobalStyles = createGlobalStyle`
    button{
        font-family:'Roboto'
    }
    `
  return (
    <div>
       <ThemeProvider theme={theme}>
        <GlobalStyles/>
       <StyledButton>Styled Button</StyledButton><br/><br/>
        <StyledButton variant="outlined">Styled Button</StyledButton><br/><br/>
        <FancyButton as='a'>FancyButton</FancyButton><br/><br/>
        <SubmitButton>Submit</SubmitButton><br/><br/>
        <AnimatedImage src={logo} alt=''/> <br/><br/>
        <ThemeButton>ThemeButton</ThemeButton>
       </ThemeProvider>
      

    </div>
  )
}

export default Button