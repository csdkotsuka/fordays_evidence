'use client';

import React from 'react';
import { Shield, Sparkles, CheckCircle2, Award, ArrowRight, ExternalLink, Dumbbell, Microscope, HeartPulse, Activity } from 'lucide-react';

interface HeroProps {
  onOpenPTModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPTModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Background glow & grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/90 text-xs sm:text-sm text-cyan-300 backdrop-blur-md shadow-sm">
              <Award className="w-4 h-4 text-amber-400" />
              <span>理学療法士・教員歴22年の専門職が徹底解剖</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.2]">
              FORDAYSの<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-300">特許と科学的根拠</span>を<br />
              生理学と運動機能の視点で解き明かす
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              「数多くの特許や大学共同研究はあるが、本当に人体にどう良い影響があるのか？」<br />
              盲信でも頭ごなしの否定でもなく、生化学の基礎から特許原本・限界点までを客観的に精査。
              確固たる論拠を持ち、<strong className="text-white font-semibold">「栄養補給 × 適切な運動負荷（理学療法）」</strong>で100歳まで動ける身体づくりを目指すための専門レポートです。
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#patents"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-lg shadow-cyan-500/20 hover:scale-105"
              >
                <span>特許原本・共同研究データを検証</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenPTModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 transition-all shadow-lg hover:scale-105"
              >
                <Dumbbell className="w-4 h-4 text-cyan-400" />
                <span>PT無料個別相談・パーソナル指導</span>
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80 text-left">
              <div>
                <span className="text-2xl font-black text-white block">14<span className="text-cyan-400 text-sm">件</span></span>
                <span className="text-[11px] text-slate-400">特許公報原本掲載</span>
              </div>
              <div>
                <span className="text-2xl font-black text-white block">8<span className="text-teal-400 text-sm">機関</span></span>
                <span className="text-[11px] text-slate-400">一流大学共同研究</span>
              </div>
              <div>
                <span className="text-2xl font-black text-white block">22<span className="text-emerald-400 text-sm">年</span></span>
                <span className="text-[11px] text-slate-400">理学療法士・教育歴</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Collage Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              {/* Main Visual Image Card */}
              <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                  alt="健康でアクティブなシニアライフ"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 w-fit mb-2">
                    目指すゴール
                  </span>
                  <h4 className="text-lg font-bold text-white leading-snug">
                    めざすは「100歳でも自分の足で元気に動ける身体」
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    毛細血管の新生 × 筋肉ケア（BCAA）× 運動指導
                  </p>
                </div>
              </div>

              {/* Overlapping Mini Feature Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-2 text-teal-400 font-bold text-xs mb-1">
                    <Microscope className="w-4 h-4" />
                    <span>神戸大学・藤野教授</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    酵素分解核酸による「毛細血管新生」特許第7411938号
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs mb-1">
                    <Activity className="w-4 h-4" />
                    <span>サルベージ合成経路</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    加齢で衰退するDNA合成を省エネで補う生理学の根拠
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
