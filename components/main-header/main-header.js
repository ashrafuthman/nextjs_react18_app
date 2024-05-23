import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import Image from "next/image";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href={"/"} className={classes.logo}>
        <Image src={LogoImg} alt="Foodie Logo" priority className={classes.Image}/>
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href={"/meals"} className={classes.Link}>
              Meals
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
  );
}
