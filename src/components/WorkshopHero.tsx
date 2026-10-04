'use client';

import React from 'react';
import { 
  UserCheck, Sparkles, Calendar, ShieldCheck, ArrowRight, ChevronDown
} from 'lucide-react';

interface WorkshopHeroProps {
  onOpenConsultModal: () => void;
  onScrollToPlans: () => void;
}

export const WorkshopHero: React.FC<WorkshopHeroProps> = ({ 
  onOpenConsultModal,
  onScrollToPlans 
}) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-xs sm:text-sm font-bold text-teal-300">
            <UserCheck className="w-4 h-4 text-teal-400" />
            <span>理学療法士・教育者が直接指導</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-xs sm:text-sm font-bold text-amber-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>FORDAYSイベント・サロン出張対応</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-xs sm:text-sm font-bold text-cyan-300">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>3ヶ月身体変化実感プログラム</span>
          </span>
        </div>

        {/* Main Title */}
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight">
            細胞の栄養（FORDAYS） × 運動療法で<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300">
              「3ヶ月で身体が変わる」体験型ワークショップ
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            サプリメントを飲むだけで本当に筋肉や姿勢は変わるでしょうか？<br className="hidden md:inline" />
            自己流のスクワットで膝や腰を痛めてはいませんか？<br />
            <strong>「体幹筋（インナーマッスル）の再教育」</strong>を軸に、理学療法士が解剖学・生化学に基づいた本物の運動療法を伝授。
            サロン会員様や地域の皆様の「一生動ける身体づくり」を共に実現します。
          </p>
        </div>

        {/* 3 Core Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 mb-12 max-w-5xl mx-auto">
          <div className="bg-slate-900/80 border border-slate-700/80 rounded-2xl p-5 backdrop-blur-md hover:border-teal-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">医学的エビデンス × 代償ゼロ</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              痛みの原因となる「代償動作（間違った力み）」を徹底排除。膝や腰に負担をかけない安全なフォームをその場で習得します。
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-700/80 rounded-2xl p-5 backdrop-blur-md hover:border-cyan-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">1回で終わらない3ヶ月伴走</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              単発のイベントで終わらせず、月1回の測定と毎日の3分セルフ習慣で「3ヶ月後に劇的な変化」を体感するロードマップ設計。
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-700/80 rounded-2xl p-5 backdrop-blur-md hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base mb-1">FORDAYS栄養との完全シナジー</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              水溶性核酸・コラーゲン・アミノ酸を「どのタイミングで摂ると運動効果が倍増するか」を生化学機序から納得指導します。
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-teal-500/25 transition-all hover:scale-105 active:scale-98 cursor-pointer"
          >
            <Calendar className="w-5 h-5 text-slate-950" />
            <span>サロン・イベント開催の無料相談・見積もり</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={onScrollToPlans}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm sm:text-base transition-all hover:scale-102 cursor-pointer"
          >
            <span>5大ワークショッププランを見る</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Plan Pills */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">対象プラン：</span>
          <span className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">① 美尻＆美姿勢メイク</span>
          <span className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">② 100歳健歩（歩行・下肢）</span>
          <span className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">③ 若々しい体作り（抗加齢）</span>
          <span className="px-3 py-1 rounded-lg bg-pink-950/40 border border-pink-700/40 text-pink-300 font-medium">④ 骨盤底筋＆自律神経（女性特化）</span>
          <span className="px-3 py-1 rounded-lg bg-amber-950/40 border border-amber-700/40 text-amber-300 font-medium">⑤ 転倒予防＆関節ケア（シニア特化）</span>
        </div>
      </div>
    </section>
  );
};
