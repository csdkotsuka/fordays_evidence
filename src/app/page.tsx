'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { BeginnerHero } from '@/components/BeginnerHero';
import { AboutFordays } from '@/components/AboutFordays';
import { WhatIsNucleicAcid } from '@/components/WhatIsNucleicAcid';
import { BeginnerFeatures } from '@/components/BeginnerFeatures';
import { BeginnerFaq } from '@/components/BeginnerFaq';
import { EvidenceBridgeBanner } from '@/components/EvidenceBridgeBanner';
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
    <div className="flex flex-col min-h-screen bg-white">
      {/* グローバルヘッダー */}
      <Header onOpenPTModal={handleOpenPTModal} />

      {/* メインコンテンツ */}
      <main className="flex-grow">
        {/* 1. 初心者向け親しみやすいヒーロー（3分でわかる基本 ＆ 詳細エビデンスへの2大導線） */}
        <BeginnerHero onOpenPTModal={handleOpenPTModal} />

        {/* 2. FORDAYS（フォーデイズ）ってどんな会社？歴史・実績・自社工場のこだわり */}
        <AboutFordays />

        {/* 3. そもそも「核酸」ってなに？なぜ身体にいいの？DNA・RNAと加齢による減少 */}
        <WhatIsNucleicAcid />

        {/* 4. フォーデイズの核酸ドリンクが選ばれる3つの特長 ＆ 専門職が語る「栄養×運動」 */}
        <BeginnerFeatures />

        {/* 5. 初心者のよくある質問（FAQ） */}
        <BeginnerFaq />

        {/* 6. がっつり詳しく知りたい人向け：エビデンス検証ポータル ＆ 運動処方学への大型ブリッジバナー */}
        <EvidenceBridgeBanner onOpenPTModal={handleOpenPTModal} />

        {/* 7. パーソナルトレーニング案内＆無料相談モーダル */}
        <PersonalTraining
          isModalOpen={isPTModalOpen}
          onOpenModal={handleOpenPTModal}
          onCloseModal={handleClosePTModal}
        />
      </main>

      {/* フッター（薬機法免責事項・サイトマップ） */}
      <Footer onOpenPTModal={handleOpenPTModal} />

      {/* 用語解説モーダル */}
      <TermModal
        termId={selectedTermId}
        onClose={handleCloseTermModal}
        onSelectTerm={handleOpenTermModal}
      />
    </div>
  );
}
