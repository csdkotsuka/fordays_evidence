'use client';

import React, { useEffect } from 'react';
import { 
  X, ShoppingBag, Sparkles, CheckCircle2, Clock, Zap, ShieldCheck, ArrowRight
} from 'lucide-react';
import { PRODUCT_SYNERGY_DETAILS, ProductSynergyDetail } from '@/data/workshopPlans';

interface ProductSynergyModalProps {
  productName: string | null;
  onClose: () => void;
}

export const ProductSynergyModal: React.FC<ProductSynergyModalProps> = ({
  productName,
  onClose
}) => {
  useEffect(() => {
    if (!productName) return;

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
  }, [productName, onClose]);

  if (!productName) return null;

  // 定義データから取得。もし未定義製品名があればフォールバック
  const detail: ProductSynergyDetail = PRODUCT_SYNERGY_DETAILS[productName] || {
    name: productName,
    category: 'FORDAYS推奨栄養サプリメント',
    tagline: '運動療法と融合する細胞レベルの栄養サポート',
    whyEffective: `${productName}は、運動によって生じる筋線維・結合組織への物理刺激（メカニカルストレス）の直後に摂取することで、組織の修復と適応を最速化します。`,
    scientificRole: '細胞のターンオーバー促進、結合組織の再構築',
    keyNutrients: ['水溶性核酸（DNA・RNA）', 'コラーゲンペプチド', 'アミノ酸群'],
    intakeTiming: '運動直後〜30分以内、または朝夕の食後',
    synergyWithExercise: '運動療法で促通された血流に乗り、標的となる筋肉や関節組織へダイレクトに届きます。'
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 text-white flex items-center justify-between border-b border-indigo-800/80">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center border border-indigo-400/30 flex-shrink-0">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-indigo-300 tracking-wider uppercase block">
                {detail.category}
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white">
                {detail.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="閉じる"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Tagline Callout */}
          <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-100 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm font-bold text-indigo-950 leading-relaxed">
              {detail.tagline}
            </p>
          </div>

          {/* 【主眼】なぜこの製品が効果的なのか？ */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
                なぜ運動療法と合わせて摂ると効果的なのか？
              </h4>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
              <p>{detail.whyEffective}</p>
              <div className="pt-2 border-t border-slate-200/80 text-xs text-teal-800 font-medium">
                💡 <strong>運動連動シナジー：</strong> {detail.synergyWithExercise}
              </div>
            </div>
          </div>

          {/* 生理学・生化学的役割 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
                生化学・生理学的な作用メカニズム
              </h4>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
              {detail.scientificRole}
            </div>
          </div>

          {/* 主な含有栄養素 */}
          <div className="space-y-2">
            <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>主な特徴・注目成分</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {detail.keyNutrients.map((nutrient, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-semibold"
                >
                  {nutrient}
                </span>
              ))}
            </div>
          </div>

          {/* ベストな摂取タイミング */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-amber-900 mb-0.5">
                おすすめの摂取タイミング：
              </span>
              <p className="leading-relaxed">{detail.intakeTiming}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            ※枠外のどこをクリックしても閉じます
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
