import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/tasks">Tasks List</Link>
        </li>
        <li className="submenuContainer">
          <Link href="#">Onboarding Docs</Link>
          <ul className="submenu">
            <li>
              <Link href="/developer">Developer</Link>
            </li>
            <li>
              <Link href="/productowner">Product Owner</Link>
            </li>
            <li>
              <Link href="qa">Quality Assurance</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
