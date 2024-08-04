import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import clsx from "clsx";

const SingInAuthInit: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignIn = () => {
    if (email && password) {
      // Llama a tu función de signIn aquí
    } else {
      console.error("Please provide both email and password");
    }
  };

  return (
    <div className="w-full max-w-md px-4 bg-gray-900 rounded-lg shadow-md mt-10">
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <p className="text-sm text-white/50">Use your email to sign in.</p>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={clsx(
            "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm text-white",
            "focus:outline-none focus:ring-2 focus:ring-white/25"
          )}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-white"
        >
          Password
        </label>
        <p className="text-sm text-white/50">Enter your password.</p>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={clsx(
            "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm text-white",
            "focus:outline-none focus:ring-2 focus:ring-white/25"
          )}
        />
      </div>
      <Button onClick={handleSignIn} className="w-full">
        Sign In
      </Button>
    </div>
  );
};

export default SingInAuthInit;
