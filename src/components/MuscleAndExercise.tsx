'use client';

import React, { useState } from 'react';
import { 
  Dumbbell, Flame, HeartPulse, CheckCircle2, AlertCircle, Sparkles, 
  ArrowRight, Activity, HelpCircle, Zap, Shield, ChevronRight, Target
} from 'lucide-react';

interface MuscleAndExerciseProps {
  onSelectTerm: (termId: string) => void;
  onOpenPTModal: () => void;
}

export const MuscleAndExercise: React.FC<MuscleAndExerciseProps> = ({ onSelectTerm, onOpenPTModal }) => {
  const [fingerTestResult, setFingerTestResult] = useState<'fit' | 'gap' | 'over' | null>(null);

  return (
    <section id="muscle" className="scroll-mt-16 py-20 bg-white border-b border-slate-200">
      {/* 互換用アンカー */}
      <div id="muscle-care" className="scroll-mt-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-bold mb-3">
            <Dumbbell className="w-4 h-4 text-orange-600" />
            <span>運動生理学 ＆ 筋肉ケアの真実</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            「サプリを飲むだけで筋肉がつく」はあり得ない。<br />
            運動（メカニカルストレス）が絶対不可欠な理由
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            フォーデイズの「BCAA & グルタミン DX」は素晴らしい配合設計です。
            しかし、理学療法士として断言します。<strong className="text-slate-900 font-bold">筋肉に物理的な負荷（メカニカルストレス）をかけない限り、飲んだアミノ酸は筋線維になりません。</strong>
          </p>
        </div>

        {/* Visual Banner: Fitness & PT Concept */}
        <div className="mb-14 rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative bg-slate-900 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-10 md:p-12 space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 uppercase tracking-wider">
                Physiology & Physical Therapy
              </span>
              <h3 className="text-2xl sm:text-3xl font-black leading-snug">
                サプリ（栄養）× 毛細血管（核酸）× 運動（理学療法士）<br />
                <span className="text-orange-400">三位一体で初めて筋肉は目覚める</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                アミノ酸をいくら補給しても、筋肉を動かさなければ「合成のスイッチ」はOFFのままです。
                さらに、どんなに良い栄養も、微小毛細血管がゴースト化していれば筋細胞へ届きません。
                <strong>「核酸ドリンクで毛細血管網を拓き、サプリで材料を満たし、パーソナルトレーニングで筋線維に点火する」</strong>——これこそが100歳まで歩ける身体をつくる最強の方程式です。
              </p>
            </div>
            <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
                alt="運動指導・筋力トレーニング風景"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* 2-Column: BCAA Analysis vs Mechanical Stress Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          {/* Left: Product Analysis (BCAA & Glutamine DX) */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-black text-lg shadow-md">
                  DX
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-600">公式資料「筋肉ケアで疲れに負けないカラダへ」検証</span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    BCAA & グルタミン DX の成分分析
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                筋肉のエネルギー源および合成シグナルとなる
                <button
                  onClick={() => onSelectTerm('bcaa')}
                  className="text-indigo-600 underline font-semibold mx-1 cursor-pointer"
                >
                  BCAA（バリン・ロイシン・イソロイシン）
                </button>
                が1包に<strong>1,608mg</strong>配合されています。
              </p>

              {/* Ingredient Breakdown Cards */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">① ロイシン中心のBCAA配合</span>
                    <span className="text-xs font-mono font-bold text-blue-600">1,608 mg</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    ロイシンは筋肉合成の司令塔「
                    <button
                      onClick={() => onSelectTerm('mtor')}
                      className="text-indigo-600 underline font-semibold cursor-pointer"
                    >
                      mTOR
                    </button>
                    」を活性化するトリガーアミノ酸。運動前後の素早い補給に適した遊離アミノ酸形態です。
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">② L-グルタミン</span>
                    <span className="text-xs font-mono font-bold text-emerald-600">筋分解抑制</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    体内で最も消費されやすいアミノ酸。激しい運動や加齢による筋肉の分解（カタボリズム）を食い止め、腸管粘膜の修復を支えます。
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">③ ビタミンD & クエン酸</span>
                    <span className="text-xs font-mono font-bold text-amber-600">筋機能・疲労回復</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    ビタミンD受容体（VDR）は速筋線維に多く分布し、筋力発揮に直結。クエン酸がエネルギー代謝（TCA回路）を回します。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-xs text-blue-900">
              <strong>理学療法士の判定：</strong>
              配合バランスは運動生理学的に極めて理にかなっています。顆粒タイプで持ち運びやすく、トレーニング30分前または運動直後の摂取に最適な設計です。
            </div>
          </div>

          {/* Right: The Absolute Necessity of Mechanical Stress */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 text-white flex items-center justify-center font-black text-lg shadow-md">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-orange-600">分子生物学が生んだ結論</span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    メカニカルストレスが必須なシグナル機構
                  </h3>
                </div>
              </div>

              {/* Signal Cascade Visual Box */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 mb-6">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  筋肉が合成されるまでのシグナル伝達フロー
                </h4>

                <div className="space-y-3">
                  {/* Step 1 */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs">
                    <span className="w-6 h-6 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center flex-shrink-0">1</span>
                    <div>
                      <strong className="text-orange-900 block">物理的負荷（メカニカルストレス）</strong>
                      <span className="text-slate-600">筋収縮によって筋細胞膜のメカノセンサー（インテグリン）が歪みを感知</span>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-xs">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0">2</span>
                    <div>
                      <strong className="text-indigo-900 block">
                        mTORC1複合体の点火（+ ロイシン協調）
                      </strong>
                      <span className="text-slate-600">物理刺激とBCAA（ロイシン）が揃って初めてmTORが本格活性化</span>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0">3</span>
                    <div>
                      <strong className="text-emerald-900 block">筋タンパク質合成（MPS）の爆発</strong>
                      <span className="text-slate-600">アミノ酸が筋線維のアクチン・ミオシンに取り込まれ筋肉が増強</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-800">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>サプリだけ飲んでも筋肉がつかない理由</span>
                </div>
                <p className="leading-relaxed">
                  大工（mTOR）に木材（BCAA）だけを届けても、家を建てる命令（運動の負荷刺激）がなければ木材はそのまま放置され、最終的に体外へ排泄されるか脂肪に変わります。「刺激があって初めて材料が活きる」のです。
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">自己流の筋トレに不安がある方へ</span>
              <button
                onClick={onOpenPTModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 underline"
              >
                <span>理学療法士の個別指導を見る</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Tool: Yubi-Wakka Test (指輪っかテスト) */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-4">
              <Target className="w-4 h-4 text-cyan-400" />
              <span>30秒でわかるセルフチェック</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3">
              ふくらはぎ「指輪っかテスト」（サルコペニア簡易判定）
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              両手の親指と人差し指で「輪っか」を作り、利き足ではない方のふくらはぎの一番太い部分を囲んでみてください。
              東京大学高齢社会総合研究機構が開発した、筋肉量減少（サルコペニア）のリスクを予測する簡易テストです。
            </p>

            {/* Test Selection Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <button
                onClick={() => setFingerTestResult('fit')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  fingerTestResult === 'fit'
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-lg scale-102'
                    : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white'
                }`}
              >
                <div className="text-sm font-bold mb-1">① ちょうど囲める</div>
                <div className="text-[11px] opacity-80">指先がぴったり接する</div>
              </button>

              <button
                onClick={() => setFingerTestResult('gap')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  fingerTestResult === 'gap'
                    ? 'bg-rose-500 text-white border-rose-400 font-bold shadow-lg scale-102'
                    : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white'
                }`}
              >
                <div className="text-sm font-bold mb-1">② 隙間ができる</div>
                <div className="text-[11px] opacity-80">ふくらはぎが細く隙間がある</div>
              </button>

              <button
                onClick={() => setFingerTestResult('over')}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  fingerTestResult === 'over'
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-lg scale-102'
                    : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white'
                }`}
              >
                <div className="text-sm font-bold mb-1">③ 囲めない</div>
                <div className="text-[11px] opacity-80">太くて指が届かない</div>
              </button>
            </div>

            {/* Result Box */}
            {fingerTestResult && (
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-600 animate-fade-in text-xs sm:text-sm">
                {fingerTestResult === 'gap' && (
                  <div className="space-y-2 text-rose-300">
                    <div className="flex items-center gap-2 font-bold text-base text-rose-400">
                      <AlertCircle className="w-5 h-5" />
                      <span>【要注意】サルコペニア（筋力低下）リスクが約6.6倍高くなっています</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed text-xs">
                      ふくらはぎの筋肉量が低下しているサインです。放置すると転倒や歩行速度低下のリスクが跳ね上がります。今すぐ<strong>「BCAA＋核酸による血流確保」と「理学療法士監修の筋トレ」</strong>を開始することをお勧めします。
                    </p>
                  </div>
                )}

                {fingerTestResult === 'fit' && (
                  <div className="space-y-2 text-amber-300">
                    <div className="flex items-center gap-2 font-bold text-base text-amber-400">
                      <Activity className="w-5 h-5" />
                      <span>【注意】サルコペニアの予備軍です</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed text-xs">
                      標準的な筋肉量ですが、加齢とともに年間約1%ずつ筋肉は減少しやすくなります。今のうちから運動習慣と適切なタンパク質・アミノ酸摂取を意識しましょう。
                    </p>
                  </div>
                )}

                {fingerTestResult === 'over' && (
                  <div className="space-y-2 text-emerald-300">
                    <div className="flex items-center gap-2 font-bold text-base text-emerald-400">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>【良好】十分な下肢筋肉量が保たれています</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed text-xs">
                      筋肉量は良好です！この状態を70代、80代、100歳まで維持できるよう、毛細血管の血流サポートと適度な運動負荷を継続していきましょう。
                    </p>
                  </div>
                )}

                <div className="mt-4 pt-3 border-t border-slate-700 flex justify-end">
                  <button
                    onClick={onOpenPTModal}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-colors"
                  >
                    <span>理学療法士に運動メニューを無料相談する</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
