import React from "react"
import styled from "styled-components"
import { GraphUp } from "@styled-icons/bootstrap/GraphUp"
import { Error } from "@styled-icons/boxicons-regular/Error"

function DesktopTable({ handleClickTrading }) {
  return (
    <>
      <HeaderWrapper>
        <HeaderName>Name</HeaderName>
        <HeaderPrice>Price</HeaderPrice>
        <HeaderChange>Change</HeaderChange>
        <HeaderSellRate>Sell Rate</HeaderSellRate>
        <HeaderBuyRate>Buy Rate</HeaderBuyRate>
        <HeaderTrade>Trade</HeaderTrade>
      </HeaderWrapper>
      <TableWrapper>
        <Tr>
          <TdImageName>
            <Image src="/img/bitcoin.jpg" /> Bitcoin{" "}
            <CryptoCode>BTC</CryptoCode>
          </TdImageName>
          <TdPrice>NGN 22,859,418.81</TdPrice>
          <TdChange>+12.33%</TdChange>
          <TdSellRate>450/NGN</TdSellRate>
          <TdBuyRate>550/NGN</TdBuyRate>
          <TdTradeButton>
            <TradeButton variant="contained" onClick={handleClickTrading}>
              Trade
            </TradeButton>{" "}
          </TdTradeButton>
        </Tr>
        <Tr>
          <TdImageName>
            <Image src="/img/ethereum.jpg" /> Ethereum{" "}
            <CryptoCode>ETH</CryptoCode>
          </TdImageName>
          <TdPrice>NGN 22,859,418.81</TdPrice>
          <TdChange>+12.33%</TdChange>
          <TdSellRate>450/NGN</TdSellRate>
          <TdBuyRate>550/NGN</TdBuyRate>
          <TdTradeButton>
            <TradeButton variant="contained" onClick={handleClickTrading}>
              Trade
            </TradeButton>{" "}
          </TdTradeButton>
        </Tr>

        <Tr>
          <TdImageName>
            <Image src="/img/binance.jpg" /> Binance Coin{" "}
            <CryptoCode>BNB</CryptoCode>
          </TdImageName>
          <TdPrice>NGN 22,859,418.81</TdPrice>
          <TdChange>+12.33%</TdChange>
          <TdSellRate>450/NGN</TdSellRate>
          <TdBuyRate>550/NGN</TdBuyRate>
          <TdTradeButton>
            <TradeButton variant="contained" onClick={handleClickTrading}>
              Trade
            </TradeButton>{" "}
          </TdTradeButton>
        </Tr>

        <Tr>
          <TdImageName>
            <Image src="/img/tether.jpg" /> Tether <CryptoCode>USDT</CryptoCode>
          </TdImageName>
          <TdPrice>NGN 22,859,418.81</TdPrice>
          <TdChange>+12.33%</TdChange>
          <TdSellRate>450/NGN</TdSellRate>
          <TdBuyRate>550/NGN</TdBuyRate>
          <TdTradeButton>
            <TradeButton variant="contained" onClick={handleClickTrading}>
              Trade
            </TradeButton>{" "}
          </TdTradeButton>
        </Tr>

        <Tr>
          <TdImageName>
            <Image src="/img/cardano.jpg" /> Cardano{" "}
            <CryptoCode>ADA</CryptoCode>
          </TdImageName>
          <TdPrice>NGN 22,859,418.81</TdPrice>
          <TdChange>+12.33%</TdChange>
          <TdSellRate>450/NGN</TdSellRate>
          <TdBuyRate>550/NGN</TdBuyRate>
          <TdTradeButton>
            <TradeButton variant="contained" onClick={handleClickTrading}>
              Trade
            </TradeButton>{" "}
          </TdTradeButton>
        </Tr>

        <Tr>
          <TdImageName>
            <Image src="/img/polkadot.jpg" /> Polkadot{" "}
            <CryptoCode>DOT</CryptoCode>
          </TdImageName>
          <TdPrice>NGN 22,859,418.81</TdPrice>
          <TdChange>+12.33%</TdChange>
          <TdSellRate>450/NGN</TdSellRate>
          <TdBuyRate>550/NGN</TdBuyRate>
          <TdTradeButton>
            <TradeButton variant="contained" onClick={handleClickTrading}>
              Trade
            </TradeButton>{" "}
          </TdTradeButton>
        </Tr>

        <Tr>
          <TdImageName>
            <Image src="/img/xrp.jpg" /> XRP <CryptoCode>XRP</CryptoCode>
          </TdImageName>
          <TdPrice>NGN 22,859,418.81</TdPrice>
          <TdChange>+12.33%</TdChange>
          <TdSellRate>450/NGN</TdSellRate>
          <TdBuyRate>550/NGN</TdBuyRate>
          <TdTradeButton>
            <TradeButton variant="contained" onClick={handleClickTrading}>
              Trade
            </TradeButton>{" "}
          </TdTradeButton>
        </Tr>

        <Tr>
          <TdImageName>
            <Image src="/img/uniswap.jpg" /> Uniswap{" "}
            <CryptoCode>UNI</CryptoCode>
          </TdImageName>
          <TdPrice>NGN 22,859,418.81</TdPrice>
          <TdChange>+12.33%</TdChange>
          <TdSellRate>450/NGN</TdSellRate>
          <TdBuyRate>550/NGN</TdBuyRate>
          <TdTradeButton>
            <TradeButton variant="contained" onClick={handleClickTrading}>
              Trade
            </TradeButton>{" "}
          </TdTradeButton>
        </Tr>

        <Tr>
          <TdImageName>
            <Image src="/img/theta.jpg" /> Theta <CryptoCode>THETA</CryptoCode>
          </TdImageName>
          <TdPrice>NGN 22,859,418.81</TdPrice>
          <TdChange>+12.33%</TdChange>
          <TdSellRate>450/NGN</TdSellRate>
          <TdBuyRate>550/NGN</TdBuyRate>
          <TdTradeButton>
            <TradeButton variant="contained" onClick={handleClickTrading}>
              Trade
            </TradeButton>{" "}
          </TdTradeButton>
        </Tr>

        <Tr>
          <TdImageName>
            <Image src="/img/litecoin.jpg" /> Litecoin{" "}
            <CryptoCode>LTC</CryptoCode>
          </TdImageName>
          <TdPrice>NGN 22,859,418.81</TdPrice>
          <TdChange>+12.33%</TdChange>
          <TdSellRate>450/NGN</TdSellRate>
          <TdBuyRate>550/NGN</TdBuyRate>
          <TdTradeButton>
            <TradeButton variant="contained" onClick={handleClickTrading}>
              Trade
            </TradeButton>{" "}
          </TdTradeButton>
        </Tr>
      </TableWrapper>
    </>
  )
}

/*---> Styles <---*/
export const TableWrapper = styled.table`
  border: 1px solid rgb(224, 224, 224);
  margin-left: auto;
  margin-right: auto;
  width: 1030px;
  margin-top: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const Tr = styled.tr`
  border: 1px solid red;
`

export const HeaderWrapper = styled.div`
  border-top: 1px solid rgb(224, 224, 224);
  border-left: 1px solid rgb(224, 224, 224);
  border-right: 1px solid rgb(224, 224, 224);
  display: flex;
  width: 1030px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -50px;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const HeaderName = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  padding-left: 23px;
  margin-right: 210px;
`

export const HeaderPrice = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  padding-left: 20px;
  margin-right: 175px;
`

export const HeaderChange = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  padding-left: 20px;
  margin-right: 70px;
`

export const HeaderSellRate = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  padding-left: 20px;
  margin-right: 65px;
`

export const HeaderBuyRate = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  padding-left: 20px;
  margin-right: 65px;
`

export const HeaderTrade = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  padding-left: 20px;
`

export const TdImageName = styled.td`
  display: flex;
  align-items: center;
  padding: 20px;
  font-weight: 400;
`

export const Image = styled.img`
  width: 25px;
  height: 25px;
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
  padding: 20px;
  font-weight: 400;
  text-align: left;
`

export const TdChange = styled.td`
  text-align: center;
  padding: 20px;
  font-weight: 400;
  text-align: left;
`

export const TdSellRate = styled.td`
  text-align: center;
  padding: 20px;
  font-weight: 400;
  text-align: left;
`

export const TdBuyRate = styled.td`
  text-align: center;
  padding: 20px;
  font-weight: 400;
  text-align: left;
`

export const TdTradeButton = styled.td`
  text-align: center;
  padding: 20px;
  text-align: left;
`

export const TradeButton = styled.button`
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  color: #ffffff;
  width: 60px;
  height: 29px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Graphik";
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
`

export default DesktopTable