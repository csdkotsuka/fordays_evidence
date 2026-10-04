'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, Calendar, Send, CheckCircle2, UserCheck, MapPin, 
  Users, MessageSquare, Sparkles, Phone, Mail
} from 'lucide-react';
import { WORKSHOP_PLANS } from '@/data/workshopPlans';

interface WorkshopRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanTitle?: string;
}

export const WorkshopRequestModal: React.FC<WorkshopRequestModalProps> = ({
  isOpen,
  onClose,
  initialPlanTitle = ''
}) => {
  const [formData, setFormData] = useState({
    organizerName: '',
    contactInfo: '',
    salonOrRegion: '',
    preferredPlan: initialPlanTitle || WORKSHOP_PLANS[0].title,
    expectedAttendees: '10名〜20名前後',
    preferredTiming: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialPlanTitle) {
      setFormData(prev => ({ ...prev, preferredPlan: initialPlanTitle }));
    }
  }, [initialPlanTitle]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-400/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white">
                運動療法ワークショップ開催相談・お見積り
              </h3>
              <p className="text-xs text-slate-300">
                理学療法士・教育者が貴サロン・イベントへ出張指導いたします
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="閉じる"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-grow space-y-6">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">
                開催のご相談を承りました！
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                ご送信いただきありがとうございます。内容を確認のうえ、担当理学療法士より24時間以内に開催条件・日程候補・会場ごとの最適プログラムをご連絡いたします。
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  閉じる
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-900 flex items-start gap-2.5">
                <UserCheck className="w-4 h-4 text-teal-700 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>少人数サロンから大規模ホールまで対応：</strong>「まだ具体的な日程が決まっていない」「参加者の層に合わせてプランを相談したい」という段階でもお気軽にご相談ください。
                </span>
              </div>

              {/* 氏名 & 連絡先 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    主催者様・代表者様のお名前 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organizerName}
                    onChange={(e) => setFormData({ ...formData, organizerName: e.target.value })}
                    placeholder="例: 山田 花子"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    ご連絡先（メールまたはお電話） <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    placeholder="例: info@example.com または 090-xxxx-xxxx"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  />
                </div>
              </div>

              {/* サロン名・開催地域 */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  サロン名 / グループ名 / 開催予定の地域（都道府県）
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={formData.salonOrRegion}
                    onChange={(e) => setFormData({ ...formData, salonOrRegion: e.target.value })}
                    placeholder="例: FORDAYS ○○サロン（東京都世田谷区 / 出張希望）"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  />
                </div>
              </div>

              {/* 希望プラン */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  ご希望のワークショッププラン <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.preferredPlan}
                  onChange={(e) => setFormData({ ...formData, preferredPlan: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                >
                  {WORKSHOP_PLANS.map((plan) => (
                    <option key={plan.id} value={plan.title}>
                      {plan.title}
                    </option>
                  ))}
                  <option value="参加者の層に合わせてプロにお任せ・相談したい">
                    参加者の層に合わせてプロにお任せ・相談したい
                  </option>
                </select>
              </div>

              {/* 人数 & 時期 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    想定参加人数
                  </label>
                  <select
                    value={formData.expectedAttendees}
                    onChange={(e) => setFormData({ ...formData, expectedAttendees: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  >
                    <option value="少人数サロン（5〜10名程度）">少人数サロン（5〜10名程度）</option>
                    <option value="10名〜20名前後">10名〜20名前後</option>
                    <option value="20名〜50名中規模">20名〜50名中規模</option>
                    <option value="50名〜100名以上の大型イベント">50名〜100名以上の大型イベント</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    希望時期（目安）
                  </label>
                  <input
                    type="text"
                    value={formData.preferredTiming}
                    onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
                    placeholder="例: 来月土日、平日午前中、未定など"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  />
                </div>
              </div>

              {/* 自由相談 */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  ご相談内容・参加者の悩み・ご要望など
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="例: 会員の多くが60代女性で膝痛や尿もれを気にしています。核酸ドリンクの愛飲者も多いので、運動と合わせて効果を高める話を盛り込んでほしいです。"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-black text-sm shadow-lg shadow-teal-500/20 transition-all hover:scale-102 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>開催の無料相談・見積もりを送信する</span>
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  ※ 強引な営業や勧誘等は一切ございませんのでご安心ください。
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
