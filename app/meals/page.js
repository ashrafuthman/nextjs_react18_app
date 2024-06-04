import Link from "next/link";
import classes from "./page.module.css";

export default function MealsPage() {
  return (
    <header className={classes.header}>
      <h1>
        Delicious meals, created{' '}
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>
        Choose your favorite recipe and cook it yourself. it is easy and fun!
      </p>
      <p className={classes.cta}>
        <Link href="/meals/share">
         Share Your Favorite Recipe 
        </Link>
      </p>
      <main className={classes.main}>

      </main>
    </header>
  );
}