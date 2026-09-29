'use client';

import React from 'react';
import { 
  Moon, Sparkles, ShieldAlert, Zap, Award, 
  ArrowRight, Brain, Droplets, CheckCircle2, Clock, 
  AlertTriangle, RefreshCw, Flame, ChevronRight, ExternalLink
} from 'lucide-react';
import { HEALTH_PILLARS } from '@/data/healthData';
import Link from 'next/link';

export const SleepBiohackSection: React.FC = () => {
  const sleepData = HEALTH_PILLARS.find((p) => p.id === 'sleep')!;

  return (
    <section id="sleep-section" className="py-20 bg-slate-900 text-slate-100 relative overflow-hidden border-b border-slate-800">
      {/* グロー装飾 */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* セクションヘッダー */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950 border border-indigo-500/40 text-indigo-300 text-xs font-bold mb-4">
            <Moon className="w-4 h-4 text-indigo-400" />
            <span>【最重要特集】最先端睡眠科学 ＆ ナイトバイオハック</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
            なぜ今、世界中で<span className="text-indigo-400">「睡眠至上主義」</span>が叫ばれるのか？
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-cyan-300 to-emerald-300">
              脳のゴミ掃除（グリンパティック）× 夜間核酸サルベージ
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            「睡眠はただ体を休める時間」という常識は過去のものです。
            最新の神経科学は、睡眠中こそが<strong className="text-white">「脳の毒素排出」</strong>と<strong className="text-white">「遺伝子の修復」</strong>がフル稼働する最もアクティブな時間帯であることを突き止めました。
          </p>
        </div>

        {/* グリンパティックシステムのメカニズム図解カード */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          {/* 左側: 図解インフォグラフィック */}
          <div className="lg:col-span-7 bg-slate-950/90 rounded-3xl p-6 sm:p-8 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">脳内浄化機構「グリンパティックシステム」の全貌</h3>
                  <p className="text-xs text-indigo-300">Science誌等で解明された脳脊髄液（CSF）による夜間洗浄</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                深睡眠（徐波睡眠）で起動
              </span>
            </div>

            {/* SVG図解：覚醒時 vs 睡眠時の脳内環境 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* 覚醒時 */}
              <div className="bg-slate-900/80 rounded-2xl p-4 border border-rose-900/40">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-rose-400">【日中・覚醒時】</span>
                  <span className="text-[10px] text-slate-400">毒素蓄積フェーズ</span>
                </div>
                {/* 模式図 */}
                <div className="h-32 bg-slate-950 rounded-xl p-3 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-radial from-rose-500 to-transparent" />
                  <div className="text-[11px] text-slate-400 space-y-1 relative z-10">
                    <div className="flex items-center justify-between text-rose-300 font-semibold text-[10px]">
                      <span>脳細胞の間隙: 狭小（通常）</span>
                      <span>CSF流入: 低速</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <span className="px-1.5 py-0.5 rounded bg-rose-950 text-rose-300 text-[9px] border border-rose-800">
                        アミロイドβ 蓄積中
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-950 text-rose-300 text-[9px] border border-rose-800">
                        タウタンパク質 蓄積中
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-950 text-rose-300 text-[9px] border border-rose-800">
                        酸化変性物質 ↑
                      </span>
                    </div>
                  </div>
                  <div className="text-[10px] text-rose-400 font-bold text-center bg-rose-950/60 py-1 rounded">
                    ⚠️ 脳のゴミが徐々に滞留
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  思考や運動で神経が活動するたび、老廃物がゴミとして脳の隙間に溜まります。
                </p>
              </div>

              {/* 睡眠時 */}
              <div className="bg-slate-900/80 rounded-2xl p-4 border border-indigo-500/50 relative">
                <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-indigo-500 text-white text-[9px] font-black uppercase shadow">
                  最大洗浄力
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-indigo-300">【夜間・深睡眠時】</span>
                  <span className="text-[10px] text-indigo-200">グリンパティック起動</span>
                </div>
                {/* 模式図 */}
                <div className="h-32 bg-slate-950 rounded-xl p-3 border border-indigo-900 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30 bg-radial from-cyan-500 to-indigo-600" />
                  <div className="text-[11px] text-slate-300 space-y-1 relative z-10">
                    <div className="flex items-center justify-between text-cyan-300 font-semibold text-[10px]">
                      <span>グリア細胞が収縮（間隙60%拡張）</span>
                      <span>流速10〜20倍</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 bg-indigo-950/80 p-1.5 rounded-lg border border-indigo-700/60">
                      <Droplets className="w-4 h-4 text-cyan-400 animate-bounce" />
                      <span className="text-[10px] text-cyan-200 font-bold">
                        脳脊髄液（CSF）がゴミを一気に洗い流す！
                      </span>
                    </div>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-bold text-center bg-indigo-950/80 py-1 rounded border border-indigo-800">
                    ✨ 翌朝、脳が完全クリアな状態へ
                  </div>
                </div>
                <p className="text-[11px] text-indigo-200/90 mt-2">
                  深睡眠中、脳脊髄液が怒涛のように流れ込み、蓄積した神経毒素をリンパ系へ排出します。
                </p>
              </div>
            </div>

            {/* 成長ホルモン × 核酸サルベージの相乗図 */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/70 to-slate-900 border border-indigo-800/60">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-cyan-200 mb-1">
                    深睡眠時の成長ホルモン × 核酸サルベージ合成 ＝ 【細胞のDNA・タンパク質超回復】
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    深睡眠に入ると下垂体から成長ホルモン（GH）が大量分泌されます。しかし、<strong>「細胞の材料（核酸・コラーゲンペプチド）」が血中に存在しなければ修復は不発</strong>に終わります。就寝前に核酸を補給しておくことで、傷ついた遺伝子の修復とオートファジーが一晩で完了します。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 右側: 睡眠負債の恐怖（煽り） */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-gradient-to-b from-rose-950/70 to-slate-950 border border-rose-900/60 shadow-xl">
              <div className="flex items-center gap-2 text-rose-400 mb-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-black uppercase tracking-wider text-rose-300">
                  CRITICAL WARNING
                </span>
              </div>
              <h3 className="text-lg font-black text-white mb-2">
                睡眠を削る人は「脳をゴミ溜め」にしている
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                「睡眠時間は削れる」という思い込みは医学的に完全な誤りです。睡眠が6時間未満になると、脳のグリンパティックシステムが作動せず、毒素が脳内に堆積し続けます。
              </p>

              <div className="space-y-2.5">
                {sleepData.negativeRisk.consequences.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/90 border border-rose-950 text-xs">
                    <div className="font-bold text-rose-400 mb-0.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.timeline}</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {item.damage}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-[11px] text-rose-200 font-semibold leading-relaxed">
                {sleepData.negativeRisk.horrorSummary}
              </div>
            </div>
          </div>
        </div>

        {/* 睡眠ハック実践ステップ ＆ FORDAYS商品の劇的シナジー */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* 左側: 4ステップ睡眠ハック */}
          <div className="lg:col-span-6 space-y-3.5">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-400" />
              <span>今日からできる「至高の睡眠バイオハック 4ステップ」</span>
            </h3>

            {sleepData.actionHacks.map((hack, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-indigo-500/50 transition-all flex items-start gap-3.5 group"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-950 border border-indigo-600/40 text-indigo-300 flex items-center justify-center font-black text-sm flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {hack.step}
                </div>
                <div className="flex-grow">
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {hack.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-1.5">
                    {hack.method}
                  </p>
                  <div className="text-[10px] text-indigo-300/80 bg-indigo-950/40 px-2.5 py-1 rounded-lg border border-indigo-900/40 inline-block font-mono">
                    💡 科学的根拠: {hack.scientificReason}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 右側: FORDAYS商品の強力シナジー（ちょっと盛り気味で魅力的に） */}
          <div className="lg:col-span-6">
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border-2 border-indigo-500/50 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              {/* 背景バッジ */}
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-black uppercase tracking-wider shadow">
                    就寝前ナイトショット推奨
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-bold">
                    <Award className="w-4 h-4" />
                    <span>特許第6791696号 / 特許第7627991号</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
                  {sleepData.fordaysSynergy.synergyHeadline}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-200 font-semibold mb-4">
                  【推奨商品】{sleepData.fordaysSynergy.productName}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {sleepData.fordaysSynergy.synergyDetail}
                </p>

                {/* ブーストエフェクトの箇条書き */}
                <div className="space-y-2.5 mb-6">
                  {sleepData.fordaysSynergy.boostEffects.map((effect, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/90 border border-indigo-900/60 text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 font-medium">{effect}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* タイミング案内 ＆ リンク */}
              <div className="pt-4 border-t border-indigo-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-indigo-300">
                  <span className="font-bold text-white block">おすすめの飲み方:</span>
                  {sleepData.fordaysSynergy.recommendedTiming}
                </div>
                <Link
                  href="/products#cat-nucleic-acid"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all hover:scale-102 flex-shrink-0"
                >
                  <span>核酸ドリンクの詳細を見る</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
