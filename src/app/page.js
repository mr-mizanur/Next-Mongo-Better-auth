import Image from "next/image";
import About from "./about/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
   <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0a0a0a] font-sans text-zinc-200">
  

  <div className="fixed inset-0 z-0">
    <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
  </div>

  <main className="relative z-10 flex flex-col items-center">
    
    
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
      <div className="mb-12 flex flex-col items-center space-y-4">
        <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[2px]">
          <div className="rounded-2xl bg-[#0a0a0a] px-6 py-2 backdrop-blur-xl">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-sm font-bold tracking-widest text-transparent uppercase">
              Welcome to Mr.Mizanur
            </span>
          </div>
        </div>
        
        <h1 className="text-center text-5xl font-black tracking-tighter text-white sm:text-7xl">
          Design. Code. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Transform.
          </span>
        </h1>
      </div>

      <div className="grid w-full max-w-5xl gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="group relative rounded-3xl border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <div className="mb-4 text-cyan-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Development</h3>
          <p className="text-sm text-zinc-400">Clean code using Next.js and Tailwind CSS for high performance.</p>
        </div>

        {/* Card 2 */}
        <div className="group relative rounded-3xl border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
          <div className="mb-4 text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 1 0 10 10"/><path d="M12 22a7 7 0 1 0-10-10"/></svg>
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Modern UI/UX</h3>
          <p className="text-sm text-zinc-400">Futuristic glassmorphism effects and smooth user experiences.</p>
        </div>

       
        <div className="group relative rounded-3xl border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/10 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]">
          <div className="mb-4 text-pink-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Deployment</h3>
          <p className="text-sm text-zinc-400">Scalable cloud hosting with Firebase and Vercel integration.</p>
        </div>
      </div>
    </section>

  
    <section className="w-full">
      <About />
      <ContactPage />
    </section>
  </main>

  <footer className="w-full py-12 flex justify-center border-t border-white/5 bg-[#0a0a0a]">
    <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase">
      Built by MizDev &copy; 2026
    </p>
  </footer>

</div>
  );
}