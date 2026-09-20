'use client';

import React, { useState } from 'react';
import { ShieldCheck, Dumbbell, Menu, Sparkles, ChevronRight, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { SidebarMenu } from '@/components/SidebarMenu';

interface HeaderProps {
  onOpenPTModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPTModal }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* 左側: メニュートグル ＋ ブランドロゴ */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* メニュー開閉ボタン（左側） */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-slate-700 hover:text-slate-950 bg-slate-100/90 hover:bg-slate-200/90 border border-slate-200 transition-all active:scale-95 group shadow-xs cursor-pointer"
                aria-label="メニューを開く"
              >
                <Menu className="w-5 h-5 text-slate-700 group-hover:text-slate-900 transition-transform group-hover:scale-110" />
                <span className="text-xs font-black tracking-wider uppercase">メニュー</span>
              </button>

              {/* ブランドロゴ */}
              <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-md shadow-teal-600/20 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-slate-900 tracking-tight text-base sm:text-lg">
                      FORDAYS <span className="text-teal-700 text-sm font-bold">ポータル</span>
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 hidden md:inline-block">
                      客観検証 ＆ 総合ガイド
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 hidden sm:block">
                    はじめての核酸・ビジネス真実・特許エビデンス・臨床運動処方
                  </p>
                </div>
              </Link>
            </div>

            {/* 右側: クイックリンク（ビジネス） ＋ CTA */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* ビジネスガイドへのクイックリンク（控えめかつ分かりやすいバッジ） */}
              <Link
                href="/business"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200/80 transition-all hover:scale-102"
              >
                <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                <span>ビジネス真実ガイド</span>
              </Link>

              {/* PT指導相談ボタン */}
              <button
                onClick={onOpenPTModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 shadow-md shadow-teal-600/20 transition-all hover:scale-102 active:scale-98"
              >
                <Dumbbell className="w-4 h-4" />
                <span className="hidden xs:inline">無料個別相談</span>
                <span className="xs:hidden">相談</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* スライドインする左サイドメニュー */}
      <SidebarMenu
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onOpenPTModal={onOpenPTModal}
      />
    </>
  );
};
