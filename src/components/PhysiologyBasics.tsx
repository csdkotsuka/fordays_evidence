'use client';

import React from 'react';
import { Dna, RefreshCw, Zap, Activity, Info, Sparkles, ArrowRight } from 'lucide-react';
import { TERMS } from '@/data/terms';

interface PhysiologyBasicsProps {
  onSelectTerm: (termId: string) => void;
}

export const PhysiologyBasics: React.FC<PhysiologyBasicsProps> = ({ onSelectTerm }) => {
  const TermButton = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => onSelectTerm(id)}
      className="inline-flex items-center gap-1 px-2 py-0.5 mx-1 rounded bg-brand-50 hover:bg-brand-100 text-brand-700 font-medium text-xs sm:text-sm border border-brand-200 transition-colors cursor-pointer group"
      title="クリックしてWikipedia風解説を表示"
    >
      <Info className="w-3 h-3 text-brand-500 group-hover:text-brand-700" />
      <span className="underline decoration-dotted decoration-brand-400">{label}</span>
    </button>
  );

  return (
    <section id="physiology" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-semibold mb-3">
            <Dna className="w-4 h-4 text-cyan-600" />
            <span>生化学 ＆ 生理学の基礎知識</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            「飲んだDNAが遺伝子を治す」は本当か？<br />
            生化学の基本から理解する核酸の真実
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            青色の用語タグをクリックすると、Wikipedia形式の詳細な専門解説ポップアップが開きます。
            まず、生体が核酸をどのように取り込み、代謝しているのか基本メカニズムを整理しましょう。
          </p>
        </div>

        {/* 3 Core Scientific Concepts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: What is Nucleic Acid */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 border border-brand-100">
                <Dna className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                1. 核酸（DNA & RNA）とは何か
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                <TermButton id="nucleic_acid" label="核酸" />は、すべての生命の設計図である
                <strong>DNA（デオキシリボ核酸）</strong>と、設計図をもとにタンパク質を組み立てる作業員である
                <strong>RNA（リボ核酸）</strong>の総称です。
                最小単位は塩基・糖・リン酸から成る<TermButton id="nucleotide" label="ヌクレオチド" />です。
              </p>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                  一般的な誤解の訂正
                </div>
                <p>
                  「核酸ドリンクを飲むと、サケのDNAが傷ついた自分のDNAに直接パッチを当てるように置き換わる」という俗説は生化学的に誤りです。高分子DNAはそのままでは細胞内に入りません。
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">関連キーワード</span>
              <button 
                onClick={() => onSelectTerm('nucleic_acid')}
                className="text-brand-600 font-semibold hover:text-brand-800 flex items-center gap-1"
              >
                事典を見る <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 2: De Novo vs Salvage */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                2. 「デノボ合成」vs「サルベージ合成」
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                体内での核酸合成には、肝臓でアミノ酸などから大量のエネルギーを消費してゼロから作る
                <TermButton id="denovo" label="デノボ合成" />と、食事や分解物を再利用して手軽に合成する
                <TermButton id="salvage" label="サルベージ合成" />の2大経路があります。
              </p>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  なぜ経口摂取に意味があるのか？
                </div>
                <p>
                  20代以降、肝臓のデノボ合成能力は著しく衰退します。消化管でヌクレオチドや塩基に分解・吸収された核酸は、エネルギー消費の少ない「サルベージ経路」の即戦力原料となり、細胞修復を迅速化します。
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">関連キーワード</span>
              <button 
                onClick={() => onSelectTerm('salvage')}
                className="text-emerald-600 font-semibold hover:text-emerald-800 flex items-center gap-1"
              >
                事典を見る <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 3: ATP & Recycling */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 border border-amber-100">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                3. ATP産生と生体内リサイクル
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                細胞内のエネルギー通貨である<TermButton id="atp" label="ATP" />は
                <TermButton id="mitochondria" label="ミトコンドリア" />で作られます。
                また細胞内を清掃する<TermButton id="autophagy" label="オートファジー" />や
                <TermButton id="proteasome" label="プロテアソーム" />などの分解リサイクル機構が細胞若返りの要です。
              </p>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  フォーデイズ独自知見
                </div>
                <p>
                  DNAとRNAの協調添加により細胞のATP産生が増加し、白子抽出物がオートファジー等の分解系を刺激して不良ミトコンドリアの浄化を促すことが特許（第7627991号）で示されています。
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">関連キーワード</span>
              <button 
                onClick={() => onSelectTerm('autophagy')}
                className="text-amber-600 font-semibold hover:text-amber-800 flex items-center gap-1"
              >
                事典を見る <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Keywords Grid */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-600" />
                <span>生理学・生化学 Wikipedia風 用語集</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                気になる用語をクリックすると、いつでも詳細な定義・生体内役割・栄養的意義がポップアップします。
              </p>
            </div>
            <span className="text-xs text-slate-400 font-mono">全16項目 収録</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {Object.values(TERMS).map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectTerm(item.id)}
                className="text-left p-3 rounded-xl bg-slate-50 hover:bg-brand-50/80 hover:border-brand-300 border border-slate-200/80 transition-all hover:shadow-sm group"
              >
                <div className="text-[10px] font-semibold text-brand-600 mb-0.5">
                  {item.category}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-700 truncate">
                  {item.name}
                </div>
                <div className="text-[11px] text-slate-500 line-clamp-1 mt-1">
                  {item.shortDesc}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
