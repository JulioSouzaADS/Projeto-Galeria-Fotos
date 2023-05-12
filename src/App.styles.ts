import styled from "styled-components";

export const Container = styled.div `
background-color: #27242F;
color: #FFF;
min-height: 100vh;
width: 100vw;
`
export const Area = styled.div `
margin: auto;
max-width: 980px;
padding: 30px 0;
`

export const Header = styled.h1 `
margin: 0;
padding: 0;
margin-bottom: 30px;
text-align: center;

`
export const ScreenWarning = styled.div `
text-align: center;

.emoji {
    font-size: 50px;
    margin-bottom: 20px;
}
`
export const PhotoList = styled.div `
display: grid;
grid-template-rows: repeat(4,1fr);

`
export const UpLoadForm = styled.form `
background-color: #3D3F43;
padding: 15px;
border-radius: 10px;
margin-bottom: 10px;

input [type=submit] {
    background-color: #756DF4;
    border: #FFF;
    padding: 8px 16px;
    border-radius: 10px;
    margin: 0 20px;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
}

`