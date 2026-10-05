'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, HeartPulse, ArrowLeft, CheckCircle2, AlertTriangle, 
  Activity, BookOpen, ExternalLink, Zap, ChevronRight, Sparkles, 
  UserCheck, ArrowRight, Award, Target, Flame, Users, Scale, 
  TrendingDown, TrendingUp, DollarSign, Brain, GraduationCap, Clock, FileText, HelpCircle,
  Compass
} from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PersonalTraining } from '@/components/PersonalTraining';
import { PPKModal } from '@/components/PPKModal';

export default function PPKPage() {
  const [isPTModalOpen, setIsPTModalOpen] = useState<boolean>(false);
  const [activeModalTopic, setActiveModalTopic] = useState<string | null>(null);

  const handleOpenPTModal = () => setIsPTModalOpen(true);
  const handleClosePTModal = () => setIsPTModalOpen(false);

  const openTopicModal = (topicId: string) => {
    setActiveModalTopic(topicId);
  };

  const closeTopicModal = () => {
    setActiveModalTopic(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {/* Global Header */}
      <Header onOpenPTModal={handleOpenPTModal} />

      <main className="flex-grow">
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-950 border-b border-slate-800 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-slate-400 hover:text-teal-400 transition-colors font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>ホーム</span>
              </Link>
              <span className="text-slate-700">/</span>
              <span className="text-teal-400 font-bold">PPK（ピンピンコロリ）完全体系論</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400 hidden sm:flex">
              <Link href="/exercise-prescription" className="hover:text-cyan-300 transition-colors">
                臨床運動処方箋 →
              </Link>
              <Link href="/workshop" className="hover:text-cyan-300 transition-colors">
                運動ワークショップ →
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-xs sm:text-sm font-bold text-teal-300">
              <GraduationCap className="w-4 h-4 text-teal-400" />
              <span>理学療法士・元教員の臨床知見が明かす構造改革</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              「最期の直前まで自立し、病床期間を極限まで圧縮する」<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-emerald-300">
                ピンピンコロリ（PPK）の科学と国家構造論
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              気休めの「老後体操」ではPPKに間に合わない。<br className="hidden sm:inline" />
              スタンフォード大・Fries教授の「病態圧縮理論」を基軸に、40代の分岐点・学校体育の罠・部活動ハザード・過剰医療5兆円の予防シフトまでを完全体系化。
            </p>

            {/* Quick Stats Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] text-teal-300 font-bold block">勝負の分岐点</span>
                <span className="text-xl sm:text-2xl font-black text-white">40〜50代</span>
                <span className="text-[10px] text-slate-400 block">無症候性サルコペニアの始動</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] text-amber-300 font-bold block">40代の運動習慣者</span>
                <span className="text-xl sm:text-2xl font-black text-white">わずか 20%</span>
                <span className="text-[10px] text-slate-400 block">うち約8割は元運動部</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] text-rose-300 font-bold block">未経験者の定着率</span>
                <span className="text-xl sm:text-2xl font-black text-white">4〜6%</span>
                <span className="text-[10px] text-slate-400 block">ゼロからの壁・1年後9割脱落</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] text-emerald-300 font-bold block">過剰医療の潜在シフト</span>
                <span className="text-xl sm:text-2xl font-black text-white">年間 5兆円</span>
                <span className="text-[10px] text-slate-400 block">終末期延命から予防還元へ</span>
              </div>
            </div>
          </div>
        </section>

        {/* Index Jump Nav */}
        <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center md:items-start gap-2 sm:gap-2.5">
              {/* 目次ラベルバッジ */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-teal-50 text-teal-850 border border-teal-200/90 text-xs font-bold shrink-0 md:mt-0.5">
                <Compass className="w-3.5 h-3.5 text-teal-600" />
                <span className="hidden sm:inline">目次ジャンプ</span>
                <span className="sm:hidden">目次</span>
              </div>

              {/* 目次ボタン群: PC(md以上)は2〜3行折り返し(横スクロール不要) / スマホはスワイプ横スクロール */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 md:flex-wrap md:overflow-visible w-full">
                {[
                  { id: 'section-1', num: '1', title: 'PPKの5大要件' },
                  { id: 'section-2', num: '2', title: '40代からの病態圧縮' },
                  { id: 'section-3', num: '3', title: '40代運動2割の壁' },
                  { id: 'section-4', num: '4', title: '運動量神話の罠' },
                  { id: 'section-5', num: '5', title: '体育の罪と親業' },
                  { id: 'section-6', num: '6', title: '部活ハザードと指導者' },
                  { id: 'section-7', num: '7', title: '過剰医療5兆円シフト' },
                  { id: 'section-8', num: '8', title: '政治の壁と出口戦略' },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-100/90 hover:bg-teal-50 text-slate-700 hover:text-teal-950 border border-slate-200/90 hover:border-teal-300 text-xs font-bold transition-all shadow-2xs hover:shadow-xs active:scale-95 group cursor-pointer"
                  >
                    <span className="w-4 h-4 rounded-md bg-slate-200/90 group-hover:bg-teal-600 text-slate-600 group-hover:text-white text-[10px] flex items-center justify-center font-black transition-colors">
                      {item.num}
                    </span>
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          
          {/* SECTION 1: PPKの定義と5大要件 */}
          <section id="section-1" className="scroll-mt-36 md:scroll-mt-44 space-y-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Dimension 01</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                ピンピンコロリ（PPK）の医学的定義と5大構成要素
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                「ただ長生きする」のではなく「死ぬ直前まで自立し、寝たきり期間を極小化する」ための総合要件
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-black text-sm">
                  1
                </div>
                <h3 className="font-bold text-sm text-slate-900">身体機能の維持</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  下半身の筋力（スクワット・歩行能力）と十分なタンパク質摂取でフレイル・骨折を徹底防御。
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-black text-sm">
                  2
                </div>
                <h3 className="font-bold text-sm text-slate-900">血管・口腔の管理</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  血圧・血糖・脂質のコントロールで脳卒中片麻痺を予防。残存歯数が脳刺激と栄養吸収を支える。
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-black text-sm">
                  3
                </div>
                <h3 className="font-bold text-sm text-slate-900">社会的つながり</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  孤立は認知低下の最大加速因子。定期的な会話、地域参加、「誰かに頼られている」役割の保持。
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-black text-sm">
                  4
                </div>
                <h3 className="font-bold text-sm text-slate-900">終末期の意思表示</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  人生会議（ACP）と事前指示書。望まない機械的延命治療を避け、尊厳ある最期を担保する。
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-sm">
                  5
                </div>
                <h3 className="font-bold text-sm text-slate-900">在宅医療受け皿</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  病院での過剰処置ではなく、住み慣れた自宅や施設で自然に看取ることができる訪問診療体制。
                </p>
              </div>
            </div>

            {/* Modal Trigger Banner for ACP */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-rose-50 via-slate-50 to-rose-50 border border-rose-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider">臨床現場の重要テーマ</span>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  救急隊・医師が機械的延命をやめられない理由と、事前指示書（リビング・ウィル）の作成手順
                </h4>
                <p className="text-xs text-slate-600">
                  「ピンピン」を支えるのが運動なら、「コロリ」を守るのは元気なうちの法的・臨床的な家族対話です。
                </p>
              </div>
              <button
                onClick={() => openTopicModal('acp-living-will')}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shrink-0 transition-colors shadow-xs flex items-center gap-1.5"
              >
                <span>ACP詳細をポップアップで開く</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* SECTION 2: 40代からの病態圧縮理論 */}
          <section id="section-2" className="scroll-mt-36 md:scroll-mt-44 space-y-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Dimension 02</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                介入のゴールデンタイム ―― なぜ「40代〜50代」が勝負の分水嶺なのか？
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                スタンフォード大学James Fries教授が提唱した「病態圧縮理論（Compression of Morbidity）」のエビデンス
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    「60〜70代での開始」は手遅れに近い理由
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    筋肉量や骨密度、血管弾性のピークは20〜30代です。40代以降は年1%のペースで自然低下が始まります。
                    高齢になってからフレイル予防を始めても、すでに<strong>身体予備能（Reserve Capacity）</strong>の貯金が底をつきかけており、「衰えの傾きを少し緩める（Plateau）」のが精一杯です。
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    一方、40〜50代の中年期（Midlife）から行動変容を起こせば、機能低下・慢性疾患の発症ラインそのものを高齢側へ押し戻す（Onsetの右シフト）ことができ、結果として<strong>「寝たきり要介護期間」を最期の数週間〜数ヶ月に押しつぶす（圧縮）</strong>ことが可能になります。
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-5 rounded-2xl space-y-4">
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">WHO ライフコース・アプローチの3段階</span>
                  <div className="space-y-3 text-xs">
                    <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                      <span className="font-bold text-teal-300 block">① 構築期（〜30代）</span>
                      <span>身体的キャパシティの最大値を高め、ピークの貯金を作る。</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-teal-500/20 border border-teal-400/40">
                      <span className="font-bold text-teal-300 block">② 維持期（40代〜60代）★PPKの勝負所</span>
                      <span>キャパシティの低下速度を最小化。歩行速度・握力・血管の微小病変を完全防衛。</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                      <span className="font-bold text-teal-300 block">③ 低下制限期（70代〜）</span>
                      <span>自立状態を維持し、全面要介護（他者依存）の期間を最短化。</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => openTopicModal('compression-of-morbidity')}
                  className="px-4 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-900 font-bold text-xs border border-teal-200 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-4 h-4 text-teal-600" />
                  <span>Fries理論 ＆ Lancetコホート研究詳細をポップアップで開く</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* SECTION 3: 40代運動2割の壁 */}
          <section id="section-3" className="scroll-mt-36 md:scroll-mt-44 space-y-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Dimension 03</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                残酷な統計データ ――「40代運動2割の壁」と「5%の壁」
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                40代で自発的に運動する人はわずか20%。さらにその8割は「若い頃の貯金」を使っている現実
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* 年代別割合 */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-amber-600" />
                  <span>日本の年代別 運動習慣率</span>
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">20代</span>
                    <span className="font-bold text-slate-800">約 15〜18%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">30代（人生の底）</span>
                    <span className="font-bold text-rose-600">約 13〜16%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100 bg-amber-50/50 px-2 rounded-lg">
                    <span className="font-bold text-amber-900">40代（PPK分岐点）</span>
                    <span className="font-black text-amber-900">約 18〜22%（5人に1人）</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">50代</span>
                    <span className="font-bold text-slate-800">約 22〜25%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                    <span className="text-slate-600">60代</span>
                    <span className="font-bold text-slate-800">約 35〜40%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-600">70代以上（時間余暇）</span>
                    <span className="font-bold text-teal-700">約 40〜45%</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  ※厚生労働省「国民健康・栄養調査」等の集計傾向より。40代の約8割は「完全不活動」状態です。
                </p>
              </div>

              {/* 40代20%の内訳分解 */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4 lg:col-span-2">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-teal-600" />
                  <span>40代・運動層（20%）の知られざる内訳構造</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-2">
                    <span className="text-[11px] font-bold text-teal-800 block">【圧倒的多数派：70〜80%】</span>
                    <h4 className="font-bold text-sm text-slate-900">元・運動部 / 若い頃から鍛えていた再開派</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      全体の約14〜16%。中高で部活をしていたり、20代でスポーツ経験がある層。「太ってきたからランニングを再開した」パターン。
                      <strong>身体操作の記憶、筋メモリー、運動後のドーパミン報酬系を身体が知っている</strong>ため、復帰コストが極めて低い。
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
                    <span className="text-[11px] font-bold text-rose-800 block">【超少数派：20〜30%】</span>
                    <h4 className="font-bold text-sm text-slate-900">大人になってゼロから始めた新参派</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      全体のわずか約4〜6%（5%の壁）。文化部出身で運動経験がない層が一念発起しても、<strong>1年後に継続できている割合はわずか10〜20%</strong>。
                      フォームが分からず膝や腰を痛めたり、苦痛と疲労感に耐えられず大部分が脱落（Drop-out）する。
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 text-white text-xs leading-relaxed flex items-start gap-2.5">
                  <Flame className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>理学療法士としての臨床インプリケーション:</strong> 運動未経験の40代に、元運動部と同じように「ジョギング」や「ジムでの筋トレ」を処方すると9割挫折します。「運動」ではなく「日常動作（NEAT）の強化」「Habit Stacking（既存習慣への紐付け）」から行動デザインしなければ、5%の壁は突破できません。
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Trigger for Demographics */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">20年後の人口危機</span>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  部活加入率の激減（75%→50%）と、20年後に爆発する「将来のPPK難民」
                </h4>
                <p className="text-xs text-slate-600">
                  今の40代は「部活加入率8割の黄金期」。今の若者が40代になる頃、運動貯金を持つ大人が消滅します。
                </p>
              </div>
              <button
                onClick={() => openTopicModal('club-demographics')}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 transition-colors shadow-xs flex items-center gap-1.5"
              >
                <span>部活加入率の推移データをポップアップで開く</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* SECTION 4: 運動量神話の罠 */}
          <section id="section-4" className="scroll-mt-36 md:scroll-mt-44 space-y-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Dimension 04</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                運動量神話の罠 ――「Jカーブ問題」と「死因のミスマッチ」
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                「たくさん走れば健康」は嘘。過剰運動のパラドックスと、運動だけでは防げない細胞老化
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Jカーブ / Uカーブ問題（Over-exercise）</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  循環器疫学の大規模コホート研究（JACC等）により、週に15〜20時間以上の高強度有酸素運動（過剰なフルマラソンなど）を長年継続すると、<strong>心筋の線維化（Myocardial Fibrosis）、心房細動、冠動脈の石灰化リスクが跳ね上がる</strong>ことが判明しています。
                </p>
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 leading-relaxed">
                  運動量は「多ければ多いほど良い」のではなく、週150〜300分の中強度運動をピークとして、それを超えると健康利得が逓減・逆転します。
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>死因のミスマッチと細胞レベルのケア</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  運動習慣は血管系疾患（心筋梗塞・脳卒中）のリスクを劇的に下げますが、<strong>悪性腫瘍（癌）やアルツハイマー病、加齢に伴う遺伝子突然変異</strong>を運動だけでゼロにすることはできません。
                </p>
                <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 leading-relaxed">
                  筋肉や血管という「構造」を運動で整えつつ、細胞修復・遺伝子代謝（DNA・RNA）という「生化学の土台」を栄養で支えるハイブリッドが不可欠です。
                </div>
              </div>
            </div>

            {/* WHO Criteria & Medical Cost Stats */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-teal-900 to-slate-900 text-white space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-teal-700/50 pb-3">
                <h3 className="font-bold text-base text-teal-300 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  <span>WHO基準達成者と不活動者の医療費データ</span>
                </h3>
                <span className="text-xs text-teal-200 bg-teal-800/80 px-2.5 py-1 rounded-full">公衆衛生疫学データ</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs leading-relaxed">
                <div className="p-3.5 rounded-xl bg-white/10 space-y-1">
                  <span className="font-bold text-cyan-300 block text-sm">1人あたり年間医療費：約3万〜5万円抑制</span>
                  <p className="text-slate-300">
                    WHO運動基準（中強度週150分 / 1日7,000歩以上）を達成している群は、不活動群（3,000歩未満）と比較して1人あたり年間医療費が有意に低い。
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 space-y-1">
                  <span className="font-bold text-emerald-300 block text-sm">入院リスク・入院費用：20〜30%低下</span>
                  <p className="text-slate-300">
                    急性の寝たきり原因となる骨折や虚血性発作での入院頻度が大幅に抑制され、長期病床化を未然に防ぐ。
                  </p>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-300">
                  ※ただし日本全体でWHO基準を満たす成人は約30〜35%、現役世代（40代）に限ればわずか20%です。
                </span>
                <Link
                  href="/health"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black transition-colors"
                >
                  <span>自力努力×細胞ブースト（健康科学ページ）へ</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* SECTION 5: 体育の罪と親業 */}
          <section id="section-5" className="scroll-mt-36 md:scroll-mt-44 space-y-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Dimension 05</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                学校体育の罪と親業 ――「運動嫌いの大量生産構造」
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                なぜ日本の大人は運動をしなくなるのか？ 公教育が植え付けた「自我指向（Ego）の競争トラウマ」
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-3">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>従来の学校体育：他者比較（Ego指向）</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    走る速さや球技の勝敗で評価する「自我指向」の授業は、上位20%の運動得意層にしか成功体験を与えません。
                    残りの80%には<strong>「笑われた」「あいつより劣っている」「運動は苦痛」という社会的敗北感（体育トラウマ）</strong>を植え付け、卒業後の運動完全拒否を生み出します。
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-3">
                  <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>生涯スポーツの体育：自己成長（Task指向）</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    他者と競わせるのではなく、「昨日の自分より動けたか」「関節を痛めないフォームを身につけたか」という内的達成感を評価。
                    一生自分の身体をメンテできる<strong>「フィジカル・リテラシー（運動OS）」</strong>をインストールする教育への転換が必要です。
                  </p>
                </div>
              </div>

              {/* Parental Nudge */}
              <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-indigo-800 uppercase tracking-wider">家庭環境と育児の科学</span>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    親業（Parental Nudge）と家庭内における運動トラウマの遺伝
                  </h4>
                  <p className="text-xs text-slate-600">
                    子どもが生涯運動を愛する最大の因子は、親の身体能力ではなく「親が運動を楽しんでいる姿」と「プロセスの賞賛」です。
                  </p>
                </div>
                <button
                  onClick={() => openTopicModal('task-vs-ego')}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shrink-0 transition-colors shadow-xs flex items-center gap-1.5"
                >
                  <span>心理学・親業の詳細をポップアップで開く</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>

          {/* SECTION 6: 部活ハザードと指導者改革 */}
          <section id="section-6" className="scroll-mt-36 md:scroll-mt-44 space-y-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Dimension 06</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                部活動の分離ハザードと指導者（Human Capital）の刷新
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                校内で「本気組」と「ゆるく組」を分けると人間関係が崩壊する理由と、臨床的落としどころ
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
              <div className="space-y-4">
                <h3 className="font-bold text-base text-slate-900">
                  部活動の「体づくり組」vs「競技組」分離における3大ハザード
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="font-bold text-rose-700 block">① スクールカーストと階層意識</span>
                    <p className="text-slate-600 leading-relaxed">
                      「あいつは逃げのチームに行った」「本気組の方が偉い」という無意識のマウンティングが起き、カーストが固定化。
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="font-bold text-rose-700 block">② リソースの偏りと冷遇</span>
                    <p className="text-slate-600 leading-relaxed">
                      顧問の情熱、施設利用時間、予算が競技組に集中し、体づくり組はグラウンドの隅っこで放置される。
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="font-bold text-rose-700 block">③ 挫折組へのいじめ</span>
                    <p className="text-slate-600 leading-relaxed">
                      本気組についていけなくなった生徒が降りてきた際、「落ちこぼれ」のレッテルを貼られ標的になりやすい。
                    </p>
                  </div>
                </div>
              </div>

              {/* Two Trigger Buttons for Modals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 flex flex-col justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-purple-800 uppercase tracking-wider">教育現場の臨床的解決</span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      地域移行の格差と「フェーズ分け」の落としどころ
                    </h4>
                    <p className="text-xs text-slate-600">
                      クラス分けではなく「基礎体づくりOSは全員共通・競技のみオプション」という現実解。
                    </p>
                  </div>
                  <button
                    onClick={() => openTopicModal('club-transition')}
                    className="self-start px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors shadow-xs flex items-center gap-1.5"
                  >
                    <span>部活地域移行の詳細を見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">最大のボトルネック解消</span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      指導者（PT/AT）のプロ化と3大ブレイクスルー
                    </h4>
                    <p className="text-xs text-slate-600">
                      教員の部活無償労働から脱却し、専門資格者が高給で現場参入するエコシステム。
                    </p>
                  </div>
                  <button
                    onClick={() => openTopicModal('coach-revolution')}
                    className="self-start px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs flex items-center gap-1.5"
                  >
                    <span>指導者OS改革の詳細を見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: 過剰医療5兆円シフト */}
          <section id="section-7" className="scroll-mt-36 md:scroll-mt-44 space-y-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Dimension 07</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                国家・財団思考実験 ――「過剰・延命医療5兆円」の予防シフト
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                国民医療費45兆円の1割を占める「寝たきり延命」を適正化し、予防還元（Cash for Exercise）へ
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
              <div className="space-y-3">
                <h3 className="font-bold text-base text-slate-900">
                  【潜在的削減試算】過剰医療を広く線引き（自費化）した場合の年間規模
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                        <th className="py-2.5 px-3 font-bold">適正化・自費化の対象カテゴリー</th>
                        <th className="py-2.5 px-3 font-bold">現状の年間医療費規模</th>
                        <th className="py-2.5 px-3 font-bold text-rose-700">潜在的削減可能額</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="py-2.5 px-3 font-medium">① 死亡前1ヶ月間の過剰延命処置（人工呼吸器・昇圧剤・輸液）</td>
                        <td className="py-2.5 px-3">約 2.5 兆 〜 3.0 兆円</td>
                        <td className="py-2.5 px-3 font-bold text-teal-700">約 1.5 兆 〜 2.5 兆円</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-medium">② 80歳以上の新規透析導入および維持療法の適正化</td>
                        <td className="py-2.5 px-3">約 1.6 兆円（透析全体）</td>
                        <td className="py-2.5 px-3 font-bold text-teal-700">約 0.5 兆 〜 0.8 兆円</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-medium">③ 超高齢者への超高額分子標的薬・新薬（抗がん剤・認知症新薬等）</td>
                        <td className="py-2.5 px-3">約 2.0 兆円超（急拡大中）</td>
                        <td className="py-2.5 px-3 font-bold text-teal-700">約 0.8 兆 〜 1.2 兆円</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-medium">④ 自力摂取不能後の経管栄養（PEG胃瘻・中心静脈IVH）の漫然投与</td>
                        <td className="py-2.5 px-3">数千億円 〜 1兆円規模</td>
                        <td className="py-2.5 px-3 font-bold text-teal-700">約 0.5 兆 〜 1.0 兆円</td>
                      </tr>
                      <tr className="bg-teal-50/50 font-bold">
                        <td className="py-3 px-3 text-slate-900">【合計】浮き上がる潜在的改革財源</td>
                        <td className="py-3 px-3 text-slate-500">—</td>
                        <td className="py-3 px-3 text-base text-teal-800">年間 約 3.3 兆 〜 5.5 兆円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pool shift banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white space-y-3">
                <div className="flex items-center gap-2 text-teal-300 font-bold text-sm">
                  <Zap className="w-5 h-5 text-teal-400" />
                  <span>お金が流れるプールを「終末期寝たきり」から「40代予防」へ物理シフト</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  高額療養費制度によるフリーライダー（家族負担が月数万円のため無限に延命要求が発生する構造）を適正化し、浮いた5兆円を<strong>「40〜50代の運動習慣達成者への税金・保険料減額（年5万〜10万円の直接還元：Cash for Exercise）」</strong>や<strong>「全国学校へのプロトレーナー常駐」</strong>に振り替えます。
                </p>
                <div className="pt-1 flex justify-end">
                  <button
                    onClick={() => openTopicModal('medical-budget-shift')}
                    className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs transition-colors shadow-sm flex items-center gap-1.5"
                  >
                    <span>5兆円試算とモラルハザード詳細をポップアップで開く</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8: 政治の壁と出口戦略 */}
          <section id="section-8" className="scroll-mt-36 md:scroll-mt-44 space-y-6">
            <div className="border-l-4 border-teal-600 pl-4">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Dimension 08</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                政治・社会実装の壁 ―― シルバー民主主義と「ポジティブ還元」の出口戦略
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                「医療費削減」を叫ぶと選挙で必ず落ちる。制度を現実社会に実装するためのリフレーミング戦略
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                  <Users className="w-5 h-5" />
                  <span>なぜ選挙で勝てないのか？（シルバー民主主義の罠）</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  投票率が最も高い層は高齢者です。どんなに科学的・財政的に合理的な改革であっても、「医療費の自費化・負担増」は高齢者にとって生存の恐怖であり、「切り捨て」と受け止められます。
                  さらに<strong>予防投資の効果が出るのは20〜30年後</strong>であるため、政治家にとって自ら落選リスクを冒して未来を救うインセンティブが働きません。
                </p>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                  <span className="font-bold block text-slate-900">政党のスタンス対比:</span>
                  <div>・<strong>日本維新の会:</strong> 身を切る改革・現役世代重視で構造改革に踏み込みやすいが、地方・高齢者票で反発に遭うジレンマ。</div>
                  <div>・<strong>自由民主党:</strong> 医師会や高齢者層が支持基盤のため、過剰医療の抜本制限には極めて慎重で、小幅な負担増に留まり先送りになりやすい。</div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
                  <Sparkles className="w-5 h-5" />
                  <span>「票になる形」へのリフレーミング（出口戦略）</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 space-y-1">
                    <span className="font-bold text-teal-900 block text-xs">① 「削る」から「現役・シニア双方への還元」へ</span>
                    <p className="text-slate-700 text-xs">
                      「過剰医療の削減」ではなく、「医療適正化で浮いた予算を、元気に過ごすシニアにPPK達成ボーナス（現金・ポイント）として還元する」というポジティブ設計にする。
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200 space-y-1">
                    <span className="font-bold text-cyan-900 block text-xs">② 「制限」から「個人の尊厳と選択の自由」へ</span>
                    <p className="text-slate-700 text-xs">
                      「国が医療を切り捨てる」のではなく、「事前に自分の最期を自分で決められる権利（事前指示書の普及と、登録者への健康保険料減額）」として尊厳と自由の文脈で訴求する。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bridges to Existing Pages */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 text-white space-y-6">
              <div className="space-y-2">
                <span className="inline-block text-xs font-bold text-teal-400 uppercase tracking-wider">
                  いますぐ個人・地域・サロンで実践できるアクション
                </span>
                <h3 className="text-xl sm:text-2xl font-black">
                  PPK社会の実現へ向けて ―― 臨床運動処方と地域ワークショップ
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  国家の法改正を待つだけでなく、今日からできる「40代からの筋力測定」「安全な5大エクササイズ」「全国サロンでの健康増進ワークショップ」がすでに稼働しています。
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                <Link
                  href="/workshop"
                  className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all hover:scale-102 space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-300">出張開催受付中</span>
                    <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-sm text-white">健康増進ワークショップ</h4>
                  <p className="text-xs text-slate-300">
                    美尻・100歳健歩・骨盤底筋・転倒予防など、地域サロンで開催できる5大3ヶ月プラン。
                  </p>
                </Link>

                <Link
                  href="/exercise-prescription"
                  className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all hover:scale-102 space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-300">臨床運動学</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-sm text-white">40代〜90代の臨床運動処方</h4>
                  <p className="text-xs text-slate-300">
                    MVC最大筋力測定・安全な漸進的負荷・怪我ゼロのフォーム管理を徹底解説。
                  </p>
                </Link>

                <Link
                  href="/health"
                  className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all hover:scale-102 space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-300">睡眠・免疫・細胞</span>
                    <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-sm text-white">5大健康科学 ＆ 睡眠バイオハック</h4>
                  <p className="text-xs text-slate-300">
                    運動量だけでは防げない細胞老化・DNA代謝・睡眠構造の生化学的アプローチ。
                  </p>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Global Footer */}
      <Footer onOpenPTModal={handleOpenPTModal} />

      {/* Personal Training Modal */}
      <PersonalTraining
        isModalOpen={isPTModalOpen}
        onOpenModal={handleOpenPTModal}
        onCloseModal={handleClosePTModal}
      />

      {/* Deep-dive Topic Modal */}
      <PPKModal topicId={activeModalTopic} onClose={closeTopicModal} />
    </div>
  );
}
