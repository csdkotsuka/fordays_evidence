'use client';

import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, BookOpen, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface BeginnerHeroProps {
  onOpenPTModal: () => void;
}

export const BeginnerHero: React.FC<BeginnerHeroProps> = ({ onOpenPTModal }) => {
  return (
    <section className="relative bg-gradient-to-b from-teal-50 via-cyan-50/40 to-white text-slate-800 py-16 sm:py-24 border-b border-teal-100/80 overflow-hidden">
      {/* 装飾の背景グラデーションブラー */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        {/* 初めての方向けバッジ */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/80 border border-teal-300/60 text-xs sm:text-sm font-bold text-teal-800 shadow-sm">
          <Sparkles className="w-4 h-4 text-teal-600" />
          <span>はじめてのフォーデイズ ＆ 核酸入門ガイド</span>
        </div>

        {/* メインコピー */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          毎日の元気を、細胞の根本から。<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600">
            フォーデイズと「核酸」
          </span>
          で始めるすこやか習慣
        </h1>

        {/* リード文 */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          「フォーデイズってどんな会社？」「最近よく聞く『核酸』って何にいいの？」<br className="hidden sm:block" />
          そんな疑問をお持ちの方へ。からだの基礎知識から、選ばれ続ける理由、日々の運動との相乗効果まで、
          リハビリ専門職の視点を交えて分かりやすくお届けします。
        </p>

        {/* 初心者向けポイント3選 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-2 text-left">
          <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-teal-200/80 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
              1
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">1997年創業の信頼</p>
              <p className="text-[11px] text-slate-500">累計出荷数千万本のロングセラー</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-cyan-200/80 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
              2
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">細胞のエネルギー源「核酸」</p>
              <p className="text-[11px] text-slate-500">若々しさと元気を底上げ</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-emerald-200/80 shadow-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold text-sm">
              3
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">安心の国内自社工場</p>
              <p className="text-[11px] text-slate-500">大学との共同研究・特許取得</p>
            </div>
          </div>
        </div>

        {/* 2大導線ボタン */}
        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* 初心者ガイドへスクロール */}
          <a
            href="#about-fordays"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-extrabold text-base shadow-lg shadow-teal-600/25 transition-all hover:scale-105"
          >
            <span>3分でわかる基本を見る</span>
            <span className="text-teal-200 text-xs">▼</span>
          </a>

          {/* がっつりエビデンス詳細ページへ */}
          <Link
            href="/evidence"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-cyan-200 font-extrabold text-base border-2 border-cyan-500/40 shadow-lg shadow-slate-900/20 transition-all hover:scale-105 group"
          >
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <span>詳しく知りたい人向け（特許・論文原本）</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <p className="text-xs text-slate-600 pt-1">
          ※ 専門的な論文・特許公報（Google Patents原本リンク）・生化学機序をお調べの方は、右側の詳細ページをご覧ください。
        </p>
      </div>
    </section>
  );
};
