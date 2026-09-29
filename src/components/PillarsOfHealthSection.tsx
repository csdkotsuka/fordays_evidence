'use client';

import React, { useState } from 'react';
import { 
  Dumbbell, HeartPulse, Apple, Brain, 
  Sparkles, ShieldAlert, Award, Zap, CheckCircle2, 
  ArrowRight, Clock, AlertTriangle, ChevronRight, ExternalLink, Activity
} from 'lucide-react';
import { HEALTH_PILLARS, HealthPillar } from '@/data/healthData';
import Link from 'next/link';

export const PillarsOfHealthSection: React.FC = () => {
  // 睡眠以外の4つのピラー
  const otherPillars = HEALTH_PILLARS.filter((p) => p.id !== 'sleep');
  const [activePillarId, setActivePillarId] = useState<string>('exercise');

  const currentPillar = HEALTH_PILLARS.find((p) => p.id === activePillarId)!;

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'exercise':
        return <Dumbbell className="w-5 h-5" />;
      case 'recovery':
        return <HeartPulse className="w-5 h-5" />;
      case 'nutrition':
        return <Apple className="w-5 h-5" />;
      case 'stress':
        return <Brain className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const getThemeClasses = (color: string) => {
    switch (color) {
      case 'emerald':
        return {
          activeTab: 'bg-emerald-600 text-white shadow-emerald-600/30',
          badge: 'bg-emerald-950 text-emerald-300 border-emerald-500/40',
          border: 'border-emerald-500/40',
          accentText: 'text-emerald-400',
          synergyBg: 'from-emerald-950 via-slate-900 to-slate-950 border-emerald-500/50',
          btnBg: 'bg-emerald-600 hover:bg-emerald-500',
        };
      case 'cyan':
        return {
          activeTab: 'bg-cyan-600 text-white shadow-cyan-600/30',
          badge: 'bg-cyan-950 text-cyan-300 border-cyan-500/40',
          border: 'border-cyan-500/40',
          accentText: 'text-cyan-400',
          synergyBg: 'from-cyan-950 via-slate-900 to-slate-950 border-cyan-500/50',
          btnBg: 'bg-cyan-600 hover:bg-cyan-500',
        };
      case 'amber':
        return {
          activeTab: 'bg-amber-600 text-white shadow-amber-600/30',
          badge: 'bg-amber-950 text-amber-300 border-amber-500/40',
          border: 'border-amber-500/40',
          accentText: 'text-amber-400',
          synergyBg: 'from-amber-950 via-slate-900 to-slate-950 border-amber-500/50',
          btnBg: 'bg-amber-600 hover:bg-amber-500',
        };
      case 'rose':
        return {
          activeTab: 'bg-rose-600 text-white shadow-rose-600/30',
          badge: 'bg-rose-950 text-rose-300 border-rose-500/40',
          border: 'border-rose-500/40',
          accentText: 'text-rose-400',
          synergyBg: 'from-rose-950 via-slate-900 to-slate-950 border-rose-500/50',
          btnBg: 'bg-rose-600 hover:bg-rose-500',
        };
      default:
        return {
          activeTab: 'bg-teal-600 text-white shadow-teal-600/30',
          badge: 'bg-teal-950 text-teal-300 border-teal-500/40',
          border: 'border-teal-500/40',
          accentText: 'text-teal-400',
          synergyBg: 'from-teal-950 via-slate-900 to-slate-950 border-teal-500/50',
          btnBg: 'bg-teal-600 hover:bg-teal-500',
        };
    }
  };

  const currentTheme = getThemeClasses(currentPillar.themeColor);

  return (
    <section id="pillars-section" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden border-b border-slate-800">
      {/* グロー装飾 */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* セクションヘッダー */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold mb-4">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>【4大基盤】運動・休養・栄養・ストレスの分子生物学</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            「あることのエビデンス」と「ないことの恐怖」
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            あなたの体は今この瞬間も、遺伝子の複製と細胞の新生を繰り返しています。
            各要素をタブで切り替えて、世界最先端の効能とFORDAYSの相乗パワーを体感してください。
          </p>
        </div>

        {/* タブ切り替えボタン */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
          {otherPillars.map((pillar) => {
            const isSelected = pillar.id === activePillarId;
            const theme = getThemeClasses(pillar.themeColor);

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-3.5 sm:p-4 rounded-2xl flex items-center justify-center gap-2.5 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer border ${
                  isSelected
                    ? `${theme.activeTab} border-transparent scale-102`
                    : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {getPillarIcon(pillar.id)}
                <span>{pillar.title.split('（')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* 選択されたピラーの詳細コンテンツカード */}
        <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl backdrop-blur-md">
          {/* ピラーヘッダー */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg ${currentTheme.activeTab}`}>
                {getPillarIcon(currentPillar.id)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${currentTheme.badge}`}>
                    {currentPillar.englishTitle}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {currentPillar.title}
                </h3>
                <p className={`text-xs sm:text-sm font-semibold mt-1 ${currentTheme.accentText}`}>
                  {currentPillar.subtitle}
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {currentPillar.summary}
            </p>
          </div>

          {/* 2カラム：エビデンス（光） vs ないことの恐怖（影） */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* 左：光（あることのエビデンス ＆ 特許） */}
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                  <Sparkles className="w-5 h-5 flex-shrink-0" />
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-300">
                    WORLD-CLASS EVIDENCE
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {currentPillar.positiveEvidence.heading}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {currentPillar.positiveEvidence.description}
                </p>

                {/* キーポイント */}
                <div className="space-y-2 mb-6">
                  {currentPillar.positiveEvidence.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 関連特許 */}
              {currentPillar.positiveEvidence.patents.length > 0 && (
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <div className="text-[11px] font-bold text-cyan-300 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                    <span>関連する特許公報エビデンス</span>
                  </div>
                  {currentPillar.positiveEvidence.patents.map((pat, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-cyan-900/40 text-xs">
                      <div className="flex items-center justify-between text-cyan-300 font-bold text-[11px]">
                        <span>{pat.number}</span>
                        <span className="text-[10px] text-slate-400 truncate max-w-[200px]">{pat.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{pat.role}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 右：影（ないことの恐怖 ＆ ダメージタイムライン） */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-rose-950/60 to-slate-950 border border-rose-900/50 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-rose-400">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-xs font-black uppercase tracking-wider text-rose-300">
                      HORROR & RISK
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
                    {currentPillar.negativeRisk.warningLevel}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {currentPillar.negativeRisk.heading}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {currentPillar.negativeRisk.description}
                </p>

                {/* ダメージタイムライン */}
                <div className="space-y-2.5 mb-4">
                  {currentPillar.negativeRisk.consequences.map((item, idx) => (
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
              </div>

              <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-[11px] text-rose-200 font-semibold leading-relaxed">
                {currentPillar.negativeRisk.horrorSummary}
              </div>
            </div>
          </div>

          {/* 2カラム下部：実践バイオハック ＆ FORDAYSシナジー */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 実践バイオハック */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                <Zap className={`w-4 h-4 ${currentTheme.accentText}`} />
                <span>今日から実践できるバイオハック</span>
              </h4>

              {currentPillar.actionHacks.map((hack, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs"
                >
                  <div className="flex items-center gap-2 font-bold text-white mb-1">
                    <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-black ${currentTheme.activeTab}`}>
                      {hack.step}
                    </span>
                    <span>{hack.title}</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed mb-1 pl-7">
                    {hack.method}
                  </p>
                  <div className="text-[10px] text-slate-500 pl-7">
                    💡 {hack.scientificReason}
                  </div>
                </div>
              ))}
            </div>

            {/* FORDAYS商品の強力シナジー */}
            <div className="lg:col-span-7">
              <div className={`h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${currentTheme.synergyBg} border shadow-2xl flex flex-col justify-between`}>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold border border-slate-700">
                      FORDAYS SYNERGY BOOST
                    </span>
                    <span className="text-xs text-slate-300 font-semibold">
                      {currentPillar.fordaysSynergy.productCategory}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black text-white mb-1 leading-tight">
                    {currentPillar.fordaysSynergy.synergyHeadline}
                  </h4>
                  <p className={`text-xs font-bold mb-3 ${currentTheme.accentText}`}>
                    【推奨商品】{currentPillar.fordaysSynergy.productName}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {currentPillar.fordaysSynergy.synergyDetail}
                  </p>

                  <div className="space-y-2 mb-4">
                    {currentPillar.fordaysSynergy.boostEffects.map((effect, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{effect}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-400">
                    <span className="font-bold text-slate-200 block">おすすめタイミング:</span>
                    {currentPillar.fordaysSynergy.recommendedTiming}
                  </div>
                  <Link
                    href="/products"
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-white font-bold text-xs shadow-md transition-all hover:scale-102 flex-shrink-0 ${currentTheme.btnBg}`}
                  >
                    <span>製品カタログで確認する</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
