'use client';

import React from 'react';
import { 
  Sparkles, Moon, Dumbbell, HeartPulse, Apple, Brain, 
  ShieldAlert, ShieldCheck, Flame, ArrowRight, Zap, Award, Activity
} from 'lucide-react';
import Link from 'next/link';

export const HealthHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-12 pb-20 border-b border-slate-800">
      {/* 背景のグローエフェクト */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 上部バッジ */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-900/80 to-purple-900/80 border border-indigo-500/40 text-indigo-200 text-xs font-bold tracking-wide shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            世界最先端バイオハック ＆ 分子生理学
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-teal-400" />
            学術論文 ＆ FORDAYS特許公報直結
          </span>
        </div>

        {/* メインタイトル */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
              「睡眠・運動・休養・栄養・メンタル」
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
              5大健康科学 × 次世代核酸エビデンス
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            なぜ世界中のトップエリートや長寿研究者が「睡眠と細胞修復」に莫大な投資をするのか？
            <br className="hidden sm:inline" />
            基礎生理学のエビデンス、放置した場合の<span className="text-rose-400 font-bold underline decoration-rose-500/60 decoration-2">不可逆的な老化リスク</span>、
            そしてFORDAYSの<span className="text-cyan-300 font-bold">特許取得素材（オートファジー・酸化タンパク質修復）</span>がもたらす
            <strong className="text-emerald-300 font-black">「細胞超回復の爆発力」</strong>を徹底解剖します。
          </p>
        </div>

        {/* 5大ピラーのクイックナビカード */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-12">
          {/* 睡眠 */}
          <a
            href="#sleep-section"
            className="group relative p-4 rounded-2xl bg-gradient-to-b from-indigo-950/80 to-slate-900 border border-indigo-500/30 hover:border-indigo-400 transition-all hover:scale-103 shadow-lg hover:shadow-indigo-500/20 text-left flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center border border-indigo-400/40 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Moon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                最重要
              </span>
            </div>
            <div>
              <span className="text-xs text-indigo-300 font-bold block mb-0.5">PILLAR 01</span>
              <h2 className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                睡眠科学
              </h2>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                脳の老廃物洗浄（グリンパティック）と夜間細胞修復
              </p>
            </div>
          </a>

          {/* 運動 */}
          <a
            href="#pillars-section"
            className="group relative p-4 rounded-2xl bg-gradient-to-b from-emerald-950/80 to-slate-900 border border-emerald-500/30 hover:border-emerald-400 transition-all hover:scale-103 shadow-lg hover:shadow-emerald-500/20 text-left flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-400/40 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-200 border border-emerald-400/30">
                マイオカイン
              </span>
            </div>
            <div>
              <span className="text-xs text-emerald-300 font-bold block mb-0.5">PILLAR 02</span>
              <h2 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                臨床運動生理
              </h2>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                若返りホルモン分泌・ミトコンドリア新生
              </p>
            </div>
          </a>

          {/* 休養 */}
          <a
            href="#pillars-section"
            className="group relative p-4 rounded-2xl bg-gradient-to-b from-cyan-950/80 to-slate-900 border border-cyan-500/30 hover:border-cyan-400 transition-all hover:scale-103 shadow-lg hover:shadow-cyan-500/20 text-left flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center border border-cyan-400/40 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-cyan-500/30 text-cyan-200 border border-cyan-400/30">
                特許修復
              </span>
            </div>
            <div>
              <span className="text-xs text-cyan-300 font-bold block mb-0.5">PILLAR 03</span>
              <h2 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                積極的休養
              </h2>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                自律神経リセット＆酸化タンパク質修復（特許7857645）
              </p>
            </div>
          </a>

          {/* 栄養 */}
          <a
            href="#pillars-section"
            className="group relative p-4 rounded-2xl bg-gradient-to-b from-amber-950/80 to-slate-900 border border-amber-500/30 hover:border-amber-400 transition-all hover:scale-103 shadow-lg hover:shadow-amber-500/20 text-left flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-400/40 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Apple className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-500/30 text-amber-200 border border-amber-400/30">
                核酸サルベージ
              </span>
            </div>
            <div>
              <span className="text-xs text-amber-300 font-bold block mb-0.5">PILLAR 04</span>
              <h2 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                分子核酸栄養
              </h2>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                60兆個の細胞分裂設計図＆真皮再生（特許7710217）
              </p>
            </div>
          </a>

          {/* ストレス */}
          <a
            href="#pillars-section"
            className="group relative p-4 rounded-2xl bg-gradient-to-b from-rose-950/80 to-slate-900 border border-rose-500/30 hover:border-rose-400 transition-all hover:scale-103 shadow-lg hover:shadow-rose-500/20 text-left col-span-2 sm:col-span-1 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center border border-rose-400/40 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Brain className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-rose-500/30 text-rose-200 border border-rose-400/30">
                腸脳相関
              </span>
            </div>
            <div>
              <span className="text-xs text-rose-300 font-bold block mb-0.5">PILLAR 05</span>
              <h2 className="text-sm sm:text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                ストレス制御
              </h2>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                腸内短鎖脂肪酸産生（特許6947610）＆脳保護
              </p>
            </div>
          </a>
        </div>

        {/* 恐怖 vs 希望の対比バナー */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
          {/* 左：恐怖（健康負債の崩壊スパイラル） */}
          <div className="space-y-4 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0 md:pr-6">
            <div className="flex items-center gap-2.5 text-rose-400">
              <ShieldAlert className="w-6 h-6 flex-shrink-0" />
              <h3 className="text-base sm:text-lg font-black text-rose-300">
                【警告】5大要素を無視した「細胞崩壊スパイラル」
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              睡眠不足・運動不足・慢性疲労を放置すると、脳内には毒素（アミロイドβ）が溜まり、筋肉は毎年1%ずつ融解、傷ついたDNAは修復されず酸化タンパク質が体中をサビつかせます。
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-rose-300/90 bg-rose-950/40 p-2.5 rounded-xl border border-rose-900/50">
                <span className="font-bold text-rose-400">×</span>
                <span>たった1日の睡眠不足で脳内毒素蓄積 ＋ 泥酔相当の判断力低下</span>
              </div>
              <div className="flex items-start gap-2 text-rose-300/90 bg-rose-950/40 p-2.5 rounded-xl border border-rose-900/50">
                <span className="font-bold text-rose-400">×</span>
                <span>加齢で肝臓の核酸合成能が激減 → 細胞分裂エラーと急激な老化</span>
              </div>
            </div>
          </div>

          {/* 右：希望（5大習慣 ＋ FORDAYS核酸ブースト） */}
          <div className="space-y-4 md:pl-2">
            <div className="flex items-center gap-2.5 text-emerald-400">
              <Zap className="w-6 h-6 flex-shrink-0 text-cyan-400" />
              <h3 className="text-base sm:text-lg font-black text-emerald-300">
                【劇的変革】科学的バイオハック × FORDAYS特許核酸
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              最新の生活習慣ハックに、フォーデイズの<span className="text-cyan-300 font-bold">特許取得DNA素材（FCore-2021）</span>と<span className="text-emerald-300 font-bold">オートファジー・酸化修復シグナル</span>を融合。夜寝ている間も細胞が自己浄化・再生し、翌朝「別人のような軽快さ」を実現します。
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-emerald-300/90 bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-900/50">
                <span className="font-bold text-emerald-400">◎</span>
                <span>特許第7627991号：オートファジー活性で睡眠中に細胞をリフレッシュ</span>
              </div>
              <div className="flex items-start gap-2 text-cyan-300/90 bg-cyan-950/40 p-2.5 rounded-xl border border-cyan-900/50">
                <span className="font-bold text-cyan-400">◎</span>
                <span>特許第7857645号：酸化タンパク質修復酵素を刺激し、サビつきを元通りに</span>
              </div>
            </div>
          </div>
        </div>

        {/* 下部CTAボタン群 */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="#sleep-section"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-cyan-600 to-emerald-600 hover:from-indigo-500 hover:to-emerald-500 text-white font-black text-sm shadow-xl shadow-cyan-500/20 transition-all hover:scale-103 active:scale-98"
          >
            <Moon className="w-4 h-4" />
            <span>最先端睡眠科学 ＆ ナイトバイオハックを見る</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#diagnostics-section"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm transition-all hover:scale-102"
          >
            <Activity className="w-4 h-4 text-rose-400" />
            <span>あなたの健康負債スコアを自己診断（無料）</span>
          </a>
        </div>
      </div>
    </section>
  );
};
