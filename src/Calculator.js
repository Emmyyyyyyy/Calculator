import React, {useState} from "react";
import styled from "styled-components"

function Calculator(){
    const [show, setShow] = useState('0')

    function DeleteBtn(){
        setShow(show.slice(0, -1))
    }

    function handleZeroBtn(){
        
    }

    return (
        <Wrapper>
            <Box>
                <Result>
                    <ResultText>{show}</ResultText>
                </Result>
                <ButtonBox>
                    <SmallButton onClick={DeleteBtn}>DEL</SmallButton>
                    <SmallButton>/</SmallButton>
                    <SmallButton onClick={()=>{show[0]==='0' ? setShow('7') : setShow(show + '7')}}>7</SmallButton>
                    <SmallButton onClick={()=>{show[0]==='0' ? setShow('8') : setShow(show + '8')}}>8</SmallButton>
                    <SmallButton onClick={()=>{show[0]==='0' ? setShow('9') : setShow(show + '9')}}>9</SmallButton>
                    <SmallButton>*</SmallButton>
                    <SmallButton onClick={()=>{show[0]==='0' ? setShow('4') : setShow(show + '4')}}>4</SmallButton>
                    <SmallButton onClick={()=>{show[0]==='0' ? setShow('5') : setShow(show + '5')}}>5</SmallButton>
                    <SmallButton onClick={()=>{show[0]==='0' ? setShow('6') : setShow(show + '6')}}>6</SmallButton>
                    <SmallButton>-</SmallButton>
                    <SmallButton onClick={()=>{show[0]==='0' ? setShow('1') : setShow(show + '1')}}>1</SmallButton>
                    <SmallButton onClick={()=>{show[0]==='0' ? setShow('2') : setShow(show + '2')}}>2</SmallButton>
                    <SmallButton onClick={()=>{show[0]==='0' ? setShow('3') : setShow(show + '3')}}>3</SmallButton>
                    <SmallButton>+</SmallButton>
                    <SmallButton onClick={()=>{show[0]==='0' ? null : setShow(show + '0')}}>0</SmallButton>
                    <SmallButton onClick={()=>{setShow(show + '.')}}>.</SmallButton>
                    <AC onClick={()=>{setShow('0')}}>AC</AC>
                    <Equal>=</Equal>
                </ButtonBox>
            </Box>
        </Wrapper>
    )
}

export default Calculator

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 350px;
    height: 600px;
    border-radius: 30px;
    background-color: red;
    padding: 20px;
`

const ButtonBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 15px;
    /* align-items: center; */
    /* padding: 20px; */
    width: 100%;
    height: 100%;
`

const Result = styled.div`
    position: relative;
    width: 100%;
    height: 190px;
    border-radius: 20px;
    background: white;
    text-align: right;
`
const ResultText = styled.p`
    position: absolute;
    margin: 20px;
    right:  0;
    bottom: 0;
    font-size: 30px;
    font-family: 'Press Start 2P', cursive;
`

const SmallButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 20px;
    font-size: 15px;
    font-family: 'Press Start 2P', cursive;
    cursor: pointer;
    &:hover {
        border: 2px solid black;
    }
    &:active {
        /* border: 2px solid white; */
        background: black;
        color: white;
    }
`

const AC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    grid-column: 1/span 2;
    grid-row: 1;
    border-radius: 20px;
    color: white;
    font-family: 'Press Start 2P', cursive;
    font-size: 15px;
    cursor: pointer;
    &:hover {
        border: 2px solid white;
    }
    &:active {
        /* border: 2px solid white; */
        background: white;
        color: black;
    }
`

const Equal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    /* border: 2px solid white; */
    color: white;
    font-family: 'Press Start 2P', cursive;
    font-size: 15px;
    border-radius: 20px;
    grid-column: 3 / span 2;
    grid-row: 5;
    cursor: pointer;
    &:hover {
        border: 2px solid white;
        /* background: black; */
    }
    &:active {
        /* border: 2px solid white; */
        background: white;
        color: black;
    }
`