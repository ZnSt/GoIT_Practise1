import { NavLink } from "react-router-dom";

import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export default function Navigaion() {
  const logout = () => {};

  return (
    <>
      <div className="navigation">
        <StyledLink className="nav__item" to="/products">
          Products
        </StyledLink>
        <StyledLink className="nav__item mla" to="/login">
          Login
        </StyledLink>
        <StyledLink className="nav__item" to="/registration">
          Registration
        </StyledLink>
      </div>
    </>
  );
}

//class button logout: nav__item mla action__btn
//class StyledLink: nav__item
//class StyledLink to signin: nav__item mla
