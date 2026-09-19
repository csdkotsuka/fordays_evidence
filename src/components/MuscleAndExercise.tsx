'use client';

import React, { useState } from 'react';
import { 
  Dumbbell, Flame, HeartPulse, CheckCircle2, AlertCircle, Sparkles, 
  ArrowRight, Activity, HelpCircle, Zap, Shield, ChevronRight, Target,
  Timer, Footprints, CheckSquare, ArrowUpRight, ShieldAlert, Clock
} from 'lucide-react';

interface MuscleAndExerciseProps {
  onSelectTerm: (termId: string) => void;
  onOpenPTModal: () => void;
}

export const MuscleAndExercise: React.FC<MuscleAndExerciseProps> = ({ onSelectTerm, onOpenPTModal }) => {
  const [activeTestTab, setActiveTestTab] = useState<'yubi' | 'one_leg' | 'cs30'>('yubi');
  const [fingerTestResult, setFingerTestResult] = useState<'fit' | 'gap' | 'over' | null>(null);
  const [oneLegResult, setOneLegResult] = useState<'excellent' | 'good' | 'caution' | 'danger' | null>(null);
  const [cs30Result, setCs30Result] = useState<'high' | 'normal' | 'low' | 'alert' | null>(null);

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
            しかし、運動生理学およびリハビリ専門職として断言します。<strong className="text-slate-900 font-bold">筋肉に物理的な負荷（メカニカルストレス）をかけない限り、飲んだアミノ酸は筋線維になりません。</strong>
          </p>
        </div>

        {/* Visual Banner: Fitness & PT Concept */}
        <div className="mb-14 rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative bg-slate-900 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-10 md:p-12 space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 uppercase tracking-wider">
                Physiology & Exercise Science
              </span>
              <h3 className="text-2xl sm:text-3xl font-black leading-snug">
                サプリ（栄養）× 毛細血管（核酸）× 運動（専門指導）<br />
                <span className="text-orange-400">三位一体で初めて筋肉は目覚める</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                アミノ酸をいくら補給しても、筋肉を動かさなければ「合成のスイッチ」はOFFのままです。
                さらに、どんなに良い栄養も、微小毛細血管がゴースト化していれば筋細胞へ届きません。
                <strong>「核酸ドリンクで毛細血管網を拓き、サプリで材料を満たし、適切な運動負荷で筋線維に点火する」</strong>——これこそが100歳まで歩ける運動寿命をつくる最強の方程式です。
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
              <strong>専門職の判定：</strong>
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
                <span>専門職の個別運動指導を見る</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Self-Check Suite (3 Tests) */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-4">
              <Target className="w-4 h-4 text-cyan-400" />
              <span>自宅でできる身体機能セルフチェック</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-2">
              筋肉量 ＆ 神経・バランス総合力のセルフ判定
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              筋力だけでなく、目・耳（前庭覚）・足の裏のセンサー（深部感覚）と筋肉が連動する「神経系の総合力」を安全に評価します。
              ※転倒防止のため、必ず椅子の背もたれやすぐ壁に触れる環境、または2人1組で実施してください。
            </p>

            {/* Test Selection Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-700 pb-4">
              <button
                onClick={() => setActiveTestTab('yubi')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTestTab === 'yubi'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg scale-102'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Footprints className="w-4 h-4" />
                <span>① 指輪っかテスト（筋肉量）</span>
              </button>

              <button
                onClick={() => setActiveTestTab('one_leg')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTestTab === 'one_leg'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg scale-102'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>② 開眼片足立ち（神経・筋総合力）</span>
              </button>

              <button
                onClick={() => setActiveTestTab('cs30')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTestTab === 'cs30'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg scale-102'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Timer className="w-4 h-4" />
                <span>③ 30秒立ち上がり（下肢筋力）</span>
              </button>
            </div>

            {/* TAB 1: 指輪っかテスト */}
            {activeTestTab === 'yubi' && (
              <div className="space-y-6 animate-fade-in">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  両手の親指と人差し指で「輪っか」を作り、利き足ではない方のふくらはぎの一番太い部分を囲んでみてください。
                  東京大学高齢社会総合研究機構が開発したサルコペニア簡易指標です。
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    onClick={() => setFingerTestResult('fit')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
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
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
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
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      fingerTestResult === 'over'
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-lg scale-102'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white'
                    }`}
                  >
                    <div className="text-sm font-bold mb-1">③ 囲めない</div>
                    <div className="text-[11px] opacity-80">太くて指が届かない</div>
                  </button>
                </div>

                {fingerTestResult && (
                  <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-600 text-xs sm:text-sm">
                    {fingerTestResult === 'gap' && (
                      <div className="space-y-2 text-rose-300">
                        <div className="flex items-center gap-2 font-bold text-base text-rose-400">
                          <AlertCircle className="w-5 h-5" />
                          <span>【要注意】サルコペニア（筋力低下）リスクが約6.6倍</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed text-xs">
                          ふくらはぎの筋肉量が低下しているサインです。今すぐ「BCAA＋核酸による血流確保」と「専門指導に基づく適切な筋トレ」を開始することをお勧めします。
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
                          標準的な筋肉量ですが、加齢とともに減少が加速します。今のうちから運動習慣とアミノ酸補給を意識しましょう。
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
                          筋肉量は良好です！この状態を70代、80代、100歳まで維持できるよう、適度な運動負荷を継続していきましょう。
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: 開眼片足立ちテスト */}
            {activeTestTab === 'one_leg' && (
              <div className="space-y-6 animate-fade-in">
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 text-xs text-slate-300 leading-relaxed space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <ShieldAlert className="w-4 h-4" />
                    <span>なぜ「閉眼」ではなく「開眼（椅子サポートあり）」なのか？</span>
                  </div>
                  <p>
                    目を閉じた片足立ちは視覚遮断により転倒リスクが極めて高いため、一般の方には危険です。
                    一方、<strong>「開眼片足立ち」</strong>は椅子の背もたれにすぐ手が触れられる位置で行うことで安全を担保しながら、
                    <strong>「前庭覚（耳のバランス）・深部感覚（足裏の圧力センサー）・中殿筋（骨盤の安定）・小脳系の協調」</strong>という【神経・筋の総合力】を厳密に測定できます（厚労省・日本整形外科学会基準）。
                  </p>
                  <p className="text-[11px] text-amber-300">
                    ※左右どちらの手も腰に当て、片足を床から約5cm上げます。バランスが崩れたり、支持脚がずれたり、椅子に手をついた時点で計測終了です。
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button
                    onClick={() => setOneLegResult('excellent')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      oneLegResult === 'excellent'
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-lg scale-102'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white'
                    }`}
                  >
                    <div className="text-sm font-bold mb-1">60秒以上</div>
                    <div className="text-[11px] opacity-80">40〜50代基準クリア</div>
                  </button>

                  <button
                    onClick={() => setOneLegResult('good')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      oneLegResult === 'good'
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-lg scale-102'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white'
                    }`}
                  >
                    <div className="text-sm font-bold mb-1">30〜59秒</div>
                    <div className="text-[11px] opacity-80">60〜70代基準クリア</div>
                  </button>

                  <button
                    onClick={() => setOneLegResult('caution')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      oneLegResult === 'caution'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-lg scale-102'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white'
                    }`}
                  >
                    <div className="text-sm font-bold mb-1">15〜29秒</div>
                    <div className="text-[11px] opacity-80">運動機能低下サイン</div>
                  </button>

                  <button
                    onClick={() => setOneLegResult('danger')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      oneLegResult === 'danger'
                        ? 'bg-rose-500 text-white border-rose-400 font-bold shadow-lg scale-102'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white'
                    }`}
                  >
                    <div className="text-sm font-bold mb-1">15秒未満</div>
                    <div className="text-[11px] opacity-80">転倒・ロコモ高リスク</div>
                  </button>
                </div>

                {oneLegResult && (
                  <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-600 text-xs sm:text-sm">
                    {oneLegResult === 'excellent' && (
                      <div className="space-y-2 text-emerald-300">
                        <div className="flex items-center gap-2 font-bold text-base text-emerald-400">
                          <CheckCircle2 className="w-5 h-5" />
                          <span>【優秀】神経・筋バランスは極めて高水準です</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed text-xs">
                          骨盤を支える中殿筋や体幹インナーマッスル、足底感覚が鋭く協調しています。この運動寿命を維持するため、定期的な負荷トレーニングを継続しましょう。
                        </p>
                      </div>
                    )}
                    {oneLegResult === 'good' && (
                      <div className="space-y-2 text-cyan-300">
                        <div className="flex items-center gap-2 font-bold text-base text-cyan-400">
                          <CheckCircle2 className="w-5 h-5" />
                          <span>【良好】標準的な自立歩行バランスを保持しています</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed text-xs">
                          日常歩行には十分な平衡感覚があります。70代・80代でもこれを維持できるよう、椅子を使ったスクワットやつま先立ち運動を取り入れましょう。
                        </p>
                      </div>
                    )}
                    {oneLegResult === 'caution' && (
                      <div className="space-y-2 text-amber-300">
                        <div className="flex items-center gap-2 font-bold text-base text-amber-400">
                          <AlertCircle className="w-5 h-5" />
                          <span>【注意】バランス感覚・股関節支持力が低下傾向です</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed text-xs">
                          歩行時のふらつきや階段の降段で不安が出やすいレベルです。中殿筋の筋力強化と、核酸・BCAAによる筋血流改善を強く推奨します。
                        </p>
                      </div>
                    )}
                    {oneLegResult === 'danger' && (
                      <div className="space-y-2 text-rose-300">
                        <div className="flex items-center gap-2 font-bold text-base text-rose-400">
                          <AlertCircle className="w-5 h-5" />
                          <span>【要注意】ロコモティブシンドローム（運動器不安定症）の兆候</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed text-xs">
                          15秒未満は、つまずきや転倒骨折のリスクが跳ね上がります。自己流ではなく、リハビリ専門職の評価のもとで安全な再教育プログラムを開始してください。
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: 30秒椅子立ち上がりテスト（CS-30） */}
            {activeTestTab === 'cs30' && (
              <div className="space-y-6 animate-fade-in">
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 text-xs text-slate-300 leading-relaxed space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold">
                    <Clock className="w-4 h-4" />
                    <span>CS-30（30-Second Chair Stand Test）のやり方</span>
                  </div>
                  <p>
                    椅子に浅く腰掛け、両手を胸の前でクロスします。30秒間で「完全に立ち上がり、再び座る」動作を何回繰り返せるかを数えます。
                    椅子があるため転倒の危険が極めて少なく、大腿四頭筋・殿筋群の出力と神経系のスピードを測る世界標準テストです。
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button
                    onClick={() => setCs30Result('high')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      cs30Result === 'high'
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-lg scale-102'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white'
                    }`}
                  >
                    <div className="text-sm font-bold mb-1">20回以上</div>
                    <div className="text-[11px] opacity-80">極めて力強い下肢筋力</div>
                  </button>

                  <button
                    onClick={() => setCs30Result('normal')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      cs30Result === 'normal'
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-lg scale-102'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white'
                    }`}
                  >
                    <div className="text-sm font-bold mb-1">15〜19回</div>
                    <div className="text-[11px] opacity-80">健康的な日常生活レベル</div>
                  </button>

                  <button
                    onClick={() => setCs30Result('low')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      cs30Result === 'low'
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-lg scale-102'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white'
                    }`}
                  >
                    <div className="text-sm font-bold mb-1">10〜14回</div>
                    <div className="text-[11px] opacity-80">筋持久力低下のサイン</div>
                  </button>

                  <button
                    onClick={() => setCs30Result('alert')}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      cs30Result === 'alert'
                        ? 'bg-rose-500 text-white border-rose-400 font-bold shadow-lg scale-102'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white'
                    }`}
                  >
                    <div className="text-sm font-bold mb-1">10回未満</div>
                    <div className="text-[11px] opacity-80">立ち座り・階段の危険域</div>
                  </button>
                </div>

                {cs30Result && (
                  <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-600 text-xs sm:text-sm">
                    {cs30Result === 'high' && (
                      <div className="space-y-2 text-emerald-300">
                        <div className="flex items-center gap-2 font-bold text-base text-emerald-400">
                          <CheckCircle2 className="w-5 h-5" />
                          <span>【高機能】下肢筋力・神経出力ともに申し分ありません</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed text-xs">
                          階段や坂道も軽快に登れる筋力があります。80代・90代でもこの力強さを保てるよう、適切な運動処方を継続しましょう。
                        </p>
                      </div>
                    )}
                    {cs30Result === 'normal' && (
                      <div className="space-y-2 text-cyan-300">
                        <div className="flex items-center gap-2 font-bold text-base text-cyan-400">
                          <CheckCircle2 className="w-5 h-5" />
                          <span>【標準】自立した生活を送るための筋力があります</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed text-xs">
                          良好ですが、油断すると年間1〜2%ずつ筋力が衰えます。BCAAの摂取と週2回の筋トレで筋肉の山（運動貯蓄）を守りましょう。
                        </p>
                      </div>
                    )}
                    {cs30Result === 'low' && (
                      <div className="space-y-2 text-amber-300">
                        <div className="flex items-center gap-2 font-bold text-base text-amber-400">
                          <AlertCircle className="w-5 h-5" />
                          <span>【注意】大腿四頭筋の衰えが始まっています</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed text-xs">
                          椅子から立つ時に手すりや膝に手をつきたくなっていませんか？今から負荷運動を習慣化すれば、確実に回復できます。
                        </p>
                      </div>
                    )}
                    {cs30Result === 'alert' && (
                      <div className="space-y-2 text-rose-300">
                        <div className="flex items-center gap-2 font-bold text-base text-rose-400">
                          <AlertCircle className="w-5 h-5" />
                          <span>【要注意】日常生活動作の自立が脅かされる水準です</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed text-xs">
                          10回未満は筋力（MVC）が著しく低下しています。無理な運動は膝痛を悪化させるため、リハビリ専門職に適切な負荷設定をご相談ください。
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                テスト結果をもとに、あなたの筋力（MVC）に合ったメニューを作成します
              </span>
              <button
                onClick={onOpenPTModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-colors"
              >
                <span>専門職に無料相談する</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature Banner: Link to Exercise Prescription Dedicated Page */}
        <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-r from-teal-900 via-slate-900 to-indigo-950 text-white border border-teal-500/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold">
              <Dumbbell className="w-4 h-4" />
              <span>40代〜90代のための臨床運動学</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black leading-snug">
              「80代・90代でも筋肉は絶対に育つ。」<br />
              MVC（最大筋力）測定と下肢・体幹の安全な運動処方ガイド
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              適正な負荷量（MVC比率）と正しいフォームを守れば、何歳からでも危険なく筋力向上が可能です。
              大腿四頭筋・中殿筋・体幹インナー（腹横筋・多裂筋）の部位別処方を別ページで詳しく解説しています。
            </p>
          </div>
          <a
            href="/exercise-prescription"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 font-black text-sm shadow-lg shadow-teal-500/20 transition-all hover:scale-105"
          >
            <span>運動処方の詳細ガイドを読む</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
