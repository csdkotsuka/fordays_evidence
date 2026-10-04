'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WorkshopHero } from '@/components/WorkshopHero';
import { WorkshopPlansSection } from '@/components/WorkshopPlansSection';
import { WorkshopSynergySection } from '@/components/WorkshopSynergySection';
import { WorkshopPlanDiagnostician } from '@/components/WorkshopPlanDiagnostician';
import { WorkshopSessionFlow } from '@/components/WorkshopSessionFlow';
import { WorkshopRequestModal } from '@/components/WorkshopRequestModal';
import { PersonalTraining } from '@/components/PersonalTraining';
import { ArrowLeft, Sparkles, HelpCircle, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function WorkshopPage() {
  const [isPTModalOpen, setIsPTModalOpen] = useState<boolean>(false);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState<boolean>(false);
  const [selectedPlanForConsult, setSelectedPlanForConsult] = useState<string>('');

  const handleOpenPTModal = () => setIsPTModalOpen(true);
  const handleClosePTModal = () => setIsPTModalOpen(false);

  const handleOpenConsultModal = (planTitle?: string) => {
    if (planTitle) {
      setSelectedPlanForConsult(planTitle);
    }
    setIsConsultModalOpen(true);
  };

  const handleCloseConsultModal = () => {
    setIsConsultModalOpen(false);
  };

  const scrollToPlans = () => {
    const el = document.getElementById('workshop-plans');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiagnosedSelectPlan = (planId: string) => {
    scrollToPlans();
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Global Header */}
      <Header onOpenPTModal={handleOpenPTModal} />

      {/* Sub Navigation Bar / Breadcrumb */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors font-bold group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>ポータルホーム</span>
            </Link>
            <span className="text-slate-600">/</span>
            <Link
              href="/exercise-prescription"
              className="text-slate-400 hover:text-slate-200 transition-colors hidden sm:inline"
            >
              臨床運動処方学
            </Link>
            <span className="text-slate-600 hidden sm:inline">/</span>
            <span className="text-white font-bold">
              健康増進 ＆ 運動療法ワークショップ
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-950/80 border border-teal-700/60 text-teal-300 font-medium text-[11px]">
              <Sparkles className="w-3 h-3 text-teal-400" />
              全国サロン・イベント出張受付中
            </span>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <WorkshopHero
          onOpenConsultModal={() => handleOpenConsultModal()}
          onScrollToPlans={scrollToPlans}
        />

        {/* 2. Scientific Synergy Section (Nutritional Chemistry × Mechanical Stress) */}
        <WorkshopSynergySection />

        {/* 3. Interactive Plan Diagnostician (Self Assessment) */}
        <WorkshopPlanDiagnostician
          onSelectPlan={handleDiagnosedSelectPlan}
          onOpenConsultModalWithPlan={(title) => handleOpenConsultModal(title)}
        />

        {/* 4. 5 Big Workshop Plans (Detailed Cards & 3-Month Roadmaps) */}
        <WorkshopPlansSection
          onSelectPlanForConsult={(title) => handleOpenConsultModal(title)}
        />

        {/* 5. 90-Minute Session Flow & Organizer Benefits */}
        <WorkshopSessionFlow
          onOpenConsultModal={() => handleOpenConsultModal()}
        />

        {/* 6. FAQ Section */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                <span>よくある質問</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                ワークショップ開催に関するQ＆A
              </h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: '運動が苦手な方や、膝や腰に痛みがある高齢者がいても大丈夫ですか？',
                  a: 'まったく問題ありません。むしろそのような方にこそ受けていただきたい内容です。講師は病院やリハビリ現場、教育機関で豊富な臨床経験を持つ理学療法士です。関節に負担のかからない「代償動作のない安全な動き」を一人ひとりの可動域に合わせてその場で調整します。'
                },
                {
                  q: 'サロンが狭いのですが、何名くらいから開催できますか？',
                  a: '椅子が置けて、参加者が軽く手足を伸ばせるスペースがあれば、5名〜8名程度の少人数サロンから開催可能です。もちろん30名〜100名規模の貸会議室やホテルホールでの大型健康セミナーにも対応しています。'
                },
                {
                  q: 'FORDAYSの製品紹介や営業活動を無理にさせられることはありませんか？',
                  a: '当ワークショップは「医学的・生化学的な健康増進」を主眼としており、強引なセールスや特定製品の押し売りは一切行いません。「なぜ身体の修復に水溶性核酸やコラーゲン、良質なアミノ酸が必要なのか」を学術的に納得していただくことで、参加者ご自身の自発的な健康維持意欲を引き出します。'
                },
                {
                  q: '3ヶ月継続プログラムの仕組みや開催ペースはどのようになっていますか？',
                  a: '初回ワークショップで「現在地測定」と「自宅でできる3分エクササイズ」を伝授します。基本は【月2回（隔週）の定期ワークショップ ＋ 自社アプリcheerによる日常伴走】を推奨モデルとしていますが、サロンのスケジュールに合わせて【月1回（全3回）・月2回・月4回（週1回集中）】など柔軟にカスタマイズ可能です。直接のフォーム修正とアプリ伴走を両輪に、無理なく3ヶ月後の成果を導きます。'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-900 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-teal-600 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      Q
                    </span>
                    <span>{item.q}</span>
                  </h4>
                  <p className="mt-2.5 pl-7 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Call-to-Action Bar */}
        <section className="py-12 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black">
              サロンや地域の健康寿命を、共に伸ばしませんか？
            </h3>
            <p className="text-xs sm:text-sm text-teal-100 max-w-2xl mx-auto">
              日程やご予算、参加者の年代に応じたカスタマイズプログラムをご提案します。まずはお気軽にご相談ください。
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleOpenConsultModal()}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-teal-950 hover:bg-teal-50 font-black text-sm sm:text-base shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-teal-700" />
                <span>無料で開催相談・お見積りを依頼する</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer onOpenPTModal={handleOpenPTModal} />

      {/* Workshop Request Modal */}
      <WorkshopRequestModal
        isOpen={isConsultModalOpen}
        onClose={handleCloseConsultModal}
        initialPlanTitle={selectedPlanForConsult}
      />

      {/* Personal Training Modal (From Header) */}
      <PersonalTraining
        isModalOpen={isPTModalOpen}
        onOpenModal={handleOpenPTModal}
        onCloseModal={handleClosePTModal}
      />
    </div>
  );
}
