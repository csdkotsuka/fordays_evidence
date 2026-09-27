'use client';

import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, Search, Filter, ExternalLink, Sparkles, AlertCircle, 
  CheckCircle2, Info, ChevronDown, ChevronUp, Layers, Award, 
  HelpCircle, ArrowLeft, RefreshCw, X, ShoppingBag, Eye, Tag,
  Users, Target, Clock, Dumbbell, Heart, Moon, Briefcase, Zap, Check, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PersonalTraining } from '@/components/PersonalTraining';
import { PRODUCTS_DATA, CATEGORY_CRITIQUES, ProductItem } from '@/data/products';
import { STACKING_PROTOCOLS, ProductStackingProtocol } from '@/data/stackingGuide';

export default function ProductsPage() {
  const [isPTModalOpen, setIsPTModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'catalog' | 'stacking'>('stacking');
  
  // カタログ用ステート
  const [selectedMainCat, setSelectedMainCat] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [expandedCritique, setExpandedCritique] = useState<boolean>(true);

  // 組み合わせガイド用ステート
  const [stackingType, setStackingType] = useState<'age' | 'goal'>('age');
  const [selectedProtocolId, setSelectedProtocolId] = useState<string>('stack-40s-50s');
  const [planTier, setPlanTier] = useState<'minimum' | 'recommended' | 'advanced'>('recommended');

  // カテゴリーリスト抽出
  const categories = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS_DATA.forEach(p => set.add(p.category));
    return Array.from(set);
  }, []);

  // フィルタリング処理（カタログ）
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter(product => {
      if (selectedMainCat !== 'all' && product.mainCategory !== selectedMainCat) {
        return false;
      }
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = product.title.toLowerCase().includes(q);
        const matchSub = product.subTitle.toLowerCase().includes(q);
        const matchDesc = product.description.toLowerCase().includes(q);
        const matchCat = product.category.toLowerCase().includes(q);
        if (!matchTitle && !matchSub && !matchDesc && !matchCat) {
          return false;
        }
      }
      return true;
    });
  }, [selectedMainCat, selectedCategory, searchQuery]);

  // 現在選択されているカテゴリーの批評データ
  const currentCritique = selectedCategory !== 'all' ? CATEGORY_CRITIQUES[selectedCategory] : null;

  // 現在選択されているスタッキングプロトコル
  const currentProtocol = useMemo(() => {
    return STACKING_PROTOCOLS.find(p => p.id === selectedProtocolId) || STACKING_PROTOCOLS[0];
  }, [selectedProtocolId]);

  // プロトコルのリスト（年代別 / 目的別）
  const displayedProtocols = useMemo(() => {
    return STACKING_PROTOCOLS.filter(p => p.categoryType === stackingType);
  }, [stackingType]);

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
              <span>ホーム（はじめての方）</span>
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/evidence"
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>エビデンス検証ポータル（特許・論文原本）</span>
            </Link>
          </div>
          <span className="text-teal-400 font-semibold hidden sm:inline">
            全79製品突合カタログ ＆ 年代別・目的別スタッキングガイド
          </span>
        </div>
      </div>

      <main className="flex-grow">
        {/* ヒーローセクション */}
        <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 sm:py-20 border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_50%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>2大公式ソース（74品＋77品）突合 ＆ ターゲット別組み合わせ処方</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-4">
                全製品カタログ ＆ <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  年代・目的別 組み合わせ処方ガイド
                </span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                公式サイトと公式ショップの全79製品を完全重複排除。
                「どの商品をどう組み合わせるのか？」「20代〜90代の各世代や、美肌特化・虚弱体質・運動・睡眠の個別ニーズにどう使い分けるのか？」を、
                特許エビデンスとコスト配慮（松・竹・梅プラン）に基づき具体的に解説します。
              </p>

              {/* 2大モード切替タブ */}
              <div className="inline-flex p-1.5 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-lg">
                <button
                  onClick={() => setActiveTab('stacking')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'stacking'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md scale-102'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>目的・年代別 組み合わせガイド（使い分け）</span>
                </button>
                <button
                  onClick={() => setActiveTab('catalog')}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === 'catalog'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md scale-102'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>全79製品カタログ ＆ 客観的批評</span>
                </button>
                <Link
                  href="/skincare-routine"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-purple-300 hover:text-white hover:bg-purple-900/40 border border-purple-500/30 transition-all ml-1"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>洗顔・メイク手順バイブル（全31品）</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* モード1: 目的・年代別 組み合わせ＆使い分けガイド (Stacking) */}
        {/* ======================================================== */}
        {activeTab === 'stacking' && (
          <div className="space-y-12 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* ガイド概要バナー */}
              <div className="bg-gradient-to-r from-teal-900/90 via-slate-900 to-cyan-950 text-white rounded-3xl p-6 sm:p-8 border border-teal-500/30 shadow-xl mb-8">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold mb-3 border border-teal-500/30">
                    <Target className="w-3.5 h-3.5" />
                    <span>スタッキング（組み合わせ処方）の基本哲学</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black mb-3">
                    なぜ「単体」ではなく「組み合わせ（使い分け）」が重要なのか？
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    核酸は単独でも機能しますが、<strong>「運動時のBCAAとの同時摂取（特許第7857645号による酸化タンパク質修復）」</strong>や、
                    <strong>「外用スキンケア（LUセラム）と内服ドリンクによる体内外Wアプローチ（特許第7710217号）」</strong>、
                    <strong>「ひざ関節プロテオグリカン（Jチャージ）との連動」</strong>のように、
                    目的と生化学経路を一致させた組み合わせにより、体感と実効性が飛躍的に高まります。
                    同時に、高額になりすぎないよう<strong>予算に合わせた3段階（松・竹・梅）</strong>で整理しています。
                  </p>
                </div>
              </div>

              {/* 年代別 vs 目的別の切り替えピル */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2 p-1 bg-slate-200/80 rounded-2xl w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setStackingType('age');
                      setSelectedProtocolId('stack-40s-50s');
                    }}
                    className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      stackingType === 'age'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    年齢層別（20代〜90代）
                  </button>
                  <button
                    onClick={() => {
                      setStackingType('goal');
                      setSelectedProtocolId('stack-beauty-ultimate');
                    }}
                    className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      stackingType === 'goal'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    お悩み・目的別（美肌・虚弱・運動・睡眠・男性）
                  </button>
                </div>

                <div className="text-xs text-slate-500 font-medium">
                  {stackingType === 'age' ? '4つの年代別プロトコル' : '5つの目的別プロトコル'}
                </div>
              </div>

              {/* プロトコル選択ボタン一覧 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
                {displayedProtocols.map(protocol => {
                  const isSelected = protocol.id === selectedProtocolId;
                  return (
                    <button
                      key={protocol.id}
                      onClick={() => setSelectedProtocolId(protocol.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-slate-900 border-teal-500 text-white shadow-md scale-102 ring-2 ring-teal-500/20'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100/70 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        {protocol.ageRange ? (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md inline-block mb-1.5 ${
                            isSelected ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : 'bg-slate-100 text-slate-600'
                          }`}>
                            {protocol.ageRange}
                          </span>
                        ) : (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md inline-block mb-1.5 ${
                            isSelected ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-slate-100 text-slate-600'
                          }`}>
                            目的別特化
                          </span>
                        )}
                        <h4 className={`text-xs font-bold leading-snug line-clamp-2 ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                          {protocol.title.split('：')[0]}
                        </h4>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[11px]">
                        <span className={`text-[10px] truncate ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                          {protocol.targetGroup.substring(0, 14)}...
                        </span>
                        <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? 'text-teal-400' : 'text-slate-400'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* 選択されたプロトコルの詳細表示カード */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
                {/* ヘッダーエリア */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 border-b border-slate-700">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/40 mb-2">
                        {currentProtocol.categoryType === 'age' ? '年代別ターゲット処方' : '目的別集中処方'}
                        {currentProtocol.ageRange && ` | ${currentProtocol.ageRange}`}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                        {currentProtocol.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                        {currentProtocol.summary}
                      </p>
                    </div>

                    {/* 課題リストピル */}
                    <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 md:w-80 flex-shrink-0">
                      <div className="text-[11px] font-bold text-amber-400 mb-2 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>この層が直面しやすい主課題</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {currentProtocol.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-[11px] leading-snug">
                            <span className="text-teal-400 font-bold">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 核心シナジーメカニズム */}
                  <div className="mt-6 pt-6 border-t border-slate-700/80 bg-teal-950/30 rounded-2xl p-4 border border-teal-500/20">
                    <div className="text-xs font-bold text-teal-300 flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-4 h-4 text-teal-400" />
                      <span>相乗効果の生化学的根拠（なぜこの組み合わせが効果的なのか）</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {currentProtocol.keySynergy}
                    </p>
                  </div>
                </div>

                {/* 3段階（松・竹・梅）プラン選択エリア */}
                <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        予算・目的に合わせた組み合わせプラン（松・竹・梅）
                      </h4>
                      <p className="text-xs text-slate-500">
                        高額になりすぎないよう、まずは無理なく続けられる「梅」または「竹」から始めることを推奨します。
                      </p>
                    </div>

                    {/* プラン切替ピル */}
                    <div className="inline-flex p-1 bg-slate-200 rounded-xl">
                      {(['minimum', 'recommended', 'advanced'] as const).map(tier => {
                        const labels = {
                          minimum: '梅（基本継続）',
                          recommended: '竹（おすすめ推奨）',
                          advanced: '松（フルチャージ）'
                        };
                        return (
                          <button
                            key={tier}
                            onClick={() => setPlanTier(tier)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              planTier === tier
                                ? 'bg-teal-700 text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            {labels[tier]}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 選択されたプランのカード */}
                  {(() => {
                    const planData = planTier === 'minimum'
                      ? currentProtocol.minimumPlan
                      : planTier === 'recommended'
                      ? currentProtocol.recommendedPlan
                      : currentProtocol.advancedPlan;

                    const badgeColor = planTier === 'minimum'
                      ? 'bg-amber-100 text-amber-900 border-amber-300'
                      : planTier === 'recommended'
                      ? 'bg-teal-100 text-teal-900 border-teal-300'
                      : 'bg-purple-100 text-purple-900 border-purple-300';

                    return (
                      <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                          <div className="flex items-center gap-3">
                            <span className={`text-xs font-black px-3 py-1 rounded-full border ${badgeColor}`}>
                              {planData.name}
                            </span>
                            <span className="text-xs text-slate-600">
                              {planData.description}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-slate-500 mr-2">目安コスト:</span>
                            <span className="text-base sm:text-lg font-black text-teal-700">{planData.costEstimate}</span>
                          </div>
                        </div>

                        {/* 構成商品リスト */}
                        <div>
                          <div className="text-xs font-bold text-slate-700 mb-2">構成アイテム（タップでカタログ連動）:</div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {planData.products.map(prodName => {
                              const item = PRODUCTS_DATA.find(p => p.title === prodName || prodName.includes(p.title));
                              return (
                                <div
                                  key={prodName}
                                  onClick={() => {
                                    if (item) setSelectedProduct(item);
                                  }}
                                  className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-teal-50/50 hover:border-teal-300 transition-all cursor-pointer flex items-center justify-between group"
                                >
                                  <div className="min-w-0 pr-2">
                                    <div className="text-[10px] text-teal-700 font-semibold truncate">
                                      {item?.category || 'フォーデイズ製品'}
                                    </div>
                                    <div className="text-xs font-bold text-slate-900 truncate group-hover:text-teal-800">
                                      {prodName}
                                    </div>
                                    <div className="text-[11px] text-slate-500 font-medium">
                                      {item?.price || '会員価格'}
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 flex-shrink-0" />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* 1日の使い分けタイムライン（スケジュール） */}
                <div className="p-6 sm:p-8 bg-white border-b border-slate-200">
                  <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span>1日の使い分け・摂取タイミング（タイムライン）</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80">
                      <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5 mb-2">
                        <span>🌅 朝（起床・朝食）</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {currentProtocol.schedule.morning}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-200/80">
                      <div className="text-xs font-bold text-sky-900 flex items-center gap-1.5 mb-2">
                        <span>☀️ 昼（活動・運動時）</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {currentProtocol.schedule.daytime}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/80">
                      <div className="text-xs font-bold text-indigo-900 flex items-center gap-1.5 mb-2">
                        <span>🌇 夕方・入浴時</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {currentProtocol.schedule.evening}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-200/80">
                      <div className="text-xs font-bold text-purple-900 flex items-center gap-1.5 mb-2">
                        <span>🌙 就寝前（修復期）</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {currentProtocol.schedule.night}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 注意事項 ＆ 客観的アドバイス */}
                <div className="p-6 sm:p-8 bg-slate-50">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950">
                    <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-rose-900">
                        安全な併用と過度な期待を避けるための客観的注意点
                      </div>
                      <ul className="space-y-1 text-xs text-rose-800 list-disc list-inside">
                        {currentProtocol.cautions.map((caution, i) => (
                          <li key={i}>{caution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* モード2: 全79製品カタログ ＆ 客観批評 (Catalog & Critique) */}
        {/* ======================================================== */}
        {activeTab === 'catalog' && (
          <div>
            {/* 科学的批評の4本柱（総合ガイド） */}
            <section className="py-8 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-teal-600" />
                    <h2 className="text-lg font-bold text-slate-900">
                      本カタログにおける「科学的検証 ＆ 客観的批評」の基本スタンス
                    </h2>
                  </div>
                  <button
                    onClick={() => setExpandedCritique(!expandedCritique)}
                    className="text-xs font-semibold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{expandedCritique ? '閉じる' : '詳細を展開'}</span>
                    {expandedCritique ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {expandedCritique && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                    <div className="bg-teal-50/60 border border-teal-200 rounded-2xl p-4.5">
                      <div className="flex items-center gap-2 text-teal-800 font-bold text-sm mb-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span>1. なぜ効果的なのか（機序）</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        独自開発原料「FCore-2021」や水溶性核酸（DNA-Na/RNA）、スノードロップエキスを配合。
                        <strong>酸化タンパク質修復酵素（MsrA）の遺伝子発現増加（特許第7857645号）</strong>や、
                        <strong>表皮肥厚化抑制・真皮コラーゲン改善（特許第7710217号）</strong>など、
                        細胞修復とサルベージ代謝の科学的機序に立脚しています。
                      </p>
                    </div>

                    <div className="bg-cyan-50/60 border border-cyan-200 rounded-2xl p-4.5">
                      <div className="flex items-center gap-2 text-cyan-900 font-bold text-sm mb-2">
                        <Sparkles className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                        <span>2. FORDAYSならではの独自性</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        一般的な化粧品・サプリが「単なる表面保湿」や「ビタミン補給」にとどまるのに対し、
                        フォーデイズは<strong>20年以上の核酸専業研究による可溶化・低分子化技術</strong>を確立。
                        飲用および外用の双方からヌクレオチドプールを満たし、細胞のリサイクル環境（オートファジー等）を支えます。
                      </p>
                    </div>

                    <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4.5">
                      <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                        <ScaleIcon className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <span>3. 実は一般品と同じ部分</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        化粧品の基剤（水・BG・グリセリン・スクワラン等）は<strong>一流デパコスと同一の骨格</strong>であり、
                        角質層（約0.02mm）のバリア保護という基本作用は一般品と共通です。
                        またサプリのコラーゲンやビタミン、アミノ酸も体内では通常通りペプチド・アミノ酸に分解されて吸収されます。
                      </p>
                    </div>

                    <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4.5">
                      <div className="flex items-center gap-2 text-rose-900 font-bold text-sm mb-2">
                        <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                        <span>4. 不十分な点・科学的限界</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        多くの特許・論文は<strong>動物病態モデルや培養細胞試験が主軸</strong>であり、
                        健常人を対象とした大規模二重盲検無作為化比較試験（RCT）は一部に限られます。
                        また医薬品ではないため、病気の根治や遺伝子の書き換えを期待することは医学的に不適切です。
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 検索 ＆ カテゴリーフィルター */}
            <section className="py-6 bg-slate-100/80 border-b border-slate-200 sticky top-28 z-20 backdrop-blur-md">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-thin">
                    {[
                      { id: 'all', label: '全商品（79）' },
                      { id: 'サプリメント', label: 'サプリメント（27）' },
                      { id: '化粧品／スキンケア・メイク', label: 'スキンケア・メイク（31）' },
                      { id: 'ヘア＆ボディ', label: 'ヘア＆ボディ（15）' },
                      { id: 'その他', label: 'その他・ペット（6）' },
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setSelectedMainCat(tab.id);
                          setSelectedCategory('all');
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                          selectedMainCat === tab.id
                            ? 'bg-slate-900 text-white shadow-sm'
                            : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="relative min-w-[240px] md:w-72">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="商品名・成分・カテゴリで検索..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-8 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-thin">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === 'all'
                        ? 'bg-teal-700 text-white shadow-xs'
                        : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200'
                    }`}
                  >
                    すべてのカテゴリー
                  </button>
                  {categories.map(cat => {
                    const count = PRODUCTS_DATA.filter(p => p.category === cat).length;
                    return (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          const p = PRODUCTS_DATA.find(x => x.category === cat);
                          if (p) setSelectedMainCat(p.mainCategory);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1 ${
                          selectedCategory === cat
                            ? 'bg-teal-700 text-white shadow-xs'
                            : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200'
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="text-[10px] opacity-75">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* 選択されたカテゴリーの詳細エビデンス ＆ 客観批評パネル */}
            {currentCritique && (
              <section className="bg-gradient-to-r from-teal-900 via-slate-900 to-cyan-950 text-white py-8 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs text-teal-300 font-semibold mb-1">
                        <Tag className="w-3.5 h-3.5" />
                        <span>カテゴリー別 科学的エビデンス ＆ 客観的批評</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {selectedCategory}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {currentCritique.patents.map(pat => (
                        <span key={pat} className="text-[11px] px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 font-mono">
                          {pat}
                        </span>
                      ))}
                      {currentCritique.institutions.map(inst => (
                        <span key={inst} className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                          {inst}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4">
                      <div className="text-teal-400 font-bold text-xs flex items-center gap-1.5 mb-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>なぜ効果的なのか（機序）</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {currentCritique.whyEffective}
                      </p>
                    </div>

                    <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4">
                      <div className="text-cyan-400 font-bold text-xs flex items-center gap-1.5 mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span>FORDAYSならではの良さ</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {currentCritique.uniqueStrengths}
                      </p>
                    </div>

                    <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4">
                      <div className="text-amber-400 font-bold text-xs flex items-center gap-1.5 mb-2">
                        <ScaleIcon className="w-4 h-4" />
                        <span>一般品と同じ部分（客観批評）</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {currentCritique.commonPoints}
                      </p>
                    </div>

                    <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4">
                      <div className="text-rose-400 font-bold text-xs flex items-center gap-1.5 mb-2">
                        <AlertCircle className="w-4 h-4" />
                        <span>不十分な点・科学的限界</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {currentCritique.limitations}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* 商品一覧グリッド */}
            <section className="py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      製品一覧
                      <span className="ml-2 text-sm font-normal text-slate-500">
                        （該当: <strong className="text-teal-700">{filteredProducts.length}</strong> 件 / 全79件）
                      </span>
                    </h3>
                  </div>
                  <div className="text-xs text-slate-500">
                    ※ 価格は公式オンラインショップ表示価格（税込）または会員価格基準
                  </div>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                    <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-600 font-bold text-sm">該当する商品が見つかりませんでした。</p>
                    <p className="text-xs text-slate-400 mt-1">検索条件を変更するか、カテゴリーをリセットしてください。</p>
                    <button
                      onClick={() => {
                        setSelectedMainCat('all');
                        setSelectedCategory('all');
                        setSearchQuery('');
                      }}
                      className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-all cursor-pointer"
                    >
                      フィルターをリセット
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {filteredProducts.map((product) => {
                      return (
                        <div
                          key={product.id}
                          className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col overflow-hidden group hover:border-teal-300"
                        >
                          <div className="relative h-48 bg-slate-50 flex items-center justify-center p-4 border-b border-slate-100 overflow-hidden">
                            {product.imageUrl ? (
                              <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-16 h-16 rounded-2xl bg-slate-200/70 flex items-center justify-center text-slate-400">
                                <ShoppingBag className="w-8 h-8" />
                              </div>
                            )}

                            <div className="absolute top-2 left-2 flex flex-col gap-1">
                              {product.availableOnOfficial && product.availableOnShop && (
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-teal-100 text-teal-800 border border-teal-200">
                                  公式・EC共通
                                </span>
                              )}
                              {!product.availableOnShop && product.availableOnOfficial && (
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-200">
                                  カタログ掲載 / サロン限定
                                </span>
                              )}
                              {product.availableOnShop && !product.availableOnOfficial && (
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-cyan-100 text-cyan-900 border border-cyan-200">
                                  EC限定・付属品
                                </span>
                              )}
                            </div>

                            <div className="absolute bottom-2 right-2">
                              <span className="text-[11px] font-bold px-2 py-1 rounded-lg bg-slate-900/80 backdrop-blur-xs text-white">
                                {product.price}
                              </span>
                            </div>
                          </div>

                          <div className="p-4 flex flex-col flex-grow">
                            <div className="text-[10px] font-bold text-teal-700 mb-1">
                              {product.category}
                            </div>
                            <h4 className="font-bold text-slate-900 text-sm leading-snug mb-1 group-hover:text-teal-700 transition-colors line-clamp-2">
                              {product.title}
                            </h4>
                            {product.subTitle && (
                              <p className="text-[11px] text-slate-500 mb-2 truncate">
                                {product.subTitle}
                              </p>
                            )}
                            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed flex-grow mb-3">
                              {product.description || 'フォーデイズ独自の核酸技術と厳選素材によるコンディショニング製品。'}
                            </p>

                            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                              <button
                                onClick={() => setSelectedProduct(product)}
                                className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-900 cursor-pointer"
                              >
                                <Info className="w-3.5 h-3.5" />
                                <span>エビデンス詳細</span>
                              </button>

                              <div className="flex items-center gap-1.5">
                                {product.officialUrl && (
                                  <a
                                    href={product.officialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="公式サイトで見る"
                                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                  </a>
                                )}
                                {product.shopUrl && (
                                  <a
                                    href={product.shopUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="オンラインショップで見る"
                                    className="p-1.5 text-teal-600 hover:text-teal-800 hover:bg-teal-50 rounded-lg transition-colors"
                                  >
                                    <ShoppingBag className="w-3.5 h-3.5" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </section>
          </div>
        )}

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
                  <div className="inline-block text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200 mb-2">
                    {selectedProduct.category}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-3">
                    {selectedProduct.subTitle}
                  </p>
                  <div className="text-sm font-bold text-slate-900 mb-3">
                    価格: <span className="text-teal-700 font-extrabold text-base">{selectedProduct.price}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedProduct.description || 'フォーデイズ独自の研究・特許原料を活かしたコンディショニング製品です。'}
                  </p>
                </div>
              </div>

              {CATEGORY_CRITIQUES[selectedProduct.category] && (
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <span>このカテゴリーの科学的批評 ＆ エビデンス検証</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-teal-50/70 border border-teal-200/80 rounded-xl">
                      <div className="font-bold text-teal-900 mb-1">なぜ効果的なのか</div>
                      <p className="text-slate-700 leading-relaxed text-[11px]">
                        {CATEGORY_CRITIQUES[selectedProduct.category].whyEffective}
                      </p>
                    </div>

                    <div className="p-3 bg-cyan-50/70 border border-cyan-200/80 rounded-xl">
                      <div className="font-bold text-cyan-900 mb-1">一般品との違い（独自性）</div>
                      <p className="text-slate-700 leading-relaxed text-[11px]">
                        {CATEGORY_CRITIQUES[selectedProduct.category].uniqueStrengths}
                      </p>
                    </div>

                    <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl">
                      <div className="font-bold text-amber-900 mb-1">一般品と同じ部分（客観批評）</div>
                      <p className="text-slate-700 leading-relaxed text-[11px]">
                        {CATEGORY_CRITIQUES[selectedProduct.category].commonPoints}
                      </p>
                    </div>

                    <div className="p-3 bg-rose-50/70 border border-rose-200/80 rounded-xl">
                      <div className="font-bold text-rose-900 mb-1">不十分な点・限界</div>
                      <p className="text-slate-700 leading-relaxed text-[11px]">
                        {CATEGORY_CRITIQUES[selectedProduct.category].limitations}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/evidence"
                  className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 hover:text-cyan-900"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>特許公報原本・論文一覧を確認する</span>
                </Link>

                <div className="flex items-center gap-2">
                  {selectedProduct.officialUrl && (
                    <a
                      href={selectedProduct.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors inline-flex items-center gap-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>公式サイト詳細</span>
                    </a>
                  )}
                  {selectedProduct.shopUrl && (
                    <a
                      href={selectedProduct.shopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-xs inline-flex items-center gap-1"
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

// 補助アイコン
function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
      <path d="M7 21h10"/>
      <path d="M12 3v18"/>
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
    </svg>
  );
}
