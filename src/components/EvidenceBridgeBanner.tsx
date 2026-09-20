'use client';

import React from 'react';
import { ShieldCheck, BookOpen, ArrowRight, ExternalLink, Dumbbell, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface EvidenceBridgeBannerProps {
  onOpenPTModal: () => void;
}

export const EvidenceBridgeBanner: React.FC<EvidenceBridgeBannerProps> = ({ onOpenPTModal }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12">
        {/* 見出し */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-xs font-bold text-cyan-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>さらに詳しく知りたい方へ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            科学的根拠（エビデンス）や論文・特許原本を<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300">
              とことん深く検証したい方へ
            </span>
          </h2>
          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            当サイトでは、リハビリテーション専門職が客観的かつ学術的なスタンスで
            Google Patents原本リンクやPubMed掲載論文、基礎生理学機序を詳細に検証・公開しています。
          </p>
        </div>

        {/* 2つの詳細ポータルカード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* カード1: エビデンス検証ポータル */}
          <div className="p-8 rounded-3xl bg-slate-800/80 border-2 border-cyan-500/40 shadow-2xl flex flex-col justify-between space-y-6 hover:border-cyan-400 transition-all hover:scale-[1.01] group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                  深掘り専門ポータル
                </span>
                <span className="text-xs text-slate-400 font-mono">Google Patents 原本付</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                FORDAYS エビデンス検証ポータル
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                特許第7857645号（抗酸化能）などの公報原本、東京大学共同研究論文、サルベージ経路とデノボ合成の生化学メカニズム、エビデンスの強みと限界点まで網羅。
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>特許番号とGoogle Patentsへのダイレクト原本リンク</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>Wikipedia風 生化学・生理学メカニズム解説（用語辞典付）</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span>健康の4大基盤と「運動寿命」の提唱</span>
                </li>
              </ul>
            </div>

            <Link
              href="/evidence"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-black text-sm transition-all shadow-lg shadow-cyan-500/25"
            >
              <span>エビデンス検証ポータルを詳しく見る</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* カード2: 運動処方学ガイド */}
          <div className="p-8 rounded-3xl bg-slate-800/80 border-2 border-teal-500/40 shadow-2xl flex flex-col justify-between space-y-6 hover:border-teal-400 transition-all hover:scale-[1.01] group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-bold border border-teal-400/30">
                  臨床運動学
                </span>
                <span className="text-xs text-slate-400 font-mono">40代〜90代対象</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-teal-300 transition-colors">
                安全な運動処方 ＆ 筋肉ケアガイド
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                「80代・90代でも筋肉は絶対に育つ」。ハーバード大の研究やMVC（最大筋力）測定の重要性、怪我をしない安全な5大自宅エクササイズとサプリメント摂取タイミング。
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                  <span>90代被験者の筋力174%増加（JAMA論文エビデンス）</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                  <span>下肢筋 ＋ 体幹筋（インナーユニット）の鍛え方</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                  <span>BCAA ＆ 核酸ドリンクの運動連動プロトコル</span>
                </li>
              </ul>
            </div>

            <Link
              href="/exercise-prescription"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-black text-sm transition-all shadow-lg shadow-teal-500/25"
            >
              <span>臨床運動処方ガイドを見る</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 無料相談CTAストリップ */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-bold text-base sm:text-lg text-white">
              「自分に合う運動やサプリメントの取り入れ方を相談したい」
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              リハビリ専門職が関節の痛みや現在の体力レベルに合わせた個別アドバイスを行います。
            </p>
          </div>
          <button
            onClick={onOpenPTModal}
            className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs sm:text-sm transition-all whitespace-nowrap shadow-md"
          >
            無料個別相談を申し込む
          </button>
        </div>
      </div>
    </section>
  );
};
