import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background/main-header-background";

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
              <Link href={"/meals"} className={classes.Link}>
                Browse Meals
              </Link>
            </li>
            <li>
              <Link href={"/meals/share"} className={classes.Link}>
                Shared Meals
              </Link>
            </li>
            <li>
              <Link href={"/community"} className={classes.Link}>
                Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
