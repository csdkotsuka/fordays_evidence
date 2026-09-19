'use client';

import React, { useState } from 'react';
import { ShieldCheck, BookOpen, FileCheck, Dumbbell, Award, Menu, X, UserCheck } from 'lucide-react';

interface HeaderProps {
  onOpenPTModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPTModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: '執筆の趣旨', href: '#author' },
    { name: '生理学基礎', href: '#physiology' },
    { name: '特許＆研究', href: '#patents' },
    { name: 'エビデンス検証', href: '#evidence' },
    { name: '筋肉×運動', href: '#muscle' },
    { name: 'パーソナル指導', href: '#personal-training' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-teal-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg">
                  FORDAYS エビデンス検証
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200 hidden sm:inline-block">
                  理学療法士・教員22年
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden md:block">
                科学的客観性と生理学的アプローチから読み解く健康の真実
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPTModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 shadow-md shadow-brand-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Dumbbell className="w-4 h-4" />
              <span>パーソナル指導相談</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="メニュー開閉"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-600"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPTModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-teal-600 shadow-md"
            >
              <Dumbbell className="w-4 h-4" />
              <span>パーソナルトレーニング無料相談</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
