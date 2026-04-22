'use client'
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const { data, isPending } = useSession();
    const router = useRouter();
    
   
    if (isPending) {
        return (
            <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/70 backdrop-blur-xl">
                <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <div className="text-zinc-500 text-sm animate-pulse">Loading...</div>
                </header>
            </nav>
        );
    }

    const user = data?.user;

    const handleSignOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/auth/signin"); // সাইন আউট হলে সাইন-ইন পেজে পাঠাবে
                },
            },
        });
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/70 backdrop-blur-xl">
            <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-110">
                        <span className="text-white font-black text-xs">M</span>
                    </div>
                    <p className="text-lg font-black tracking-tighter text-white uppercase">Mizanur</p>
                </Link>

                {/* Center Links */}
                <ul className="hidden md:flex items-center gap-8">
                    <li>
                        <Link href="/" className="text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-400">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-sm font-medium text-zinc-400 transition-colors hover:text-purple-400">About Me</Link>
                    </li>
                </ul>

                {/* Right Section: User & Auth */}
                <div className="flex items-center gap-6 text-sm">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <p className="hidden sm:block font-medium text-zinc-300">
                                Hi, <span className="text-white">{user.name?.split(' ')[0]}</span>
                            </p>
                            <button 
                                onClick={handleSignOut}
                                className="rounded-full border border-white/10 bg-white/5 px-5 py-1.5 font-semibold text-zinc-300 transition-all hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20"
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link 
                                href="/auth/signin" 
                                className="font-semibold text-zinc-400 transition-colors hover:text-white"
                            >
                                Sign In
                            </Link>
                            <Link 
                                href="/auth/signup"
                                className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2 font-bold text-white shadow-lg shadow-cyan-500/10 transition-all hover:opacity-90 active:scale-95"
                            >
                                Get Started
                            </Link>
                        </div>
                    )}
                </div>

            </header>
        </nav>
    );
};

export default Navbar;