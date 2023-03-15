import { Outlet } from "react-router-dom";
import Navigaion from "./Navigation";

export default function Wrapper() {
  return (
    <>
      <Navigaion />
      <Outlet />
    </>
  );
}
