import { useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

const navItems = [
  { name: "Home", path: "/",otherPaths:["/upload-resume"] },
  { name: "AI Interview", path: "/ai-interview",otherPaths:[] },
  { name: "Jobs", path: "/jobs",otherPaths:[] },
  { name: "Courses", path: "/courses",otherPaths:[] },
];

const NavbarItems = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-8">
        {navItems.map((item) => {
          const isActive = currentPath === item.path||item.otherPaths.includes(currentPath);
          return (
            <NavigationMenuItem key={item.path}>
              <NavigationMenuLink
                href={item.path}
                className={`inline-flex items-center justify-start gap-2 px-3 py-2 rounded-lg ${
                  isActive ? " bg-btnGrayBackground" : ""
                } hover:bg-btnGrayBackground transition-colors duration-200 ease-in-out `}
              >
                <img
                  src={`${
                    isActive
                      ? `/images/navbar/focus ${item.name}.svg`
                      : `/images/navbar/${item.name}.svg`
                  }`}
                  alt={`${item.name} icon`}
                  className="w-7 h-7"
                />
                <span
                  className={`${
                    isActive
                      ? `text-navyBlue font-medium text-sm leading-[1.4] font-tiktok`
                      : `text-neutral-700 font-medium text-sm`
                  } leading-[1.4] font-tiktok`}
                >
                  {item.name}
                </span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarItems;
