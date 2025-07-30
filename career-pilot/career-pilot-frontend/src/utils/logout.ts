import { logout } from "../redux/features/auth/authSlice";
import { store } from "../redux/store";

export function logoutUser() {
  store.dispatch(logout());
  window.location.href = "/login";
}
