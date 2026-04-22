"use client";
import { authClient, signUp } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";


const page = () => {
    const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData= Object.fromEntries(formData.entries())
    console.log('from data', userData)


    const {data, error} = await authClient.signUp.email({
        name : userData.name,
        email: userData.email,
        password: userData.password,
        callbackURL: '/'

    })
    console.log("signup responns", {data, error})

    if(error){
        alert('error ' + error.message)
    }
   
   
  
  };
    return (
     <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] font-sans">
  <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
    <div className="space-y-1">
      <h1 className="text-2xl font-bold text-center text-white tracking-tight">Create Account</h1>
      <p className="text-xs text-zinc-500 text-center uppercase tracking-widest">Join our community</p>
    </div>

    {/* Name Field */}
    <TextField isRequired name="name" className="flex flex-col gap-2">
      <Label className="text-sm font-medium text-zinc-400 ml-1">Name</Label>
      <Input name="name" placeholder="John Doe" className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none transition-all focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 placeholder:text-zinc-600" />
      <FieldError className="text-xs text-red-400 ml-1" />
    </TextField>

    {/* Email Field */}
    <TextField isRequired name="email" type="email" className="flex flex-col gap-2">
      <Label className="text-sm font-medium text-zinc-400 ml-1">Email</Label>
      <Input name="email" placeholder="john@example.com" className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none transition-all focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 placeholder:text-zinc-600" />
      <FieldError className="text-xs text-red-400 ml-1" />
    </TextField>

    {/* Password Field */}
    <TextField isRequired minLength={8} name="password" type="password" className="flex flex-col gap-2">
      <Label className="text-sm font-medium text-zinc-400 ml-1">Password</Label>
      <Input name="password" placeholder="Enter your password" className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white outline-none transition-all focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 placeholder:text-zinc-600" />
      <Description className="text-[10px] text-zinc-500 ml-1">Must be 8+ chars, 1 uppercase, 1 number</Description>
      <FieldError className="text-xs text-red-400 ml-1" />
    </TextField>

    {/* Buttons */}
    <div className="flex flex-col gap-3 mt-2">
      <Button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-white transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-cyan-500/20">
        <Check size={18} />
        Submit
      </Button>
      <Button type="reset" variant="secondary" className="h-12 w-full rounded-xl border border-white/5 bg-white/5 text-sm font-medium text-zinc-400 transition-all hover:bg-white/10 hover:text-white">
        Reset
      </Button>
    </div>
  </Form>
</div>
    );
};

export default page;