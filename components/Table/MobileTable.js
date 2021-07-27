import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { GraphUp } from "@styled-icons/bootstrap/GraphUp"
import { Error } from "@styled-icons/boxicons-regular/Error"

function MobileTable({ handleClickTrading }) {
  return (
    <>
      <TableWrapper>
        {/* <GraphArrowWrapper>
          <GraphArrow />
        </GraphArrowWrapper> */}
        <Tr>
          <TrWrapper onClick={handleClickTrading}>
            <TdImageName>
              <Image src="/img/bitcoin.jpg" />{" "}
              <CryptoWrapper>
                <CryptoName>Bitcoin</CryptoName>
                <CryptoCode>BTC</CryptoCode>
              </CryptoWrapper>
            </TdImageName>

            <SellRateBuyRateWrapper>
              <SellRate>Sell 450/NGN</SellRate>
              <BuyRate>Buy 550/NGN</BuyRate>
              <Change>+12.03%</Change>
            </SellRateBuyRateWrapper>
          </TrWrapper>
        </Tr>

        <Tr>
          <TrWrapper onClick={handleClickTrading}>
            <TdImageName>
              <Image src="/img/ethereum.jpg" />{" "}
              <CryptoWrapper>
                <CryptoName>Ethereum</CryptoName>
                <CryptoCode>ETH</CryptoCode>
              </CryptoWrapper>
            </TdImageName>

            <SellRateBuyRateWrapper>
              <SellRate>Sell 450/NGN</SellRate>
              <BuyRate>Buy 550/NGN</BuyRate>
              <Change>+12.03%</Change>
            </SellRateBuyRateWrapper>
          </TrWrapper>
        </Tr>

        <Tr>
          <TrWrapper onClick={handleClickTrading}>
            <TdImageName>
              <Image src="/img/binance.jpg" />{" "}
              <CryptoWrapper>
                <CryptoName>Binance Coin</CryptoName>
                <CryptoCode>BNB</CryptoCode>
              </CryptoWrapper>
            </TdImageName>

            <SellRateBuyRateWrapper>
              <SellRate>Sell 450/NGN</SellRate>
              <BuyRate>Buy 550/NGN</BuyRate>
              <Change>+12.03%</Change>
            </SellRateBuyRateWrapper>
          </TrWrapper>
        </Tr>

        <Tr>
          <TrWrapper onClick={handleClickTrading}>
            <TdImageName>
              <Image src="/img/tether.jpg" />{" "}
              <CryptoWrapper>
                <CryptoName>Tether</CryptoName>
                <CryptoCode>USDT</CryptoCode>
              </CryptoWrapper>
            </TdImageName>

            <SellRateBuyRateWrapper>
              <SellRate>Sell 450/NGN</SellRate>
              <BuyRate>Buy 550/NGN</BuyRate>
              <Change>+12.03%</Change>
            </SellRateBuyRateWrapper>
          </TrWrapper>
        </Tr>

        <Tr>
          <TrWrapper onClick={handleClickTrading}>
            <TdImageName>
              <Image src="/img/cardano.jpg" />{" "}
              <CryptoWrapper>
                <CryptoName>Cardano</CryptoName>
                <CryptoCode>ADA</CryptoCode>
              </CryptoWrapper>
            </TdImageName>

            <SellRateBuyRateWrapper>
              <SellRate>Sell 450/NGN</SellRate>
              <BuyRate>Buy 550/NGN</BuyRate>
              <Change>+12.03%</Change>
            </SellRateBuyRateWrapper>
          </TrWrapper>
        </Tr>

        <Tr>
          <TrWrapper onClick={handleClickTrading}>
            <TdImageName>
              <Image src="/img/polkadot.jpg" />{" "}
              <CryptoWrapper>
                <CryptoName>Polkadot</CryptoName>
                <CryptoCode>DOT</CryptoCode>
              </CryptoWrapper>
            </TdImageName>

            <SellRateBuyRateWrapper>
              <SellRate>Sell 450/NGN</SellRate>
              <BuyRate>Buy 550/NGN</BuyRate>
              <Change>+12.03%</Change>
            </SellRateBuyRateWrapper>
          </TrWrapper>
        </Tr>

        <Tr>
          <TrWrapper onClick={handleClickTrading}>
            <TdImageName>
              <Image src="/img/xrp.jpg" />{" "}
              <CryptoWrapper>
                <CryptoName>XRP</CryptoName>
                <CryptoCode>XRP</CryptoCode>
              </CryptoWrapper>
            </TdImageName>

            <SellRateBuyRateWrapper>
              <SellRate>Sell 450/NGN</SellRate>
              <BuyRate>Buy 550/NGN</BuyRate>
              <Change>+12.03%</Change>
            </SellRateBuyRateWrapper>
          </TrWrapper>
        </Tr>

        <Tr>
          <TrWrapper onClick={handleClickTrading}>
            <TdImageName>
              <Image src="/img/uniswap.jpg" />{" "}
              <CryptoWrapper>
                <CryptoName>Uniswap</CryptoName>
                <CryptoCode>UNI</CryptoCode>
              </CryptoWrapper>
            </TdImageName>

            <SellRateBuyRateWrapper>
              <SellRate>Sell 450/NGN</SellRate>
              <BuyRate>Buy 550/NGN</BuyRate>
              <Change>+12.03%</Change>
            </SellRateBuyRateWrapper>
          </TrWrapper>
        </Tr>

        <Tr>
          <TrWrapper onClick={handleClickTrading}>
            <TdImageName>
              <Image src="/img/theta.jpg" />{" "}
              <CryptoWrapper>
                <CryptoName>Theta</CryptoName>
                <CryptoCode>THETA</CryptoCode>
              </CryptoWrapper>
            </TdImageName>

            <SellRateBuyRateWrapper>
              <SellRate>Sell 450/NGN</SellRate>
              <BuyRate>Buy 550/NGN</BuyRate>
              <Change>+12.03%</Change>
            </SellRateBuyRateWrapper>
          </TrWrapper>
        </Tr>

        <Tr>
          <TrWrapper onClick={handleClickTrading}>
            <TdImageName>
              <Image src="/img/litecoin.jpg" />{" "}
              <CryptoWrapper>
                <CryptoName>Litecoin</CryptoName>
                <CryptoCode>LTC</CryptoCode>
              </CryptoWrapper>
            </TdImageName>

            <SellRateBuyRateWrapper>
              <SellRate>Sell 450/NGN</SellRate>
              <BuyRate>Buy 550/NGN</BuyRate>
              <Change>+12.03%</Change>
            </SellRateBuyRateWrapper>
          </TrWrapper>
        </Tr>
      </TableWrapper>
    </>
  )
}

/*---> Styles <---*/
export const TableWrapper = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 550px;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const ErrorIcon = styled(Error)`
  width: 100px;
  height: 100px;
  color: #ff3333;
`

export const GraphArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const GraphArrow = styled(GraphUp)`
  width: 150px;
  height: 150px;
  color: #d8d8d8;
`

export const TrWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 20px;
  cursor: pointer;
`

export const CryptoWrapper = styled.div`
  
`

export const SellRateBuyRateWrapper = styled.div`
  /* border: 3px solid red; */
  position: relative;
  bottom: -20px;
`

export const CryptoName = styled.p`
  font-weight: 400;
`

export const Tr = styled.tr``

export const Th = styled.th`
  font-weight: 500;
`

export const TdImageName = styled.td`
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
`

export const CryptoCode = styled.td`
  color: gray;
  margin-left: 10px;
  font-weight: 400;
`

export const TdPrice = styled.td`
  text-align: center;
  font-size: 14px;
`

export const TdChange = styled.td`
  text-align: center;
`

export const SellRate = styled.p`
  text-align: center;
  font-weight: 400;
`

export const BuyRate = styled.p`
  text-align: center;
  font-weight: 400;
`

export const Change = styled.p`
  text-align: right;
  color: #ff8080;
  font-weight: 400;
`

export const TdTradeButton = styled.td`
  text-align: center;
`

export const TradeButton = styled(Button)`
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  color: #ffffff !important;
  text-transform: capitalize !important;
  width: 60px !important;
  height: 29px !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  font-family: "Graphik" !important;
  border-radius: 4px !important;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.2s !important;
`

export default MobileTable
