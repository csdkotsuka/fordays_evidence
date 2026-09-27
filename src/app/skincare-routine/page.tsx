'use client';

import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, AlertCircle, Clock, ArrowLeft, 
  HelpCircle, ShieldCheck, ShoppingBag, ChevronRight, Layers,
  Droplets, Flame, Sun, Moon, Check, X, Award, Eye, Heart
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

  // 選択中のパターン
  const currentPattern = SKINCARE_ROUTINES.find(p => p.id === selectedPatternId) || SKINCARE_ROUTINES[0];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* グローバルヘッダー */}
      <Header onOpenPTModal={() => setIsPTModalOpen(true)} />

      {/* パンくず・トップ復帰ナビ */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>ホーム</span>
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 transition-colors font-medium"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>製品カタログ（全79品）</span>
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/evidence"
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>特許・エビデンスポータル</span>
            </Link>
          </div>
          <span className="text-purple-400 font-semibold hidden sm:inline">
            洗顔・スキンケア ＆ メイク手順完全攻略バイブル
          </span>
        </div>
      </div>

      <main className="flex-grow">
        {/* ヒーローセクション */}
        <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 sm:py-20 border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_50%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>皮膚生理学 × フォーデイズ化粧品：手順とやり方の黄金律</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-4">
                洗顔・スキンケア ＆ メイク <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                  順番・やり方 パターン別完全バイブル
                </span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                「良い化粧品を使っているのに実感が薄い…」その原因の9割は<strong>「洗顔の摩擦」</strong>と<strong>「塗る順番・浸透待ち時間のミス」</strong>にあります。
                フォーデイズの全31種コスメを最大限に生かすため、夜の本格エイジングケアから朝の3分時短メイク、毛穴泥パック、メンズグルーミングまで、
                皮膚科学の理に適った6大パターンをステップ順に徹底解説します。
              </p>

              {/* クイック特徴バッジ */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                  <div className="text-[10px] text-slate-400 font-medium">解説パターン</div>
                  <div className="text-xl font-black text-purple-400">6 <span className="text-xs text-slate-400 font-normal">大シーン</span></div>
                  <div className="text-[10px] text-slate-500">朝・夜・週末・メイク・男</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                  <div className="text-[10px] text-slate-400 font-medium">摩擦ゼロ基準</div>
                  <div className="text-xl font-black text-pink-400">圧0g <span className="text-xs text-slate-400 font-normal">感覚</span></div>
                  <div className="text-[10px] text-slate-500">泡クッションプッシュ洗い</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                  <div className="text-[10px] text-slate-400 font-medium">浸透の科学</div>
                  <div className="text-xl font-black text-teal-400">水→両親→油</div>
                  <div className="text-[10px] text-slate-500">浸透勾配レイヤリング</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                  <div className="text-[10px] text-slate-400 font-medium">プロの鉄則</div>
                  <div className="text-xl font-black text-amber-400">7 <span className="text-xs text-slate-400 font-normal">原則</span></div>
                  <div className="text-[10px] text-slate-500">32℃すすぎ・3分ルール他</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6大パターン選択タブ */}
        <section className="py-6 bg-slate-100 border-b border-slate-200 sticky top-28 z-20 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-purple-600" />
                <span>目的・シーン別 6大パターンを選択</span>
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                タップして手順を切り替え
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {SKINCARE_ROUTINES.map(pattern => {
                const isSelected = pattern.id === selectedPatternId;
                return (
                  <button
                    key={pattern.id}
                    onClick={() => setSelectedPatternId(pattern.id)}
                    className={`text-left p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-purple-500 text-white shadow-md scale-102 ring-2 ring-purple-500/20'
                        : 'bg-white border-slate-200/90 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md inline-block mb-1 border ${
                        isSelected ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : pattern.badgeColor
                      }`}>
                        {pattern.timing}
                      </span>
                      <h3 className={`text-xs font-bold leading-snug line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {pattern.patternName.split('：')[0]}
                      </h3>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                      <span>{pattern.timeEstimate}</span>
                      <ChevronRight className={`w-3 h-3 ${isSelected ? 'text-purple-400' : 'text-slate-300'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 選択されたパターンの詳細解説エリア */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* パターン概要カード */}
            <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-3xl space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-purple-500/30 text-purple-300 text-xs font-bold border border-purple-400/40">
                      {currentPattern.badge}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      <span>所要時間: {currentPattern.timeEstimate}</span>
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
                    {currentPattern.patternName}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentPattern.summary}
                  </p>
                  <div className="text-xs text-purple-200 bg-purple-900/30 border border-purple-500/20 rounded-xl p-3">
                    <strong>期待される肌結果:</strong> {currentPattern.expectedResult}
                  </div>
                </div>

                {/* なぜこの順番なのか（科学的根拠） */}
                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 lg:w-96 flex-shrink-0">
                  <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5 mb-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>なぜこの順番なのか？（浸透の科学）</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentPattern.whyThisOrder}
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-700 text-[11px] text-slate-400">
                    対象肌質: <span className="text-slate-200">{currentPattern.targetSkin}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ステップバイステップ詳細リスト */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-purple-600" />
                  <span>ステップ別 順番 ＆ やり方の完全手順（全{currentPattern.steps.length}工程）</span>
                </h3>
                <span className="text-xs text-slate-500">
                  ※ 商品名をタップすると製品詳細と価格を確認できます
                </span>
              </div>

              <div className="space-y-4">
                {currentPattern.steps.map((step) => {
                  const matchedProduct = PRODUCTS_DATA.find(p => step.productName.includes(p.title) || p.title.includes(step.productName.split(' ')[0]));

                  return (
                    <div
                      key={step.stepNumber}
                      className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden"
                    >
                      <div className="p-6 sm:p-7">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
                          {/* ステップ番号と商品情報 */}
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white font-black text-xl flex items-center justify-center flex-shrink-0 shadow-md">
                              {step.stepNumber}
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                                  {step.phase}
                                </span>
                                <span className="text-[11px] text-slate-500">
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
                                {matchedProduct && <ShoppingBag className="w-4 h-4 text-purple-500" />}
                              </h4>
                            </div>
                          </div>

                          {/* 適量バッジ */}
                          <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl px-4 py-2 flex items-center gap-2 self-start flex-shrink-0">
                            <Droplets className="w-4 h-4 text-amber-600 flex-shrink-0" />
                            <div>
                              <div className="text-[10px] text-amber-900 font-bold">1回の適量目安</div>
                              <div className="text-xs font-black text-slate-900">{step.amount}</div>
                            </div>
                          </div>
                        </div>

                        {/* 具体的な動かし方と塗り方 */}
                        <div className="mb-4">
                          <div className="text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-purple-600" />
                            <span>手の動かし方 ＆ 具体的なやり方</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 rounded-2xl p-4 border border-slate-100">
                            {step.howTo}
                          </p>
                        </div>

                        {/* プロのコツ（Pro Tip） ＆ やってはいけないNG（NG Action） */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                          <div className="bg-teal-50/60 border border-teal-200 rounded-2xl p-4">
                            <div className="text-xs font-bold text-teal-900 flex items-center gap-1.5 mb-1">
                              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                              <span>プロのコツ・皮膚生理学の視点</span>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed">
                              {step.proTip}
                            </p>
                          </div>

                          <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4">
                            <div className="text-xs font-bold text-rose-900 flex items-center gap-1.5 mb-1">
                              <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                              <span>絶対に避けるべきNG行動</span>
                            </div>
                            <p className="text-xs text-slate-700 leading-relaxed">
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

            {/* 皮膚科学に基づく7大基本原則 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="max-w-3xl mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200 mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>プロのヘアメイク・皮膚科医が口を揃える共通鉄則</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  皮膚科学に基づく「洗顔 ＆ メイク」の7大基本原則
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  どの商品を使う場合でも、この7原則を守るだけで化粧品の効果が2倍にも3倍にも引き出されます。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SKINCARE_PRINCIPLES.map(p => (
                  <div key={p.number} className="p-4.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-purple-300 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-black px-2 py-0.5 rounded-md bg-purple-600 text-white font-mono">
                        {p.number}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                        {p.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* よくある失敗とリカバリーQ&A */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 text-purple-400 text-xs font-bold mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>洗顔・スキンケア・メイクの「困った！」を解決</span>
              </div>
              <h3 className="text-xl font-black text-white mb-6">
                よくあるトラブル・失敗への即効リカバリーQ&A
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5">
                  <div className="font-bold text-sm text-purple-300 mb-2">
                    Q: 美容液の後にファンデを塗ると「モロモロ」が出ます…
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>原因:</strong> スキンケアの高分子ポリマー（被膜成分）が乾ききらないうちに、ファンデの油分を擦り込んで摩擦したことが原因です。<br />
                    <strong>解決法:</strong> 美容液塗布後に必ず【3分間待つ】か、ティッシュ1枚を顔に乗せて手のひらで余分な水分・油分を軽く押さえてからメイクに入ってください。
                  </p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5">
                  <div className="font-bold text-sm text-purple-300 mb-2">
                    Q: 朝は石鹸を使わず「水だけ洗顔」のほうが乾燥しない？
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>真実:</strong> 睡眠中に分泌された皮脂や寝具のホコリは、水だけでは溶けません。皮脂が酸化すると過酸化脂質になり、毛穴の黒ずみやくすみ、メイク崩れの原因に。<br />
                    <strong>解決法:</strong> プレリュードのホイップ泡で、Tゾーンを中心に【30秒サッと押し洗い】するのが最も乾燥を防ぐ正解です。
                  </p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5">
                  <div className="font-bold text-sm text-purple-300 mb-2">
                    Q: クレンジングと洗顔のダブル洗顔は本当に必要？
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>理由:</strong> クレンジングは「メイク・日焼け止めの油性汚れを浮かせるもの」、洗顔料は「浮いたクレンジング剤と汗・埃の水性汚れを洗い流すもの」で役割が異なります。<br />
                    <strong>解決法:</strong> ダブル洗顔時は、洗顔料の泡を顔に乗せる時間を30秒以内にし、ぬるま湯（32℃）ですすぐことで、乾燥させずに清潔を保てます。
                  </p>
                </div>
              </div>
            </div>

            {/* 全製品カタログ（/products）へのリンクバナー */}
            <div className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl p-6 sm:p-8 text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-black uppercase tracking-wider bg-white/30 px-3 py-1 rounded-full text-slate-950">
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
                className="px-6 py-3.5 rounded-2xl bg-slate-950 text-white font-black text-xs sm:text-sm hover:bg-slate-800 transition-all shadow-md flex items-center gap-2 whitespace-nowrap flex-shrink-0"
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
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

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

                <div className="flex-grow">
                  <div className="inline-block text-[11px] font-bold text-purple-800 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200 mb-2">
                    {selectedProduct.category}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">
                    {selectedProduct.subTitle}
                  </p>
                  <div className="text-sm font-bold text-slate-900 mb-3">
                    価格: <span className="text-purple-700 font-extrabold text-base">{selectedProduct.price}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedProduct.description || 'フォーデイズ独自の研究・特許原料を活かしたコンディショニング製品です。'}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-900"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>製品カタログで全比較を見る</span>
                </Link>

                <div className="flex items-center gap-2">
                  {selectedProduct.shopUrl && (
                    <a
                      href={selectedProduct.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-xs inline-flex items-center gap-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>公式ショップで購入</span>
                    </a>
                  )}
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
