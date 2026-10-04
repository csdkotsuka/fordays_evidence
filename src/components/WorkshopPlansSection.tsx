'use client';

import React, { useState } from 'react';
import { 
  WORKSHOP_PLANS, WorkshopPlan, APP_FOLLOWUP_INFO 
} from '@/data/workshopPlans';
import { 
  Sparkles, Footprints, Flame, HeartHandshake, ShieldAlert, 
  CheckCircle2, AlertTriangle, ArrowRight, Calendar, Award, 
  Dumbbell, Clock, Target, ShoppingBag, Zap, ExternalLink, Smartphone
} from 'lucide-react';
import { ProductSynergyModal } from '@/components/ProductSynergyModal';

interface WorkshopPlansSectionProps {
  onSelectPlanForConsult: (planTitle: string) => void;
}

export const WorkshopPlansSection: React.FC<WorkshopPlansSectionProps> = ({ 
  onSelectPlanForConsult 
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(WORKSHOP_PLANS[0].id);
  const [selectedProductForModal, setSelectedProductForModal] = useState<string | null>(null);

  const currentPlan = WORKSHOP_PLANS.find(p => p.id === selectedPlanId) || WORKSHOP_PLANS[0];

  const getPlanIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Footprints':
        return <Footprints className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      default:
        return <Dumbbell className="w-5 h-5" />;
    }
  };

  const getCategoryBadge = (category: WorkshopPlan['category']) => {
    switch (category) {
      case 'women':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-pink-100 text-pink-800 border border-pink-200">女性特化・美容</span>;
      case 'senior':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200">シニア・健康長寿</span>;
      case 'all':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-100 text-teal-800 border border-teal-200">全世代・抗加齢</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200">姿勢・体幹</span>;
    }
  };

  return (
    <section id="workshop-plans" className="scroll-mt-16 py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-900 border border-teal-200 text-xs font-bold mb-3">
            <Target className="w-4 h-4 text-teal-700" />
            <span>目的・対象者から選べる</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            5大運動療法ワークショップ・プラン
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            体幹筋（コア）の再教育を共通の軸に据え、3ヶ月間で着実な身体変化を実感できる5つの特化プランをご用意。<br className="hidden sm:inline" />
            サロンの客層やイベントの主旨に合わせて最適なプランをお選びいただけます。
          </p>
        </div>

        {/* Plan Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-10">
          {WORKSHOP_PLANS.map((plan) => {
            const isSelected = plan.id === selectedPlanId;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl border text-center transition-all cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20 scale-[1.02] ring-2 ring-teal-400'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80 shadow-xs'
                }`}
              >
                {plan.recommendedBadge && (
                  <span className={`absolute top-1 right-1 text-[9px] font-black px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-teal-400 text-slate-950' : 'bg-teal-100 text-teal-900'
                  }`}>
                    注目
                  </span>
                )}
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2 transition-transform group-hover:scale-110 ${
                  isSelected ? 'bg-teal-500/20 text-teal-300' : 'bg-slate-100 text-slate-700'
                }`}>
                  {getPlanIcon(plan.iconName)}
                </div>
                <span className="font-bold text-xs sm:text-sm line-clamp-2 leading-tight">
                  {plan.title.replace(/【.*?】/, '')}
                </span>
                <span className={`text-[10px] mt-1 font-medium ${isSelected ? 'text-teal-300' : 'text-slate-500'}`}>
                  3ヶ月ロードマップ
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Plan Details Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden transition-all">
          {/* Plan Header Banner */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                {getCategoryBadge(currentPlan.category)}
                {currentPlan.recommendedBadge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-teal-500/20 text-teal-300 border border-teal-400/30">
                    {currentPlan.recommendedBadge}
                  </span>
                )}
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>{currentPlan.durationDescription}</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center flex-shrink-0">
                    {getPlanIcon(currentPlan.iconName)}
                  </span>
                  <span>{currentPlan.title}</span>
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                  {currentPlan.subTitle}
                </p>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={() => onSelectPlanForConsult(currentPlan.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 text-slate-950 font-black text-sm shadow-md shadow-teal-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>このプランの開催を相談する</span>
                </button>
              </div>
            </div>

            {/* Featured Focus Muscles */}
            <div className="mt-6 pt-5 border-t border-slate-700/80 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold flex items-center gap-1">
                <Dumbbell className="w-3.5 h-3.5 text-teal-400" />
                重点アプローチ筋群：
              </span>
              {currentPlan.featuredMuscles.map((muscle, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md bg-slate-800 text-teal-200 border border-slate-700 font-medium"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          {/* Plan Body Content Grid */}
          <div className="p-6 sm:p-8 space-y-10">
            {/* 1. Target & Problems */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* こんな方におすすめ */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>こんな参加者・会員様におすすめ</span>
                </h4>
                <ul className="space-y-2.5">
                  {currentPlan.targetAudience.map((target, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 根本的な原因と医学的解決策 */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-600" />
                  <span>なぜこの運動療法が必要なのか？（医学的アプローチ）</span>
                </h4>
                <ul className="space-y-2.5">
                  {currentPlan.coreMechanisms.map((mech, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                      <span>{mech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. 3-Month Progression Roadmap */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-teal-600" />
                    <span>3ヶ月身体変化実感ロードマップ（Step-by-Step）</span>
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    月1回の集合ワークショップでフォーム測定と修正を行い、自宅の3分セルフケアで確実な変化を積み上げます。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {currentPlan.threeMonthRoadmap.map((milestone) => (
                  <div
                    key={milestone.month}
                    className="relative bg-gradient-to-b from-slate-50 to-white rounded-2xl p-5 border-2 border-slate-200 hover:border-teal-400 transition-colors shadow-xs flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-xl bg-slate-900 text-teal-300 text-xs font-black">
                          {milestone.month}ヶ月目
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">
                          フェーズ {milestone.month}
                        </span>
                      </div>

                      <h5 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                        {milestone.phase}
                      </h5>

                      <div className="p-2.5 rounded-xl bg-teal-50/70 border border-teal-100 text-xs text-teal-900 font-medium leading-relaxed">
                        <span className="font-bold block text-teal-950 mb-0.5">達成目標：</span>
                        {milestone.goal}
                      </div>

                      <div className="text-xs space-y-2 text-slate-600">
                        <div>
                          <span className="font-bold text-slate-800 block">実践テーマ：</span>
                          <span>{milestone.exerciseTheme}</span>
                        </div>
                        <div>
                          <span className="font-bold text-slate-800 block">自宅宿題（1日3分）：</span>
                          <span className="text-slate-700">{milestone.homeWork}</span>
                        </div>
                        <div className="pt-1.5 border-t border-slate-100">
                          <span className="font-bold text-indigo-900 block flex items-center gap-1">
                            <ShoppingBag className="w-3 h-3 text-indigo-600" />
                            栄養相乗：
                          </span>
                          <span className="text-[11px] text-indigo-950">{milestone.nutritionSynergy}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] text-slate-500 flex items-center justify-between">
                      <span className="font-semibold text-slate-700">測定指標:</span>
                      <span className="text-right font-medium text-slate-600">{milestone.evalMetric}</span>
                    </div>
                  </div>
              </div>

              {/* 開催周期 ＆ 自社制作アプリ「cheer」による日常伴走フォローアップ */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-teal-50 via-cyan-50 to-indigo-50 border border-teal-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-black bg-teal-600 text-white uppercase tracking-wider">
                        開催周期 ＆ デジタル伴走
                      </span>
                      <span className="text-xs font-extrabold text-teal-950">
                        {APP_FOLLOWUP_INFO.cycle}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                      月1回の集合ワークショップで測定・フォーム修正を行い、次の開催までの1ヶ月間は<strong>自社制作ヘルスケアアプリ「cheer（チア）」</strong>を使って毎日の3分セルフケアやサプリ飲用を楽しく記録。三日坊主を防ぎ、3ヶ月後の確実な変化へ伴走します。
                    </p>
                  </div>
                </div>

                <a
                  href={APP_FOLLOWUP_INFO.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-teal-800 border border-teal-300 text-xs font-bold transition-all shadow-xs hover:scale-102 flex-shrink-0"
                >
                  <Smartphone className="w-3.5 h-3.5 text-teal-600" />
                  <span>自社アプリ cheer を見る</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* 3. Representative Exercises */}
            <div>
              <h4 className="text-base sm:text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-teal-600" />
                <span>ワークショップで直接伝授する代表エクササイズ例</span>
              </h4>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {currentPlan.representativeExercises.map((exercise, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 text-[10px] font-bold">
                          エクササイズ 0{idx + 1}
                        </span>
                        <span className="text-[11px] text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                          {exercise.targetMuscle}
                        </span>
                      </div>

                      <h5 className="font-extrabold text-sm sm:text-base text-slate-900">
                        {exercise.name}
                      </h5>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {exercise.description}
                      </p>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                        <span className="font-bold text-slate-800 block text-[11px]">効かせるポイント：</span>
                        <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                          {exercise.points.map((p, pIdx) => (
                            <li key={pIdx}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900 flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-bold">代償動作の注意：</span>
                        <span>{exercise.caution}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. FORDAYS Synergy Section (Nutrition × Movement) */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white border border-indigo-700/60 shadow-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center border border-indigo-400/30">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-indigo-300 font-bold uppercase tracking-wider block">
                      Nutrition & Mechanical Stress Synergy
                    </span>
                    <h5 className="text-lg font-black text-white">
                      FORDAYS製品との栄養相乗メカニズム
                    </h5>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-300 font-medium">推奨製品：</span>
                    {currentPlan.fordaysSynergy.recommendedProducts.map((prod, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedProductForModal(prod)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-700/80 hover:bg-indigo-600 text-white text-xs font-bold border border-indigo-400/60 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer group"
                        title="クリックしてなぜ効果的なのかを詳しく見る"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-indigo-300 group-hover:text-amber-300 transition-colors" />
                        <span>{prod}</span>
                        <span className="text-[10px] text-indigo-200 bg-indigo-900/60 px-1.5 py-0.5 rounded border border-indigo-500/40 group-hover:text-white">
                          解説
                        </span>
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-indigo-300/80 mt-1.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>製品名をクリックすると「なぜ効果的なのか」の科学的根拠がポップアップでご覧いただけます</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm mt-4 pt-4 border-t border-indigo-800/80">
                <div className="space-y-1">
                  <span className="text-indigo-300 font-bold block">生化学・生理学的機序：</span>
                  <p className="text-slate-300 leading-relaxed">
                    {currentPlan.fordaysSynergy.mechanism}
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-emerald-300 font-bold block">参加者が実感できるメリット：</span>
                  <p className="text-slate-300 leading-relaxed">
                    {currentPlan.fordaysSynergy.merit}
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Expected Results & CTA */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-teal-50 border border-teal-200">
              <div className="space-y-2">
                <h5 className="text-sm font-black text-teal-950 uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-700" />
                  <span>3ヶ月継続後に手に入る具体的な変化</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-teal-950">
                  {currentPlan.expectedResults.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                <button
                  onClick={() => onSelectPlanForConsult(currentPlan.title)}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-black text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>このプランで開催を申し込む</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 推奨製品詳細ポップアップモーダル */}
      <ProductSynergyModal
        productName={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
      />
    </section>
  );
};
