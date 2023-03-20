import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { useAppState, AppState } from "../context";
// import { authReducer } from "../store";
import { LOGOUT } from "../types";
import { useSelector } from "react-redux";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export default function Navigaion() {
  // const state = useAppState(); // працює один раз, при моунті компоненти.
  const authToken = useSelector((state) => state.authToken);
  const logout = () => {
    // console.log("STATE: ", state);
    // state.setContextState({ ...state, authToken: null });
  };

  return (
    <>
      <div className="navigation">
        {authToken ? (
          <>
            <StyledLink className="nav__item" to="/products">
              Products
            </StyledLink>{" "}
            <button className="nav__item mla action__btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <StyledLink className="nav__item mla" to="/login">
              Login
            </StyledLink>
            <StyledLink className="nav__item" to="/registration">
              Registration
            </StyledLink>
          </>
        )}
      </div>
    </>
  );
}

//class button logout: nav__item mla action__btn
//class StyledLink: nav__item
//class StyledLink to signin: nav__item mla
