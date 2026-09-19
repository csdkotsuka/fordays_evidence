'use client';

import React from 'react';
import { Shield, Sparkles, CheckCircle2, Award, ArrowRight, ExternalLink, Dumbbell } from 'lucide-react';

interface HeroProps {
  onOpenPTModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPTModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-16 pb-24 md:pt-20 md:pb-32">
      {/* Background glow & grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs sm:text-sm text-brand-300 mb-6 backdrop-blur-md">
            <Award className="w-4 h-4 text-amber-400" />
            <span>理学療法士・教員経験22年の専門的検証</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            FORDAYSの<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">特許と科学的根拠</span>を<br className="hidden sm:block" />
            生理学と運動機能の視点から解き明かす
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            「多くの特許や大学共同研究があるが、本当に人体にどう作用するのか？」<br />
            盲信でも頭ごなしの否定でもなく、生化学の基礎から特許原本・限界点までを徹底精査。
            確固たる論拠を持ち、<strong className="text-white font-semibold">「栄養×適切な運動」</strong>で100歳まで動ける身体づくりを目指すための専門レポートです。
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#patents"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg shadow-white/10 hover:scale-[1.02]"
            >
              <span>特許一覧・原本リンクを検証</span>
              <ArrowRight className="w-4 h-4 text-slate-700" />
            </a>
            <button
              onClick={onOpenPTModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-teal-600 hover:from-brand-500 hover:to-teal-500 transition-all shadow-lg shadow-brand-600/30 hover:scale-[1.02]"
            >
              <Dumbbell className="w-4 h-4" />
              <span>理学療法士の運動指導・相談</span>
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>特許原本直結データベース</span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                最新の表皮肥厚化抑制、毛細血管新生（神戸大）、神経幹細胞（金沢大）等の特許を原本リンク付きで網羅。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-sm mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>生理学・用語ポップアップ</span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                デノボ合成とサルベージ合成の違い、ATP産生、mTORなど専門用語をクリックですぐWikipedia風に解説。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>栄養×運動（サプリの真実）</span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                「飲むだけで筋肉はつかない」。アミノ酸を活かす運動刺激（メカニカルストレス）の不可欠性を明示。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
