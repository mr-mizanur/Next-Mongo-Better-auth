import React from 'react';
import Image from 'next/image';
import Link from "next/link";
const About = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] font-sans text-zinc-200 py-20 px-6">
            
            {/* Background Glows */}
            <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]"></div>

            <main className="relative z-10 mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="mb-16 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">About Me</h2>
                    <h1 className="text-4xl font-black text-white sm:text-6xl tracking-tighter">
                        Innovating the Web <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            One Pixel at a Time.
                        </span>
                    </h1>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    {/* Left Side: Bio */}
                    <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
                        <p>
                            Hello! I am <span className="text-white font-semibold text-xl">Mizanur Rahman</span>, a passionate developer focused on building modern, high-performance web applications. My journey is driven by a deep love for clean code and futuristic UI/UX designs.
                        </p>
                        <p>
                            I specialize in <span className="text-cyan-400">React, Next.js, and Tailwind CSS</span>. I believe that a website is more than just code; it's an experience that should be seamless, fast, and visually stunning.
                        </p>
                        
                        {/* Stats/Quick Info */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <div className="p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                                <h4 className="text-2xl font-bold text-white">20+</h4>
                                <p className="text-xs uppercase tracking-wider text-zinc-500">Projects Done</p>
                            </div>
                            <div className="p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                                <h4 className="text-2xl font-bold text-white">HSC</h4>
                                <p className="text-xs uppercase tracking-wider text-zinc-500">Science Student</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Skill Cards */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-white mb-2">My Tech Stack</h3>
                        
                        {/* Skill Item 1 */}
                        <div className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-5 transition-all hover:bg-white/10">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                                </div>
                                <span className="font-semibold text-white">Frontend Development</span>
                            </div>
                            <span className="text-xs font-medium text-zinc-500 group-hover:text-cyan-400 transition-colors tracking-widest">REACT / NEXT.JS</span>
                        </div>

                        {/* Skill Item 2 */}
                        <div className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-5 transition-all hover:bg-white/10">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                                </div>
                                <span className="font-semibold text-white">Modern UI/UX Design</span>
                            </div>
                            <span className="text-xs font-medium text-zinc-500 group-hover:text-purple-400 transition-colors tracking-widest">TAILWIND / GLASS</span>
                        </div>

                        {/* Skill Item 3 */}
                        <div className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-5 transition-all hover:bg-white/10">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                </div>
                                <span className="font-semibold text-white">Backend & Security</span>
                            </div>
                            <span className="text-xs font-medium text-zinc-500 group-hover:text-pink-400 transition-colors tracking-widest">FIREBASE / AUTH</span>
                        </div>
                    </div>
                </div>

               <div className="mt-20 flex flex-col items-center gap-6 border-t border-white/5 pt-12">
    <p className="text-zinc-500 font-medium">Ready to start a project together?</p>
    
    <Link 
        href="/contact" 
        className="group relative h-14 flex items-center justify-center overflow-hidden rounded-full bg-white px-12 font-bold text-black transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
    >
        <span className="relative z-10">Get In Touch</span>
        
        {/* Subtle hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
    </Link>
</div>
            </main>

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        </div>
    );
};

export default About;