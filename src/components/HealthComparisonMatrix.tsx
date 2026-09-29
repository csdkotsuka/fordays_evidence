'use client';

import React from 'react';
import { 
  TrendingDown, TrendingUp, Clock, Zap, 
  Sparkles, CheckCircle2, XCircle, ArrowRight, ShieldCheck, Droplets
} from 'lucide-react';
import { BIOHACK_TIMELINE } from '@/data/healthData';

export const HealthComparisonMatrix: React.FC = () => {
  const comparisonItems = [
    {
      organ: '脳・神経系',
      negative: 'グリンパティック不全によりアミロイドβ蓄積、海馬萎縮、ブレインフォグと物忘れの常態化',
      positive: '特許サケ白子抽出物（特許第6791696号）＋深睡眠で脳内を毎夜クレンジング。思考力と集中力が常にクリア',
    },
    {
      organ: '筋肉・代謝',
      negative: 'サルコペニア進行で毎年1%筋肉消失。インスリン感受性低下、内臓脂肪蓄積、疲労物質の停滞',
      positive: '特許筋萎縮抑制（特許第7442308号）＋BCAAで筋合成を最大化。マイオカインが全身を若返らせる',
    },
    {
      organ: '血管・循環',
      negative: '活性酸素で血管内皮が酸化・硬化。毛細血管がゴースト化し、冷えや栄養不足が慢性化',
      positive: '特許血管内皮機能改善（特許第7216260号）でNO産生促進。隅々の毛細血管まで酸素と栄養を爆速デリバリー',
    },
    {
      organ: '皮膚・真皮構造',
      negative: 'ターンオーバー遅延（40日以上）、基底膜劣化、コラーゲン線維の断裂・糖化でシワとたるみが固定化',
      positive: '特許FCore-2021（特許第7710217号）で真皮コラーゲン染色面積を19.3%→34.1%へ劇的向上。内側から湧き出るハリ',
    },
    {
      organ: '細胞修復・DNA',
      negative: '肝臓の核酸合成能が加齢で枯渇。傷ついたDNAが修復されずコピーミス多発、テロメアが急激に短縮',
      positive: '特許オートファジー（特許第7627991号）＋特許酸化タンパク質修復（特許第7857645号）で不良小器官を分解浄化',
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-slate-100 relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* セクションタイトル */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>【決定的な分岐点】10年後の未来を変えるバイオハック対比</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            「放置した老化負債」 vs 「5大投資＋核酸ブースト」
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            同じ年数を生きていても、細胞レベルのケアを行っている人と放置している人では、体内年齢と生命力に天と地ほどの差が生まれます。
          </p>
        </div>

        {/* 比較テーブル・マトリックス */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-slate-800 bg-slate-950/80 font-black text-xs sm:text-sm">
            <div className="md:col-span-3 p-4 sm:p-5 text-slate-400 uppercase tracking-wider flex items-center">
              生体器官・細胞領域
            </div>
            <div className="md:col-span-4 p-4 sm:p-5 bg-rose-950/40 text-rose-300 border-t md:border-t-0 md:border-l border-slate-800 flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-rose-400" />
              <span>【放置した場合】健康負債・老化スパイラル</span>
            </div>
            <div className="md:col-span-5 p-4 sm:p-5 bg-emerald-950/40 text-emerald-300 border-t md:border-t-0 md:border-l border-slate-800 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>【5大投資＋FORDAYS】細胞超回復サイクル</span>
            </div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm hover:bg-slate-900/50 transition-colors">
                <div className="md:col-span-3 p-4 sm:p-5 font-bold text-white flex items-center gap-2 bg-slate-950">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>{item.organ}</span>
                </div>
                <div className="md:col-span-4 p-4 sm:p-5 text-rose-300/90 bg-rose-950/10 md:border-l border-slate-800 leading-relaxed flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>{item.negative}</span>
                </div>
                <div className="md:col-span-5 p-4 sm:p-5 text-emerald-200 bg-emerald-950/10 md:border-l border-slate-800 leading-relaxed flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item.positive}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 24時間バイオハック・タイムライン */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              【実践】細胞が歓喜する「24時間最先端バイオハックルーティン」
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              サーカディアンリズム（体内時計）に合わせ、いつ何をすべきかを科学的にスケジュール化。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BIOHACK_TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-black text-cyan-400 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.time}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700">
                      {item.phase}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.action}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    💡 <span className="text-slate-300">{item.scientificReason}</span>
                  </p>
                </div>

                {item.fordaysProduct && (
                  <div className="pt-3 border-t border-slate-800/80">
                    <div className="text-[11px] font-bold text-emerald-300 flex items-center gap-1.5 bg-emerald-950/40 p-2 rounded-xl border border-emerald-900/50">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{item.fordaysProduct}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
