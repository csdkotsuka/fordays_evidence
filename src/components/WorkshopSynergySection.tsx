'use client';

import React from 'react';
import { 
  Activity, Zap, Dumbbell, ShoppingBag, CheckCircle2 
} from 'lucide-react';

export const WorkshopSynergySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-900 border border-cyan-200 text-xs font-bold mb-3">
            <Activity className="w-4 h-4 text-cyan-700" />
            <span>健康増進の本質・相乗医学</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            なぜ「飲むだけ」「動くだけ」では限界があるのか？<br className="hidden sm:inline" />
            <span className="text-teal-700">細胞栄養 × メカニカルストレス</span> の必然性
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            サプリメント（栄養）は身体を作る「建材」であり、運動療法（メカニカルストレス）は細胞に修復と強化を命じる「現場監督（シグナル）」です。<br className="hidden sm:inline" />
            どちらか片方だけでは、100年身体を築くことはできません。
          </p>
        </div>

        {/* 2 Pillars Comparison / Integration Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-16">
          {/* Pillar 1: FORDAYS Nutrition */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-50/80 to-slate-50 rounded-3xl p-6 sm:p-7 border border-indigo-200/80 shadow-sm relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-black mb-3">
              <ShoppingBag className="w-3.5 h-3.5 text-indigo-600" />
              <span>内側からの細胞アプローチ</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
              FORDAYS：高純度核酸 ＆ コラーゲン栄養
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              水溶性核酸（DNA・RNA）と高純度コラーゲンペプチド、必須アミノ酸が、血流に乗って全身の細胞へ届きます。
            </p>
            <div className="space-y-2 bg-white rounded-2xl p-4 border border-indigo-100 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>細胞分裂・遺伝子修復シグナルの供給（サルベージ経路）</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>筋膜・靭帯・軟骨のコラーゲン結合組織の原料供給</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>ミトコンドリア活性と末梢毛細血管の血流サポート</span>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-indigo-950 text-indigo-200 text-[11px] leading-snug">
              ⚠️ <strong>課題：</strong> 運動による物理刺激がないと、身体は「どこを優先的に修復・強化すべきか」を判断できません。
            </div>
          </div>

          {/* Plus Sign */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center my-2 lg:my-0">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-teal-600/30">
              ×
            </div>
            <span className="text-xs font-extrabold text-teal-800 mt-2 uppercase tracking-wider">
              相乗効果
            </span>
          </div>

          {/* Pillar 2: Rehabilitation Exercise */}
          <div className="lg:col-span-5 bg-gradient-to-br from-teal-50/80 to-slate-50 rounded-3xl p-6 sm:p-7 border border-teal-200/80 shadow-sm relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-black mb-3">
              <Dumbbell className="w-3.5 h-3.5 text-teal-600" />
              <span>外側からの物理アプローチ</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
              運動療法：メカニカルストレス ＆ 動作再学習
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              理学療法士が設計する安全な負荷と関節可動域運動により、眠っていた神経筋回路を再活性化します。
            </p>
            <div className="space-y-2 bg-white rounded-2xl p-4 border border-teal-100 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>筋線維への微細刺激（mTOR経路の活性化スイッチON）</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>骨盤・脊柱のアライメント調整（代償動作の完全解除）</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>関節滑液のポンピング循環と柔軟性の向上</span>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-teal-950 text-teal-200 text-[11px] leading-snug">
              ⚠️ <strong>課題：</strong> 高品質なアミノ酸や核酸栄養が不足した状態で運動すると、筋分解が進み疲労骨折や関節炎を招きます。
            </div>
          </div>
        </div>

        {/* The Breakthrough Synergy Callout */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-6 sm:p-10 border border-teal-700/50 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-teal-400 text-slate-950 flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-lg">
              <Zap className="w-9 h-9" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                Scientific Synergistic Formula
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                「飲んで動く」からこそ、3ヶ月で細胞と筋骨格が生まれ変わる
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ハーバード大学のFiatarone教授らによるランドマーク研究でも証明されているように、
                <strong>90代の超高齢者であっても適切な負荷と栄養を与えれば筋力は174%向上</strong>します。
                本ワークショップでは、このエビデンスを参加者全員が安全に体感できる形式に昇華させています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
