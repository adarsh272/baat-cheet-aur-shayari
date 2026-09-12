'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border' :'bg-transparent'
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            aria-label="BaatCheet home"
          >
            <AppLogo
              size={36}
              className="opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg text-foreground tracking-wide">
                BaatCheet
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-primary font-body italic">
                aur shayari
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {[
              { label: 'Kya Hai?', href: '#concept' },
              { label: 'Archives', href: '#archives' },
              { label: 'Mahol', href: '#atmosphere' },
            ]?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#join"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-body text-sm tracking-wide"
            style={{ borderRadius: 'var(--radius)' }}
          >
            Main bhi hoon
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="8" x2="21" y2="8" />
                  <line x1="3" y1="16" x2="21" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav
            className="flex flex-col gap-5 pb-6 pt-2 border-t border-border backdrop-blur-xl bg-background/95"
            aria-label="Mobile navigation"
          >
            {[
              { label: 'Kya Hai?', href: '#concept' },
              { label: 'Archives', href: '#archives' },
              { label: 'Mahol', href: '#atmosphere' },
            ]?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                onClick={handleClose}
                className="font-body text-base text-foreground hover:text-primary transition-colors px-2 min-h-[44px] flex items-center"
              >
                {link?.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={handleClose}
              className="btn-amber text-center min-h-[44px] flex items-center justify-center"
            >
              Main bhi hoon
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}