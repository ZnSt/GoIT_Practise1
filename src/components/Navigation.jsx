import { useReducer } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAppState } from "../context";
import { authReducer } from "../store";
import { LOGOUT } from "../types";
import styled from "styled-components";
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export default function Navigaion() {
  const [state, dispatch] = useReducer(authReducer, useAppState());

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <>
      <div className="navigation">
        {state.authToken ? (
          <>
            <StyledLink to="/products" end className="nav__item">
              Products
            </StyledLink>
            <button className="nav__item mla action__btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <StyledLink to="/signin" className="nav__item mla">
              Login
            </StyledLink>
            <StyledLink to="/signup" className="nav__item">
              Regastration
            </StyledLink>
          </>
        )}
      </div>
      <Outlet></Outlet>
    </>
  );
}

//class button logout: nav__item mla action__btn
//class StyledLink: nav__item
//class StyledLink to signin: nav__item mla
