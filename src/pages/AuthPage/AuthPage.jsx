import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";

export default function AuthPage(setUser) {
  const [isNewAccount, setIsNewAccount] = useState(false);

  return (
    <>
      {isNewAccount ? (
        <SignUpForm />
      ) : (
        <LoginForm setIsNewAccount={setIsNewAccount} />
      )}
    </>
  );
}
