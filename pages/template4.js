import { useState } from "react"
import styled from "styled-components"
import Navbar4 from "../components/Navbar/Navbar4"
import Footer4 from "../components/Footer/Footer4"

export default function template4() {
  const [showSendMessageModal, setShowSendMessageModal] = useState(false)
  const [showTradingModal, setShowTradingModal] = useState(false)

  function handleClickModal() {
    setShowSendMessageModal(true)
  }

  function handleCloseModal() {
    setShowSendMessageModal(false)
  }

  function handleClickTrading() {
    setShowTradingModal(true)
  }

  function handleCloseTrading() {
    setShowTradingModal(false)
  }

  return (
    <PageWrapper>
      <Navbar4
        handleClickModal={handleClickModal}
        showSendMessageModal={showSendMessageModal}
      />
      <Footer4 />
    </PageWrapper>
  )
}

export const PageWrapper = styled.div`
  -webkit-animation: background 20s cubic-bezier(1, 0, 0, 1) infinite;
  animation: background 20s cubic-bezier(1, 0, 0, 1) infinite;

  @-webkit-keyframes background {
    0% {
      background-color: #f6efe8;
    }
    33% {
      background-color: #9f9;
    }
    67% {
      background-color: #99f;
    }
    100% {
      background-color: #f99;
    }
  }

  @keyframes background {
    0% {
      background-color: #f6efe8;
    }
    33% {
      background-color: #9f9;
    }
    67% {
      background-color: #99f;
    }
    100% {
      background-color: #f99;
    }
  }
`