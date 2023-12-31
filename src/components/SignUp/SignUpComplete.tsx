import { Button } from "../../elements/Button";
import * as S from "./style/SignUpComplete.style";
import complete from "../../assets/images/svg/complete.svg";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "../../api/axios";
import { useUserInfoDispatch } from "../../hooks/useUserInfo";

const SignUpComplete = () => {
  const dispatch = useUserInfoDispatch();
  const navigation = useNavigate();
  const { email, password } = useOutletContext<{
    email: string;
    password: string;
  }>();

  return (
    <S.ContainerWrapper>
      <S.Container>
        <S.Icon src={complete} />
        <S.CompletionMessage>회원가입 완료되었습니다.</S.CompletionMessage>
      </S.Container>
      <Button
        background="#6138F8"
        border="none"
        color="#fff"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();

          axios
            .post("/auth/sign-in", {
              email,
              password,
            })
            .then((response) => {
              if (response.status === 204) {
                navigation("/initInfo");
              }
              if (response.status === 201) {
                dispatch({
                  type: "AUTH",
                  accessToken: response.headers.authorization,
                });
                navigation("/home");
              }
            })
            .catch((error) => {
              navigation("/login");
            });
        }}
      >
        로그인 하러가기
      </Button>
    </S.ContainerWrapper>
  );
};

export default SignUpComplete;
