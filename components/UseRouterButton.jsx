"use client";

import { useRouter } from "next/navigation";

export const UseRouterButton = () => {
  const router = useRouter();

  const redirect = () => {
    router.push("/");
  };
  return <button onClick={redirect}>UseRouterButton</button>;
};
