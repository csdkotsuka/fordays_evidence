'use client';

import React from 'react';
import { Droplet, Award, CheckCircle2, GlassWater, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';

export const BeginnerFeatures: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* セクション見出し */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold text-teal-700">
            <Award className="w-3.5 h-3.5 text-teal-600" />
            <span>選ばれる理由</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            フォーデイズの核酸ドリンクが支持される3つの特長
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            「サプリは錠剤が多くて飲みにくい…」「効果がよく分からず続かない…」<br />
            そんな方にこそ選ばれている、フォーデイズ独自のこだわりがあります。
          </p>
        </div>

        {/* 3つの特長カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 特長1 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-50/60 to-white border-2 border-teal-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black shadow-md">
              <Droplet className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700">特許製法技術</span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                体に吸収されやすい「水溶性核酸」
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              天然の高分子核酸は水に溶けにくく、そのままでは消化吸収されにくい難点がありました。フォーデイズは独自の酵素分解・水溶性化技術を開発し、液体でスムーズにすばやく身体へ届く処方を実現しました。
            </p>
            <div className="pt-2 text-xs font-semibold text-teal-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>特許技術に裏打ちされた吸収力</span>
            </div>
          </div>

          {/* 特長2 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-cyan-50/60 to-white border-2 border-cyan-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-black shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-cyan-700">贅沢なトリプル配合</span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                サケ白子DNA ＆ 酵母RNA ＆ コラーゲン
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              北海道産サケの白子から抽出した高品質DNAと、食用酵母から抽出したRNAを黄金比率でブレンド。さらに低分子コラーゲンペプチド、ビタミンC・B群、ミネラル（亜鉛）などを凝縮した贅沢な1本です。
            </p>
            <div className="pt-2 text-xs font-semibold text-cyan-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
              <span>マルチに栄養を補うオールインワン</span>
            </div>
          </div>

          {/* 特長3 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/60 to-white border-2 border-emerald-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black shadow-md">
              <GlassWater className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-700">美味しさ・飲みやすさ</span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                ジュース感覚で毎日おいしく続く
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              健康食品で一番大切なのは「続けられること」。爽やかなフルーティー風味（パイナップル風味等）に仕上げており、冷蔵庫で冷やしてストレートはもちろん、炭酸水やヨーグルト、氷で割っても美味しく楽しめます。
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>1日30〜60mlの簡単おいしい習慣</span>
            </div>
          </div>
        </div>

        {/* 専門職からのワンポイントアドバイス */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-400 text-slate-950 flex items-center justify-center flex-shrink-0 font-black">
            <HeartPulse className="w-8 h-8" />
          </div>
          <div className="space-y-2 text-center md:text-left flex-grow">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-teal-500/20 text-teal-300 text-xs font-bold">
              リハビリ専門職の視点
            </div>
            <h4 className="text-lg sm:text-xl font-bold">
              サプリメントだけに頼らない「栄養 × 適切な運動」の相乗効果
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              核酸は細胞や毛細血管の再生環境を整える「優れた土台」になりますが、筋肉や骨を実際に強くするには「動かす（メカニカルストレス）」刺激が絶対に欠かせません。
              核酸ドリンクで内側から補いながら、簡単な椅子スクワットや散歩などの運動を組み合わせることで、10年後・20年後も軽快に動ける身体を保つことができます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
