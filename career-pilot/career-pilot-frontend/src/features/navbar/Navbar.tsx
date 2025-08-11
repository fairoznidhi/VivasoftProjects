import NavbarItems from "./NavbarItems";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between w-full bg-navbarWhiteBackground mt-10 mb-24 px-6 rounded-xl shadow-nav z-[1]">
      <img src="images/careeramaLogo.svg" />
      <NavbarItems />
      <Profile />
    </nav>
  );
};

export default Navbar;
