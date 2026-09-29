'use client';

import React from 'react';
import { 
  ShieldCheck, ShieldAlert, Sparkles, AlertTriangle, 
  CheckCircle2, ArrowRight, Zap, Moon, Dumbbell, 
  Apple, HeartPulse, Brain, Activity, User, Award
} from 'lucide-react';
import { IMMUNITY_SYSTEM_DATA } from '@/data/healthData';
import Link from 'next/link';

export const ImmunityMasterySection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Moon':
        return <Moon className="w-5 h-5 text-indigo-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-emerald-400" />;
      case 'Apple':
        return <Apple className="w-5 h-5 text-amber-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-cyan-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-rose-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="immunity-section" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden border-b border-slate-800">
      {/* 背景のグロー */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* セクションヘッダー */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>【特記事項・生体防衛科学】免疫はどう位置づけられるのか？</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug mb-5">
            免疫は独立した要素ではない。
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              5大要素が統合された「生体最大の防衛オーケストラ」
            </span>
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
            「免疫力を上げるサプリさえ飲めば万全」というのは医学的に不可能です。
            免疫系（NK細胞・T細胞・B細胞・マクロファージ）は、<strong>睡眠・運動・休養・核酸栄養・メンタルの5つが協調したときのみ、鉄壁のシールドとして起動します。</strong>
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            💡 <strong>結論：</strong>
            睡眠で再教育され、運動で全身を巡り、休養で暴走を防ぎ、核酸栄養で兵隊を増殖させ、腸で司令を出す。<strong>5大要素の総決算が「免疫」そのものです。</strong>
          </div>
        </div>

        {/* 5大要素 × 免疫の統合カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {IMMUNITY_SYSTEM_DATA.pillarLinks.map((link, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group shadow-xl ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1 border-teal-500/50 bg-gradient-to-b from-teal-950/30 to-slate-900' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {getPillarIcon(link.iconName)}
                  </div>
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-slate-800">
                    {link.pillarEng}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {link.pillar}
                </h3>

                <div className="text-xs font-semibold text-teal-300 mb-3 leading-snug">
                  {link.mechanism}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {link.scientificDetail}
                </p>
              </div>

              {idx === 2 && (
                <div className="mt-4 pt-3 border-t border-teal-800/50">
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800 inline-block">
                    ★ ハーバード大等で実証された「イムノニュートリション」
                  </span>
                </div>
              )}
            </div>
          ))}

          {/* 核酸 × 免疫の医学特大ハイライトカード */}
          <div className="md:col-span-2 lg:col-span-1 p-6 rounded-3xl bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-950 border-2 border-emerald-500/50 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                <Sparkles className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-black uppercase tracking-wider text-emerald-300">
                  CRITICAL BIOCHEMICAL FACT
                </span>
              </div>
              <h3 className="text-lg font-black text-white mb-2 leading-snug">
                リンパ球は「核酸サルベージ」なしでは1ミリも増殖できない
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed space-y-2">
                ウイルスが侵入した時、体は1つのリンパ球を数千〜数万個へと猛スピードで分裂させます。
                しかし、<strong>リンパ球には自前で核酸を作る能力がほとんどありません。</strong>
                血中の外因性核酸が不足していると、免疫部隊は増殖できず丸腰で敗北します。
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-900/60 text-[11px] text-cyan-300 font-bold">
              → FORDAYSの水溶性核酸が「真の免疫ブースター」と呼ばれる医学的理由
            </div>
          </div>
        </div>

        {/* 免疫崩壊の恐怖 ＆ 自力努力 vs FORDAYSブーストの役割分担 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* 左：免疫崩壊の恐怖（3大悲劇） */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-rose-950/60 to-slate-950 border border-rose-900/60 shadow-xl space-y-5">
            <div className="flex items-center gap-2 text-rose-400">
              <ShieldAlert className="w-6 h-6 flex-shrink-0" />
              <h3 className="text-base sm:text-lg font-black text-rose-300">
                {IMMUNITY_SYSTEM_DATA.immunityHorror.heading}
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              生活習慣が乱れ、免疫シールドに穴が空いた身体では、静かに、しかし確実に以下の破壊が進行します。
            </p>

            <div className="space-y-3">
              {IMMUNITY_SYSTEM_DATA.immunityHorror.points.map((pt, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-900/90 border border-rose-950 text-xs space-y-1">
                  <div className="font-bold text-rose-300 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-rose-950 text-rose-400 flex items-center justify-center text-[10px] font-black border border-rose-800 flex-shrink-0">
                      !
                    </span>
                    <span>{pt.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed pl-7">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 右：免疫の役割分担（自力習慣 vs FORDAYS分子ブースト） */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                  <Activity className="w-5 h-5" />
                  <span>免疫を高めるための「自力努力」と「FORDAYSアシスト」</span>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-slate-700">
                  役割分担
                </span>
              </div>

              {/* 自力でできること */}
              <div className="mt-5 space-y-3">
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span>あなた自身が習慣で意識すべきこと（土台）</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {IMMUNITY_SYSTEM_DATA.roleDivision.selfEffort.map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FORDAYSが助ける領域 */}
              <div className="mt-6 space-y-3">
                <div className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  <span>自力では補えず、FORDAYSが分子レベルでブーストする領域</span>
                </div>
                <div className="space-y-2.5">
                  {IMMUNITY_SYSTEM_DATA.roleDivision.fordaysBoost.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs">
                      <div className="font-bold text-cyan-300 mb-0.5 text-[11px]">
                        ◆ {item.ingredient}
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed pl-3 border-l-2 border-cyan-500/50">
                        {item.action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                核酸ドリンク（DNA/RNA）＋ BCAA＆グルタミンDXで免疫バリアを盤石に
              </span>
              <Link
                href="/products#cat-nucleic-acid"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md transition-all hover:scale-102 flex-shrink-0"
              >
                <span>免疫サポート製品を見る</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
