import { selector } from "recoil";
import { loginState } from "../atoms/loginState";

export const loginSortState = selector({
  key: "loginSortState",
  get: ({ get }) => !!get(loginState)
})