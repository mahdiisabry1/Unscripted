import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <>
      <div className="h-[calc(100vh-80px)] w-full flex justify-center items-center">
        <SignIn signUpUrl="/register"/>
      </div>
    </>
  );
};

export default LoginPage;
