"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Main from "../_components/Main";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/i/flow/login');
  }, []);

  return <Main />;
}

export default Login;
