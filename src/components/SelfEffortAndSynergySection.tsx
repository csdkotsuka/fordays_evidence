'use client';

import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, User, Zap, ShieldCheck, 
  HelpCircle, ArrowRight, HeartPulse, Scale, Check,
  Moon, Dumbbell, Apple, Brain, Compass
} from 'lucide-react';
import { HABIT_ROLE_DIVISIONS, DAILY_HABIT_CHECKLIST, HabitRoleDivision } from '@/data/healthData';

export const SelfEffortAndSynergySection: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('sleep');
  const [checkedHabits, setCheckedHabits] = useState<string[]>([]);

  const currentDivision = HABIT_ROLE_DIVISIONS.find((d) => d.pillarId === selectedPillarId) || HABIT_ROLE_DIVISIONS[0];

  const toggleHabit = (id: string) => {
    setCheckedHabits((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'sleep':
        return <Moon className="w-4 h-4" />;
      case 'exercise':
        return <Dumbbell className="w-4 h-4" />;
      case 'nutrition':
        return <Apple className="w-4 h-4" />;
      case 'recovery':
        return <HeartPulse className="w-4 h-4" />;
      case 'stress':
        return <Brain className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="role-division-section" className="py-20 bg-slate-900 text-slate-100 relative overflow-hidden border-b border-slate-800">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* セクションメインメッセージ */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold mb-4 shadow-sm">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>【重要なメッセージ】自力努力（土台） × FORDAYS（細胞ブースト）の役割分担</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug mb-5">
            健康は「サプリを飲むだけ」では作れない。
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-300">
              あなたの生活習慣努力（土台）があってこそ、細胞修復は100%機能する
            </span>
          </h2>

          <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 text-left text-xs sm:text-sm text-slate-300 leading-relaxed shadow-xl space-y-3">
            <p>
              「フォーデイズの核酸ドリンクを飲んでいれば、夜更かししても暴飲暴食しても運動しなくても大丈夫」――<strong>そんな魔法の杖は、この世に存在しません。</strong>
            </p>
            <p>
              リハビリテーションや予防医学の現場で明らかなのは、<strong>「食事・睡眠環境・運動の継続・心の休養」という日々の地道な自力努力が健康の8割を決める</strong>という事実です。
            </p>
            <p className="text-teal-300 font-semibold">
              しかし同時に、<strong>「20代以降の肝臓の核酸合成能低下」「睡眠中の酸化タンパク質修復」「加齢による筋肉分解」といった生化学の壁は、どれほど気合いを入れても自力だけでは補えません。</strong>
              <br />
              『自分自身で意識して変えるべき日常習慣』と『FORDAYSが細胞レベルで強力にアシストする領域』を正しく見極め、両輪で取り組むことこそが、最も誠実で最短のアンチエイジングです。
            </p>
          </div>
        </div>

        {/* 5大要素別：自力努力 vs FORDAYSアシストの対比ボード */}
        <div className="mb-20">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {HABIT_ROLE_DIVISIONS.map((div) => {
              const isSelected = div.pillarId === selectedPillarId;
              return (
                <button
                  key={div.pillarId}
                  onClick={() => setSelectedPillarId(div.pillarId)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white border-transparent shadow-lg shadow-teal-500/20 scale-102'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {getPillarIcon(div.pillarId)}
                  <span>{div.pillarName.split('（')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* 選択された柱の対比カード */}
          <div className="bg-slate-950 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-5 mb-8 gap-3">
              <div>
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 border border-slate-700 block w-fit mb-1">
                  {currentDivision.pillarEng}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5">
                  {getPillarIcon(currentDivision.pillarId)}
                  <span>{currentDivision.pillarName}</span>
                </h3>
              </div>
              <div className="text-xs text-slate-400">
                <span>役割の境界線を明確にする</span>
              </div>
            </div>

            {/* 左右2分割グリッド */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 左：あなたが自力でやるべき習慣改善（土台） */}
              <div className="p-6 rounded-3xl bg-slate-900/90 border-2 border-teal-500/40 space-y-5 flex flex-col justify-between shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-teal-400">
                    <User className="w-5 h-5 flex-shrink-0" />
                    <span className="text-xs font-black uppercase tracking-wider text-teal-300">
                      YOUR RESPONSIBILITY（自力領域）
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-white leading-snug">
                    {currentDivision.selfEffortHeading}
                  </h4>
                  <p className="text-xs text-slate-400">
                    ここはサプリでは代行できません。あなた自身の生活選択と意志で積み上げる土台です。
                  </p>

                  <div className="space-y-3.5 pt-2">
                    {currentDivision.selfEffortActions.map((act, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
                        <div className="font-bold text-white flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-[10px] font-black flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span>{act.action}</span>
                        </div>
                        <p className="text-slate-300 text-[11px] leading-relaxed pl-7">
                          {act.whyEssential}
                        </p>
                        <div className="text-[10px] text-teal-300/80 bg-teal-950/40 p-2 rounded-xl border border-teal-900/40 ml-7">
                          💡 <strong>実践のコツ:</strong> {act.practicalTip}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 右：自力では難しく、FORDAYSが助ける生化学領域（ブースト） */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 border-2 border-indigo-500/50 space-y-5 flex flex-col justify-between shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-indigo-400">
                    <Zap className="w-5 h-5 flex-shrink-0 text-cyan-400" />
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-300">
                      FORDAYS CELLULAR BOOST（補完・加速領域）
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-white leading-snug">
                    {currentDivision.fordaysAssistHeading}
                  </h4>
                  <p className="text-xs text-slate-400">
                    あなたの努力を無駄にしないために。加齢や生化学の限界を特許技術でブレイクスルーします。
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-950/90 border border-indigo-900/50 text-xs space-y-1">
                      <span className="text-rose-400 font-bold text-[11px] block">
                        ⚠️ なぜ努力だけでは限界があるのか？
                      </span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {currentDivision.fordaysAssistRole.whySelfAloneIsHard}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/40 text-xs space-y-1.5">
                      <span className="text-cyan-300 font-bold text-[11px] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>FORDAYSが具体的にどう助けるか</span>
                      </span>
                      <p className="text-slate-200 text-[11px] leading-relaxed">
                        {currentDivision.fordaysAssistRole.howFordaysHelps}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] flex items-center justify-between">
                      <span className="text-slate-400">裏付け特許・素材:</span>
                      <span className="text-cyan-300 font-mono font-bold text-[10px]">
                        {currentDivision.fordaysAssistRole.patentsOrIngredients}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-indigo-950/60 border border-indigo-800 text-[11px] text-indigo-200 leading-relaxed">
                  💬 <strong>まとめ:</strong> あなたが生活を整え、FORDAYSが細胞を整える。この両方が揃ったとき、10年後も若々しく動ける身体が手に入ります。
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 今日から意識できる「日常の自力習慣チェックリスト10選」 */}
        <div className="bg-slate-950 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-bold mb-2">
              <Compass className="w-4 h-4" />
              <span>今日から自力で意識できること</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              あなたの「生活習慣の土台力」チェック（全10項目）
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              サプリメントに頼り切る前に、まずは自分が意識できている習慣にチェックを入れてみてください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
            {DAILY_HABIT_CHECKLIST.map((habit) => {
              const isChecked = checkedHabits.includes(habit.id);
              return (
                <div
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isChecked
                      ? 'bg-teal-950/50 border-teal-500/70 text-white'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                      isChecked
                        ? 'bg-teal-500 border-teal-400 text-slate-950 font-black'
                        : 'border-slate-700 bg-slate-950'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold px-2 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {habit.pillar}
                      </span>
                      <span className="text-xs font-bold text-white">
                        {habit.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {habit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* チェック達成状況とアドバイス */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs text-slate-400 block mb-0.5">あなたの習慣実践スコア</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-teal-400">{checkedHabits.length}</span>
                <span className="text-slate-400 text-xs">/ 10項目 実践中</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 max-w-lg leading-relaxed text-center sm:text-left">
              {checkedHabits.length >= 7 ? (
                <span className="text-emerald-300 font-semibold">
                  素晴らしい土台です！すでに高い自己管理能力があります。ここにFORDAYSの特許核酸が加わることで、細胞修復の効率が爆発的に高まります。
                </span>
              ) : checkedHabits.length >= 4 ? (
                <span className="text-amber-300 font-semibold">
                  順調です！まずは1つずつ意識できる習慣を増やしましょう。自力努力とサプリメント補給をセットにすることで、無理なく健康サイクルが回ります。
                </span>
              ) : (
                <span className="text-slate-300">
                  焦る必要はありません。まずは「朝の光を浴びる」「就寝前のスマホを控える」など、お金のかからない1つの小さな行動から始めてみましょう。
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
