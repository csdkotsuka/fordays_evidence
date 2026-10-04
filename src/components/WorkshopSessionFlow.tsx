'use client';

import React from 'react';
import { 
  WORKSHOP_FLOW, ORGANIZER_BENEFITS, APP_FOLLOWUP_INFO 
} from '@/data/workshopPlans';
import { 
  Clock, Sparkles, CheckCircle2, Calendar, ArrowRight, Smartphone, ExternalLink, Zap 
} from 'lucide-react';

interface WorkshopSessionFlowProps {
  onOpenConsultModal: () => void;
}

export const WorkshopSessionFlow: React.FC<WorkshopSessionFlowProps> = ({ 
  onOpenConsultModal 
}) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-900 border border-teal-200 text-xs font-bold mb-3">
            <Clock className="w-4 h-4 text-teal-700" />
            <span>90分で完結する高満足度パッケージ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            ワークショップ当日のタイムテーブル ＆ 進行フロー
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            講話を聞くだけの退屈なセミナーではありません。<br className="hidden sm:inline" />
            「知る・測る・動く・持ち帰る」の4ステップで、参加者全員が笑顔で身体の軽さを実感できる濃密な90分プログラムです。
          </p>
        </div>

        {/* 4-Step Session Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {WORKSHOP_FLOW.map((flow, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border-2 border-slate-200 hover:border-teal-400 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-teal-300 text-xs font-black">
                    {flow.part}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    <Clock className="w-3.5 h-3.5 text-slate-600" />
                    <span>{flow.timeMinutes}分</span>
                  </span>
                </div>

                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                  {flow.title}
                </h4>

                <div className="text-[11px] font-bold text-teal-700">
                  担当：{flow.speakerRole}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {flow.content}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[10px] font-bold text-indigo-900 uppercase tracking-wider block">
                  得られる成果：
                </span>
                <span className="text-xs text-slate-800 font-medium">
                  {flow.keyTakeaway}
                </span>
              </div>
            </div>
        </div>

        {/* 【重要】開催周期 ＆ 自社制作アプリ「cheer」による日常フォローアップ */}
        <div className="mb-16 rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white p-6 sm:p-8 md:p-10 border-2 border-teal-500/40 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-700/80 pb-5">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center flex-shrink-0 border border-teal-400/30">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                      継続伴走システム
                    </span>
                    <span className="text-teal-300 text-xs font-bold">
                      自社制作アプリ連携
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    開催周期（月1回×全3回） ＆ 自社制作アプリ「cheer」による日常フォロー
                  </h3>
                </div>
              </div>

              <div className="flex-shrink-0">
                <a
                  href={APP_FOLLOWUP_INFO.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4 text-slate-950" />
                  <span>自社制作アプリ cheer を開く</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 開催周期の説明 */}
              <div className="bg-slate-800/70 rounded-2xl p-5 border border-slate-700 space-y-3">
                <div className="flex items-center gap-2 text-teal-300 font-bold text-sm">
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>実際の開催周期：月1回（全3回・3ヶ月プログラム）</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  ワークショップは<strong>「月1回（各90分）× 計3回」</strong>のペースで開催します。
                  1回目で現在地測定と基本フォームを習得し、2回目で中間測定と負荷アップ、3回目で最終変化測定と日常動作の完全自動化を達成します。
                </p>
                <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700">
                    <span className="text-teal-300 font-bold block text-[11px]">第1回（1ヶ月目）</span>
                    <span className="text-[10px] text-slate-400">測定＆リセット</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700">
                    <span className="text-cyan-300 font-bold block text-[11px]">第2回（2ヶ月目）</span>
                    <span className="text-[10px] text-slate-400">中間評価＆強化</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700">
                    <span className="text-emerald-300 font-bold block text-[11px]">第3回（3ヶ月目）</span>
                    <span className="text-[10px] text-slate-400">最終成果の確定</span>
                  </div>
                </div>
              </div>

              {/* 間の1ヶ月を支える自社アプリcheer */}
              <div className="bg-slate-800/70 rounded-2xl p-5 border border-slate-700 space-y-3">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>ワークショップ間の1ヶ月間を「cheer」で手厚くフォロー</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {APP_FOLLOWUP_INFO.description}
                </p>
                <ul className="space-y-1.5 text-xs text-slate-300 pt-1">
                  {APP_FOLLOWUP_INFO.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span><strong>{feat.title}：</strong>{feat.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Organizer Benefits Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>サロン・リーダー向け</span>
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900">
              イベント主催者（サロン・リーダー）の4大メリット
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              「運動療法」をイベントの主軸に据えることで、これまでのサプリセミナーとは比較にならない集客力とリピート率を実現します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ORGANIZER_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4 hover:border-amber-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0 font-black text-lg border border-amber-200">
                  0{idx + 1}
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-amber-100 text-amber-900">
                      {benefit.badge}
                    </span>
                    <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                      {benefit.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements & Venue Specs */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
                出張開催スペック
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                全国のサロン・会議室・ホールへ出張開催いたします
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span><strong>参加人数：</strong> 5名〜100名まで柔軟対応</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span><strong>所要時間：</strong> 60分〜120分（ご希望に調整可）</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span><strong>必要設備：</strong> 椅子、参加者が軽く手足を伸ばせるスペース</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span><strong>配布物：</strong> 復習テキスト・3ヶ月シートは講師が準備</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto">
              <button
                onClick={onOpenConsultModal}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 text-slate-950 font-black text-sm shadow-xl shadow-teal-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>開催日程・条件を相談する</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
