'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const BeginnerFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'どのような味ですか？ 薬のような苦味やクセはありますか？',
      a: '甘酸っぱくフルーティーなパイナップル風味です。苦味やクセはなく、小さなお子様からご高齢の方までジュース感覚で美味しく飲んでいただけます。冷やすとよりスッキリしておいしく、炭酸水やヨーグルトに混ぜるのもおすすめです。',
    },
    {
      q: '1日にどのくらい、いつ飲むのがおすすめですか？',
      a: '1日あたり30〜60mlを目安に、計量カップでお飲みいただくのが一般的です。食品ですので決まった時間はありませんが、朝起きたときや就寝前、あるいは運動前後に習慣づけて飲む方が多くいらっしゃいます。',
    },
    {
      q: '病院で処方されたお薬や、他のサプリメントと一緒に飲んでも大丈夫ですか？',
      a: 'ナチュラル DNコラーゲンは医薬品ではなく「栄養補助食品」ですので、基本的には一般的な食事と同様にお召し上がりいただけます。ただし、治療中の方や食事制限（カリウムやタンパク質の制限等）を受けている方は、念のためかかりつけの医師や薬剤師にご相談ください。',
    },
    {
      q: 'どれくらいの期間続けるといいですか？',
      a: '身体の細胞や組織の生まれ変わりには一定のサイクル（肌は約28日、赤血球は約120日、筋肉や骨は数ヶ月）が必要です。まずは「3ヶ月」をひとつの目安として、毎日の習慣にしてみることをおすすめしています。',
    },
    {
      q: '本当に科学的な根拠や特許はあるのですか？',
      a: 'はい、フォーデイズは東京大学等の学術研究機関との共同研究を進め、国内外で複数の特許（抗酸化能に関する特許第7857645号など）を取得しています。詳しい学術論文やGoogle Patentsの原本は、当サイトの「エビデンス検証ポータル」で全件ご確認いただけます。',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-xs font-bold text-slate-700">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>よくある質問</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            はじめての方のよくある疑問
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            安心してお試しいただけるよう、気になる疑問にお答えします。
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-black text-xs flex-shrink-0">
                      Q
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <span className="text-slate-400 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 flex gap-3">
                    <span className="w-7 h-7 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-black text-xs flex-shrink-0">
                      A
                    </span>
                    <p className="pt-0.5">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
