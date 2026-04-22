"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
//change
const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    console.log("form data:", userData);

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log("signin res:", { data, error });

    if (error) {
      alert(error.message || "Sign in failed");
      return;
    }

    if (data) {
      window.location.href = "/";
    }
  };

  return (
  <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] font-sans">
  <form onSubmit={onSubmit} className="flex w-96 flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
    <div className="space-y-1">
      <h2 className="text-2xl font-bold text-center text-white tracking-tight">Please Sign In</h2>
      <p className="text-xs text-zinc-500 text-center uppercase tracking-widest">Access your dashboard</p>
    </div>

   
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-zinc-400 ml-1">Email</label>
      <input
        required
        name="email"
        type="email"
        placeholder="john@example.com"
        className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none transition-all focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 placeholder:text-zinc-600"
      />
    </div>

    {/* Password Field */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-zinc-400 ml-1">Password</label>
      <input
        required
        name="password"
        type="password"
        placeholder="Enter your password"
        className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none transition-all focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 placeholder:text-zinc-600"
      />
      <p className="text-[10px] text-zinc-500 ml-1">Minimum 6 characters required</p>
    </div>

    {/* Buttons */}
    <div className="flex flex-col gap-3 mt-2">
      <button 
        type="submit" 
        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-white transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-cyan-500/20"
      >
        <Check size={18} />
        Submit
      </button>

      <button 
        type="reset" 
        className="h-12 w-full rounded-xl border border-white/5 bg-white/5 text-sm font-medium text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
      >
        Reset
      </button>
    </div>
  </form>
</div>
  );
};

export default SignInPage;