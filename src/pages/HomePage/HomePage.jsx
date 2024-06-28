import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>   
      <h2 className={css.text}>Welcome to Home Page! {"\u{1F970}"}</h2>
      <p>On this website you can save and manage your contacts. To do this, log into your account or register if you don't have an account yet. Enjoy using it!</p>
    </div>
  );
}