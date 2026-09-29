'use client';

import React, { useState } from 'react';
import { 
  Activity, AlertTriangle, CheckCircle2, ShieldAlert, 
  Sparkles, ArrowRight, RefreshCw, ShoppingBag, ShieldCheck
} from 'lucide-react';
import { DIAGNOSTIC_QUESTIONS } from '@/data/healthData';
import Link from 'next/link';

export const HealthCheckDiagnostics: React.FC = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setSelectedQuestions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    setSelectedQuestions([]);
  };

  // スコア計算（最大100点）
  const totalScore = Math.min(
    100,
    selectedQuestions.reduce((sum, qId) => {
      const q = DIAGNOSTIC_QUESTIONS.find((item) => item.id === qId);
      return sum + (q ? q.riskPoint : 0);
    }, 0)
  );

  const getEvaluation = (score: number) => {
    if (score >= 70) {
      return {
        level: '【重度】細胞崩壊・超高リスク状態',
        levelColor: 'text-rose-400',
        badgeBg: 'bg-rose-950 border-rose-600 text-rose-300',
        gaugeBg: 'bg-rose-600',
        summary: '睡眠負債と活性酸素が蓄積し、細胞の自己修復能（オートファジー）がほぼ停止している恐れがあります。今すぐ生活プロトコルの見直しと、外因性核酸によるサルベージ修復が必要です。',
        recommendProducts: 'ナチュラル DNコラーゲン（朝晩60ml） ＋ アミノアクティ BCAA ＋ エナシエント',
      };
    } else if (score >= 35) {
      return {
        level: '【中度】健康負債蓄積・老化進行リスク',
        levelColor: 'text-amber-400',
        badgeBg: 'bg-amber-950 border-amber-600 text-amber-300',
        gaugeBg: 'bg-amber-500',
        summary: '睡眠の質低下や運動不足により、脳内毒素排出と代謝効率が鈍化しています。就寝前のナイトショットと大筋群運動を取り入れ、細胞の錆びつきを食い止めましょう。',
        recommendProducts: 'ナチュラル DNコラーゲン（就寝前30ml） ＋ アミノアクティ BCAA',
      };
    } else {
      return {
        level: '【軽度〜良好】高パフォーマンス維持中',
        levelColor: 'text-emerald-400',
        badgeBg: 'bg-emerald-950 border-emerald-600 text-emerald-300',
        gaugeBg: 'bg-emerald-500',
        summary: '良好な生活リズムが保たれています。さらなる若々しさと10年後のテロメア維持のため、特許核酸による毎日の細胞メンテナンスを継続しましょう。',
        recommendProducts: 'ナチュラル DNコラーゲン（毎朝または就寝前30ml）',
      };
    }
  };

  const evalResult = getEvaluation(totalScore);

  return (
    <section id="diagnostics-section" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* グロー装飾 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* セクションヘッダー */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold mb-4">
            <Activity className="w-4 h-4 text-rose-400" />
            <span>【無料・30秒自己診断】あなたの細胞劣化・健康負債チェック</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            あなたの体は今、どのくらい「老化負債」を抱えているか？
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            当てはまる項目にチェックを入れてください。リアルタイムで危険度スコアと推奨処方箋を算出します。
          </p>
        </div>

        {/* 2カラム診断エリア */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 左：チェックリスト */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                チェック項目（全9問）
              </span>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>選択をリセット</span>
              </button>
            </div>

            <div className="space-y-2.5">
              {DIAGNOSTIC_QUESTIONS.map((q) => {
                const isChecked = selectedQuestions.includes(q.id);

                return (
                  <label
                    key={q.id}
                    onClick={() => handleToggle(q.id)}
                    className={`p-3.5 rounded-2xl flex items-start gap-3 cursor-pointer transition-all border ${
                      isChecked
                        ? 'bg-rose-950/40 border-rose-600/70 text-white shadow-sm'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-1 w-4 h-4 rounded text-rose-600 focus:ring-rose-500 bg-slate-900 border-slate-700"
                    />
                    <div className="flex-grow">
                      <span className="text-xs sm:text-sm font-medium leading-relaxed block">
                        {q.question}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* 右：リアルタイム結果パネル */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6 sticky top-24">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                診断結果スコア
              </span>
              <div className="flex items-baseline gap-3">
                <span className={`text-5xl font-black ${evalResult.levelColor}`}>
                  {totalScore}
                </span>
                <span className="text-slate-400 text-sm font-bold">/ 100 点（健康負債度）</span>
              </div>
            </div>

            {/* ゲージバー */}
            <div>
              <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden relative">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${evalResult.gaugeBg}`}
                  style={{ width: `${totalScore}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>0 (安全)</span>
                <span>50 (要注意)</span>
                <span>100 (極めて危険)</span>
              </div>
            </div>

            {/* 判定バッジ */}
            <div className={`p-4 rounded-2xl border ${evalResult.badgeBg}`}>
              <div className="flex items-center gap-2 font-black text-sm mb-1">
                <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                <span>{evalResult.level}</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed mt-2">
                {evalResult.summary}
              </p>
            </div>

            {/* 推奨される組み合わせ */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[11px] font-bold text-cyan-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>細胞リカバリー推奨フォーミュラ</span>
              </span>
              <p className="text-xs font-bold text-white leading-relaxed">
                {evalResult.recommendProducts}
              </p>
            </div>

            {/* カタログへの誘導ボタン */}
            <Link
              href="/products"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold text-sm shadow-lg shadow-teal-500/20 transition-all hover:scale-102"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>全79製品の科学的批評 ＆ カタログを見る</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
