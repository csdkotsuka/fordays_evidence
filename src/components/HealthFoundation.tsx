'use client';

import React, { useState } from 'react';
import { 
  HeartPulse, Dumbbell, Utensils, Moon, Smile, ArrowRight, ShieldCheck, 
  ExternalLink, Sparkles, BookOpen, AlertTriangle, TrendingUp, Zap, Users,
  Activity, Award, CheckCircle2, ChevronRight
} from 'lucide-react';

interface HealthFoundationProps {
  onSelectTerm?: (termId: string) => void;
  onOpenPTModal?: () => void;
}

export const HealthFoundation: React.FC<HealthFoundationProps> = ({ onSelectTerm, onOpenPTModal }) => {
  const [activeTab, setActiveTab] = useState<'pillars' | 'lifespan' | 'evidence'>('lifespan');

  return (
    <section id="health-pillars" className="scroll-mt-16 py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
      {/* 互換用アンカー */}
      <div id="exercise-lifespan" className="scroll-mt-16" />
      <div id="lifestyle" className="scroll-mt-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-3">
            <HeartPulse className="w-4 h-4 text-emerald-600" />
            <span>健康の本質 ＆ 運動寿命の提唱</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            サプリメントより先に大切なこと。<br className="hidden sm:block" />
            「健康の4大基盤」と提唱<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">『運動寿命』</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            どんなに優れた栄養補助食品も、生活の土台なしには真価を発揮しません。<br className="hidden sm:block" />
            筋トレで代謝を高め、仲間と楽しく過ごすことが最高の健康への近道。
            そして、健康寿命を支える真の鍵こそが<strong className="text-slate-900 font-bold">「運動寿命」</strong>です。
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-inner max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('lifespan')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'lifespan'
                  ? 'bg-white text-emerald-700 shadow-md scale-102 border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ① 提唱『運動寿命』とは何か
            </button>
            <button
              onClick={() => setActiveTab('pillars')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'pillars'
                  ? 'bg-white text-emerald-700 shadow-md scale-102 border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ② 健康の4大基盤 × FORDAYSの好影響
            </button>
            <button
              onClick={() => setActiveTab('evidence')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'evidence'
                  ? 'bg-white text-emerald-700 shadow-md scale-102 border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ③ なぜ早い内からの運動がベストか（論文検証）
            </button>
          </div>
        </div>

        {/* TAB 1: 提唱『運動寿命』 */}
        {activeTab === 'lifespan' && (
          <div className="space-y-12 animate-fade-in">
            {/* 3-Lifespan Tier Model */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">3-Tier Lifespan Concept</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  健康寿命の前に「運動寿命」が尽きていないか？
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  健康寿命（自立して生活できる期間）が失われる直前には、必ず<strong className="text-slate-900">「必要な運動量をこなせなくなる身体的限界（運動寿命の喪失）」</strong>が先行して起きています。
                </p>
              </div>

              {/* Diagram Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                {/* 1. 運動寿命 */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 shadow-md relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    最重要の土台
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-xl mb-4 shadow-sm">
                      <Dumbbell className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-black text-emerald-950 mb-1">
                      提唱『運動寿命』
                    </h4>
                    <span className="text-xs font-bold text-emerald-700 block mb-3">
                      自発的に十分な運動負荷を維持できる限界年齢
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      WHO推奨（週150〜300分の有酸素運動＋週2回以上の筋トレ）をこなせる筋力・毛細血管・心肺機能が維持されている期間。ここが維持されている限り、身体的老化は劇的に抑制されます。
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-emerald-200/70 text-[11px] font-semibold text-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>ここを伸ばすことが最大の目的</span>
                  </div>
                </div>

                {/* 2. 健康寿命 */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xl mb-4">
                      <Activity className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-black text-slate-900 mb-1">
                      健康寿命
                    </h4>
                    <span className="text-xs font-bold text-blue-600 block mb-3">
                      日常生活に制限なく自立して過ごせる期間
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      要支援・要介護状態にならず、自力で買い物や入浴ができる期間。現在、日本の平均健康寿命は男性約72.6歳、女性約75.5歳（厚労省調査）です。
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                    運動寿命が尽きると、数年〜10年遅れて健康寿命も終焉に向かいます。
                  </div>
                </div>

                {/* 3. 平均寿命 */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xl mb-4">
                      <HeartPulse className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-black text-slate-900 mb-1">
                      平均寿命
                    </h4>
                    <span className="text-xs font-bold text-purple-600 block mb-3">
                      生命として生きる期間（生存期間）
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      医学の発達により日本の平均寿命は男性約81歳、女性約87歳まで延伸。しかし「健康寿命」との間には<strong>約9〜12年の要介護・不健康期間</strong>が存在します。
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                    不健康な期間を最小化（圧縮）することが現代医学の命題です。
                  </div>
                </div>
              </div>

              {/* Cascade of Aging: Why losing exercise capacity triggers rapid aging */}
              <div className="mt-10 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-amber-950">
                      「運動量の低下」から始まる、身体的ドミノ倒し（カスケード老化）
                    </h4>
                    <p className="text-xs sm:text-sm text-amber-900/80 mt-1 leading-relaxed">
                      運動量が減ると、単に筋肉が落ちるだけではありません。
                      ①筋肉の毛細血管網が退行（ゴースト血管化）し酸素や栄養が届かなくなる → 
                      ②ミトコンドリア活性が激減し基礎代謝とATP産生が低下 → 
                      ③インスリン感受性が悪化し慢性微小炎症（Inflammaging）が進行 → 
                      ④関節拘縮・疼痛でさらに動けなくなる、という負のスパイラルに突入します。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Joy of Life & Muscle Training Callout */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                    <Smile className="w-4 h-4" />
                    <span>最高の健康哲学</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black leading-snug">
                    筋トレして代謝を高め、<br />
                    <span className="text-emerald-400">仲間と楽しく人生を過ごすことが最高の健康</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    運動とは苦行ではありません。筋肉を動かして基礎代謝を高め、美味しいものを美味しく食べ、好きな場所へ自分の足で出かける。
                    笑顔で仲間と語り合い、ストレスを吹き飛ばすことこそが、免疫細胞を最も活性化させ、自律神経を整える究極の健康法です。
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={onOpenPTModal}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs transition-colors"
                    >
                      <span>無理なく楽しく続けられる個別メニューを相談する</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5 h-64 lg:h-full relative min-h-[260px]">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                    alt="仲間と楽しくアクティブに過ごすシニア"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 健康の4大基盤 × FORDAYSの好影響 */}
        {activeTab === 'pillars' && (
          <div className="space-y-8 animate-fade-in">
            {/* Context Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">The 4 Pillars of Health</span>
              <h3 className="text-xl font-black text-slate-900 mt-1 mb-2">
                サプリメントは「主役」ではなく「潤滑油・ブースター」
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                健康は「運動」「食事」「休養」「低ストレス」の4つの車輪が均等に回ってこそ維持されます。
                FORDAYSの商品は、これら4つの基盤が円滑に回るためのサポートとして活用してこそ、真価を発揮します。
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. 運動 */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-black">
                      <Dumbbell className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-orange-600 uppercase">Pillar 1</span>
                      <h4 className="text-lg font-bold text-slate-900">運動（筋トレ・代謝向上）</h4>
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 space-y-2 mb-4">
                    <p><strong>基本の役割：</strong>筋肉に負荷（メカニカルストレス）をかけ、mTORを活性化。基礎代謝を上げ、抗炎症ホルモン（マイオカイン）を分泌させる。</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200/70 text-xs">
                  <div className="font-bold text-orange-900 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-orange-600" />
                    <span>FORDAYS商品がもたらす好影響</span>
                  </div>
                  <ul className="text-slate-700 space-y-1 list-disc list-inside">
                    <li><strong>BCAA & グルタミンDX：</strong>ロイシンが筋タンパク質合成のスイッチを押し、グルタミンが運動時の筋分解を抑制。</li>
                    <li><strong>核酸ドリンク（FCore-R2023）：</strong>筋肉の毛細血管網を拡張・新生させ、運動で使われる筋肉への酸素・栄養供給を底上げ（神戸大研究）。</li>
                  </ul>
                </div>
              </div>

              {/* 2. 食事 */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">
                      <Utensils className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-600 uppercase">Pillar 2</span>
                      <h4 className="text-lg font-bold text-slate-900">食事（栄養バランス・消化吸収）</h4>
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 space-y-2 mb-4">
                    <p><strong>基本の役割：</strong>毎食の良質なタンパク質、ビタミン、ミネラル、食物繊維を摂取し、腸内環境を整えて効率よく細胞へ吸収させる。</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/70 text-xs">
                  <div className="font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>FORDAYS商品がもたらす好影響</span>
                  </div>
                  <ul className="text-slate-700 space-y-1 list-disc list-inside">
                    <li><strong>ナチュラルDNコラーゲン：</strong>高分子サケ白子DNA・食用酵母RNAによる「サルベージ合成経路」へのヌクレオチド補給。細胞分裂の激しい消化管粘膜の代謝を支える。</li>
                    <li><strong>低分子コラーゲンペプチド：</strong>結合組織（腱・靭帯・軟骨）のターンオーバーを促し、関節のしなやかさを補給。</li>
                  </ul>
                </div>
              </div>

              {/* 3. 休養 */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-black">
                      <Moon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-indigo-600 uppercase">Pillar 3</span>
                      <h4 className="text-lg font-bold text-slate-900">休養（質の高い睡眠・細胞修復）</h4>
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 space-y-2 mb-4">
                    <p><strong>基本の役割：</strong>成長ホルモンを分泌させ、運動や日常で傷ついた筋線維・組織を修復。脳の老廃物を洗い流し自律神経をリセットする。</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200/70 text-xs">
                  <div className="font-bold text-indigo-900 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span>FORDAYS商品がもたらす好影響</span>
                  </div>
                  <ul className="text-slate-700 space-y-1 list-disc list-inside">
                    <li><strong>酸化ストレス抑制特許（特許第7857645号）：</strong>睡眠中の酸化タンパク質の修復を促進し、翌朝の疲労感蓄積を軽減。</li>
                    <li><strong>ミトコンドリアATP産生促進：</strong>睡眠中の組織再合成に必要な細胞内エネルギー（ATP）の枯渇を防ぐ。</li>
                  </ul>
                </div>
              </div>

              {/* 4. 低ストレス */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-black">
                      <Smile className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-rose-600 uppercase">Pillar 4</span>
                      <h4 className="text-lg font-bold text-slate-900">低ストレス（笑顔・コミュニティ・心の充足）</h4>
                    </div>
                  </div>
                  <div className="text-xs text-slate-600 space-y-2 mb-4">
                    <p><strong>基本の役割：</strong>過剰なコルチゾール（ストレスホルモン）を抑制し、免疫低下や筋分解を防ぐ。仲間と楽しく交流し人生を前向きに楽しむ。</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200/70 text-xs">
                  <div className="font-bold text-rose-900 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-rose-600" />
                    <span>FORDAYS商品がもたらす好影響</span>
                  </div>
                  <ul className="text-slate-700 space-y-1 list-disc list-inside">
                    <li><strong>「動ける身体」による自己肯定感：</strong>身体が軽くなり外出や趣味に積極的になれるポジティブな好循環。</li>
                    <li><strong>健康コミュニティ：</strong>サロンや仲間との交流を通じて、孤独感を防ぎ、笑顔で健康を語り合える社会的つながりを創出。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: なぜ早い内からの運動がベストか（論文・学術エビデンス） */}
        {activeTab === 'evidence' && (
          <div className="space-y-8 animate-fade-in">
            {/* Top Explanation */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Scientific Literature & Cohort Studies</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    「高齢になる前から運動を始めるべき」は本当か？学術論文の検証
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                「定年退職してから運動を始めればいい」「高齢になってからでも間に合う」と考えられがちです。
                しかし、国際的な運動疫学・医学研究は<strong className="text-slate-900">「まだ動ける若い〜中年期のうちに運動習慣と筋力貯蓄を作っておくことが、将来の健康寿命を決定づける」</strong>という圧倒的なエビデンスを報告しています。
              </p>
            </div>

            {/* Evidence Cards */}
            <div className="space-y-4">
              {/* Evidence 1: WHO Physical Activity Guidelines 2020 */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-300 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold">
                      国際ガイドライン
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      WHO身体活動・座位行動ガイドライン 2020
                    </h4>
                  </div>
                  <a
                    href="https://doi.org/10.1136/bjsports-2020-102955"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 underline font-semibold"
                  >
                    <span>Br J Sports Med 2020 (PMID: 33239350)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  世界保健機関（WHO）は、すべての成人に<strong>「週150〜300分の中強度有酸素運動（または75〜150分の高強度運動）」</strong>に加えて、<strong>「週2日以上の主要筋群すべてを対象とした筋力向上運動（筋トレ）」</strong>を強く推奨。
                  座位時間（座りっぱなし）の削減が、心血管病・がん・2型糖尿病の死亡リスクを大幅に抑制すると結論づけています。
                </p>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <strong>専門職の見解：</strong>この「週150〜300分」という運動量をこなすためには、心肺機能だけでなく、膝や腰を支える十分な骨格筋量が不可欠です。
                </div>
              </div>

              {/* Evidence 2: BJSM 2022 Meta-Analysis on Muscle Strengthening */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-300 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold">
                      メタアナリシス（最高峰エビデンス）
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      筋トレと全死亡率・疾患リスク低下の包括的解析（Mommaら）
                    </h4>
                  </div>
                  <a
                    href="https://doi.org/10.1136/bjsports-2021-105061"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-800 underline font-semibold"
                  >
                    <span>Br J Sports Med 2022 (PMID: 35228201)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  16件の前向きコホート研究を統合した世界的メタ解析において、<strong>週30〜60分の筋トレを行うだけで、全死亡・心血管疾患・がん・糖尿病の発症リスクが10〜20%有意に低下</strong>。
                  さらに有酸素運動と筋トレを両方行った場合、<strong>全死亡リスクが40%低下</strong>するという驚異的な相乗効果が証明されました。
                </p>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <strong>専門職の見解：</strong>「長時間の過酷なトレーニング」は必要ありません。週に合計30〜60分、正しく筋肉に負荷をかけるだけで生命予後が劇的に向上します。
                </div>
              </div>

              {/* Evidence 3: JAMA Network Open 2019 Cohort Study */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-emerald-300 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-indigo-100 text-indigo-800 text-xs font-bold">
                      31万人追跡コホート
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      若年・中年期からの運動継続が高齢期の死亡率を激減させる（Saint-Mauriceら）
                    </h4>
                  </div>
                  <a
                    href="https://doi.org/10.1001/jamanetworkopen.2019.0355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 underline font-semibold"
                  >
                    <span>JAMA Netw Open 2019 (PMID: 30848809)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  米国国立がん研究所（NCI）による315,059人の生涯運動追跡調査。
                  青年期から中年期にかけて運動量を維持した群は、不活動群に比べて高齢期の全死亡率が36%低下。
                  注目すべきは、<strong>「青年期は不活動だったが、中年期（40〜61歳）から運動量を増やした群」でも全死亡リスクが35%低下</strong>し、生涯運動を続けた人とほぼ同等の延命利益が得られた点です。
                </p>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                  <strong>専門職の見解：</strong>高齢期（75歳以降）になって重度の関節痛や骨粗鬆症を発症してからでは強度の高い運動が困難になります。40代・50代・60代の「今」運動寿命の貯金を作ることが決定打となります。
                </div>
              </div>

              {/* Physiological Reality Card: Peak Capacity Concept */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <TrendingUp className="w-5 h-5" />
                  <span>生理学的真実：ピークキャパシティ（運動貯蓄）の法則</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  ヒトの骨格筋量は30歳頃をピークに、何もしなければ<strong>年間約1%ずつ減少</strong>し、60代以降は年1.5〜2%へと減少スピードが跳ね上がります。
                  毛細血管も加齢とともに退行します。
                  若いうちから筋トレをして<strong>「筋肉の山（ピーク値）」を高く築いておけば、年数が経って減少しても「要介護ライン（フレイル閾値）」を割り込むまでの猶予年数を15〜20年も稼ぐことができます。</strong>
                  これこそが、早い内から運動を生活に組み込むべき生理学的根拠です。
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
