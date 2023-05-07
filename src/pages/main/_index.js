import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("todoId"));
  const navigate = useNavigate();

  const onClickNavigateTodo = () => {
    setSearchParams({
      todoId: 3,
    });
  };

  return (
    <>
      <h1>Main Page</h1>
      <div>Hello, Latte :)</div>
      <button onClick={onClickNavigateTodo}>Todo Page로 이동</button>
      <a href="/todo/3">TODOPAGE</a>
      <Link to="/todo/5">TODOPAGE</Link>
    </>
  );
};

export default MainPage;
