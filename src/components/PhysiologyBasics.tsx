'use client';

import React from 'react';
import { Dna, RefreshCw, Zap, Activity, Info, Sparkles, ArrowRight, ShieldCheck, ArrowDown } from 'lucide-react';
import { TERMS } from '@/data/terms';

interface PhysiologyBasicsProps {
  onSelectTerm: (termId: string) => void;
}

export const PhysiologyBasics: React.FC<PhysiologyBasicsProps> = ({ onSelectTerm }) => {
  const TermButton = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => onSelectTerm(id)}
      className="inline-flex items-center gap-1 px-2.5 py-0.5 mx-1 rounded-lg bg-cyan-50 hover:bg-cyan-100 text-cyan-800 font-bold text-xs sm:text-sm border border-cyan-200 transition-all cursor-pointer group shadow-sm hover:scale-105 active:scale-95"
      title="クリックしてWikipedia風解説を表示"
    >
      <Info className="w-3 h-3 text-cyan-600 group-hover:text-cyan-800" />
      <span className="underline decoration-cyan-400 font-bold">{label}</span>
    </button>
  );

  return (
    <section id="physiology" className="scroll-mt-16 py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold mb-3">
            <Dna className="w-4 h-4 text-cyan-600" />
            <span>生化学 ＆ 生理学の基礎知識</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            「飲んだDNAが傷ついた遺伝子を治す」は本当か？<br />
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
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-5 border border-cyan-100 shadow-sm">
                <Dna className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                1. 核酸（DNA & RNA）とは何か
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                <TermButton id="nucleic_acid" label="核酸" />は、すべての生命の設計図である
                <strong>DNA（デオキシリボ核酸）</strong>と、設計図をもとにタンパク質を組み立てる作業員である
                <strong>RNA（リボ核酸）</strong>の総称です。
                最小単位は塩基・糖・リン酸から成る<TermButton id="nucleotide" label="ヌクレオチド" />です。
              </p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  <span>俗説と科学的ファクトの違い</span>
                </div>
                <p>
                  ×「サケのDNAがそのままヒトの傷ついたDNAを直接修復する」<br />
                  ○「消化管でヌクレオシド・塩基まで分解・吸収された後、体内の<strong>サルベージ合成経路</strong>で材料として再利用される」
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>重要ワード:</span>
              <div className="flex gap-1">
                <TermButton id="nucleotide" label="ヌクレオチド" />
                <TermButton id="nucleoside" label="ヌクレオシド" />
              </div>
            </div>
          </div>

          {/* Card 2: De Novo vs Salvage Synthesis */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 border border-emerald-100 shadow-sm">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                2. デノボ合成 vs サルベージ合成
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                体内での核酸合成には、アミノ酸などから大量のエネルギーを使ってゼロから作る
                <TermButton id="denovo" label="デノボ合成" />と、食事や分解された塩基を再利用する省エネの
                <TermButton id="salvage" label="サルベージ合成" />があります。
              </p>
              <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 text-xs text-emerald-950 space-y-1.5">
                <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                  <Activity className="w-4 h-4" />
                  <span>なぜ加齢や運動で核酸が必要か？</span>
                </div>
                <p className="leading-relaxed">
                  肝機能の低下（20代をピークに衰退）や激しい運動・加齢ストレスにより、体内のデノボ合成能力は低下します。経口で核酸を補うことで、肝臓に負担をかけず効率的な組織修復が可能になります。
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>重要ワード:</span>
              <div className="flex gap-1">
                <TermButton id="salvage" label="サルベージ経路" />
                <TermButton id="atp" label="ATP" />
              </div>
            </div>
          </div>

          {/* Card 3: Capillary & Muscle Regeneration */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-5 border border-indigo-100 shadow-sm">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                3. 毛細血管新生と筋肉の再生
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                理学療法士として最も着目すべきは、酵素分解核酸が
                <TermButton id="capillary" label="毛細血管新生" />を促す点です。
                血管内皮増殖因子（VEGF）を介して筋肉内の微小循環網を拡張します。
              </p>
              <div className="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-200 text-xs text-indigo-950 space-y-1.5">
                <div className="font-bold text-indigo-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>血流なくして筋肉はつかない</span>
                </div>
                <p className="leading-relaxed">
                  加齢や不活動でゴースト化した毛細血管を再開通させることで、摂取した
                  <TermButton id="bcaa" label="BCAA" />や酸素が骨格筋へスムーズに届けられます。
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>重要ワード:</span>
              <div className="flex gap-1">
                <TermButton id="capillary" label="毛細血管" />
                <TermButton id="sarcopenia" label="サルコペニア" />
              </div>
            </div>
          </div>
        </div>

        {/* Visual Diagram: De Novo vs Salvage Flowchart */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 uppercase tracking-wider">
              Biochemical Flowchart
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              図解：生体内における2大核酸合成経路の比較
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              なぜ経口摂取によるサルベージ合成経路が「体の省エネと若々しさ」に直結するのか
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left: De Novo Path */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">① デノボ合成経路（自給自足）</h4>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-slate-200 text-slate-700">高エネルギー消費</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                アミノ酸（グルタミン、グリシン、アスパラギン酸）や糖を材料として、肝臓でゼロからヌクレオチドを合成する経路。
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-800 block mb-0.5">原料: 食事のアミノ酸・糖・リン酸</strong>
                  <span className="text-slate-500">多段階の複雑な酵素反応と大量のATP（エネルギー）を消費</span>
                </div>
                <div className="flex justify-center text-slate-400">
                  <ArrowDown className="w-4 h-4" />
                </div>
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-900">
                  <strong className="block mb-0.5">【加齢・ストレスによる弱点】</strong>
                  20代を境に肝機能とともに合成力が年々低下。激しい運動や疾病時には材料が枯渇し、疲労回復が遅れます。
                </div>
              </div>
            </div>

            {/* Right: Salvage Path */}
            <div className="p-6 rounded-2xl bg-cyan-50/70 border border-cyan-200 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-cyan-950 text-sm sm:text-base">② サルベージ合成経路（省エネ再利用）</h4>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-cyan-600 text-white shadow-sm">FORDAYSの狙い</span>
              </div>
              <p className="text-xs text-cyan-900 leading-relaxed">
                食事から摂取したヌクレオシドや塩基をそのまま再利用し、わずかなエネルギーでDNA/RNAを素早く再構築する経路。
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-cyan-200">
                  <strong className="text-cyan-950 block mb-0.5">原料: 核酸ドリンク（サケ白子・酵母抽出物）</strong>
                  <span className="text-slate-600">低分子化された塩基・ヌクレオシドが小腸からスムーズに吸収</span>
                </div>
                <div className="flex justify-center text-cyan-600">
                  <ArrowDown className="w-4 h-4" />
                </div>
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950">
                  <strong className="block mb-0.5">【大きなメリット】</strong>
                  肝臓に無駄な負担をかけず、骨髄や小腸、傷ついた筋肉組織など細胞分裂の活発な場所へ即座に供給されます。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
