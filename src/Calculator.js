import React, { useState } from "react";
import styled from "styled-components"

function Calculator(){
    const [show, setShow] = useState('0')
    const [prevNum, setPrevNum] = useState('')
    const [sign, setSign] = useState('')

    function DeleteBtn(){
        if(show.length === 1){
            setShow('0')
        }
        else {
            setShow(show.slice(0, -1))
        }
    }

    function handleNumBtn(num){
        if(num === "0" && show.length < 10){
            if((show.length >= 2 && show[1] === '.') || (show[0] !== '0')){
                setShow(show + '0')
            }
        }
        else if(num !== '0' && show.length < 10) {
            if(show[0] === '0' && show[1] !== '.'){
                setShow(num)
            }
            else{
                setShow(show + num)
            }
        }
    }

    function DecimalPointBtn(){
        if(show.indexOf(".") === -1){
            setShow(show + '.')
        }
    }

    function handleACBtn(){
        if(show !== '0'){
            setShow('0')
        }
        else if(prevNum !== '0' || sign !== ''){
            setPrevNum('')
            setSign('')
        }
    }

    function handleSigns(curSign){
        if(curSign !== '=')
            setSign(curSign)
        else
            setSign('')

        if(curSign === '=' ){
            if(sign === '+'){
                setShow((show - 0) + (prevNum - 0) + '')
            }
            else if(sign === '-'){
                if(prevNum === ''){
                    setShow(show+'')
                }
                else{
                    setShow(prevNum - show + '')
                }
            }
            else if(sign === '*'){
                setShow(show * prevNum + '')    
            }
            else if(sign === '/'){
                if(prevNum === ''){
                    setShow(show + '')
                }
                else{
                    setShow((prevNum / show).toFixed(3) + '')
                }
            }
            setPrevNum('')
        }
        else {
            setPrevNum(show)
            setShow('0')
            if(sign === '+'){
                setPrevNum((show - 0) + (prevNum - 0) + '')
            }
            else if(sign === '-'){
                if(prevNum === ''){
                    setPrevNum(show + '')
                }
                else{
                    setPrevNum(prevNum - show + '')
                }
            }
            else if(sign === '*'){
                setPrevNum(show * prevNum + '')    
            }
            else if(sign === '/'){
                if(prevNum === ''){
                    setPrevNum(show + '')
                }
                else{
                    setPrevNum((prevNum / show).toFixed(3) + '')
                }
            }
        }
        
    }


    return (
        <Wrapper>
            <Box>
                <Result>
                    <PrevNum>{prevNum}</PrevNum>
                    <Sign>{sign}</Sign>
                    <ResultText>{show}</ResultText>
                </Result>
                <ButtonBox>
                    <SmallButton onClick={DeleteBtn}>DEL</SmallButton>
                    <SmallButton onClick={()=>handleSigns('/')}>/</SmallButton>
                    <SmallButton onClick={()=>handleNumBtn('7')}>7</SmallButton>
                    <SmallButton onClick={()=>handleNumBtn('8')}>8</SmallButton>
                    <SmallButton onClick={()=>handleNumBtn('9')}>9</SmallButton>
                    <SmallButton onClick={()=>handleSigns('*')}>*</SmallButton>
                    <SmallButton onClick={()=>handleNumBtn('4')}>4</SmallButton>
                    <SmallButton onClick={()=>handleNumBtn('5')}>5</SmallButton>
                    <SmallButton onClick={()=>handleNumBtn('6')}>6</SmallButton>
                    <SmallButton onClick={()=>handleSigns('-')}>-</SmallButton>
                    <SmallButton onClick={()=>handleNumBtn('1')}>1</SmallButton>
                    <SmallButton onClick={()=>handleNumBtn('2')}>2</SmallButton>
                    <SmallButton onClick={()=>handleNumBtn('3')}>3</SmallButton>
                    <SmallButton onClick={()=>handleSigns('+')}>+</SmallButton>
                    <SmallButton onClick={()=>handleNumBtn('0')}>0</SmallButton>
                    <SmallButton onClick={()=>DecimalPointBtn()}>.</SmallButton>
                    <AC onClick={()=>{handleACBtn()}}>AC</AC>
                    <Equal onClick={()=>handleSigns('=')}>=</Equal>
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

const PrevNum = styled.div`
    position: absolute;
    margin: 20px;
    right: 0;
    color: grey;
    font-family: 'Press Start 2P', cursive;
`

const Sign = styled.div`
    position: absolute;
    margin: 20px;
    right: 0;
    top: 25%;
    color: grey;
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