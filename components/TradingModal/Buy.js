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
                Kindly provide the account you'd be paying with. Please note
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

        {/* ******************************* Mobile Version ************************************ */}

        <MobileVersion>
          <MobileWrapperBuyPage>
            <MobileFirstPartOfTheSell>
              <MobileWhatDoYouWant>
                <MobileWhatDoYouWantText>
                  What do you want to do?
                </MobileWhatDoYouWantText>

                <CloseIconWrapper>
                  <CloseIcon onClick={handleCloseTrading} />
                </CloseIconWrapper>
              </MobileWhatDoYouWant>
              <MobileTimerWrapper onClick={changeToSell}>
                <MobilePaymentTimer>Sell</MobilePaymentTimer>
                <MobileArrowToUp />
              </MobileTimerWrapper>
            </MobileFirstPartOfTheSell>

            <MobileSecondPartOfSell>
              <MobileDataWrapper>
                <MobileFirstInputWrapper>
                  <MobileLabel>How much do you want to buy?</MobileLabel>
                  <MobileInputWrapper>
                    <MobileInput placeholder="Enter amount"></MobileInput>
                    <MobileSecondPartButtonsWrapper>
                      <MobileNgnButton>NGN</MobileNgnButton>
                      <MobileBtcButton>BTC</MobileBtcButton>
                    </MobileSecondPartButtonsWrapper>
                  </MobileInputWrapper>
                  <MobileApproximately>
                    Approximately{" "}
                    <MobileApproSpan>0.009938 BTC</MobileApproSpan>
                  </MobileApproximately>
                </MobileFirstInputWrapper>

                <MobileSecondInputWrapper>
                  <MobileLabel>Receiving Address</MobileLabel>
                  <MobileInputWrapper>
                    <MobileInput placeholder="Enter receiving address"></MobileInput>
                    <MobilePasteButtonWrapper>
                      <MobilePasteButton>Paste</MobilePasteButton>
                    </MobilePasteButtonWrapper>
                  </MobileInputWrapper>
                </MobileSecondInputWrapper>
              </MobileDataWrapper>
            </MobileSecondPartOfSell>

            <MobileThirdPartOfTheSell>
              <MobileThirdPartHeaderTextWrapper>
                <MobileThirdPartHeader>
                  Sending Account Details
                </MobileThirdPartHeader>
                <MobileThirdPartText>
                  Kindly provide the account you'd be paying with. Please note
                  that the payment must be done using the account provided below
                  only. Payment from another account would not be regarded as
                  payment for this transaction.
                </MobileThirdPartText>
              </MobileThirdPartHeaderTextWrapper>

              <MobileThirdPartInputsWrapper>
                <MobileFirstRowInputsWrapper>
                  <MobileSelectInputWrapper>
                    <MobileLabel>Select Bank</MobileLabel>
                    <MobileStyledSelect name="Select a bank">
                      <MobileOption value="Select a bank">
                        Select a bank
                      </MobileOption>
                      <MobileOption value="wemy">Wemy</MobileOption>
                      <MobileOption value="QNB">QNB</MobileOption>
                      <MobileOption value="Egyptian bank">
                        Egyptian bank
                      </MobileOption>
                    </MobileStyledSelect>
                  </MobileSelectInputWrapper>
                  <MobileAccountNumberInputWrapper>
                    <MobileLabel>Account Number</MobileLabel>
                    <MobileAccountNumberInput placeholder="Enter account number"></MobileAccountNumberInput>
                  </MobileAccountNumberInputWrapper>
                  <MobileAccountNameInputWrapper>
                    <MobileLabel>Account Name</MobileLabel>
                    <MobileAccountNameInput placeholder="Enter full account name"></MobileAccountNameInput>
                  </MobileAccountNameInputWrapper>
                </MobileFirstRowInputsWrapper>
              </MobileThirdPartInputsWrapper>
              <MobileThirdPartButtonWrapper onClick={changeToProceedToBuy}>
                <MobileProceedPaymentButton>
                  Proceed to Payment
                </MobileProceedPaymentButton>
              </MobileThirdPartButtonWrapper>
            </MobileThirdPartOfTheSell>
          </MobileWrapperBuyPage>
        </MobileVersion>
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

///////////////////////////////////////////// Sell&Buy Page /////////////////////////////////////////

export const MobileVersion = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
  }
`

export const MobilePageWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding-top: 50px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileWrapper = styled.div`
  width: 400px;
  min-height: 100vh;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  padding-bottom: 30px;
  padding-top: 30px;
  background-color: #ffffff;

  @media screen and (max-width: 768px) {
    width: 95%;
    padding-top: 0px;
  }
`

export const MobileIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const MobileCloseIcon = styled(CloseOutline)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  -webkit-box-shadow: 0 8px 6px -6px #d9d9d9;
  -moz-box-shadow: 0 8px 6px -6px #d9d9d9;
  box-shadow: 0 8px 6px -6px #d9d9d9;
  border-radius: 50%;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 50px;
`

export const MobileImage = styled.img`
  width: 300px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
`

export const MobileButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  padding-right: 15px;
  border-radius: 4px;
`

export const MobileSendButton = styled(Button)`
  color: #ffffff !important;
  font-weight: 400 !important;
  text-transform: capitalize !important;
`

export const MobileArrowToDown = styled(ArrowDropDown)`
  width: 30px;
  height: 30px;
  color: #ffffff;
  cursor: pointer;

  @media screen and (max-width: 1325px) {
  }
`

///////////////////////////////////////////// Buy Page /////////////////////////////////////////

export const MobileWrapperBuyPage = styled.div`
  overflow-y: scroll;
  border-radius: 4px;
  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const MobileFirstPartOfTheSell = styled.div`
  margin-top: 40px;
`

export const MobileSecondPartOfSell = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileThirdPartOfTheSell = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`

export const MobileWhatDoYouWant = styled.div`
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

export const MobileWhatDoYouWantText = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  font-size: 17px;
`

export const MobileTimerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  width: 85%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
  border-radius: 4px;
`

export const MobilePaymentTimer = styled.div`
  color: #ffffff;
  font-weight: 400;
`

export const MobileArrowToUp = styled(ArrowDropUp)`
  width: 30px;
  height: 30px;
  color: #ffffff;
  cursor: pointer;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileHeaderWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
`

export const MobileHeader = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  font-size: 16px;
`

export const MobileAddBankWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Graphik";
`

export const MobileAddBank = styled.p`
  font-size: 18px;
`

export const MobileDataWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileFirstInputWrapper = styled.div`
  @media screen and (max-width: 1325px) {
  }
`

export const MobileSecondInputWrapper = styled.div`
  margin-top: 50px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileInputWrapper = styled.div`
  border: 1px solid gray;
  padding: 6px 0px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 4px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileLabel = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.25px;
  margin-bottom: 10px;
  margin-top: 5px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileInput = styled.input`
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
  font-size: 100%;
  -webkit-appearance: none;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileSecondPartButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileNgnButton = styled.p`
  cursor: pointer;
  color: #ffffff;
  font-weight: 400;
  width: 80px;
  height: 35px;
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  border-radius: 4px;
  text-align: center;
  padding-top: 9px;
  margin-right: 10px;
`

export const MobileBtcButton = styled.p`
  border: 1px solid #000000;
  cursor: pointer;
  width: 80px;
  height: 35px;
  color: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  font-weight: 400;
  border-radius: 4px;
  text-align: center;
  padding-top: 9px;
`

export const MobileApproximately = styled.p`
  font-family: "Graphik";
  font-size: 14px;
`

export const MobileApproSpan = styled.span`
  font-weight: 500;
`

export const MobilePasteButtonWrapper = styled.div`
  padding-right: 10px;
  margin-top: 7px;

  @media screen and (max-width: 1325px) {
  }
`

export const MobilePasteButton = styled.p`
  background-image: linear-gradient(to bottom, #18283b, #1a1f24 100%);
  color: #ffffff;
  font-weight: 400;
  width: 80px;
  height: 35px;
  text-align: center;
  border-radius: 4px;
  padding-top: 9px;
  cursor: pointer;
`

export const MobileThirdPartHeaderTextWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`

export const MobileThirdPartHeader = styled.p`
  font-family: "Graphik";
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 10px;
`

export const MobileThirdPartText = styled.p`
  font-family: "Graphik";
  font-weight: 400;
  font-size: 11px;
`

export const MobileThirdPartInputsWrapper = styled.div``

export const MobileFirstRowInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
`

export const MobileSelectInputWrapper = styled.div``

export const MobileStyledSelect = styled.select`
  width: 100%;
  height: 60px;
  border-radius: 4px;
  padding-left: 10px;
  margin-bottom: 30px;
  border: 1px solid gray;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  font-size: 100%;
`

export const MobileOption = styled.option``

export const MobileAccountNumberInputWrapper = styled.div``

export const MobileAccountNumberInput = styled.input`
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
  margin-bottom: 30px;
  font-size: 100%;
  -webkit-appearance: none;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileAccountNameInputWrapper = styled.div``

export const MobileAccountNameInput = styled.input`
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
  font-size: 100%;
  -webkit-appearance: none;

  @media screen and (max-width: 1325px) {
  }
`

export const MobileThirdPartButtonWrapper = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 50px;
`

export const MobileProceedPaymentButton = styled.p`
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
