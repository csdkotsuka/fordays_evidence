'use client';

import React, { useState } from 'react';
import { 
  HelpCircle, Sparkles, CheckCircle2, ArrowRight, RefreshCw, 
  Target, Footprints, Flame, HeartHandshake, ShieldAlert, Award
} from 'lucide-react';
import { WORKSHOP_PLANS } from '@/data/workshopPlans';

interface WorkshopPlanDiagnosticianProps {
  onSelectPlan: (planId: string) => void;
  onOpenConsultModalWithPlan: (planTitle: string) => void;
}

export const WorkshopPlanDiagnostician: React.FC<WorkshopPlanDiagnosticianProps> = ({
  onSelectPlan,
  onOpenConsultModalWithPlan
}) => {
  const [selectedTarget, setSelectedTarget] = useState<string>('women');
  const [selectedPriority, setSelectedPriority] = useState<string>('hip');

  // 診断結果の計算
  const getDiagnosedPlanId = () => {
    if (selectedPriority === 'hip') return 'hip-core-beauty';
    if (selectedPriority === 'walking') return 'active-walking-100';
    if (selectedPriority === 'posture' || selectedPriority === 'vitality') return 'anti-aging-full-body';
    if (selectedPriority === 'pelvic' || selectedPriority === 'women_health') return 'pelvic-autonomic-women';
    if (selectedPriority === 'fall_prevention' || selectedPriority === 'joints') return 'fall-prevention-joints';
    
    // フォールバック
    if (selectedTarget === 'senior') return 'active-walking-100';
    if (selectedTarget === 'women') return 'hip-core-beauty';
    return 'anti-aging-full-body';
  };

  const diagnosedPlanId = getDiagnosedPlanId();
  const diagnosedPlan = WORKSHOP_PLANS.find(p => p.id === diagnosedPlanId) || WORKSHOP_PLANS[0];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold mb-3">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>30秒簡単セルフ診断</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            あなたのサロン・イベントに最適なワークショッププラン診断
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            参加者の主な属性や解決したい悩みをタップするだけで、最も満足度と集客力が高まるプランを自動選定します。
          </p>
        </div>

        {/* Diagnostic Form */}
        <div className="bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
          {/* Question 1: 対象者属性 */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-500 text-slate-950 text-xs flex items-center justify-center font-black">1</span>
              <span>主な参加者・サロン会員様の年齢層や属性は？</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'women', label: '女性中心（30代〜60代）', desc: '美容・体型維持への関心が高い' },
                { id: 'senior', label: 'シニア世代（65歳〜80代・90代）', desc: '健康寿命・足腰の不安が中心' },
                { id: 'mixed', label: '男女混合・全年代（40代〜70代）', desc: '疲労回復・全身の若返りを希望' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedTarget(opt.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedTarget === opt.id
                      ? 'bg-teal-500/20 border-teal-400 text-white shadow-sm'
                      : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <span className="font-bold text-xs sm:text-sm block">{opt.label}</span>
                  <span className="text-[11px] text-slate-400 mt-1 block">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: 最も関心・悩みの深いテーマ */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-500 text-slate-950 text-xs flex items-center justify-center font-black">2</span>
              <span>今、最も参加者が解決したい「身体の悩み」は？</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'hip', label: '美尻・反り腰・ポッコリお腹', icon: '🍑' },
                { id: 'walking', label: '歩行速度・すり足・つまずき', icon: '👟' },
                { id: 'posture', label: '猫背・巻き肩・首肩こり・代謝', icon: '✨' },
                { id: 'pelvic', label: '尿もれ不安・骨盤底筋・更年期', icon: '🌸' },
                { id: 'fall_prevention', label: 'ふらつき・転倒恐怖・関節痛', icon: '🛡️' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedPriority(opt.id)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                    selectedPriority === opt.id
                      ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-sm'
                      : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <span className="text-xl flex-shrink-0">{opt.icon}</span>
                  <span className="font-bold text-xs leading-tight">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Diagnosed Result Box */}
          <div className="mt-8 pt-6 border-t border-slate-700/80">
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-teal-950/60 to-slate-900 border-2 border-teal-500/60">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-teal-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  診断結果：あなたに最適なプラン
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-teal-400 text-slate-950">
                  適合度 98%
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-black text-white mt-1">
                {diagnosedPlan.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                {diagnosedPlan.subTitle}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-300 space-y-1">
                  <div className="text-teal-300 font-semibold">
                    🔑 3ヶ月の主眼：{diagnosedPlan.threeMonthRoadmap[2].goal}
                  </div>
                  <div className="text-slate-400">
                    🥤 推奨栄養：{diagnosedPlan.fordaysSynergy.recommendedProducts.join('・')}
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => onSelectPlan(diagnosedPlan.id)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    <span>プラン詳細を見る</span>
                  </button>

                  <button
                    onClick={() => onOpenConsultModalWithPlan(diagnosedPlan.title)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 text-xs font-black transition-all hover:scale-105 cursor-pointer shadow-md"
                  >
                    <span>このプランで相談</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
