'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AuthorIntro } from '@/components/AuthorIntro';
import { PhysiologyBasics } from '@/components/PhysiologyBasics';
import { PatentSection } from '@/components/PatentSection';
import { EvidenceAssessment } from '@/components/EvidenceAssessment';
import { MuscleAndExercise } from '@/components/MuscleAndExercise';
import { PersonalTraining } from '@/components/PersonalTraining';
import { Footer } from '@/components/Footer';
import { TermModal } from '@/components/TermModal';

export default function Home() {
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

      {/* メインコンテンツ */}
      <main className="flex-grow">
        {/* 1. ヒーローセクション */}
        <Hero onOpenPTModal={handleOpenPTModal} />

        {/* 2. 理学療法士22年の想いと客観的スタンス */}
        <AuthorIntro />

        {/* 3. Wikipedia風 基礎生理学・生化学メカニズム */}
        <PhysiologyBasics onSelectTerm={handleOpenTermModal} />

        {/* 4. 特許・共同研究・論文の完全解析（Google Patents原本リンク付） */}
        <PatentSection onSelectTerm={handleOpenTermModal} />

        {/* 5. 科学的エビデンスの「強み」と「現状の限界点」 */}
        <EvidenceAssessment onSelectTerm={handleOpenTermModal} />

        {/* 6. 筋肉ケア・BCAA・運動（メカニカルストレス）の絶対性 */}
        <MuscleAndExercise
          onSelectTerm={handleOpenTermModal}
          onOpenPTModal={handleOpenPTModal}
        />

        {/* 7. パーソナルトレーニング案内＆無料相談CTA */}
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
