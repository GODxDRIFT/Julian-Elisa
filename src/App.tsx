/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Phone, 
  Mail, 
  Star, 
  Globe,
  Menu as MenuIcon,
  X,
  ArrowRight,
  Wind,
  Sparkles,
  CloudSun,
  UtensilsCrossed,
  MessageSquare
} from 'lucide-react';
import { MENU_DATA, TRANSLATIONS, GALLERY_IMAGES } from './constants';
import { Language } from './types';
import { getRecommendation } from './services/geminiService';

export default function App() {
  const [lang, setLang] = useState<Language>('de');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('pizza');
  const [isScrolled, setIsScrolled] = useState(false);
  const [aiMood, setAiMood] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'de' ? 'en' : 'de');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleAiRecommendation = async (mood: string) => {
    setAiMood(mood);
    setIsAiLoading(true);
    const recommendation = await getRecommendation(mood);
    setAiResponse(recommendation);
    setIsAiLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-red-100 selection:text-red-900 font-sans">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <span className="font-serif text-2xl font-bold tracking-tight">Julian & Elisa</span>
            <div className="h-4 w-[1px] bg-slate-300 mx-2 hidden sm:block" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hidden sm:block">Berlin Mitte</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {['story', 'menu', 'gallery', 'sustainability', 'reviews', 'contact'].map((key) => (
              <button 
                key={key}
                onClick={() => scrollTo(key === 'story' ? 'about' : key)} 
                className="nav-link"
              >
                {t.nav[key as keyof typeof t.nav]}
              </button>
            ))}
            
            <button 
              onClick={toggleLang} 
              className="flex items-center gap-2 px-3 py-1 rounded border border-slate-200 hover:bg-slate-50 transition-all"
            >
              <Globe size={14} className="text-slate-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{lang}</span>
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 border border-slate-100 rounded-lg">
              {isMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 z-[60] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {Object.keys(t.nav).map((key) => (
              <button 
                key={key}
                onClick={() => scrollTo(key === 'story' ? 'about' : key)} 
                className="text-2xl font-serif font-bold hover:text-red-500 transition-colors"
              >
                {t.nav[key as keyof typeof t.nav]}
              </button>
            ))}
            <button onClick={toggleLang} className="mt-4 px-6 py-2 rounded-full bg-slate-50 text-xs font-bold uppercase tracking-widest">
               {lang === 'de' ? 'Switch to English' : 'Auf Deutsch wechseln'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header id="hero" className="relative h-[90vh] flex items-center bg-white overflow-hidden pt-20">
        {/* Mobile App Image Overlay */}
        <div className="absolute inset-0 lg:hidden opacity-[0.1] pointer-events-none">
           <img 
            src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Premium Artisanal Gelato"
          />
        </div>
        
        <div className="absolute right-6 top-6 bottom-6 left-[60%] hidden lg:block rounded-3xl overflow-hidden shadow-2xl">
           <img 
            src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Premium Artisanal Gelato"
          />
        </div>
        
        <div className="section-container relative z-20 w-full lg:pr-[45%]">
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          >
            {/* Weather Tip */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full mb-10">
               <CloudSun size={16} className="text-orange-400" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Perfect for 24°C Berlin: <span className="text-red-500">Mango Sorbet</span></span>
            </div>

            <h1 className="text-6xl lg:text-8xl mb-8 leading-[0.9] tracking-tight">
              {t.hero.title}<span className="text-red-500">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light mb-12 max-w-xl leading-relaxed">
               {t.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('menu')} className="px-10 py-5 bg-slate-900 text-white font-bold text-[11px] uppercase tracking-[0.2em] rounded-xl hover:bg-red-500 transition-all flex items-center gap-4 group">
                {t.hero.cta_menu} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo('contact')} className="px-10 py-5 border border-slate-200 text-slate-900 font-bold text-[11px] uppercase tracking-[0.2em] rounded-xl hover:bg-slate-50 transition-all">
                {t.hero.cta_find}
              </button>
            </div>

            {/* Google Rating */}
            <div className="mt-16 flex items-center gap-4">
               <div className="flex gap-1 text-orange-400">
                 {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
               </div>
               <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">4.4 Stars on Google (714 Reviews)</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Bento About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 mb-2 block">Foundations</span>
               <h2 className="text-4xl md:text-5xl leading-tight">Artisan Heritage. <br/>Berlin Heart.</h2>
            </div>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed">Beyond a cafe, we are a family tradition born from 19th-century recipes and modern sustainability.</p>
          </div>

          <div className="bento-grid">
            <div className="bento-item col-span-2 row-span-2 group relative !p-0">
               <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" alt="Gelato Craft" />
               <div className="absolute inset-x-8 bottom-8 p-8 bg-white/90 backdrop-blur rounded-2xl">
                  <h3 className="font-serif text-2xl mb-2">Handcrafted Daily</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">100% Regional Milk • 0% Artificial Colors</p>
               </div>
            </div>
            
            <div className="bento-item !bg-red-500 text-white border-none">
               <UtensilsCrossed size={32} />
               <div>
                  <h3 className="text-lg font-bold mb-1">Authentic Pizza</h3>
                  <p className="text-xs opacity-70">Stone-oven perfected by 400°C precision.</p>
               </div>
            </div>

            <div className="bento-item bg-white">
               <div className="flex gap-1 text-red-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
               </div>
               <p className="text-sm font-medium italic mb-4 leading-relaxed line-clamp-3">"Best gelato at Gendarmenmarkt. The Black Forest cup is a masterpiece of flavors."</p>
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">— Sarah L.</span>
            </div>

            <div className="bento-item col-span-2 lg:col-span-2 bg-[#E8F0E3]">
               <div className="flex justify-between items-start">
                  <Wind size={32} className="text-green-600" />
                  <span className="badge badge-green">Sustainable</span>
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2">Mallorca Connection</h3>
                  <p className="text-sm text-slate-600">Citrus fruits travel directly from our family bio-farm in Mallorca to your cup in Berlin.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Concierge Widget */}
      <section className="py-24 overflow-hidden">
        <div className="section-container">
           <div className="card-border p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Sparkles size={300} />
              </div>
              
              <div className="lg:w-1/2 relative z-10">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                       <MessageSquare size={16} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">AI Flavor Concierge</span>
                 </div>
                 <h2 className="text-4xl lg:text-6xl mb-8 leading-tight">What are you <br/>feeling today?</h2>
                 
                 <div className="flex flex-wrap gap-3">
                    {['Adventurous', 'Classic', 'Sweet Tooth', 'Light & Fresh'].map(mood => (
                       <button 
                        key={mood}
                        onClick={() => handleAiRecommendation(mood)}
                        className={`px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                          aiMood === mood ? 'bg-slate-900 text-white shadow-xl' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                        }`}
                       >
                         {mood}
                       </button>
                    ))}
                 </div>
              </div>

              <div className="lg:w-1/2 w-full min-h-[200px] flex items-center justify-center bg-slate-50 rounded-3xl p-10 border border-slate-100 relative">
                 <AnimatePresence mode="wait">
                    {isAiLoading ? (
                       <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <div className="flex gap-2">
                             <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" />
                             <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-75" />
                             <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-150" />
                          </div>
                       </motion.div>
                    ) : aiResponse ? (
                       <motion.div key="response" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                          <p className="text-xl font-serif italic text-slate-800 leading-relaxed max-w-sm">"{aiResponse}"</p>
                       </motion.div>
                    ) : (
                       <div className="text-center text-slate-300">
                          <Sparkles size={48} className="mx-auto mb-4 opacity-50" />
                          <p className="text-xs uppercase font-bold tracking-widest">Select a mood to get a personal recommendation</p>
                       </div>
                    )}
                 </AnimatePresence>
              </div>
           </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-slate-50">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 mb-2 block">Handcrafted Menu</span>
               <h2 className="text-5xl md:text-7xl mb-4">La Carta.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {MENU_DATA.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all ${
                    activeSection === section.id 
                      ? 'bg-slate-900 text-white shadow-xl scale-105' 
                      : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-400'
                  }`}
                >
                  {section.title[lang]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            <AnimatePresence mode="wait">
              {MENU_DATA.find(s => s.id === activeSection)?.items.map((item, idx) => (
                <motion.div
                  key={`${activeSection}-${idx}`}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-8 rounded-2x border border-slate-100 flex justify-between gap-6 group hover:border-red-200 transition-all cursor-default"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                       <h3 className="text-lg font-bold group-hover:text-red-500 transition-colors">{item.name[lang]}</h3>
                       {idx === 0 && <span className="badge badge-red">Best Seller</span>}
                       {(idx === 2) && <span className="badge badge-red animate-pulse">New</span>}
                       {(idx === 1 || idx === 3) && <span className="badge badge-slate">House Special</span>}
                    </div>
                    {item.description && (
                      <p className="text-xs text-slate-400 font-medium leading-relaxed italic">{item.description[lang]}</p>
                    )}
                  </div>
                  <div className="shrink-0 pt-1">
                    <span className="text-lg font-bold text-slate-900 tabular-nums">{item.price}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-[11px] text-slate-300 font-bold uppercase tracking-widest">Alle Preise in Euro inkl. MwSt. • Gluten-free options available on request.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24">
        <div className="section-container">
             <div className="text-center mb-16">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500 mb-2 block">Atmosphere</span>
                <h2 className="text-4xl md:text-5xl">Gendarmenmarkt Scenes.</h2>
             </div>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {GALLERY_IMAGES.map((img, i) => (
                  <motion.div key={i} whileHover={{ y: -10 }} className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg bg-slate-50 relative group">
                    <img src={img.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={img.alt[lang]} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                       <span className="text-[10px] text-white font-bold uppercase tracking-widest">{img.category}</span>
                    </div>
                  </motion.div>
                ))}
             </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white rounded-[4rem] mx-6">
        <div className="section-container grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl lg:text-7xl leading-tight">Visit us <br/>in Berlin.</h2>
            <div className="grid sm:grid-cols-2 gap-12">
              {[
                { label: 'Address', value: t.contact.info },
                { label: 'Hours', value: t.contact.hours },
                { label: 'Phone', value: '+49 30 30648746' },
                { label: 'Email', value: 'info@julianelisa.com' }
              ].map((info, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{info.label}</h4>
                  <p className="text-xl font-serif italic">{info.value}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-6">
              <a href="https://instagram.com" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div className="aspect-square lg:aspect-video rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl relative group">
             <div className="absolute inset-0 bg-slate-900/20 pointer-events-none group-hover:bg-transparent transition-all z-10" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.653696843477!2d13.38971431245082!3d52.51259193188547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851dab53d39db%3A0xe7bc32f4c6e9a6e6!2sMarkgrafenstra%C3%9Fe%2041%2C%2010117%20Berlin!5e0!3m2!1sen!2sde!4v1713865912456!5m2!1sen!2sde"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-white">
        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <span className="font-serif text-3xl font-bold block mb-1">Julian & Elisa</span>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300">Gendarmenmarkt Berlin</p>
            </div>
            <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest">
               <button className="text-slate-400 hover:text-slate-900 transition-colors">Impressum</button>
               <button className="text-slate-400 hover:text-slate-900 transition-colors">Data Privacy</button>
               <button className="text-slate-400 hover:text-slate-900 transition-colors">Career</button>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-200">© 2026 Artigianale Gelato Café</p>
        </div>
      </footer>
    </div>
  );
}
