'use client';

import React, { useState } from 'react';
import { 
  Dumbbell, ShieldCheck, HeartPulse, ArrowLeft, CheckCircle2, AlertTriangle, 
  Activity, BookOpen, ExternalLink, Zap, ChevronRight, Sparkles, UserCheck, 
  ArrowRight, Award, Target, Flame
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PersonalTraining } from '@/components/PersonalTraining';

export default function ExercisePrescriptionPage() {
  const [isPTModalOpen, setIsPTModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'principles' | 'muscles' | 'exercises'>('principles');

  const handleOpenPTModal = () => {
    setIsPTModalOpen(true);
  };

  const handleClosePTModal = () => {
    setIsPTModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* グローバルヘッダー */}
      <Header onOpenPTModal={handleOpenPTModal} />

      <main className="flex-grow">
        {/* Breadcrumb & Navigation */}
        <div className="bg-slate-900 border-b border-slate-800 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-4">
              <a
                href="/"
                className="inline-flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>ホーム（はじめての方）</span>
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="/evidence"
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>エビデンス検証ポータル（特許・論文原本）</span>
              </a>
            </div>
            <span className="text-slate-400 hidden sm:inline">臨床運動学 ＆ 運動処方ガイド</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-xs sm:text-sm font-bold text-teal-300">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>40代から80代・90代までの臨床運動学</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              「80代・90代でも筋肉は絶対に育つ。」<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-300">
                MVC（最大筋力）測定と安全な運動処方の全貌
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              「高齢だから運動は危ない」「もう歳だから筋肉はつかない」というのは完全な迷信です。<br className="hidden sm:block" />
              危険なのは年齢ではなく、<strong>「その人の筋力（MVC）を無視した過負荷」</strong>と<strong>「間違ったフォーム（代償動作）」</strong>です。
              個人の能力を正しく評価し、適度な負荷率を守れば、何歳からでも安全かつ劇的な筋力向上が狙えます。
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={handleOpenPTModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-teal-500/20 transition-all hover:scale-105"
              >
                <UserCheck className="w-4 h-4" />
                <span>自分のMVCに合った運動メニューを無料相談</span>
              </button>
            </div>
          </div>
        </section>

        {/* Fiatarone 90s Study Landmark Evidence Box */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 font-black text-xl shadow-md">
                90s
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-200 text-emerald-900 text-xs font-bold">
                    世界的ランドマーク研究
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    Fiatarone MA et al. JAMA 1990; 263(22):3029-34 / NEJM 1994; 330:1769-75
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  平均年齢90.2歳の虚弱高齢者でも、筋力は平均174%増加した
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ハーバード大学医学部のフィアットローネ博士らは、介護施設に入所する86〜96歳（平均90.2歳）の超高齢者に対し、8週間の漸進的レジスタンストレーニングを実施。
                  結果、<strong>大腿四頭筋の筋力が平均174%増加、大腿筋横断面積（CTスキャン測定）が9%肥大、タンデム歩行速度が48%向上</strong>し、杖なしで歩行可能になった被験者も出ました。
                </p>
                <div className="p-3 rounded-xl bg-white border border-emerald-200 text-xs text-emerald-900 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>結論：筋細胞の適応能に「年齢制限」は存在しない。適切な刺激さえ入れば筋肉は必ず応える。</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation for Detailed Sections */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300 max-w-full overflow-x-auto shadow-inner">
              <button
                onClick={() => setActiveTab('principles')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'principles'
                    ? 'bg-white text-teal-800 shadow-md scale-102'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ① MVC（最大筋力）と安全負荷設計
              </button>
              <button
                onClick={() => setActiveTab('muscles')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'muscles'
                    ? 'bg-white text-teal-800 shadow-md scale-102'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ② ターゲット筋群（下肢 ＋ 体幹）
              </button>
              <button
                onClick={() => setActiveTab('exercises')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'exercises'
                    ? 'bg-white text-teal-800 shadow-md scale-102'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ③ 実践！安全な5大エクササイズ
              </button>
            </div>
          </div>

          {/* TAB 1: MVC Principles & Safety */}
          {activeTab === 'principles' && (
            <div className="space-y-8 animate-fade-in">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Concept of Exercise Prescription</span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      なぜ「MVC（最大随意筋力）」の把握が不可欠なのか？
                    </h2>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>MVC（Maximum Voluntary Contraction: 最大随意等尺性収縮力）</strong>とは、被験者が自発的に発揮できる最大の筋力のことです。
                  重いバーベルを持ち上げる必要は一切ありません。自重や椅子、セラバンド運動であっても、
                  <strong className="text-slate-900">「その人個人の現在の最大能力（MVC）に対して、何％の負荷がかかっているか」</strong>を設計することが、運動処方の生命線です。
                </p>

                {/* 3 Age-Bracket Prescriptions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-blue-600">40〜50代</span>
                        <span className="text-xs font-mono font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">貯蓄期</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-base mb-1">60〜75% MVC</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        10〜15回で限界を迎える中高強度。筋肥大、基礎代謝向上、骨密度増大、インスリン感受性改善を狙い、将来の「運動貯金」を最大化します。
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                      頻度: 週2〜3回 / 各種目2〜3セット
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-emerald-600">60〜70代</span>
                        <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">自立・予防期</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-base mb-1">40〜60% MVC</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        15〜20回反復可能な中強度。関節や血圧に過度な負担をかけず、毛細血管網の維持、歩行速度の維持、サルコペニアの予防を達成します。
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                      頻度: 週2〜3回 / 各種目2セット
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold text-teal-800">80〜90代</span>
                        <span className="text-xs font-mono font-bold bg-teal-200 text-teal-900 px-2 py-0.5 rounded">機能再建期</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-base mb-1">30〜40% MVC</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        自重または等尺性（静止）収縮を中心とした低〜中強度。椅子や壁支持で転倒ゼロを担保し、神経系の再活性化と立ち座り動作の再獲得を最優先します。
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-teal-200 text-[11px] text-teal-800">
                      頻度: 週2回（毎日少しずつでも可） / 1〜2セット
                    </div>
                  </div>
                </div>

                {/* 3 Absolute Safety Rules */}
                <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-4">
                  <h4 className="font-bold text-sm text-amber-950 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>安全を守り抜く「3大原則」（これさえ守れば事故は防げる）</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-amber-950">
                    <div className="p-3 bg-white/90 rounded-xl border border-amber-200/80">
                      <strong className="block text-amber-900 mb-1">① 息を絶対に止めない</strong>
                      <span>いきむと血圧が急上昇（バルサルバ効果）。「力を入れるときに口からフッと吐く」リズムを徹底。</span>
                    </div>
                    <div className="p-3 bg-white/90 rounded-xl border border-amber-200/80">
                      <strong className="block text-amber-900 mb-1">② 代償動作の排除</strong>
                      <span>膝が内側に入る（ニーイン）、腰を反らせる等の逃げ動作を防ぎ、狙った筋肉だけを正しく刺激。</span>
                    </div>
                    <div className="p-3 bg-white/90 rounded-xl border border-amber-200/80">
                      <strong className="block text-amber-900 mb-1">③ 漸進性の過負荷</strong>
                      <span>いきなり重くせず、「反復回数」「フォームの安定性」「可動域」を段階的に深めていく。</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Target Muscles (Lower Body & Core) */}
          {activeTab === 'muscles' && (
            <div className="space-y-8 animate-fade-in">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Anatomy & Functional Kinesiology</span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    鍛えるべきキーストーン：下肢筋 ＋ 体幹筋（腹背筋）
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    下肢は「移動のエンジン」、体幹は「姿勢と内臓の土台」です。どちらか片方だけでは、正しい姿勢と軽快な歩行は成り立ちません。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Lower Body Group */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex items-center gap-2.5 text-orange-600 font-bold text-base">
                      <Dumbbell className="w-5 h-5" />
                      <span>【下肢筋群】自立歩行の原動力</span>
                    </div>
                    
                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900 block font-bold mb-0.5">大腿四頭筋（太もも前）</strong>
                        <p className="text-slate-600">椅子からの立ち上がり、階段の昇降、膝折れの防止に直結する人体の最大筋群。</p>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900 block font-bold mb-0.5">大殿筋・中殿筋（お尻）</strong>
                        <p className="text-slate-600">中殿筋は片足立ちや歩行時の「骨盤水平維持」を担当。衰えると左右に揺れる歩行（トレンデレンブルグ歩行）になり転倒します。</p>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900 block font-bold mb-0.5">下腿三頭筋（ふくらはぎ）</strong>
                        <p className="text-slate-600">「第二の心臓」。足先へ下りた血液を心臓へ押し戻す筋ポンプ作用（静脈還流）と、歩行の推進力を作ります。</p>
                      </div>
                    </div>
                  </div>

                  {/* Core Group */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex items-center gap-2.5 text-indigo-600 font-bold text-base">
                      <Activity className="w-5 h-5" />
                      <span>【体幹筋群】姿勢と内臓のコルセット</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900 block font-bold mb-0.5">腹横筋・多裂筋（インナーユニット）</strong>
                        <p className="text-slate-600">深層にある「天然のコルセット」。腹圧を高めて腰椎を安定させ、慢性腰痛や椎間板ヘルニアの最大の予防壁となります。</p>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900 block font-bold mb-0.5">脊柱起立筋群（背筋）</strong>
                        <p className="text-slate-600">背骨を真っ直ぐ起こす抗重力筋。加齢に伴う円背（猫背）を防ぎ、胸郭を広げて肺活量と消化管のスペースを確保します。</p>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-slate-900 block font-bold mb-0.5">腹直筋・腹斜筋（アウター体幹）</strong>
                        <p className="text-slate-600">体幹の回旋や前屈を支え、歩行時に上半身と下半身のスムーズな連動を生み出します。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Practical 5 Key Exercises */}
          {activeTab === 'exercises' && (
            <div className="space-y-8 animate-fade-in">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Safe Protocols</span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    自宅で安全に実践できる「5大基本エクササイズ」
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2">
                    椅子が1脚あれば、40代から90代まで安全に行えます。無理のない回数から始めましょう。
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Ex 1 */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4">
                    <span className="w-8 h-8 rounded-full bg-orange-500 text-white font-black flex items-center justify-center flex-shrink-0 text-sm">1</span>
                    <div className="space-y-1.5 flex-grow text-xs">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-slate-900 text-sm">チェアスクワット（椅子立ち上がり運動）</h4>
                        <span className="text-[11px] font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded">大腿四頭筋・大殿筋</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        椅子に浅く座り、足を肩幅に開きます。両手を前に伸ばすか胸の前でクロスし、息を吐きながら立ち上がります。座るときは「ドスン」と落ちず、太ももで耐えながらゆっくり着席。
                      </p>
                      <span className="text-[11px] text-amber-700 font-semibold block">
                        注意点：膝がつま先より前に出すぎないように、お尻を後ろへ引く意識で行います。
                      </span>
                    </div>
                  </div>

                  {/* Ex 2 */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4">
                    <span className="w-8 h-8 rounded-full bg-teal-600 text-white font-black flex items-center justify-center flex-shrink-0 text-sm">2</span>
                    <div className="space-y-1.5 flex-grow text-xs">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-slate-900 text-sm">ヒップアブダクション（椅子支持・横脚上げ）</h4>
                        <span className="text-[11px] font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded">中殿筋（歩行バランス）</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        椅子の背もたれに両手を添えて直立。つま先を正面に向けたまま、片脚をゆっくり真横に30度ほど持ち上げ、1秒静止して下ろします。
                      </p>
                      <span className="text-[11px] text-amber-700 font-semibold block">
                        注意点：体が反対側に傾かないように、背筋をまっすぐ垂直に保ちます。
                      </span>
                    </div>
                  </div>

                  {/* Ex 3 */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-black flex items-center justify-center flex-shrink-0 text-sm">3</span>
                    <div className="space-y-1.5 flex-grow text-xs">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-slate-900 text-sm">カーフレイズ（椅子支持・つま先立ち）</h4>
                        <span className="text-[11px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">下腿三頭筋（血流ミルキング）</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        椅子の背もたれに手を添え、両足のかかとをできるだけ高く持ち上げます。頂点で1秒キープし、ゆっくり下ろします。
                      </p>
                      <span className="text-[11px] text-amber-700 font-semibold block">
                        注意点：親指の付け根（母指球）で地面をしっかり押し、足首が外側に逃げないようにします。
                      </span>
                    </div>
                  </div>

                  {/* Ex 4 */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-600 text-white font-black flex items-center justify-center flex-shrink-0 text-sm">4</span>
                    <div className="space-y-1.5 flex-grow text-xs">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-slate-900 text-sm">ドローイン ＆ 座位骨盤前後傾</h4>
                        <span className="text-[11px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">腹横筋・体幹インナー</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        椅子に座り、息を細く長く吐きながらお腹をペタンコにへこませて5秒キープ。合わせて骨盤を後ろに倒したり起こしたりして腰部の柔軟性を出します。
                      </p>
                      <span className="text-[11px] text-amber-700 font-semibold block">
                        注意点：肩に力が入らないようにリラックスしてお腹の深層を意識します。
                      </span>
                    </div>
                  </div>

                  {/* Ex 5 */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row gap-4">
                    <span className="w-8 h-8 rounded-full bg-purple-600 text-white font-black flex items-center justify-center flex-shrink-0 text-sm">5</span>
                    <div className="space-y-1.5 flex-grow text-xs">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-slate-900 text-sm">立位バードドッグ変法（対角手足伸ばし）</h4>
                        <span className="text-[11px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">多裂筋・大殿筋・クロス協調</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        壁または頑丈なテーブルに両手を添え、右手と左脚を同時に前後に伸ばして2秒キープ。左右交互に行います。
                      </p>
                      <span className="text-[11px] text-amber-700 font-semibold block">
                        注意点：腰を反らしすぎず、お腹に軽く力を入れて体幹を真っ直ぐ保ちます。
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Synergy with FORDAYS Products */}
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Nutrition × Kinesiology Synergy</span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  FORDAYSサプリメントを「いつ飲むか？」運動連動プロトコル
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200">
                <span className="font-bold text-orange-950 block mb-1 text-sm">運動30分前</span>
                <strong className="text-orange-700 block mb-2">BCAA & グルタミン DX（1包）</strong>
                <p className="text-slate-600 leading-relaxed">
                  血中アミノ酸（ロイシン）濃度を事前に引き上げ、運動開始と同時に筋タンパク質合成（mTOR）のスイッチをONにします。
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200">
                <span className="font-bold text-blue-950 block mb-1 text-sm">運動直後〜30分以内</span>
                <strong className="text-blue-700 block mb-2">タンパク質 ＋ 水分補給</strong>
                <p className="text-slate-600 leading-relaxed">
                  運動で傷ついた筋線維のゴールデンタイム。食事やプロテインで材料を補給し、失われた水分を確実に補います。
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                <span className="font-bold text-emerald-950 block mb-1 text-sm">就寝前または朝食時</span>
                <strong className="text-emerald-700 block mb-2">ナチュラル DNコラーゲン（核酸）</strong>
                <p className="text-slate-600 leading-relaxed">
                  毛細血管網の拡張と抗酸化作用（特許第7857645号）により、睡眠中の組織修復とミトコンドリアATP産生を底上げします。
                </p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-12 bg-gradient-to-r from-teal-900 via-slate-900 to-brand-900 rounded-3xl p-8 sm:p-12 text-center text-white border border-teal-500/40 shadow-2xl space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              自己流で痛める前に、専門職のフォーム指導を
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              「膝が痛くてスクワットができない」「自分の今のMVCレベルがわからない」という方へ。<br />
              リハビリ専門職があなたの関節可動域と筋力を評価し、無理なく一生動けるオーダーメイドの処方を作成します。
            </p>
            <div className="pt-2">
              <button
                onClick={handleOpenPTModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-sm transition-all hover:scale-105 shadow-lg"
              >
                <span>無料カウンセリング・運動処方を相談する</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <Footer onOpenPTModal={handleOpenPTModal} />

      {/* PTモーダル */}
      <PersonalTraining
        isModalOpen={isPTModalOpen}
        onOpenModal={handleOpenPTModal}
        onCloseModal={handleClosePTModal}
      />
    </div>
  );
}
