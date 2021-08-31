import React, { useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import { CloseCircle } from "@styled-icons/ionicons-outline/CloseCircle"
import { ArrowDropUp } from "@styled-icons/material-twotone/ArrowDropUp"
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline"
import Button from "@material-ui/core/Button"
import { ArrowDropDown } from "@styled-icons/material-outlined/ArrowDropDown"

function Buy({ handleCloseTrading, changeToSell, changeToProceedToBuy }) {
  return (
    <>
      <Wrapper>
        <DesktopVersion>
          <FirstPartOfTheSell>
            <WhatDoYouWant>
              <WhatDoYouWantText>What do you want to do?</WhatDoYouWantText>
              <CloseIconWrapper>
                <CloseIcon onClick={handleCloseTrading} />
              </CloseIconWrapper>
            </WhatDoYouWant>
            <TabsWrapper>
              <BuyTabWrapper>
                <BuyTab>Buy</BuyTab>
              </BuyTabWrapper>

              <SellTabWrapper onClick={changeToSell}>
                <SellTab>Sell</SellTab>
              </SellTabWrapper>
            </TabsWrapper>
          </FirstPartOfTheSell>

          <SecondPartOfSell>
            <DataWrapper>
              <FirstInputWrapper>
                <Label>How much do you want to buy?</Label>
                <InputWrapper>
                  <Input placeholder="Enter amount"></Input>
                  <SecondPartButtonsWrapper>
                    <NgnButton>NGN</NgnButton>
                    <BtcButton>BTC</BtcButton>
                  </SecondPartButtonsWrapper>
                </InputWrapper>
                <Approximately>
                  Approximately <ApproSpan>0.009938 BTC</ApproSpan>
                </Approximately>
              </FirstInputWrapper>

              <SecondInputWrapper>
                <Label>Receiving Address</Label>
                <InputWrapper>
                  <Input placeholder="Enter receiving address"></Input>
                  <SecondPartButtonsWrapper>
                    <PasteButton>Paste</PasteButton>
                  </SecondPartButtonsWrapper>
                </InputWrapper>
              </SecondInputWrapper>
            </DataWrapper>
          </SecondPartOfSell>

          <ThirdPartOfTheSell>
            <ThirdPartHeaderTextWrapper>
              <ThirdPartHeader>Sending Account Details</ThirdPartHeader>
              <ThirdPartText>
                Kindly provide the account you would be paying with. Please note
                that the payment must be done using the account provided below
                only. Payment from another account would not be regarded as
                payment for this transaction.
              </ThirdPartText>
            </ThirdPartHeaderTextWrapper>

            <ThirdPartInputsWrapper>
              <FirstRowInputsWrapper>
                <SelectInputWrapper>
                  <Label>Select Bank</Label>
                  <StyledSelect name="Select a bank">
                    <Option value="Select a bank">Select a bank</Option>
                    <Option value="wemy">Wemy</Option>
                    <Option value="QNB">QNB</Option>
                    <Option value="Egyptian bank">Egyptian bank</Option>
                  </StyledSelect>
                </SelectInputWrapper>
                <AccountNumberInputWrapper>
                  <Label>Account Number</Label>
                  <AccountNumberInput placeholder="Enter account number"></AccountNumberInput>
                </AccountNumberInputWrapper>
              </FirstRowInputsWrapper>

              <SecondRowInputsWrapper>
                <AccountNameInputWrapper>
                  <Label>Account Name</Label>
                  <AccountNameInput placeholder="Enter full account name"></AccountNameInput>
                </AccountNameInputWrapper>
              </SecondRowInputsWrapper>
            </ThirdPartInputsWrapper>
            <ThirdPartButtonWrapper onClick={changeToProceedToBuy}>
              <ProceedPaymentButton>Proceed to Payment</ProceedPaymentButton>
            </ThirdPartButtonWrapper>
          </ThirdPartOfTheSell>
        </DesktopVersion>
      </Wrapper>
    </>
  )
}

export const SelectInputWrapper = styled.div`
  width: 30%;
  margin-right: 15px;
`

export const StyledSelect = styled.select`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  padding-left: 10px;
  border: 1px solid gray;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
`

export const Option = styled.option``

/*---> Styles <---*/
export const Wrapper = styled.div`
  overflow-y: scroll;
  width: 50%;
  height: 100%;
  border-radius: 4px;
  margin-left: auto;
  background-color: #ffffff;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const DesktopVersion = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const FirstPartOfTheSell = styled.div`
  margin-top: 40px;
`

export const SecondPartOfSell = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (max-width: 1325px) {
  }
`

export const ThirdPartOfTheSell = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

export const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CloseIcon = styled(CloseCircle)`
  width: 35px;
  height: 35px;
  opacity: 60%;
  cursor: pointer;

  @media screen and (max-width: 1325px) {
  }
`

export const WhatDoYouWant = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  padding-left: 13px;
  padding-right: 13px;
`

export const WhatDoYouWantText = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  font-size: 17px;
`

export const TabsWrapper = styled.div`
  width: 85%;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  padding-right: 60px;
`

export const SellTabWrapper = styled.div`
  border: 1px solid #000000;
  width: 221px;
  height: 80px;
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    width: 150px;
  }
`

export const BuyTabWrapper = styled.div`
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  width: 221px;
  height: 80px;
  border-radius: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    width: 150px;
  }
`

export const SellTab = styled.p`
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;
  padding-top: 10px;
`

export const BuyTab = styled.p`
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-weight: 500;
  text-transform: uppercase;
  padding-top: 10px;
`

export const HeaderWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
`

export const Header = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  font-size: 16px;
`

export const AddBankWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Graphik";
`

export const AddBank = styled.p`
  font-size: 18px;
`

export const DataWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;

  @media screen and (max-width: 1325px) {
  }
`

export const FirstInputWrapper = styled.div`
  @media screen and (max-width: 1325px) {
  }
`

export const SecondInputWrapper = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 1325px) {
  }
`

export const InputWrapper = styled.div`
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 4px;

  @media screen and (max-width: 1325px) {
  }
`

export const Label = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.25px;
  margin-bottom: 10px;
  margin-top: 5px;

  @media screen and (max-width: 1325px) {
  }
`

export const Input = styled.input`
  width: 65%;
  height: 50px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid #ffffff;
  font-size: 13px;

  :focus {
    outline: none;
  }

  @media screen and (max-width: 1325px) {
  }
`

export const SecondPartButtonsWrapper = styled.div`
  display: flex;
  width: 210px;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 1325px) {
  }
`

export const NgnButton = styled.p`
  cursor: pointer;
  color: #ffffff;
  font-weight: 400;
  width: 80px;
  height: 35px;
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  border-radius: 4px;
  text-align: center;
  padding-top: 7px;
  margin-right: 15px;
`

export const BtcButton = styled.p`
  border: 1px solid #000000;
  cursor: pointer;
  width: 80px;
  height: 35px;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  font-weight: 400;
  border-radius: 4px;
  text-align: center;
  padding-top: 6px;
`

export const Approximately = styled.p`
  font-family: "Graphik";
  font-size: 14px;
`

export const ApproSpan = styled.span`
  font-weight: 500;
`

export const PasteButton = styled.p`
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  color: #ffffff;
  font-weight: 400;
  width: 175px;
  height: 35px;
  text-align: center;
  border-radius: 4px;
  padding-top: 7px;
  cursor: pointer;
`

export const ThirdPartHeaderTextWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`

export const ThirdPartHeader = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 10px;
`

export const ThirdPartText = styled.p`
  font-family: "Graphik";
  font-weight: 400;
  font-size: 11px;
`

export const ThirdPartInputsWrapper = styled.div``

export const FirstRowInputsWrapper = styled.div`
  display: flex;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`

export const SelectBankInputWrapper = styled.div``

export const AccountNumberInputWrapper = styled.div`
  width: 70%;
`

export const AccountNumberInput = styled.input`
  width: 100%;
  height: 60px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid gray;
  font-size: 13px;
  border-radius: 4px;

  @media screen and (max-width: 1325px) {
  }
`

export const SecondRowInputsWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`

export const AccountNameInputWrapper = styled.div``

export const AccountNameInput = styled.input`
  width: 100%;
  height: 60px;
  font-size: 16px;
  background-color: white;
  color: black;
  font-family: "Graphik";
  padding-left: 10px;
  user-select: initial !important;
  border: 1px solid gray;
  font-size: 13px;
  border-radius: 4px;

  @media screen and (max-width: 1325px) {
  }
`

export const ThirdPartButtonWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 50px;
`

export const ProceedPaymentButton = styled.p`
  cursor: pointer;
  color: #ffffff;
  font-weight: 400;
  padding: 25px 25px;
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
`

export default Buy
