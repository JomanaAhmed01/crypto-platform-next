import React, { useState } from "react"
import styled from "styled-components"
import Buy from "./Buy"
import Sell from "./Sell"
import ProceedToBuy from "./ProceedToBuy"
import ProceedToSell from "./ProceedToSell"

function TradingModalHolder({ handleCloseTrading }) {
  const [tradingStep, setTradingStep] = useState("Buy")

  function changeToSell() {
    setTradingStep("Sell")
  }

  function changeToBuy() {
    setTradingStep("Buy")
  }

  function changeToProceedToBuy() {
    setTradingStep("ProceedToBuy")
  }

  function changeToProceedToSell() {
    setTradingStep("ProceedToSell")
  }

  return (
    <>
      {tradingStep === "Buy" ? (
        <Buy
          changeToSell={changeToSell}
          handleCloseTrading={handleCloseTrading}
          changeToProceedToBuy={changeToProceedToBuy}
        />
      ) : tradingStep === "Sell" ? (
        <Sell
          changeToBuy={changeToBuy}
          handleCloseTrading={handleCloseTrading}
          changeToProceedToSell={changeToProceedToSell}
        />
      ) : tradingStep === "ProceedToBuy" ? (
        <ProceedToBuy
          ProceedToBuy={ProceedToBuy}
          handleCloseTrading={handleCloseTrading}
          changeToBuy={changeToBuy}
        />
      ) : tradingStep === "ProceedToSell" ? (
        <ProceedToSell
          handleCloseTrading={handleCloseTrading}
          changeToSell={changeToSell}
        />
      ) : null}
    </>
  )
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  width: 400px;
  min-height: 100vh;
  border-radius: 4px;
  margin-left: auto;
  padding: 20px;
  padding-bottom: 30px;
  background-color: #ffffff;

  @media screen and (max-width: 768px) {
    width: 95%;
    padding-top: 100px;
  }
`

export default TradingModalHolder