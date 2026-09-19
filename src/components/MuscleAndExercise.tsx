'use client';

import React, { useState } from 'react';
import { Dumbbell, Flame, HeartPulse, CheckCircle2, AlertCircle, Sparkles, ArrowRight, Activity, HelpCircle } from 'lucide-react';

interface MuscleAndExerciseProps {
  onSelectTerm: (termId: string) => void;
  onOpenPTModal: () => void;
}

export const MuscleAndExercise: React.FC<MuscleAndExerciseProps> = ({ onSelectTerm, onOpenPTModal }) => {
  const [fingerTestResult, setFingerTestResult] = useState<'fit' | 'gap' | 'over' | null>(null);

  return (
    <section id="muscle-care" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-semibold mb-3">
            <Dumbbell className="w-4 h-4 text-orange-600" />
            <span>運動生理学 ＆ 筋肉ケア</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            「サプリを飲むだけで筋肉がつく」はあり得ない。<br />
            運動（メカニカルストレス）が不可欠な生理学的理由
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            フォーデイズの「BCAA & グルタミン DX」は素晴らしい配合設計です。
            しかし、理学療法士として断言します。<strong className="text-slate-900">適切な運動負荷がなければ、アミノ酸は筋肉になりません。</strong>
          </p>
        </div>

        {/* 2-Column: BCAA Analysis vs Physiology Mechanism */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          {/* Left: Product Analysis (BCAA & Glutamine DX) */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  DX
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-600">アミノ酸加工食品（顆粒）</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    BCAA & グルタミン DX の実力
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                筋肉の材料となる必須アミノ酸の中でも、特に骨格筋代謝に直結する
                <button
                  onClick={() => onSelectTerm('bcaa')}
                  className="text-brand-600 underline font-semibold mx-1"
                >
                  BCAA（バリン・ロイシン・イソロイシン）
                </button>
                が1本に<strong>1,608mg</strong>贅沢に配合されています。
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">ロイシンによるmTORスイッチON：</strong>
                    筋タンパク質合成（MPS）の司令塔であるmTORを点火する必須アミノ酸。
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">グルタミン ＆ オルニチン（しじみ520粒分）：</strong>
                    ハードな活動後の筋肉分解抑制と肝臓での疲労物質アンモニア代謝を強力アシスト。
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">ビタミンD ＆ ビタミンB6：</strong>
                    筋タンパク質の取り込みやカルシウム代謝を調節する不可欠な補因子。
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-800">
              💡 <strong>推奨タイミング：</strong> 運動の直前〜直後、または活動前の摂取が血中アミノ酸濃度を維持するために最も効果的です。
            </div>
          </div>

          {/* Right: The Physiological Truth (Why Exercise is Mandatory) */}
          <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-slate-50 rounded-2xl p-6 sm:p-8 border-2 border-orange-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-orange-700">理学療法士が教える生理学の掟</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    運動刺激（メカニカルストレス）の絶対性
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                <p>
                  身体には<strong>「過負荷の原則（生体は負荷にしか適応しない）」</strong>があります。
                  筋肉は、使わなければ「不要なエネルギー消費源」とみなされ、加齢とともに容赦なく分解（
                  <button
                    onClick={() => onSelectTerm('sarcopenia')}
                    className="text-brand-600 underline font-semibold mx-1"
                  >
                    サルコペニア
                  </button>
                  ）が進みます。
                </p>

                <div className="bg-white p-4 rounded-xl border border-orange-200 shadow-sm space-y-2">
                  <div className="font-bold text-slate-900 flex items-center gap-2 text-xs">
                    <Activity className="w-4 h-4 text-orange-600" />
                    <span>筋合成の2段階ロック機構</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-600">
                    <li>
                      <strong className="text-slate-800">鍵1（運動）：</strong>
                      <button
                        onClick={() => onSelectTerm('mechanical_stress')}
                        className="text-orange-600 underline font-semibold mx-1"
                      >
                        メカニカルストレス
                      </button>
                      が筋線維を刺激し、「筋肉を作れ！」という細胞指令（mTORC1）が本格点火する。
                    </li>
                    <li>
                      <strong className="text-slate-800">鍵2（栄養）：</strong>
                      点火された工場に、BCAAや核酸という良質な材料が血流に乗って届く。
                    </li>
                  </ol>
                </div>

                <p className="font-semibold text-slate-900">
                  ⚠️ 鍵1（運動）を回さずに鍵2（サプリ）だけをいくら飲んでも、筋合成工場は動きません。余ったアミノ酸は単に排出されるだけです。
                </p>
              </div>
            </div>

            <div className="p-4 bg-orange-600 text-white rounded-xl text-xs space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>相乗効果の公式</span>
              </div>
              <p>
                【FORDAYS核酸（毛細血管新生・代謝）】＋【BCAA（アミノ酸材料）】＋【パーソナルトレーニング（適切な運動刺激）】＝ <strong>100歳でも動ける若々しい身体！</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Sarcopenia Self-Check: Finger-Ring Test */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider px-3 py-1 rounded-full bg-teal-950 border border-teal-800">
                1分セルフチェック
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2">
                サルコペニア（筋肉減少症）危険度「指輪っかテスト」
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                東京大学 高齢社会総合研究機構 飯島勝矢教授ら考案。ふくらはぎの太さで全身の筋肉量を推定します。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
              <button
                onClick={() => setFingerTestResult('over')}
                className={`p-4 rounded-xl border transition-all ${
                  fingerTestResult === 'over'
                    ? 'bg-teal-600/30 border-teal-400 text-white ring-2 ring-teal-400'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <div className="text-sm font-bold mb-1">囲めない</div>
                <div className="text-xs text-teal-300">筋肉量：十分</div>
                <div className="text-[11px] text-slate-400 mt-2">サルコペニア危険度【低】</div>
              </button>

              <button
                onClick={() => setFingerTestResult('fit')}
                className={`p-4 rounded-xl border transition-all ${
                  fingerTestResult === 'fit'
                    ? 'bg-amber-600/30 border-amber-400 text-white ring-2 ring-amber-400'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <div className="text-sm font-bold mb-1">ちょうど囲める</div>
                <div className="text-xs text-amber-300">筋肉量：境界域</div>
                <div className="text-[11px] text-slate-400 mt-2">サルコペニア危険度【中】</div>
              </button>

              <button
                onClick={() => setFingerTestResult('gap')}
                className={`p-4 rounded-xl border transition-all ${
                  fingerTestResult === 'gap'
                    ? 'bg-rose-600/30 border-rose-400 text-white ring-2 ring-rose-400'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <div className="text-sm font-bold mb-1">隙間ができる</div>
                <div className="text-xs text-rose-300">筋肉量：著明減少</div>
                <div className="text-[11px] text-slate-400 mt-2">サルコペニア危険度【高】⚠️</div>
              </button>
            </div>

            {/* Test result message */}
            {fingerTestResult && (
              <div className="bg-slate-800/90 border border-slate-700 p-5 rounded-2xl text-xs sm:text-sm text-slate-200 animate-fade-in space-y-2">
                {fingerTestResult === 'over' && (
                  <p>
                    ✅ <strong>素晴らしい状態です！</strong> 現在の筋肉量を維持するために、良質なアミノ酸補給と継続的な負荷トレーニングを維持しましょう。
                  </p>
                )}
                {fingerTestResult === 'fit' && (
                  <p>
                    ⚠️ <strong>注意が必要です。</strong> 50代以降は毎年1〜2%ずつ筋量が低下します。今すぐ「適切な筋力トレーニング」と「BCAA・核酸の補給」を開始することで、筋肉減少に歯止めをかけることができます。
                  </p>
                )}
                {fingerTestResult === 'gap' && (
                  <p>
                    🚨 <strong>早期の運動介入が不可欠です！</strong> 隙間ができる方は、転倒・骨折や将来の要介護リスクが数倍高くなります。自己流で激しい運動をすると膝や腰を痛めるため、理学療法士の指導のもと安全に筋力再建を図りましょう。
                  </p>
                )}
                <div className="pt-2 text-right">
                  <button
                    onClick={onOpenPTModal}
                    className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-bold text-xs underline"
                  >
                    理学療法士に運動プログラムを相談する <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
