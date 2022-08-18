import styled,{keyframes} from "styled-components";


//STYLED COMPONENTS
export const StyledButton = styled.button`
width: 120px;
height: 50px;
//PROPS USEAGE
color: ${props=>props.variant==='outlined'?'black':'#fff'};
background: ${(props)=>props.variant==='outlined'?'#fff':'black'};
padding:10px 10px;
border-radius: 10px;
font-size: 14px;
font-weight: bold;
border: 2px solid black;
cursor: pointer;
&:hover{
    color: ${props=>props.variant!=='outlined'?'black':'#fff'};
    background: ${(props)=>props.variant!=='outlined'?'#fff':'black'};
}
`

//PSUEDO CLASSES
export const FancyButton = styled(StyledButton)`
background-image: linear-gradient(to right, #452647 0%,#fda085 100%);
border:none;
&:hover{
    border: 2px solid black;
    color: black;
}
`

//ATTRIBUTES
export const SubmitButton = styled(StyledButton).attrs({
    type:'submit'
})`
box-shadow: 0px 5px black;
&:active{
    background: ${(props)=>props.variant!=='outlined'?'#fff':'black'};
    box-shadow: 5px 10px black;

}
`



//ANIMATION
const rotate = keyframes`
from{
    transform:rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`

export const AnimatedImage = styled.img`
height:100px;
margin-Top:10px;
animation: ${rotate} 2s infinite linear;
`

export const ThemeButton = styled(StyledButton)`
background: ${(props)=>props.theme.Dark.primary};
color:${(props)=>props.theme.Dark.text};
`