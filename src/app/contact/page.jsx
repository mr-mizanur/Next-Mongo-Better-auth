import React from 'react';

const ContactPage = () => {
    return (
        <div className="relative min-h-screen w-full bg-[#0a0a0a] font-sans text-zinc-200 py-20 px-6">
            
            
            <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px]"></div>

            <main className="relative z-10 mx-auto max-w-4xl">
              
                <div className="mb-20 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.5em] text-purple-500 mb-4">Contact</p>
                    <h1 className="text-5xl font-black text-white sm:text-7xl tracking-tighter">
                        Let's Talk.
                    </h1>
                </div>

                <div className="grid gap-16 md:grid-cols-2">
                    
                   
                    <div className="space-y-12">
                        <div className="group">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Email Address</p>
                            <p className="text-xl font-medium text-white transition-colors group-hover:text-purple-400">
                                mizanur.codes@gmail.com
                            </p>
                        </div>

                        <div className="group">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2">Current Location</p>
                            <p className="text-xl font-medium text-white transition-colors group-hover:text-cyan-400">
                                Dhaka, Bangladesh
                            </p>
                        </div>

                        <div className="pt-4">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">Social Presence</p>
                            <div className="flex flex-wrap gap-6">
                                <a href="https://github.com/mr-mizanur" target="_blank" className="text-sm font-bold border-b border-white/10 pb-1 hover:border-purple-500 transition-all">GITHUB</a>
                                <a href="https://www.linkedin.com/in/mizdev/" className="text-sm font-bold border-b border-white/10 pb-1 hover:border-cyan-500 transition-all">LINKEDIN</a>
                                <a href="https://www.facebook.com/mizanurcodes" className="text-sm font-bold border-b border-white/10 pb-1 hover:border-pink-500 transition-all">FACEBOOK</a>
                            </div>
                        </div>
                    </div>

                   
                    <form className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-700" 
                            />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-700" 
                            />
                        </div>
                        <textarea 
                            rows="4" 
                            placeholder="Your Message" 
                            className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-700 resize-none"
                        ></textarea>
                        
                        <button className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-white bg-white/5 px-10 py-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                            Send Inquiry
                        </button>
                    </form>

                </div>
            </main>
        </div>
    );
};

export default ContactPage;