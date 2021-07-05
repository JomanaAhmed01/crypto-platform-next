import { useState } from "react"
import styled from "styled-components"
import Navbar2 from "../components/Navbar/Navbar2"
import Footer2 from "../components/Footer/Footer2"
import HeroBanner2 from '../components/HeroBanner/HeroBanner2'

export default function template2() {
  const [showTradingModal, setShowTradingModal] = useState(false)

  function handleClickTrading() {
    setShowTradingModal(true)
  }

  function handleCloseTrading() {
    setShowTradingModal(false)
  }

  return (
    <PageWrapper>
        <Navbar2 />
        <HeroBanner2 />
        <Footer2 />
    </PageWrapper>
  )
}

export const PageWrapper = styled.div`
  background-color: #ffffff;
`