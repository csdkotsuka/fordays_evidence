'use client';

import React from 'react';
import { Building2, Award, Users, CheckCircle, ShieldCheck, HeartHandshake, Microscope } from 'lucide-react';

export const AboutFordays: React.FC = () => {
  return (
    <section id="about-fordays" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* セクション見出し */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold text-teal-700">
            <Building2 className="w-3.5 h-3.5" />
            <span>会社案内・信頼のあゆみ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            FORDAYS（フォーデイズ）ってどんな会社？
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            1997年創業。「一人ひとりの健康創造」を掲げ、25年以上にわたり
            『核酸』の可能性を追求し続けている日本の健康創造企業です。
          </p>
        </div>

        {/* 3つの柱・実績カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 柱1 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-teal-50/40 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black text-xl shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                1997年創業・25年以上の実績
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                まだ日本で「核酸」という言葉があまり知られていなかった時代からいち早く着目。
                主力の『ナチュラル DNコラーゲン』は、リニューアルを重ねながら数多くの愛用者に親しまれてきたロングセラーです。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/80 text-xs font-semibold text-teal-800 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span>幅広い年代から愛される健康習慣</span>
            </div>
          </div>

          {/* 柱2 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-cyan-50/40 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-black text-xl shadow-md">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                大学・学術機関との共同研究
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                サプリメント企業としては異例なほど、東京大学をはじめとする学術機関との共同研究講座の設置や、国内外の学会発表、特許取得を積極的に推進。「確かな科学性」を裏付けとしています。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/80 text-xs font-semibold text-cyan-800 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
              <span>特許第7857645号など多数の独自技術</span>
            </div>
          </div>

          {/* 柱3 */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-emerald-50/40 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-xl shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                自社工場による安心の国内製造
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                岐阜県や静岡県に自社の製造・開発拠点を構え、原料の受入から製造、出荷に至るまで厳格な品質基準・衛生管理を徹底。大切な毎日の口に入るものだからこそ、妥協のない安全性を追求しています。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200/80 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>国内自社ラインでの一貫体制</span>
            </div>
          </div>
        </div>

        {/* 親しみやすい「いいですよ〜」の紹介ボックス */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-emerald-500/10 border border-teal-200 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-white text-teal-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-teal-200">
            <HeartHandshake className="w-7 h-7" />
          </div>
          <div className="space-y-1 text-center sm:text-left flex-grow">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              「家族や知人にすすめられて知った」という方がとても多い理由
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              フォーデイズは、実際に毎日の体感や元気を実感した方々の「これ、すごくいいよ！」という生の声とご縁によって全国へ広がってきました。
              「いきいきと若々しく過ごしたい」「いつまでも自分の足で元気に歩きたい」という共通の願いを応援しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
