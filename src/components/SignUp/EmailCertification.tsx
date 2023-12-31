import React, { useCallback, useState } from "react";
import axios from "../../api/axios";
import * as S from "./style/EmailCertification.style";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "../../elements/Button";
import ThrottlingButton from "../common/ThrottlingButton/ThrottlingButton";
import SignUpHeader2 from "./SignUpHeader2";
import { Timer } from "../common/Timer";

const EmailCertification = () => {
  const [authValid, setAuthValid] = useState<string>("");
  const [emailValid, setEmailValid] = useState<boolean>(true);
  const [isAuthValid, setIsAuthValid] = useState<boolean>(false);
  const [sendCode, setSendCode] = useState<boolean>(false);
  const navigation = useNavigate();
  const { email, setEmail, setEmailCode } = useOutletContext<{
    email: string;
    setEmailCode: (value: string) => void;
    setEmail: (value: string) => void;
  }>();

  console.log(email, "email");

  const handleEmailAuthClick = useCallback(async () => {
    console.log("handleEmailAuthClick", email);
    if (
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/.test(
        email
      ) === false
    ) {
      return setEmailValid(false);
    }
    setEmailValid(true);
    setSendCode(() => false);
    try {
      const reponse = await axios.get(`/auth/verification-code?email=${email}`);
      setSendCode(() => true);
      console.log(reponse);
    } catch (err) {
      console.error(err);
    }
    console.log("handleEmailAuthClick", email);
  }, [email]);

  const handleEmailAuthVaildClick = useCallback(async () => {
    console.log("authValid", authValid);
    //얘도 안됨

    try {
      const res = await axios.post(`auth/verification-code`, {
        email: email,
        code: authValid,
      });
      setEmailCode(authValid);
      setIsAuthValid(true);
    } catch (err) {}
  }, [authValid]);

  return (
    <S.ContainerWrapper>
      <S.Container>
        <SignUpHeader2 />
        <S.Agreement>본인인증하기</S.Agreement>
        <S.SubAgreement>
          당장 손민수 이용을 위해
          <br /> 이메일 인증을 해주세요
        </S.SubAgreement>
        <S.Form>
          <S.EmailContainer>
            <S.InputEmail
              type="email"
              id="email"
              placeholder="이메일을 입력해 주세요."
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
            <ThrottlingButton
              background="#208df1"
              content="인증번호 발송"
              width="fit-content"
              height="50px"
              border="none"
              padding="0 16px"
              whitespace="nowrap"
              boxsizing="border-box"
              color="#fff"
              onClick={handleEmailAuthClick}
            />
          </S.EmailContainer>
          {!emailValid && (
            <S.EmailVaildation>이메일 형식에 맞지 않습니다.</S.EmailVaildation>
          )}
          <S.EmailContainer>
            <S.TimerContainer>
              <S.InputEmail
                type="text"
                id="emailCertificaton"
                placeholder="인증 코드를 입력해 주세요"
                value={authValid}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAuthValid(e.target.value)
                }
              />
              {sendCode && <Timer setSendCode={setSendCode} />}
            </S.TimerContainer>
            <ThrottlingButton
              background="#208df1"
              content="인증 하기"
              width="fit-content"
              height="50px"
              border="none"
              padding="0 16px"
              whitespace="nowrap"
              boxsizing="border-box"
              color="#fff"
              onClick={handleEmailAuthVaildClick}
            />
          </S.EmailContainer>
          <S.TextWithLink>
            이메일 인증번호가 발송되지 않았나요?
            <S.ReSend onClick={handleEmailAuthClick}>재발송하기</S.ReSend>
          </S.TextWithLink>
        </S.Form>
      </S.Container>
      {isAuthValid ? (
        <Button
          background="#6138F8"
          border="none"
          color="#fff"
          onClick={() => {
            navigation("/signup/enterMembersInfo");
          }}
        >
          다음
        </Button>
      ) : (
        <Button
          background="#EBEEF2"
          border="none"
          color="#6A6774"
          onClick={() => {}}
        >
          다음
        </Button>
      )}
    </S.ContainerWrapper>
  );
};
export default EmailCertification;
