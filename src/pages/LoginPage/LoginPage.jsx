import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css"

export default function LoginPage() {
  return (
    <div>
      <h2 className={css.title}><span className={css.textPart}>Log in</span> to your account</h2>
      <LoginForm />
    </div>
  );
}