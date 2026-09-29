'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, CheckCircle2, AlertCircle, Clock, ArrowLeft, 
  HelpCircle, ShieldCheck, ShoppingBag, ChevronRight, Layers,
  Droplets, Flame, Sun, Moon, Check, X, Award, Eye, Heart,
  Thermometer, Wind, Timer, Box, RefreshCw, Feather, Sparkle
} from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PersonalTraining } from '@/components/PersonalTraining';
import { SKINCARE_ROUTINES, SKINCARE_PRINCIPLES, SkincareRoutinePattern } from '@/data/skincareRoutines';
import { PRODUCTS_DATA, ProductItem } from '@/data/products';

export default function SkincareRoutinePage() {
  const [isPTModalOpen, setIsPTModalOpen] = useState(false);
  const [selectedPatternId, setSelectedPatternId] = useState<string>('pattern-night-prestige');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // モーダル表示時のスクロール制御とESCキー
  useEffect(() => {
    if (!selectedProduct) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProduct]);

  // 選択中のパターン
  const currentPattern = SKINCARE_ROUTINES.find(p => p.id === selectedPatternId) || SKINCARE_ROUTINES[0];

  // 商品検索ヘルパー（最長一致で正確にマッピング）
  const findMatchedProduct = (productName: string): ProductItem | undefined => {
    const sorted = [...PRODUCTS_DATA].sort((a, b) => b.title.length - a.title.length);
    return sorted.find(p => productName.includes(p.title));
  };

  // 7大原則アイコンマッピング
  const getPrincipleVisual = (num: string) => {
    switch (num) {
      case '01':
        return {
          icon: Thermometer,
          color: 'text-sky-600 bg-sky-100 border-sky-200',
          badge: '温度管理'
        };
      case '02':
        return {
          icon: Wind,
          color: 'text-purple-600 bg-purple-100 border-purple-200',
          badge: '摩擦ゼロ'
        };
      case '03':
        return {
          icon: Timer,
          color: 'text-amber-600 bg-amber-100 border-amber-200',
          badge: '時間制御'
        };
      case '04':
        return {
          icon: Box,
          color: 'text-pink-600 bg-pink-100 border-pink-200',
          badge: '立体成形'
        };
      case '05':
        return {
          icon: RefreshCw,
          color: 'text-teal-600 bg-teal-100 border-teal-200',
          badge: '化学乳化'
        };
      case '06':
        return {
          icon: Feather,
          color: 'text-rose-600 bg-rose-100 border-rose-200',
          badge: '極薄保護'
        };
      case '07':
        return {
          icon: ShieldCheck,
          color: 'text-indigo-600 bg-indigo-100 border-indigo-200',
          badge: '被膜固定'
        };
      default:
        return {
          icon: Sparkles,
          color: 'text-teal-600 bg-teal-100 border-teal-200',
          badge: 'プロの技'
        };
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* グローバルヘッダー */}
      <Header onOpenPTModal={() => setIsPTModalOpen(true)} />

      {/* パンくず・トップ復帰ナビ */}
      <div className="bg-slate-900 border-b border-slate-800 py-3.5 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>ホーム</span>
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors font-medium"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>製品カタログ（全79品）</span>
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/evidence"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>特許・エビデンスポータル</span>
            </Link>
          </div>
          <span className="text-purple-400 font-semibold hidden sm:inline flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>洗顔・スキンケア ＆ メイク手順完全攻略バイブル</span>
          </span>
        </div>
      </div>

      <main className="flex-grow space-y-12">
        {/* ヒーローセクション */}
        <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_50%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>皮膚生理学 × フォーデイズ化粧品：手順とやり方の黄金律</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                洗顔・スキンケア ＆ メイク <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                  順番・やり方 パターン別完全バイブル
                </span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed pt-2">
                「良い化粧品を使っているのに実感が薄い…」その原因の多くは<strong>「洗顔の摩擦ダメージ」</strong>と<strong>「塗る順番・浸透待ち時間のミス」</strong>にあります。
                フォーデイズの全31種コスメを最大限に生かすため、夜の本格エイジングケアから朝の3分時短メイク、毛穴泥パック、メンズグルーミングまで、
                皮膚科学の理に適った6大パターンを写真付きステップ順に徹底解説します。
              </p>

              {/* クイック特徴バッジ */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm">
                  <div className="text-xs text-slate-400 font-medium">解説パターン</div>
                  <div className="text-2xl font-black text-purple-400 mt-1">6 <span className="text-xs text-slate-400 font-normal">大シーン</span></div>
                  <div className="text-[11px] text-slate-500 mt-1">朝・夜・週末・メイク・男</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm">
                  <div className="text-xs text-slate-400 font-medium">摩擦ゼロ基準</div>
                  <div className="text-2xl font-black text-pink-400 mt-1">圧0g <span className="text-xs text-slate-400 font-normal">感覚</span></div>
                  <div className="text-[11px] text-slate-500 mt-1">泡クッションプッシュ洗い</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm">
                  <div className="text-xs text-slate-400 font-medium">浸透の科学</div>
                  <div className="text-xl sm:text-2xl font-black text-teal-400 mt-1">水→両親→油</div>
                  <div className="text-[11px] text-slate-500 mt-1">浸透勾配レイヤリング</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-sm">
                  <div className="text-xs text-slate-400 font-medium">プロの鉄則</div>
                  <div className="text-2xl font-black text-amber-400 mt-1">7 <span className="text-xs text-slate-400 font-normal">原則</span></div>
                  <div className="text-[11px] text-slate-500 mt-1">32℃すすぎ・3分ルール他</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6大パターン選択タブ */}
        <section className="py-6 bg-slate-100/90 border-b border-slate-200 sticky top-28 z-20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-600" />
                <span>目的・シーン別 6大パターンを選択</span>
              </span>
              <span className="text-xs text-slate-500 hidden sm:inline">
                タップして手順を切り替え
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {SKINCARE_ROUTINES.map(pattern => {
                const isSelected = pattern.id === selectedPatternId;
                return (
                  <button
                    key={pattern.id}
                    onClick={() => setSelectedPatternId(pattern.id)}
                    className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-purple-500 text-white shadow-lg scale-102 ring-2 ring-purple-500/20'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md inline-block mb-1.5 border ${
                        isSelected ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : pattern.badgeColor
                      }`}>
                        {pattern.timing}
                      </span>
                      <h3 className={`text-xs font-bold leading-snug line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {pattern.patternName.split('：')[0]}
                      </h3>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{pattern.timeEstimate}</span>
                      <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-purple-400' : 'text-slate-400'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 選択されたパターンの詳細解説エリア */}
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* パターン概要カード */}
            <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-7 sm:p-10 border border-purple-500/30 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-3xl space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-full bg-purple-500/30 text-purple-300 text-xs font-bold border border-purple-400/40">
                      {currentPattern.badge}
                    </span>
                    <span className="text-xs text-slate-300 flex items-center gap-1.5 font-mono bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      <span>所要時間: {currentPattern.timeEstimate}</span>
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                    {currentPattern.patternName}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentPattern.summary}
                  </p>
                  <div className="text-xs text-purple-200 bg-purple-900/40 border border-purple-500/30 rounded-2xl p-4 leading-relaxed">
                    <strong className="text-purple-300">期待される肌結果:</strong> {currentPattern.expectedResult}
                  </div>
                </div>

                {/* なぜこの順番なのか（科学的根拠） */}
                <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 lg:w-[26rem] flex-shrink-0 space-y-3 shadow-lg">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>なぜこの順番なのか？（浸透の科学）</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentPattern.whyThisOrder}
                  </p>
                  <div className="pt-3 border-t border-slate-700/80 text-xs text-slate-400">
                    対象肌質: <span className="text-slate-200 font-semibold">{currentPattern.targetSkin}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ステップバイステップ詳細リスト（写真＋詳細付き） */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2.5">
                  <Layers className="w-6 h-6 text-purple-600" />
                  <span>ステップ別 順番 ＆ やり方の完全手順（全{currentPattern.steps.length}工程）</span>
                </h3>
                <span className="text-xs text-slate-500">
                  ※ 写真や商品名をタップすると製品詳細と価格を確認できます
                </span>
              </div>

              <div className="space-y-6">
                {currentPattern.steps.map((step) => {
                  const matchedProduct = findMatchedProduct(step.productName);

                  return (
                    <div
                      key={step.stepNumber}
                      className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
                    >
                      <div className="p-6 sm:p-8 space-y-6">
                        {/* 上段: ステップ番号 ＋ 写真サムネイル ＋ 商品情報 ＋ 適量バッジ */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-5 border-b border-slate-100">
                          <div className="flex items-center gap-4 sm:gap-5">
                            {/* ステップ番号バッジ */}
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-black text-xl sm:text-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                              {step.stepNumber}
                            </div>

                            {/* 商品サムネイル写真 */}
                            {matchedProduct && (
                              <div
                                onClick={() => setSelectedProduct(matchedProduct)}
                                className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 rounded-2xl border border-slate-200/80 p-1.5 flex items-center justify-center flex-shrink-0 cursor-pointer hover:border-purple-400 hover:shadow-md transition-all group-hover:scale-105"
                                title="タップして詳細を見る"
                              >
                                {matchedProduct.imageUrl ? (
                                  <img
                                    src={matchedProduct.imageUrl}
                                    alt={matchedProduct.title}
                                    className="max-h-full max-w-full object-contain"
                                    loading="lazy"
                                  />
                                ) : (
                                  <ShoppingBag className="w-8 h-8 text-slate-300" />
                                )}
                              </div>
                            )}

                            {!matchedProduct && (
                              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-50/80 rounded-2xl border border-amber-200 p-2 flex items-center justify-center flex-shrink-0 text-amber-600">
                                <Timer className="w-8 h-8" />
                              </div>
                            )}

                            {/* 商品名・カテゴリー */}
                            <div className="space-y-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                                  {step.phase}
                                </span>
                                <span className="text-xs text-slate-500 font-medium">
                                  {step.category}
                                </span>
                              </div>
                              <h4
                                onClick={() => {
                                  if (matchedProduct) setSelectedProduct(matchedProduct);
                                }}
                                className={`text-base sm:text-lg font-black text-slate-900 transition-colors ${
                                  matchedProduct ? 'cursor-pointer hover:text-purple-600 inline-flex items-center gap-1.5' : ''
                                }`}
                              >
                                <span>{step.productName}</span>
                                {matchedProduct && (
                                  <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200 hidden sm:inline-flex items-center gap-1">
                                    <Eye className="w-3 h-3" />
                                    <span>詳細</span>
                                  </span>
                                )}
                              </h4>
                              {matchedProduct && (
                                <div className="text-xs font-bold text-teal-700">
                                  価格: {matchedProduct.price}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* 適量バッジ */}
                          <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-3 sm:p-4 flex items-center gap-3 self-start md:self-center flex-shrink-0 shadow-2xs">
                            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0">
                              <Droplets className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-[10px] text-amber-900 font-bold uppercase tracking-wider">1回の適量目安</div>
                              <div className="text-xs sm:text-sm font-black text-slate-900">{step.amount}</div>
                            </div>
                          </div>
                        </div>

                        {/* 具体的な動かし方と塗り方 */}
                        <div className="space-y-2">
                          <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-600" />
                            <span>手の動かし方 ＆ 具体的なやり方（プロの手順）</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50/90 rounded-2xl p-4 sm:p-5 border border-slate-200/80">
                            {step.howTo}
                          </p>
                        </div>

                        {/* プロのコツ（Pro Tip） ＆ やってはいけないNG（NG Action） */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                          <div className="bg-teal-50/80 border border-teal-200 rounded-2xl p-5 space-y-2">
                            <div className="text-xs sm:text-sm font-bold text-teal-900 flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-teal-600" />
                              <span>プロのコツ・皮膚生理学の視点</span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                              {step.proTip}
                            </p>
                          </div>

                          <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-5 space-y-2">
                            <div className="text-xs sm:text-sm font-bold text-rose-900 flex items-center gap-2">
                              <AlertCircle className="w-4 h-4 text-rose-600" />
                              <span>絶対に避けるべきNG行動</span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                              {step.ngAction}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 皮膚科学に基づく7大基本原則（ゆとりある余白 ＆ イラスト・絵・アイコン完備） */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md space-y-8">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-800 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span>プロのヘアメイク・皮膚科医が口を揃える共通鉄則</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  皮膚科学に基づく「洗顔 ＆ メイク」の7大基本原則
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  どの商品を使う場合でも、この7原則を守るだけで化粧品の浸透・キメ・持続力が劇的に向上します。
                  日々の習慣としてぜひ意識してください。
                </p>
              </div>

              {/* 7大原則カード（余白たっぷりのラグジュアリーグリッド） */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {SKINCARE_PRINCIPLES.map(p => {
                  const visual = getPrincipleVisual(p.number);
                  const IconComponent = visual.icon;

                  return (
                    <div
                      key={p.number}
                      className="p-6 sm:p-7 rounded-3xl bg-slate-50/80 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between space-y-5 group"
                    >
                      <div className="space-y-4">
                        {/* アイコン ＋ 番号バッジ */}
                        <div className="flex items-center justify-between">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-2xs group-hover:scale-110 transition-transform ${visual.color}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                              {visual.badge}
                            </span>
                            <span className="text-sm font-black text-slate-400 font-mono">
                              #{p.number}
                            </span>
                          </div>
                        </div>

                        {/* タイトル */}
                        <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug group-hover:text-purple-900 transition-colors">
                          {p.title}
                        </h4>

                        {/* 本文解説 */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                          {p.detail}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-purple-700 font-bold">
                        <Check className="w-3.5 h-3.5" />
                        <span>皮膚生理学遵守</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* よくある失敗とリカバリーQ&A（イラスト・アイコン完備） */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-bold">
                  <HelpCircle className="w-4 h-4" />
                  <span>洗顔・スキンケア・メイクの「困った！」を即効解決</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  よくあるトラブル・失敗への即効リカバリーQ&A
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-7 space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center text-lg font-black">
                    Q1
                  </div>
                  <div className="font-bold text-sm sm:text-base text-purple-200 leading-snug">
                    美容液の後にファンデを塗ると「モロモロ」が出ます…
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong>原因:</strong> スキンケアの高分子ポリマー（被膜成分）が乾ききらないうちに、ファンデの油分を擦り込んで摩擦したことが原因です。<br />
                    <strong>解決法:</strong> 美容液塗布後に必ず【3分間待つ】か、ティッシュ1枚を顔に乗せて手のひらで余分な水分・油分を軽く押さえてからメイクに入ってください。
                  </p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-7 space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center text-lg font-black">
                    Q2
                  </div>
                  <div className="font-bold text-sm sm:text-base text-teal-200 leading-snug">
                    朝は石鹸を使わず「水だけ洗顔」のほうが乾燥しない？
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong>真実:</strong> 睡眠中に分泌された皮脂や寝具のホコリは、水だけでは溶けません。皮脂が酸化すると過酸化脂質になり、毛穴の黒ずみやくすみ、メイク崩れの原因に。<br />
                    <strong>解決法:</strong> プレリュードのホイップ泡で、Tゾーンを中心に【30秒サッと押し洗い】するのが最も乾燥を防ぐ正解です。
                  </p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-7 space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center text-lg font-black">
                    Q3
                  </div>
                  <div className="font-bold text-sm sm:text-base text-amber-200 leading-snug">
                    クレンジングと洗顔のダブル洗顔は本当に必要？
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong>理由:</strong> クレンジングは「メイク・日焼け止めの油性汚れを浮かせるもの」、洗顔料は「浮いたクレンジング剤と汗・埃の水性汚れを洗い流すもの」で役割が異なります。<br />
                    <strong>解決法:</strong> ダブル洗顔時は、洗顔料の泡を顔に乗せる時間を30秒以内にし、ぬるま湯（32℃）ですすぐことで、乾燥させずに清潔を保てます。
                  </p>
                </div>
              </div>
            </div>

            {/* 全製品カタログ（/products）へのリンクバナー */}
            <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl p-8 sm:p-10 text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-xs font-black uppercase tracking-wider bg-white/30 px-3.5 py-1 rounded-full text-slate-950">
                  全79商品データベース完備
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-slate-950">
                  使用する化粧品のスペックや価格・特許情報を確認する
                </h4>
                <p className="text-xs sm:text-sm text-slate-900 font-medium">
                  公式サイトとオンラインショップを完全突合した「全製品カタログ＆科学的批評」へ
                </p>
              </div>
              <Link
                href="/products"
                className="px-7 py-4 rounded-2xl bg-slate-950 text-white font-black text-xs sm:text-sm hover:bg-slate-800 transition-all shadow-md flex items-center gap-2.5 whitespace-nowrap flex-shrink-0"
              >
                <ShoppingBag className="w-4 h-4 text-teal-400" />
                <span>製品カタログを見る</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 商品詳細モーダル */}
        {selectedProduct && (
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 overflow-y-auto p-3 sm:p-4 flex min-h-full items-center justify-center cursor-pointer animate-fade-in"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90dvh] flex flex-col shadow-2xl relative overflow-hidden my-auto cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 固定ヘッダー */}
              <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between flex-shrink-0 bg-white/95 sticky top-0 z-10">
                <div className="inline-block text-[11px] font-bold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                  {selectedProduct.category}
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors flex-shrink-0 ml-2"
                  aria-label="閉じる"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* スクロール可能なボディ */}
              <div className="p-5 sm:p-8 overflow-y-auto overscroll-contain flex-grow space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-48 h-48 bg-slate-50 rounded-2xl flex items-center justify-center p-4 border border-slate-100 flex-shrink-0">
                    {selectedProduct.imageUrl ? (
                      <img
                        src={selectedProduct.imageUrl}
                        alt={selectedProduct.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <ShoppingBag className="w-12 h-12 text-slate-300" />
                    )}
                  </div>

                  <div className="flex-grow space-y-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                      {selectedProduct.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {selectedProduct.subTitle}
                    </p>
                    <div className="text-sm font-bold text-slate-900 pt-1">
                      価格: <span className="text-purple-700 font-extrabold text-base">{selectedProduct.price}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {selectedProduct.description || 'フォーデイズ独自の研究・特許原料を活かしたコンディショニング製品です。'}
                    </p>
                  </div>
                </div>
              </div>

              {/* 固定フッター */}
              <div className="p-4 sm:p-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0 bg-slate-50">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>製品カタログで全比較を見る</span>
                </Link>

                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                  {selectedProduct.shopUrl && (
                    <a
                      href={selectedProduct.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-xs inline-flex items-center gap-1.5 flex-1 sm:flex-initial justify-center"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>公式ショップで購入</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* フッター */}
      <Footer onOpenPTModal={() => setIsPTModalOpen(true)} />

      {/* PT個別相談モーダル */}
      <PersonalTraining
        isModalOpen={isPTModalOpen}
        onOpenModal={() => setIsPTModalOpen(true)}
        onCloseModal={() => setIsPTModalOpen(false)}
      />
    </div>
  );
}
