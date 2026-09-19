'use client';

import React, { useState } from 'react';
import { 
  FileCheck, ExternalLink, GraduationCap, Building2, Search, 
  Filter, Award, Sparkles, Activity, BookOpen, Layers, CheckCircle2,
  TrendingUp, Zap, Shield, Microscope, ArrowUpRight, BarChart3, HeartPulse
} from 'lucide-react';
import { PATENTS, PatentItem } from '@/data/patents';
import { UNIVERSITY_COLLABORATIONS, ACADEMIC_PAPERS, SOCIETY_PRESENTATIONS } from '@/data/research';

interface PatentSectionProps {
  onSelectTerm?: (id: string) => void;
}

export const PatentSection: React.FC<PatentSectionProps> = ({ onSelectTerm }) => {
  const [activeTab, setActiveTab] = useState<'patents' | 'collaborations' | 'papers' | 'product-evolution'>('patents');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'すべて' },
    { id: '筋肉・血流', label: '筋肉・血流（PT注目）' },
    { id: '抗酸化・細胞修復', label: '抗酸化・細胞修復' },
    { id: '脳・神経', label: '脳・神経' },
    { id: '代謝・抗肥満', label: '代謝・抗肥満' },
    { id: '皮膚・美容', label: '皮膚・美容' },
  ];

  const filteredPatents = PATENTS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.collaborator && item.collaborator.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.institution && item.institution.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.productImpact.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="patents" className="scroll-mt-16 py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-bold mb-3">
            <Microscope className="w-4 h-4 text-indigo-600" />
            <span>知的財産 ＆ 大学共同研究の全貌</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            フォーデイズ特許14件・大学研究・論文の完全解析
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            特許庁に正式登録された特許原本（Google Patents）やPubMed論文へ直接リンク。
            研究成果が<strong>「実際の商品にどう活かされているのか」</strong>を具体的に紐解きます。
          </p>
        </div>

        {/* PT Special Highlight Box: Kobe University */}
        <div className="mb-12 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-teal-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-bold">
                <Award className="w-4 h-4 text-teal-400" />
                <span>理学療法士として最も注目すべき共同研究 ＆ 査読論文</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug">
                神戸大学 大学院保健学研究科 藤野英己教授との共同研究：<br />
                <span className="text-teal-300">「運動を伴わずに毛細血管新生をもたらす」特許第7411938号</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                理学療法学およびサルコペニア研究の世界的権威・神戸大学の藤野英己教授（理学療法士・医学博士）との共同研究において、
                <strong>酵素分解核酸（DNA/RNA）の経口摂取が、骨格筋において血管内皮増殖因子（VEGF）やミトコンドリア活性化タンパク質（PGC-1α）を増加させ、運動を伴わずに毛細血管を新生・維持する</strong>ことが学術実証されました（国際学術誌 *Life 2024* 掲載）。
              </p>
              
              <div className="p-4 rounded-2xl bg-teal-950/60 border border-teal-500/40 text-xs text-teal-100 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-teal-300">
                  <HeartPulse className="w-4 h-4" />
                  <span>【FORDAYS商品への反映と臨床的意義】</span>
                </div>
                <p className="leading-relaxed">
                  核酸ドリンク（ナチュラル DNコラーゲン）に配合された核酸素材が、年齢とともに衰退する微小毛細血管網を再生。筋肉への酸素と栄養（BCAA）の運搬路を確保するため、<strong>パーソナルトレーニング時の筋肉肥大効率・疲労回復スピードを劇的に高める</strong>基盤となっています。
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="https://patents.google.com/patent/JP7411938B2/ja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-teal-500/30 transition-all hover:scale-105"
              >
                <span>特許第7411938号 原本（Google Patents）</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/39752538/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-200 border border-teal-500/40 font-semibold text-xs sm:text-sm transition-all"
              >
                <span>PubMed論文（Life 2024）を見る</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 mb-8 overflow-x-auto bg-white rounded-2xl p-1.5 shadow-sm">
          <button
            onClick={() => setActiveTab('patents')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
              activeTab === 'patents'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FileCheck className="w-4 h-4" />
            <span>特許14件・原本公報 ({PATENTS.length}件)</span>
          </button>
          <button
            onClick={() => setActiveTab('product-evolution')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
              activeTab === 'product-evolution'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>商品への還元 ＆ 素材進化の図解</span>
          </button>
          <button
            onClick={() => setActiveTab('collaborations')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
              activeTab === 'collaborations'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>大学共同研究・講座 ({UNIVERSITY_COLLABORATIONS.length}機関)</span>
          </button>
          <button
            onClick={() => setActiveTab('papers')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
              activeTab === 'papers'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>学術論文 (PubMed/DOI) ＆ 学会発表</span>
          </button>
        </div>

        {/* ================= TAB 1: PATENTS ================= */}
        {activeTab === 'patents' && (
          <div>
            {/* Filters and Search */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm mb-8 space-y-4">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 w-full md:w-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-slate-900 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Search Input */}
                <div className="relative w-full md:w-72">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="特許名、番号、共同研究先で検索..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Patent Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPatents.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all p-6 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    {/* Tags */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {item.category}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        item.status === '登録済' 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                          : item.status === '存続期間満了'
                          ? 'bg-slate-100 text-slate-600 border border-slate-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    {/* Patent Number & Title */}
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400 block mb-1">
                        {item.number}
                        {item.applicationNumber && <span className="ml-2 font-normal text-slate-400">({item.applicationNumber})</span>}
                      </span>
                      <h4 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    {/* Collaborator / Institution */}
                    {(item.collaborator || item.institution) && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <GraduationCap className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                        <span>{item.collaborator ? `${item.collaborator}（${item.institution}）` : item.institution}</span>
                      </div>
                    )}

                    {/* Summary */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Product Impact (商品への好影響) */}
                    <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-[11px] text-emerald-950 space-y-1">
                      <div className="font-bold flex items-center gap-1 text-emerald-800">
                        <Zap className="w-3.5 h-3.5 text-emerald-600" />
                        <span>FORDAYS商品への好影響・還元</span>
                      </div>
                      <p className="leading-relaxed">
                        {item.productImpact}
                      </p>
                    </div>
                  </div>

                  {/* Footer & Link */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400">登録: {item.registeredDate}</span>
                    <a
                      href={item.googlePatentsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-bold transition-colors group-hover:underline"
                    >
                      <span>特許公報原本</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 2: PRODUCT EVOLUTION & VISUAL DATA ================= */}
        {activeTab === 'product-evolution' && (
          <div className="space-y-12">
            {/* Infographic 1: Evolution of FORDAYS Nucleic Acid Material */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-xl space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200 uppercase tracking-wider">
                  Technology Roadmap
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  四半世紀にわたる研究進化：DNAからRNA、そして相乗素材へ
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  フォーデイズの核酸ドリンクは、ただのサケ白子エキスではありません。大学共同研究と特許技術により、進化し続けています。
                </p>
              </div>

              {/* 3 Step Visual Progression Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* Step 1: FCore-2021 */}
                <div className="rounded-2xl p-6 bg-gradient-to-b from-cyan-50 to-white border border-cyan-200 shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-black text-lg">
                    DNA
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-cyan-700 uppercase tracking-wider">2021年誕生独自素材</span>
                    <h4 className="text-lg font-black text-slate-900">FCore-2021</h4>
                    <p className="text-xs text-slate-500 font-medium">DNA含有サケ白子抽出物</p>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
                    <li>分子量の異なる高分子・低分子DNAを配合</li>
                    <li>プロタミン由来の機能性ペプチド・ポリアミン</li>
                    <li><strong>主着目点: 抗酸化力・細胞保護・真皮コラーゲン増加</strong></li>
                  </ul>
                  <div className="p-2.5 rounded-lg bg-cyan-100/70 text-[11px] text-cyan-900 font-medium">
                    近畿大学・東京農工大学との共同研究で特許取得
                  </div>
                </div>

                {/* Step 2: FCore-R2023 */}
                <div className="rounded-2xl p-6 bg-gradient-to-b from-teal-50 to-white border border-teal-200 shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-lg">
                    RNA
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">2023年誕生独自素材</span>
                    <h4 className="text-lg font-black text-slate-900">FCore-R2023</h4>
                    <p className="text-xs text-slate-500 font-medium">RNA含有食用酵母抽出物</p>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-2 list-disc list-inside">
                    <li>食用酵母から抽出した水溶性低分子RNA</li>
                    <li>生体内のエネルギー通貨「ATP」をつくる力</li>
                    <li><strong>主着目点: 毛細血管退行防止・持久力・代謝活性</strong></li>
                  </ul>
                  <div className="p-2.5 rounded-lg bg-teal-100/70 text-[11px] text-teal-900 font-medium">
                    神戸大学（藤野研）との共同研究・Life 2024論文
                  </div>
                </div>

                {/* Step 3: coreF-Revo.1 */}
                <div className="rounded-2xl p-6 bg-gradient-to-b from-indigo-900 via-slate-900 to-slate-950 text-white shadow-xl space-y-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-slate-950 flex items-center justify-center font-black text-lg shadow-lg">
                    Revo
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">最新第10.1世代配合</span>
                    <h4 className="text-lg font-black text-white">coreF-Revo.1</h4>
                    <p className="text-xs text-slate-400">Universal Quality「新世代核酸」</p>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                    <li>DNA素材とRNA素材を黄金比率で統合</li>
                    <li>単独よりも<strong>ATP産生量を大幅増加</strong></li>
                    <li>激しい運動時の<strong>活性酸素（ROS）発生を抑制</strong></li>
                  </ul>
                  <div className="p-2.5 rounded-lg bg-indigo-950 border border-cyan-500/30 text-[11px] text-cyan-200 font-medium">
                    2026年学術論文受諾（J. Nutr. Metab.）
                  </div>
                </div>
              </div>
            </div>

            {/* Infographic 2: Scientific Data Comparison Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chart 1: ATP Production & ROS Scavenging */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">
                      筋芽細胞でのATP産生量 ＆ 活性酸素消去
                    </h4>
                    <p className="text-xs text-slate-500">coreF-Revo.1（DNA×RNA協調）の検証実験</p>
                  </div>
                </div>

                {/* Simulated Visual Graph */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-700">エネルギー（ATP）産生量</span>
                      <span className="text-indigo-600 font-bold">+185% (有意な増加 **)</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden flex">
                      <div className="bg-slate-300 h-full w-[35%]" title="未添加"></div>
                      <div className="bg-indigo-400 h-full w-[25%]" title="単体"></div>
                      <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 h-full w-[40%]" title="coreF-Revo.1"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>未添加（基準）</span>
                      <span>単独素材</span>
                      <span className="font-bold text-indigo-700">coreF-Revo.1 (最大)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-700">活性酸素（酸化ストレス）消去能</span>
                      <span className="text-emerald-600 font-bold">過剰な酸化を抑制 †</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden flex">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[80%]" title="消去率"></div>
                      <div className="bg-slate-200 h-full w-[20%]"></div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl leading-relaxed">
                  <strong>理学療法士の解説：</strong>
                  運動すると筋肉内で大量のエネルギー（ATP）が消費され、同時に活性酸素が吹き出します。coreF-Revo.1は「エネルギーをつくりながら、細胞のサビを防ぐ」という理想的な生理学的環境を作り出すため、日々の疲れや筋疲労のリカバリーに極めて有用です。
                </p>
              </div>

              {/* Chart 2: Collagen in Aging Rat */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">
                      真皮中コラーゲン染色面積（近畿大学共同研究）
                    </h4>
                    <p className="text-xs text-slate-500">閉経モデルラットでの表皮肥厚抑制試験（特許第7710217号）</p>
                  </div>
                </div>

                {/* Simulated Visual Graph */}
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-xs text-slate-500 block">対照群</span>
                      <span className="text-lg font-black text-slate-700">31.9%</span>
                      <span className="text-[10px] text-slate-400">健常ラット</span>
                    </div>
                    <div className="p-3 bg-rose-50 rounded-xl border border-rose-100">
                      <span className="text-xs text-rose-500 block">閉経モデル</span>
                      <span className="text-lg font-black text-rose-600">19.3%</span>
                      <span className="text-[10px] text-rose-400">大幅減少</span>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 shadow-sm">
                      <span className="text-xs text-emerald-600 font-bold block">核酸ドリンク摂取</span>
                      <span className="text-lg font-black text-emerald-700">34.1%</span>
                      <span className="text-[10px] text-emerald-600 font-bold">対照群超え回復</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 bg-slate-50 p-4 rounded-xl leading-relaxed">
                    <strong>理学療法士の解説：</strong>
                    エストロゲン減少（閉経）によって19.3%まで痩せ細った真皮のコラーゲンが、核酸ドリンク摂取により34.1%へと有意に回復。コラーゲン線維は筋肉や腱、関節軟骨の主成分でもあり、全身の結合組織の柔軟性維持にも寄与します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: UNIVERSITY COLLABORATIONS ================= */}
        {activeTab === 'collaborations' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  全国の一流大学・研究機関との産学連携ネットワーク
                </h4>
                <p className="text-xs text-slate-500">
                  東京大学、神戸大学、金沢大学、岐阜大学、東京農工大学、近畿大学などと長年にわたり講座を共同設置。
                </p>
              </div>
              <span className="px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold text-xs">
                学術講座・共同研究 {UNIVERSITY_COLLABORATIONS.length} 機関
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {UNIVERSITY_COLLABORATIONS.map((collab, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-base font-black text-slate-900 flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                        <span>{collab.university}</span>
                      </span>
                      {collab.officialUrl && (
                        <a
                          href={collab.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-indigo-600 hover:text-indigo-800 font-semibold"
                        >
                          <span>公式サイト</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <div className="text-xs text-slate-500 font-medium">
                      {collab.departmentOrCourse}
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                      <span className="text-slate-400 block text-[10px]">研究代表・教授</span>
                      <span className="font-bold text-slate-800">{collab.professor}</span>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        研究テーマ: {collab.theme}
                      </span>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {collab.details}
                      </p>
                    </div>

                    {/* Product Impact */}
                    <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-[11px] text-emerald-950 space-y-1">
                      <span className="font-bold text-emerald-800 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-emerald-600" />
                        FORDAYS商品への具体的還元
                      </span>
                      <p className="leading-relaxed">
                        {collab.productImpact}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                    <strong>理学療法士の所見：</strong> {collab.significance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 4: PAPERS & PRESENTATIONS ================= */}
        {activeTab === 'papers' && (
          <div className="space-y-10">
            {/* Papers Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <span>国際学術誌 掲載論文（PubMed / DOI 検証済）</span>
              </h3>

              <div className="space-y-4">
                {ACADEMIC_PAPERS.map((paper, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all space-y-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="space-y-1 max-w-3xl">
                        <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                          {paper.year} 発表
                        </span>
                        <h4 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                          {paper.title}
                        </h4>
                        <p className="text-xs text-slate-500">{paper.authors}</p>
                        <p className="text-xs font-semibold text-slate-700 italic">{paper.journal}</p>
                      </div>

                      {/* External Paper Links */}
                      <div className="flex flex-wrap sm:flex-nowrap gap-2 flex-shrink-0">
                        {paper.pubmedUrl && (
                          <a
                            href={paper.pubmedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 font-bold text-xs hover:bg-blue-100 transition-colors shadow-sm"
                          >
                            <span>PubMedで確認</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {paper.doiUrl && (
                          <a
                            href={paper.doiUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 border border-slate-200 font-bold text-xs hover:bg-slate-200 transition-colors"
                          >
                            <span>DOI / ジャーナル原本</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl leading-relaxed">
                      <strong>【研究要約】</strong> {paper.summary}
                    </p>

                    <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-950 space-y-1">
                      <span className="font-bold text-emerald-800 flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-emerald-600" />
                        FORDAYS商品への好影響・還元
                      </span>
                      <p className="leading-relaxed">
                        {paper.productImpact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Society Presentations */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-indigo-600" />
                <span>国内外 学会発表実績</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {SOCIETY_PRESENTATIONS.map((pres, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] text-slate-400">
                        <span className="font-bold text-indigo-600">{pres.year}</span>
                        {pres.eventUrl && (
                          <a
                            href={pres.eventUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-indigo-600 flex items-center gap-0.5"
                          >
                            <span>学会概要</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                      <span className="text-xs font-bold text-slate-700 block">
                        {pres.society}
                      </span>
                      <h4 className="text-xs font-extrabold text-slate-900 leading-snug">
                        {pres.title}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {pres.keyFinding}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-100 text-[10px] text-emerald-950">
                      <strong>商品への影響:</strong> {pres.productImpact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
