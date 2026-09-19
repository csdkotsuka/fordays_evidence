'use client';

import React from 'react';
import { CheckCircle2, AlertTriangle, Scale, ShieldCheck, Heart, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface EvidenceAssessmentProps {
  onSelectTerm?: (id: string) => void;
}

export const EvidenceAssessment: React.FC<EvidenceAssessmentProps> = ({ onSelectTerm }) => {
  return (
    <section id="evidence" className="scroll-mt-16 py-20 bg-slate-50 border-b border-slate-200">
      {/* 互換用アンカー */}
      <div id="assessment" className="scroll-mt-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
            <Scale className="w-4 h-4 text-emerald-600" />
            <span>誠実な科学的評価</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            エビデンスの「強み」と「現状の限界」<br />
            客観的かつ真摯な検証
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            医療教育に22年携わってきた者として、都合の良いデータだけを並べることはいたしません。
            どこが科学的に優れており、どこがまだ未解明・非実用的なのか、フェアに比較・整理します。
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column: Strengths */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-emerald-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    科学的に優れている点（強みと論拠）
                  </h3>
                  <p className="text-xs text-emerald-700 font-medium">
                    他社健康食品と一線を画す学術的基盤
                  </p>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">一流大学での共同研究講座・社会連携講座の長期継続</strong>
                    <span className="text-slate-600 leading-relaxed">
                      東京大学、神戸大学、岐阜大学、金沢大学、東京農工大学等において、一過性の受託試験ではなく「共同研究講座」を長年開設し、学会発表や国際論文として公表しています。
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">新規物質特許および用途特許の取得</strong>
                    <span className="text-slate-600 leading-relaxed">
                      単なる「サケ白子混合物」ではなく、特定の「トリヌクレオチドCCC」や「トリペプチドRPR」、分子量調整された「Fcore-2021」など、特異的活性を持つ成分を単離・同定して特許を取得しています。
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">生化学的に確立された「サルベージ経路」の妥当性</strong>
                    <span className="text-slate-600 leading-relaxed">
                      加齢とともに肝臓でのデノボ合成能が落ちる中、消化・吸収されたヌクレオチドや塩基がサルベージ経路で再利用される仕組みは、ノーベル賞級の基礎生化学に合致した無理のない理論です。
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">安全性と20年以上の飲用実績</strong>
                    <span className="text-slate-600 leading-relaxed">
                      天然のサケ白子や食用酵母を原料とし、長年にわたり多くの愛飲者に親しまれてきた食経験と徹底した品質管理体制があります。
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Limitations */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-amber-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    現状の限界点（盲信を戒めるべき点）
                  </h3>
                  <p className="text-xs text-amber-700 font-medium">
                    医療・科学のルールとして誇張してはならない事実
                  </p>
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                  <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">多くの知見は細胞試験・モデル動物実験段階</strong>
                    <span className="text-slate-600 leading-relaxed">
                      ラットやマウス、培養細胞での顕著なデータが、そのまま人間（ヒト）の複雑な生活習慣の中で100%同じ強度で再現されるとは限りません。ヒトでの大規模二重盲検試験（RCT）は今後の課題です。
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                  <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">「特許取得＝病気が治る医薬品」ではない</strong>
                    <span className="text-slate-600 leading-relaxed">
                      特許庁が認めるのは「新規性・進歩性」であり、厚生労働省による医薬品としての「治療有効性・承認」ではありません。製品はあくまで健康補助食品（サプリメント）です。
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                  <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">「遺伝子を直接修復する」という説明は不正確</strong>
                    <span className="text-slate-600 leading-relaxed">
                      核酸は小腸でヌクレオシド等へ消化されます。「サケの遺伝子がそのまま傷ついたヒト遺伝子を入れ替える」わけではなく、サルベージ合成の原材料や細胞シグナルとして働くのが真実です。
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                  <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <strong className="text-slate-900 block mb-0.5">飲むだけで運動や食事の代わりにはならない</strong>
                    <span className="text-slate-600 leading-relaxed">
                      筋肉量や歩行機能、骨密度の維持には、サプリメントだけでなく「適切な運動刺激（メカニカルストレス）」が絶対に欠かせません。
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion Card: "Why we can feel confident" */}
        <div className="bg-gradient-to-r from-brand-700 via-teal-700 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-4 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-teal-300" />
              <span>専門職としての最終結論</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
              結論：限界を正しく理解した上でなお、<br className="hidden sm:block" />
              「十分な効果が期待できるから、安心して大丈夫」と言える理由
            </h3>

            <div className="space-y-4 text-slate-100 text-sm sm:text-base leading-relaxed mb-6">
              <p>
                世の中には科学的根拠が一切ないまま雰囲気だけで売られているサプリメントが溢れています。
                それに比べフォーデイズは、20年以上にわたり東大や神戸大などの公的研究機関と真摯に基礎研究を積み上げ、作用機序を解明し、論文や特許として形に残し続けています。
              </p>
              <p>
                「飲めば明日すべてが治る奇跡の薬」ではありません。
                しかし、<strong className="text-white underline decoration-teal-400">「加齢とともに失われがちな細胞の修復素材・エネルギー産生機構・毛細血管網を、日常の安全な栄養補給としてしっかり下支えしてくれる」</strong>という点において、十分すぎるほどの科学的合理性と論拠が存在します。
              </p>
              <p className="bg-white/10 p-4 rounded-xl border border-white/20 text-xs sm:text-sm">
                <strong>理学療法士からのメッセージ：</strong>
                「安心してください。怪しいオカルトではなく、現代の先端生化学が着目する本質的なアプローチです。
                あとは、この優れた栄養に<span className="text-teal-300 font-bold">『正しい運動習慣』</span>を掛け合わせることで、あなたの身体は10年後・20年後も確実に動ける身体へと変わっていきます。」
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#muscle-care"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-md"
              >
                <span>次は「筋肉ケア×運動」の真実へ</span>
                <ArrowRight className="w-4 h-4 text-slate-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
