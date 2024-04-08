import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";
import TopNavBar from "../../components/TopNavBar";

export default function AuthPage({ user, setUser }) {
  const [isNewAccount, setIsNewAccount] = useState(false);

  return (
    <>
      <TopNavBar />
      {isNewAccount ? (
        <SignUpForm setIsNewAccount={setIsNewAccount} />
      ) : (
        <LoginForm setIsNewAccount={setIsNewAccount} setUser={setUser} />
      )}
      <div className="fixed inset-0  opacity-25 bg-[url('https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] -z-50"></div>
    </>
  );
}
