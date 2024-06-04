import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background/main-header-background";
import NavLink from "./nav-link/nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={LogoImg} alt="Foodie Logo" priority className={classes.Image}/>
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">
                Browse Meals
              </NavLink>
            </li>
            <li>
              <NavLink href="/community">
                Community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
