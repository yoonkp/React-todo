import styled from "styled-components";
import { flexCenter } from "../../styles/common";
import SignInForm from "./conponents/SignIn/Signin";
import SignUpForm from "./conponents/SignUp/Signup";

const MainPage = () => {
  let isFormLogin = true;

  const onClickFormHeader = (e) => {
    const { innerText } = e.target;
    if (innerText === "LOGIN") return (isFormLogin = true);
    isFormLogin = false;
    console.log(isFormLogin);
  };

  const handleClickFormHeader = (e) => {};

  return (
    <S.Container>
      <S.Header isFormLogin={isFormLogin}>
        <S.LoginHeader onClick={onClickFormHeader}>LOGIN</S.LoginHeader>
        <S.SignUpHeader onClick={onClickFormHeader}>SIGN</S.SignUpHeader>
      </S.Header>
      {isFormLogin ? <SignInForm /> : <SignUpForm />}
    </S.Container>
  );
};
export default MainPage;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  ${flexCenter}
  flex-direction: column;
`;

const Header = styled.div`
  width: 360px;
  height: 48px;
  display: flex;
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};

  div {
    ${flexCenter}
    width: 50%;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;

const LoginHeader = styled.div`
  background-color: ${({ theme, isFormLogin }) => (isFormLogin ? "#eee" : "#f5f5f5")};
`;
const SignUpHeader = styled.div`
  background-color: ${({ theme, isFormLogin }) => (isFormLogin ? "#f5f5f5" : "#eee")};
`;

const S = {
  Container,
  Header,
  LoginHeader,
  SignUpHeader,
};
