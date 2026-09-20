'use client';

import React from 'react';
import { Dna, Sparkles, Zap, Heart, Sun, Activity, BatteryCharging, ArrowDown } from 'lucide-react';

export const WhatIsNucleicAcid: React.FC = () => {
  return (
    <section id="what-is-nucleic-acid" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* セクション見出し */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/80 border border-cyan-300/60 text-xs font-bold text-cyan-800">
            <Dna className="w-3.5 h-3.5 text-cyan-600" />
            <span>からだの超・基礎知識</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            そもそも「核酸（かくさん）」ってなに？
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            タンパク質・脂質・糖質・ビタミン・ミネラルに次ぐ「第7の栄養素」とも呼ばれる核酸。<br />
            私たちの37兆個の細胞すべてに存在し、命と元気の根本を支えています。
          </p>
        </div>

        {/* DNAとRNAのやさしい役割分担 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Dna className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Deoxyribonucleic Acid</span>
                <h3 className="text-lg font-bold text-slate-900">DNA（遺伝情報の設計図）</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              細胞の中心（核）にあり、あなたがあなたであるためのあらゆる設計図を保管しています。細胞分裂や日々の生まれ変わりを行うとき、この設計図をもとに新しい細胞が正確に作られます。
            </p>
            <div className="p-3 bg-blue-50 rounded-xl text-xs text-blue-800 font-medium">
              💡 たとえるなら：家を建てるときの「建築設計図」そのもの！
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Ribonucleic Acid</span>
                <h3 className="text-lg font-bold text-slate-900">RNA（タンパク質をつくる大工さん）</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              DNAの設計図を読み取り、筋肉や皮膚、内臓、酵素など、私たちの体を構成するタンパク質を実際に組み立てる役割を担当しています。RNAが元気に働くことで、スムーズな代謝が行われます。
            </p>
            <div className="p-3 bg-teal-50 rounded-xl text-xs text-teal-800 font-medium">
              💡 たとえるなら：設計図を見て実際に木材を組み上げる「現場の大工職人」！
            </div>
          </div>
        </div>

        {/* なぜ年齢とともに補う必要があるのか？（20代ピークの図解風） */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Age-Related Decline</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              体内の核酸合成は「20代をピークに急激に減少」する
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              体内で核酸をつくる力（肝臓での合成）は加齢とともに衰えます。そのため、大人の体は「外からの補給」を求めています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
              <div className="text-xs font-bold text-slate-500">〜20代</div>
              <div className="text-2xl font-black text-emerald-600">体内合成が活発</div>
              <p className="text-xs text-slate-600">
                新陳代謝が非常に旺盛。寝れば回復し、肌や筋肉の再生スピードも速い状態です。
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-2">
              <div className="text-xs font-bold text-amber-800">40〜50代</div>
              <div className="text-2xl font-black text-amber-600">合成力が半減</div>
              <p className="text-xs text-slate-600">
                「翌朝に疲れが残る」「ハリが失われてきた」など、細胞の生まれ変わりの低下を実感し始める時期。
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-center space-y-2">
              <div className="text-xs font-bold text-rose-800">60代〜</div>
              <div className="text-2xl font-black text-rose-600">外からの補給が必須</div>
              <p className="text-xs text-slate-600">
                体内合成だけでは追いつかなくなるため、食事やサプリメントによる補給（サルベージ経路）が鍵になります。
              </p>
            </div>
          </div>
        </div>

        {/* 核酸を始めると何がいいの？「いいですよ〜」4つの体感ポイント */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Daily Benefits</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              「核酸って、飲むと何がいいの？」愛用者が実感する4つのメリット
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Sun className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">朝からシャキッとスッキリ</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                エネルギーの最小単位「ATP」の産生を助け、重だるい朝から軽やかなスタートを後押しします。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">若々しいハリ・うるおい</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                コラーゲンやエラスチンの生成を支え、年齢に負けないみずみずしい毎日の土台をつくります。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">日々の疲労に負けない身体</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                酸化ストレスやダメージに対する抵抗力をサポートし、忙しい現代人のコンディションを維持します。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">生涯動ける足腰の土台</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                毛細血管のめぐりとタンパク質合成を底上げし、筋肉や関節をケアしてアクティブな毎日を支えます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
