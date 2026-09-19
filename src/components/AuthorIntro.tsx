'use client';

import React from 'react';
import { User, GraduationCap, HeartHandshake, HelpCircle, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';

export const AuthorIntro: React.FC = () => {
  return (
    <section id="author-intro" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>メッセージ ＆ 執筆の背景</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            なぜ、理学療法士・教員歴22年の私が<br className="hidden sm:block" />
            FORDAYSのエビデンスを精査するのか
          </h2>
        </div>

        {/* Content Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Introduction */}
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 to-slate-800 flex-shrink-0 flex items-center justify-center text-white shadow-md">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                「多くの人を健康にし、幸せにしたい」という強い願い
              </h3>
              <p className="text-slate-600">
                私は理学療法士として臨床現場に立ち、また22年間にわたり医療従事者を育成する教員として解剖学、生理学、運動学を教えてきました。
                これからFORDAYSの商品を活用し、より多くの人々の健康づくりを後押ししたいと考えています。
              </p>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* Conflict & Scientific Integrity */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 text-base">
              <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>「完璧な信用」を持つわけではないからこその、誠実な論拠の確立</span>
            </h4>
            <p>
              ネットワークビジネスや健康食品の世界では、時に「奇跡の成分」「飲めば病気が治る」といった過度な誇大宣伝が先行しがちです。
              しかし、多くの利用者が厳密なエビデンスを求めていないとしても、<strong className="text-slate-900 font-semibold">私自身が専門職として確固たる論拠と限界を正しく把握しておかなければ、大切な人たちに責任を持って説明することはできません。</strong>
            </p>
            <p>
              フォーデイズは東京大学や神戸大学など一流大学との共同研究を重ね、数多くの特許を取得しています。これは企業の学術的姿勢として非常に素晴らしい実績です。
              しかし、<span className="bg-amber-100 px-1 py-0.5 rounded font-semibold text-amber-900">「特許があることや動物実験で効果が出たこと」が、すぐさま「人間において万能な効果をもたらす」ことと同義ではありません。</span>
              科学の研究は常に途上であり、研究が進んだ結果、効果が限定的であったり、別の要因によるものだったと判明することも日常茶飯事です。
            </p>
          </div>

          {/* 3 Promises of this site */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span>このサイトにおける3つの約束</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span><strong>特許の原本リンクと客観的事実を提示する：</strong> 誇張を排し、何が出願・登録され、どのような実験データが存在するのか、公的特許文献に直接アクセスできるようにします。</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span><strong>強みだけでなく「現状の限界点」も正直に語る：</strong> 何が優れていて、何がまだ未解明・非実用的なのかを明確に線引きします。</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span><strong>「サプリメント×運動（メカニカルストレス）」の真実を伝える：</strong> 栄養を飲むだけでは筋肉や身体機能は維持できません。理学療法士として、適切な運動指導とのシナジーを提唱します。</span>
              </li>
            </ul>
          </div>

          <div className="pt-2 text-right text-xs text-slate-500 font-medium">
            理学療法士・医療系大学元教員（教職歴22年）
          </div>
        </div>
      </div>
    </section>
  );
};
