import { useState } from "react"
import Navbar1 from "../components/Navbar/Navbar1"
import Footer1 from "../components/Footer/Footer1"

export default function Home() {
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
    <>
      <Navbar1
        handleClickModal={handleClickModal}
        showSendMessageModal={showSendMessageModal}
      />
      <Footer1 />
    </>
  )
}
