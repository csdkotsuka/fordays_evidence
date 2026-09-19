'use client';

import React from 'react';
import { User, GraduationCap, HeartHandshake, HelpCircle, ShieldAlert, Sparkles, CheckCircle2, Award, BookOpen, Stethoscope } from 'lucide-react';

export const AuthorIntro: React.FC = () => {
  return (
    <section id="author" className="scroll-mt-16 py-20 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      {/* 互換用アンカー */}
      <div id="author-intro" className="scroll-mt-16" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold mb-3">
            <GraduationCap className="w-4 h-4 text-cyan-600" />
            <span>メッセージ ＆ 執筆の背景</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            なぜ、リハビリテーションの専門家が<br className="hidden sm:block" />
            FORDAYSのエビデンスを精査するのか
          </h2>
          <p className="mt-3 text-slate-500 text-sm max-w-2xl mx-auto">
            「完璧に信用しているわけではない」からこそ、専門職としての確固たる論拠と限界を正しく整理します。
          </p>
        </div>

        {/* Grid Layout: Visual on Left, Text Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/50">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="リハビリテーション・医療現場での指導"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    Rehabilitation Specialist & Educator
                  </span>
                  <h3 className="text-xl font-bold mt-1">リハビリテーション専門職</h3>
                  <p className="text-xs text-slate-300 mt-1">長い教員・臨床経験をもとに人体の仕組みと健康を追求</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-2xl bg-cyan-50/70 border border-cyan-100">
                    <span className="text-2xl font-black text-cyan-700 block">教育＆臨床</span>
                    <span className="text-xs text-slate-600 font-medium">長い経験と実績</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                    <span className="text-2xl font-black text-emerald-700 block">100%</span>
                    <span className="text-xs text-slate-600 font-medium">客観的・学術検証</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-800">
                    <Stethoscope className="w-4 h-4 text-cyan-600" />
                    <span>専門職としての3大モットー</span>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li>誇大宣伝を排し、生化学・生理学の真実を伝える</li>
                    <li>動物実験・細胞実験とヒト実用の境界線を明確にする</li>
                    <li>「サプリ×運動（メカニカルストレス）」の相乗効果を追究</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Science Image Box */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-4 shadow-sm flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=300&q=80"
                alt="バイオサイエンス研究"
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
              />
              <div className="text-xs">
                <span className="font-bold text-slate-900 block mb-1">公的特許＆学術論文の徹底照合</span>
                <p className="text-slate-500 leading-relaxed">
                  Google Patentsの公報原本、PubMed掲載の査読論文、大学共同研究の公式データを自ら調査・照合しています。
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-200/50 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center flex-shrink-0 font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  「多くの人を健康にし、幸せにしたい」という強い願い
                </h3>
                <p className="text-slate-600 mt-2 text-sm">
                  私はリハビリテーションの専門家として臨床現場に立ち、また長年にわたり医療従事者を育成する教員として解剖学、生理学、運動学を教えてきました。
                  これからFORDAYSの商品を活用し、より多くの人々の健康寿命・運動寿命を伸ばし、幸せな人生をサポートしたいと考えています。
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-3">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>「完璧な信用」を持つわけではないからこその誠実な論拠</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
                健康食品やネットワークビジネスの世界では、「奇跡の成分」「飲めば治る」といった過度な誇大宣伝が先行しがちです。
                多くの利用者が厳密な学術エビデンスを求めていないとしても、<strong className="text-amber-950 font-bold">私自身が専門職として確固たる論拠と限界を正しく把握しておかなければ、生徒や患者さん、大切な人たちに自信を持って説明することはできません。</strong>
              </p>
            </div>

            <p className="text-slate-600 text-sm sm:text-base">
              フォーデイズは東京大学や神戸大学など一流大学との共同研究を長年重ね、数多くの特許を取得しています。これは健康食品企業として極めて稀有で素晴らしい実績です。
              しかし、<span className="bg-cyan-50 text-cyan-900 px-1 py-0.5 rounded font-semibold border-b border-cyan-300">「特許があることや動物実験で効果が出たこと」が、直ちに「人間において万能な効果をもたらす」ことと同義ではありません。</span>
            </p>

            <p className="text-slate-600 text-sm sm:text-base">
              研究が進んだ結果、効果が限定的であったり、別の要因によるものだったと判明することも科学の世界では日常茶飯事です。
              だからこそ、<strong className="text-slate-900">「いま何が科学的に分かっていて、どこから先がまだ研究途上なのか」</strong>をフェアに整理し、安心して人に勧められる論拠をここに明文化しました。
            </p>

            {/* 3つの約束 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg space-y-3">
              <h4 className="font-bold text-sm text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>本サイトが遵守する3つのスタンス</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>公的特許原本・査読付き論文</strong>をそのまま提示し、一次情報へのアクセスを担保する</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>「優れている点」だけでなく「実用化がまだ先の限界点」も包み隠さずフェアに開示する</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>栄養摂取と<strong>「専門指導による適切な運動負荷（メカニカルストレス）」の相乗効果</strong>を科学的に提案する</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
