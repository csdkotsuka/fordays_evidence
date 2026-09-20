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
