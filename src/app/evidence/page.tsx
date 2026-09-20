'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AuthorIntro } from '@/components/AuthorIntro';
import { HealthFoundation } from '@/components/HealthFoundation';
import { PhysiologyBasics } from '@/components/PhysiologyBasics';
import { PatentSection } from '@/components/PatentSection';
import { EvidenceAssessment } from '@/components/EvidenceAssessment';
import { MuscleAndExercise } from '@/components/MuscleAndExercise';
import { PersonalTraining } from '@/components/PersonalTraining';
import { Footer } from '@/components/Footer';
import { TermModal } from '@/components/TermModal';
import { ArrowLeft, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function EvidencePage() {
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const [isPTModalOpen, setIsPTModalOpen] = useState<boolean>(false);

  const handleOpenTermModal = (termId: string) => {
    setSelectedTermId(termId);
  };

  const handleCloseTermModal = () => {
    setSelectedTermId(null);
  };

  const handleOpenPTModal = () => {
    setIsPTModalOpen(true);
  };

  const handleClosePTModal = () => {
    setIsPTModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* グローバルヘッダー */}
      <Header onOpenPTModal={handleOpenPTModal} />

      {/* トップへ戻るパンくず・案内バー */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-bold group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>初心者向けトップ（FORDAYS・核酸の基本）に戻る</span>
          </Link>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="hidden sm:inline text-slate-400">現在地:</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 font-medium">
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
              学術論文・特許原本・生化学メカニズム完全検証ポータル
            </span>
          </div>
        </div>
      </div>

      {/* 【ビジネスとして取り組みたい人向けはこちら】特設トップバナー */}
      <div className="bg-gradient-to-r from-amber-900/90 via-slate-900 to-amber-950 text-white border-b-2 border-amber-500/50 py-4 sm:py-5 px-4 sm:px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">💼</span>
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-black tracking-wider uppercase">
                  ビジネス検討者向け
                </span>
                <span className="font-extrabold text-sm sm:text-base text-amber-100">
                  ビジネスとして取り組みたい人向けはこちら
                </span>
              </div>
              <p className="text-xs text-amber-200/80 mt-0.5">
                連鎖販売取引法のルール、他ネットワークビジネスとの客観的比較、優位性と注意点（誇張なし・嘘なし）
              </p>
            </div>
          </div>

          <Link
            href="/business"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all hover:scale-105 whitespace-nowrap flex-shrink-0"
          >
            <span>ビジネス真実ガイドを読む</span>
            <span className="text-slate-900">→</span>
          </Link>
        </div>
      </div>

      {/* メインコンテンツ */}
      <main className="flex-grow">
        {/* 1. ヒーローセクション */}
        <Hero onOpenPTModal={handleOpenPTModal} />

        {/* 2. リハビリ専門職の想いと客観的スタンス */}
        <AuthorIntro />

        {/* 3. 健康の4大基盤 ＆ 提唱『運動寿命』 ＆ 論文エビデンス */}
        <HealthFoundation
          onSelectTerm={handleOpenTermModal}
          onOpenPTModal={handleOpenPTModal}
        />

        {/* 4. Wikipedia風 基礎生理学・生化学メカニズム */}
        <PhysiologyBasics onSelectTerm={handleOpenTermModal} />

        {/* 5. 特許・共同研究・論文の完全解析（Google Patents原本リンク付） */}
        <PatentSection onSelectTerm={handleOpenTermModal} />

        {/* 6. 科学的エビデンスの「強み」と「現状の限界点」 */}
        <EvidenceAssessment onSelectTerm={handleOpenTermModal} />

        {/* 7. 筋肉ケア・BCAA・運動（メカニカルストレス）の絶対性 */}
        <MuscleAndExercise
          onSelectTerm={handleOpenTermModal}
          onOpenPTModal={handleOpenPTModal}
        />

        {/* 8. パーソナルトレーニング案内＆無料相談CTA */}
        <PersonalTraining
          isModalOpen={isPTModalOpen}
          onOpenModal={handleOpenPTModal}
          onCloseModal={handleClosePTModal}
        />
      </main>

      {/* フッター（薬機法免責事項・サイトマップ） */}
      <Footer onOpenPTModal={handleOpenPTModal} />

      {/* Wikipedia風 用語解説モーダル */}
      <TermModal
        termId={selectedTermId}
        onClose={handleCloseTermModal}
        onSelectTerm={handleOpenTermModal}
      />
    </div>
  );
}
