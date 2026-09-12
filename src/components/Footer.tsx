import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 mt-0">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        {/* Pattern 4 — Superhuman minimal with location tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <AppLogo size={28} />
            <span className="font-display italic text-base text-foreground/70">BaatCheet</span>
          </div>

          <div className="flex items-center gap-2 font-body text-xs tracking-wide">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-primary">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Thane, Maharashtra</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#concept" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">About</a>
            <a href="#archives" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">Archives</a>
            <a href="#join" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">Join</a>
          </div>

          <span className="text-xs opacity-60">© 2026 BaatCheet</span>
        </div>
      </div>
    </footer>
  );
}