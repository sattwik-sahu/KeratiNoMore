import { NavLink } from "react-router-dom";

type NavbarLink = {
  route: string;
  text: string;
};

const links: NavbarLink[] = [
  { route: "/", text: "Home" },
  { route: "/attributions", text: "Attributions" },
  { route: "/contribution", text: "Contribution" },
  { route: "/description", text: "Description" },
  { route: "/engineering", text: "Engineering" },
  { route: "/human-practices", text: "HP" },
];

const Header = () => {
  return (
    <header className="Header">
      <nav>
        {links.map((link) => (
          <NavLink to={link.route} key={link.route}>
            {link.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
