'use client';

import React, { useState, useEffect } from 'react';
import { Dumbbell, ShieldCheck, HeartPulse, UserCheck, Calendar, Send, CheckCircle2, MessageSquare, Phone, Clock, ArrowRight } from 'lucide-react';

interface PersonalTrainingProps {
  isModalOpen: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
}

export const PersonalTraining: React.FC<PersonalTrainingProps> = ({ isModalOpen, onOpenModal, onCloseModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    concerns: '',
    fordaysInterest: '興味がある・使ってみたい',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen, onCloseModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 擬似送信処理（将来的にはAPIやWebhookに連携可能）
    setIsSubmitted(true);
  };

  return (
    <section id="personal-training" className="py-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold mb-3">
            <UserCheck className="w-4 h-4 text-teal-400" />
            <span>理学療法士直伝 プログラム</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            FORDAYS（栄養）× パーソナルトレーニング（運動）<br />
            「100歳でも動ける身体」を共につくる
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            自己流の筋トレで膝や腰を痛めていませんか？<br />
            教員経験22年の理学療法士が、あなたの関節可動域や筋力バランスを評価し、無理なく一生動ける身体へ導きます。
          </p>
        </div>

        {/* 3 Strong Advantages of PT Personal Training */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-4 border border-teal-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              1. 医療職（理学療法士）だから安心
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              関節痛や腰痛、持病があっても大丈夫。解剖学・バイオメカニクスに基づき、関節に負担をかけない安全なフォームと負荷強度を厳密に設定します。
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center mb-4 border border-brand-500/30">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              2. 科学的エビデンスに基づく栄養設計
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              FORDAYS核酸ドリンクによる毛細血管・代謝サポートと、BCAA & グルタミンDXを飲む最適なタイミング・量を、トレーニングと完全に連動させます。
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/30">
              <Dumbbell className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              3. 教員歴22年のわかりやすい伴走
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              22年間で数百名の医療従事者を育ててきた指導力で、「なぜこの運動が必要なのか」を納得感を持って楽しく続けられるように伴走します。
            </p>
          </div>
        </div>

        {/* Action Banner / Contact Form Anchor */}
        <div className="bg-gradient-to-r from-teal-900/60 via-slate-800 to-brand-900/60 border border-teal-500/40 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            まずは無料カウンセリングでお悩みをお聞かせください
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            「最近疲れやすい」「足腰に不安がある」「FORDAYSの商品をどう活用すればいいか相談したい」など、どんな些細なことでも専門家の視点でお応えします。
          </p>

          <button
            onClick={() => {
              setIsSubmitted(false);
              onOpenModal();
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-300 hover:from-teal-300 hover:to-cyan-200 transition-all shadow-lg shadow-teal-500/30 hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            <span>パーソナルトレーニング無料相談・体験予約</span>
          </button>
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in cursor-pointer"
          onClick={onCloseModal}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onCloseModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl p-2"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-teal-400 text-xs font-bold mb-1">
                  <UserCheck className="w-4 h-4" />
                  <span>理学療法士 直通相談フォーム</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  無料カウンセリング・体験相談
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  お身体の状態やFORDAYS製品に関するご質問など、お気軽にお寄せください。
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">お名前 *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="山田 太郎"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">メールアドレス *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@mail.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">電話番号</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="090-1234-5678"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">FORDAYS製品のご利用状況</label>
                    <select
                      value={formData.fordaysInterest}
                      onChange={(e) => setFormData({ ...formData, fordaysInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="興味がある・使ってみたい">興味がある・これから使ってみたい</option>
                      <option value="現在利用中（効果的な運動法を知りたい）">現在利用中（効果的な運動法を知りたい）</option>
                      <option value="まずはエビデンスや運動の相談だけしたい">まずはエビデンスや運動の相談だけしたい</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">お身体のお悩み・ご質問</label>
                    <textarea
                      rows={3}
                      value={formData.concerns}
                      onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                      placeholder="例：最近つまずきやすくなった、膝に負担をかけずに筋肉をつけたい、など"
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 font-bold text-sm hover:from-teal-300 hover:to-cyan-300 transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>送信する（無料）</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto border border-teal-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">お問い合わせを受け付けました</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  ご連絡ありがとうございます。理学療法士より、ご入力いただいた連絡先宛てに順次ご返信いたします。
                </p>
                <button
                  onClick={onCloseModal}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
                >
                  閉じる
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
