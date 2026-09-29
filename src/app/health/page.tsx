'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HealthHero } from '@/components/HealthHero';
import { SelfEffortAndSynergySection } from '@/components/SelfEffortAndSynergySection';
import { SleepBiohackSection } from '@/components/SleepBiohackSection';
import { PillarsOfHealthSection } from '@/components/PillarsOfHealthSection';
import { ImmunityMasterySection } from '@/components/ImmunityMasterySection';
import { HealthComparisonMatrix } from '@/components/HealthComparisonMatrix';
import { HealthCheckDiagnostics } from '@/components/HealthCheckDiagnostics';
import { PersonalTraining } from '@/components/PersonalTraining';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Sparkles, ShieldCheck, HeartPulse } from 'lucide-react';
import Link from 'next/link';

export default function HealthPage() {
  const [isPTModalOpen, setIsPTModalOpen] = useState<boolean>(false);

  const handleOpenPTModal = () => {
    setIsPTModalOpen(true);
  };

  const handleClosePTModal = () => {
    setIsPTModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      {/* グローバルヘッダー */}
      <Header onOpenPTModal={handleOpenPTModal} />

      {/* サブバー・現在地パンくず */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors font-bold group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>ホーム（FORDAYSポータル）に戻る</span>
          </Link>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="hidden sm:inline text-slate-400">現在地:</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 font-medium">
              <HeartPulse className="w-3.5 h-3.5 text-indigo-400" />
              最先端健康科学 ＆ 睡眠・運動・休養・核酸・統合免疫
            </span>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {/* ヒーローセクション */}
        <HealthHero />

        {/* 【本質メッセージ】自力努力（土台） × FORDAYS（細胞ブースト）の役割分担 */}
        <SelfEffortAndSynergySection />

        {/* 睡眠科学・グリンパティック深掘り特集 */}
        <SleepBiohackSection />

        {/* 4大柱（運動・休養・栄養・ストレス）詳細エビデンス */}
        <PillarsOfHealthSection />

        {/* 【特記事項】免疫はどう位置づけられるか？（5大要素の総決算・統合防衛シールド） */}
        <ImmunityMasterySection />

        {/* 比較マトリックス ＆ 24時間バイオハックルーティン */}
        <HealthComparisonMatrix />

        {/* インタラクティブ健康負債診断 */}
        <HealthCheckDiagnostics />
      </main>

      {/* フッター */}
      <Footer onOpenPTModal={handleOpenPTModal} />

      {/* PT指導モーダル */}
      <PersonalTraining
        isModalOpen={isPTModalOpen}
        onOpenModal={handleOpenPTModal}
        onCloseModal={handleClosePTModal}
      />
    </div>
  );
}
