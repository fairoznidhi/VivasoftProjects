import NavbarItems from "./NavbarItems";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full bg-navbarWhiteBackground mt-10 px-6 rounded-xl shadow-nav">
      <img src="images/careeramaLogo.svg" />
      <NavbarItems />
      <Profile />
    </nav>
  );
};

export default Navbar;
