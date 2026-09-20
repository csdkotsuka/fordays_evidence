'use client';

import React, { useState } from 'react';
import { 
  Briefcase, ShieldCheck, Scale, AlertTriangle, CheckCircle2, 
  ArrowRight, HeartHandshake, Users, TrendingUp, HelpCircle, 
  Award, FileText, Ban, ArrowLeft, Sparkles, Check, X as CloseIcon, Flame
} from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PersonalTraining } from '@/components/PersonalTraining';

export default function BusinessPage() {
  const [isPTModalOpen, setIsPTModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* グローバルヘッダー */}
      <Header onOpenPTModal={() => setIsPTModalOpen(true)} />

      {/* パンくず・トップ復帰ナビ */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>ホーム（はじめての方）</span>
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/evidence"
              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>エビデンス検証ポータル（特許・論文）</span>
            </Link>
          </div>
          <span className="text-amber-400 font-semibold hidden sm:inline">
            ビジネス真実ガイド ＆ コンプライアンス
          </span>
        </div>
      </div>

      <main className="flex-grow">
        {/* ヒーローセクション */}
        <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 sm:py-24 border-b border-slate-800 overflow-hidden">
          {/* 背景装飾 */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-xs sm:text-sm font-bold text-amber-300">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>特定商取引法・客観的比較・真実の公開</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
              嘘をつかず、誇張せず、正々堂々と。<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-teal-300">
                一生モノの信用をつくる
              </span>
              ビジネスの真実
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              「ネットワークビジネスって怪しくないの？」「他の会社と何が違うの？」「本当に稼げるの？」<br className="hidden sm:block" />
              そんな疑問に、法律（特商法）のルール、他社モデルとの冷静な比較、
              <strong>FORDAYSの強み（優位性）だけでなく、向き不向きや注意点（劣位性）まで</strong>包み隠さずお伝えします。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-2 text-left">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs">
                <span className="font-bold text-amber-400 block mb-1">① 法律の徹底厳守</span>
                <span className="text-slate-300">特商法・連鎖販売取引のルールとコンプライアンス</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs">
                <span className="font-bold text-cyan-400 block mb-1">② 他MLMとの冷静な比較</span>
                <span className="text-slate-300">消耗品型 vs 耐久品・投資型の構造的違い</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs">
                <span className="font-bold text-emerald-400 block mb-1">③ 誇張のない挑戦</span>
                <span className="text-slate-300">誠実に取り組む人を正々堂々と応援</span>
              </div>
            </div>
          </div>
        </section>

        {/* 第1章: 連鎖販売取引法（特定商取引法）の正しい理解 */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
                <Scale className="w-3.5 h-3.5" />
                <span>Chapter 1</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                連鎖販売取引（特定商取引法第33条）とは？<br />
                なぜ「胸を張って」活動できるのか
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                世間では「ねずみ講」と混同されがちですが、法律上・構造上、まったく異なるものです。
                合法でありながら厳しいルールが課されている理由を正しく理解しましょう。
              </p>
            </div>

            {/* ねずみ講との違いテーブル */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ねずみ講（違法） */}
              <div className="p-6 sm:p-8 rounded-3xl bg-rose-50/70 border-2 border-rose-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black">
                    <CloseIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-rose-800 tracking-wider uppercase">完全違法（犯罪）</span>
                    <h3 className="text-lg font-bold text-slate-900">ねずみ講（無限連鎖講）</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-rose-950 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span><strong>商品の実態がない</strong>、または極端に無価値なものを名目にする。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>後から加入した人の「入会金」を上の人が山分けするだけの<strong>金銭配当システム</strong>。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>数学的に必ず破綻し、末端の人が確実に損をするため<strong>法律で全面禁止</strong>（懲役刑対象）。</span>
                  </li>
                </ul>
              </div>

              {/* 連鎖販売取引（合法・特商法） */}
              <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/70 border-2 border-emerald-200 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-emerald-800 tracking-wider uppercase">合法的な流通形態</span>
                    <h3 className="text-lg font-bold text-slate-900">連鎖販売取引（特定商取引法）</h3>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-emerald-950 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>特許や研究に裏付けられた<strong>高品質な商品（実体）が確実に介在</strong>する。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>広告費や中間卸を使わず、<strong>愛用者の口コミ流通に対する正当な対価</strong>として報酬が支払われる。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>特定商取引法第33条で法的に認められており、<strong>厳格な消費者保護ルール</strong>が整備されている。</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 守らなければならない法律の4大原則 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Absolute Rules</span>
                  <h3 className="text-lg sm:text-xl font-bold">
                    胸を張って活動するために絶対守る「特商法 ＆ 薬機法の鉄則」
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <strong className="text-amber-300 block font-bold text-sm">
                    ① 氏名・目的の事前明示（ブラインド勧誘の厳禁）
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    「お茶しよう」「久しぶりに会おう」とだけ言って誘い、その場でいきなりビジネスの話をする行為は特商法違反です。「フォーデイズという商品の紹介をしたい」と事前に目的を告げる誠実さが必須です。
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <strong className="text-amber-300 block font-bold text-sm">
                    ② 概要書面（重要事項）の事前交付
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    契約を結ぶ前に、会社の概要、商品の詳細、クーリングオフの権利、報酬条件などが明記された法定の「概要書面」を必ず相手に手渡し、理解してもらう義務があります。
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <strong className="text-teal-300 block font-bold text-sm">
                    ③ クーリングオフ（20日間）と返品制度の遵守
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    連鎖販売取引では契約書面受領から「20日間」の無条件解約（クーリングオフ）が法律で保障されています。さらにフォーデイズは規定の返品・中途解約ルールを厳格に運用しています。
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <strong className="text-teal-300 block font-bold text-sm">
                    ④ 医薬品的な効果効能の誇大広告禁止（薬機法）
                  </strong>
                  <p className="text-slate-300 leading-relaxed">
                    「ガンが治る」「病気が完治する」といった宣伝は医薬品医療機器等法（薬機法）違反です。食品としての栄養補給・健康維持の範囲を超えた虚偽・誇大表現は一切許されません。
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-xs text-amber-200 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>
                  <strong>結論：</strong>法律を守ることは、相手を守ることであると同時に、あなた自身の活動と信用を守る「最大の盾」です。
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 第2章: 他社ネットワークビジネス（MLM）モデルとの客観的比較 */}
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-800">
                <Scale className="w-3.5 h-3.5" />
                <span>Chapter 2</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                他のネットワークビジネスとの徹底比較<br />
                商材とビジネスモデルによる決定的な違い
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                「MLMならどれも同じ」ではありません。商材が「耐久品」か「投資案件」か「消耗品」かによって、
                ビジネスの持続性や人間関係へのリスクは180度変わります。
              </p>
            </div>

            {/* 比較表カード */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white border-b border-slate-800">
                      <th className="p-4 sm:p-5 font-bold text-slate-300 min-w-[130px]">比較項目</th>
                      <th className="p-4 sm:p-5 font-black text-amber-400 bg-slate-800 min-w-[180px]">
                        FORDAYS（フォーデイズ）<br />
                        <span className="text-[10px] font-normal text-amber-200">水溶性核酸ドリンク型</span>
                      </th>
                      <th className="p-4 sm:p-5 font-bold text-slate-300 min-w-[160px]">
                        耐久消費財・高額機器型<br />
                        <span className="text-[10px] font-normal text-slate-400">美顔器・浄水器・寝具等</span>
                      </th>
                      <th className="p-4 sm:p-5 font-bold text-slate-300 min-w-[160px]">
                        暗号資産・投資案件型<br />
                        <span className="text-[10px] font-normal text-slate-400">月利配当・AIトレード等</span>
                      </th>
                      <th className="p-4 sm:p-5 font-bold text-slate-300 min-w-[160px]">
                        日用品・多品種型<br />
                        <span className="text-[10px] font-normal text-slate-400">洗剤・シャンプー・コスメ等</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="p-4 font-bold bg-slate-50 text-slate-900">商材の性質</td>
                      <td className="p-4 bg-amber-50/40 font-bold text-slate-900">
                        毎月飲む「消耗品」<br />
                        <span className="text-[11px] text-slate-600 font-normal">月1〜2本ペースで自然消費</span>
                      </td>
                      <td className="p-4">
                        数年〜10年買い換えない「耐久品」<br />
                        <span className="text-[11px] text-slate-500">1回買ったら終わり</span>
                      </td>
                      <td className="p-4 text-rose-600">
                        実体のない「金融・情報」<br />
                        <span className="text-[11px] text-slate-500">法的なグレーゾーン多数</span>
                      </td>
                      <td className="p-4">
                        数百〜数千円の低単価日用品<br />
                        <span className="text-[11px] text-slate-500">種類が多すぎて管理が大変</span>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4 font-bold bg-slate-50 text-slate-900">初期費用・在庫リスク</td>
                      <td className="p-4 bg-amber-50/40 font-bold text-emerald-700">
                        ◎ 在庫不要・直送システム<br />
                        <span className="text-[11px] text-slate-600 font-normal">会社から会員へ直接配送。買い込みの必要なし</span>
                      </td>
                      <td className="p-4 text-rose-600">
                        × 30万〜100万円以上の高額<br />
                        <span className="text-[11px] text-slate-500">ローンを組ませるトラブルが頻発</span>
                      </td>
                      <td className="p-4 text-rose-600">
                        × 数十万〜百万円の出資<br />
                        <span className="text-[11px] text-slate-500">元本割れや持ち逃げリスク大</span>
                      </td>
                      <td className="p-4">
                        △ ノルマ達成のための買い込み<br />
                        <span className="text-[11px] text-slate-500">自宅が在庫の山になるケースも</span>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4 font-bold bg-slate-50 text-slate-900">リピート（継続性）</td>
                      <td className="p-4 bg-amber-50/40 font-bold text-emerald-700">
                        ◎ 極めて高い自然リピート<br />
                        <span className="text-[11px] text-slate-600 font-normal">「味が好き」「体調が良い」自発的愛用者が大半</span>
                      </td>
                      <td className="p-4 text-rose-600">
                        × リピートはほぼゼロ<br />
                        <span className="text-[11px] text-slate-500">毎月新しい人を誘い続けないと収入ゼロ</span>
                      </td>
                      <td className="p-4 text-rose-600">
                        × 破綻したら全額喪失<br />
                        <span className="text-[11px] text-slate-500">数年で消滅する案件がほとんど</span>
                      </td>
                      <td className="p-4">
                        ○ リピートはあるが薄利<br />
                        <span className="text-[11px] text-slate-500">市販の安価な洗剤等と競合しやすい</span>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4 font-bold bg-slate-50 text-slate-900">収入の性質</td>
                      <td className="p-4 bg-amber-50/40 font-bold text-slate-900">
                        安定ストック型（コツコツ型）<br />
                        <span className="text-[11px] text-slate-600 font-normal">愛用者の輪が広がるほど長期安定</span>
                      </td>
                      <td className="p-4">
                        一発フロー型（自転車操業）<br />
                        <span className="text-[11px] text-slate-500">大型売上が出た月だけ高収入</span>
                      </td>
                      <td className="p-4 text-rose-600">
                        投機型（ハイリスク・破滅）<br />
                        <span className="text-[11px] text-slate-500">逮捕・訴訟リスクと背中合わせ</span>
                      </td>
                      <td className="p-4">
                        薄利多売型（労働集約）<br />
                        <span className="text-[11px] text-slate-500">相当な人数を集めないと数万円にも届かない</span>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4 font-bold bg-slate-50 text-slate-900">人間関係への影響</td>
                      <td className="p-4 bg-amber-50/40 font-bold text-emerald-700">
                        ◎ 感謝されやすい<br />
                        <span className="text-[11px] text-slate-600 font-normal">「教えてくれてありがとう」と言われる関係性</span>
                      </td>
                      <td className="p-4 text-rose-600">
                        × 友人から距離を置かれやすい<br />
                        <span className="text-[11px] text-slate-500">高額な契約を迫るため敬遠される</span>
                      </td>
                      <td className="p-4 text-rose-600">
                        × 人間関係が完全に破滅<br />
                        <span className="text-[11px] text-slate-500">詐欺の片棒を担いだとして絶縁される</span>
                      </td>
                      <td className="p-4">
                        △ 押し売りに見られがち<br />
                        <span className="text-[11px] text-slate-500">ドラッグストアで買えるため断られやすい</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 第3章: 客観的に見た「FORDAYSの優位性（強み）」 */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chapter 3</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                なぜ、フォーデイズは選ばれ続けるのか？<br />
                ビジネスとして見た「4つの優位性」
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                単なる宣伝文句ではなく、ビジネスの基盤として冷徹に分析した「揺るぎない強み」です。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 強み1 */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black shadow-md">
                  <span className="text-xl font-black">1</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  25年以上の歴史 ＆ 国内自社工場の信頼
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  設立から5年以内で9割が消えると言われるネットワーク業界で、1997年創業以来四半世紀にわたって黒字経営を継続。岐阜や静岡に自社製造拠点を構え、供給体制も万全です。一過性の流行で終わらない安心感があります。
                </p>
              </div>

              {/* 強み2 */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center font-black shadow-md">
                  <span className="text-xl font-black">2</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  大学共同研究 ＆ 特許取得の学術的裏付け
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  東京大学や京都大学等の学術研究機関との共同研究講座や、特許第7857645号などの公的特許を多数保有。「なんとなく体にいい」という曖昧さではなく、Google Patentsや学術論文の原本として客観的に開示できる後ろ盾があります。
                </p>
              </div>

              {/* 強み3 */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-black shadow-md">
                  <span className="text-xl font-black">3</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  「水溶性核酸」という独自カテゴリー
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ビタミンCやプロテインであれば、ドラッグストアやネット通販の安売り品と簡単に価格比較されてしまいます。フォーデイズの独自酵素分解技術による「水溶性核酸」は他で真似しにくく、強いブランド差別化を持っています。
                </p>
              </div>

              {/* 強み4 */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black shadow-md">
                  <span className="text-xl font-black">4</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  「純粋な愛用者」が支える盤石な組織基盤
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  「ビジネスをやらなくなっても、商品は美味しいし調子が良いからずっと飲み続けたい」という自発的愛用者が圧倒的多数を占めています。ビジネス目的の人だけで支える「砂の城」ではないため、長期的な安定収入に育ちます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 第4章: 嘘をつかない「劣位性・注意点・向き不向き」 */}
        <section className="py-16 sm:py-20 bg-rose-50/40 border-b border-rose-200/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-300 text-xs font-bold text-rose-800">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                <span>Chapter 4（重要・正直な開示）</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                あえて語る「劣位性・注意点・向き不向き」<br />
                こんな人には絶対におすすめしません
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                どんなビジネスにも弱点やデメリットはあります。美辞麗句だけで誘うのは不誠実です。
                あらかじめ理解しておくべき現実をはっきりとお伝えします。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 注意点1 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-rose-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <Ban className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  ① 「すぐに一攫千金」を狙う人には向かない
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  「初月から何十万も稼ぎたい」「寝ているだけでお金持ちになりたい」という甘い考えの方は絶対にやめるべきです。消耗品ビジネスは、1人ひとりの信頼関係と継続的なフォローの積み重ねです。最初は地道な努力が必要です。
                </p>
              </div>

              {/* 注意点2 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-rose-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  ② 世間の「MLMアレルギー・偏見」の壁がある
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  どれほど法律を守り商品が良くても、過去の悪質な他社トラブルのせいで「ネットワークビジネス」という言葉だけで拒絶反応を示す人は一定数います。相手の考えを無理に変えようとせず、尊重する心の余裕が必要です。
                </p>
              </div>

              {/* 注意点3 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-rose-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  ③ 相手本位になれない人は破綻する
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  「自分のタイトル（ランク）を上げたいから」「報酬が欲しいから」という自己都合だけで強引にすすめると、大切な友人関係を失います。「本当に相手の健康や人生の役に立つか」を第一に考えられない人は長続きしません。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 第5章: 正々堂々と取り組むあなたへの応援メッセージ */}
        <section className="py-16 sm:py-24 bg-gradient-to-r from-slate-900 via-slate-950 to-amber-950 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-xs sm:text-sm font-bold text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Message for You</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              ありのままを伝える。<br />
              それだけで、十分に価値がある。
            </h2>

            <div className="space-y-4 text-xs sm:text-base text-slate-300 leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
              <p>
                フォーデイズの核酸ドリンクには、25年間愛されてきた実績と、東京大学をはじめとする学術研究、そして数々の特許という「揺るぎない事実」があります。
              </p>
              <p>
                だからこそ、<strong>大げさな話を盛ったり、病気が治ると嘘をついたりする必要は1ミリもありません。</strong><br />
                「自分や家族が飲んで本当に良かった」「体調が前向きになった」という等身大の体験と、公的なエビデンスをまっすぐに伝えるだけで、必要な人には必ず響きます。
              </p>
              <p className="font-semibold text-amber-200">
                人生100年時代、健康の不安も、将来のお金の不安も、誰もが抱えています。<br />
                正々堂々とルールを守り、人の健康に貢献しながら自分の未来を切り拓くあなたの挑戦を、私たちは心から応援します。
              </p>
            </div>

            {/* 3大ポータルへのナビゲーションカード */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <Link
                href="/evidence"
                className="p-6 rounded-2xl bg-slate-800/80 border border-cyan-500/40 hover:border-cyan-400 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-cyan-300">商品の後ろ盾を確認する</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-bold text-base text-white group-hover:text-cyan-200">
                  エビデンス検証ポータルへ
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Google Patentsの特許公報原本、東京大学共同研究論文、生化学メカニズムを完全網羅。
                </p>
              </Link>

              <Link
                href="/exercise-prescription"
                className="p-6 rounded-2xl bg-slate-800/80 border border-teal-500/40 hover:border-teal-400 transition-all hover:scale-[1.02] group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-teal-300">健康指導の知識を深める</span>
                  <ArrowRight className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-bold text-base text-white group-hover:text-teal-200">
                  40代〜90代の臨床運動処方学へ
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  サプリメントと運動（メカニカルストレス）の相乗効果。何歳からでも筋肉が育つ科学。
                </p>
              </Link>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setIsPTModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-300 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-amber-500/25 transition-all hover:scale-105"
              >
                <HeartHandshake className="w-5 h-5 text-slate-950" />
                <span>健康指導・運動処方の無料個別相談はこちら</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <Footer onOpenPTModal={() => setIsPTModalOpen(true)} />

      {/* PTモーダル */}
      <PersonalTraining
        isModalOpen={isPTModalOpen}
        onOpenModal={() => setIsPTModalOpen(true)}
        onCloseModal={() => setIsPTModalOpen(false)}
      />
    </div>
  );
}
