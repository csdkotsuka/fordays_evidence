'use client';

import React, { useEffect } from 'react';
import { X, BookOpen, Activity, ArrowRight, ExternalLink } from 'lucide-react';
import { TermDetail, TERMS } from '@/data/terms';

interface TermModalProps {
  termId: string | null;
  onClose: () => void;
  onSelectTerm: (id: string) => void;
}

export const TermModal: React.FC<TermModalProps> = ({ termId, onClose, onSelectTerm }) => {
  useEffect(() => {
    if (!termId) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // モーダル表示時に背景のスクロールをロック
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [termId, onClose]);

  if (!termId) return null;
  const term = TERMS[termId];
  if (!term) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-700 border border-brand-200">
                {term.category}
              </span>
              <span className="text-xs text-slate-500 font-mono">生化学・生理学事典</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 flex items-baseline gap-2">
              {term.name}
              <span className="text-xs font-normal text-slate-500">（{term.kana}）</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="閉じる"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          {/* Wikipedia風概要 */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
              <BookOpen className="w-4 h-4 text-brand-600" />
              <h4>定義・概要（Wikipedia解説）</h4>
            </div>
            <p className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-700">
              {term.wikipediaSummary}
            </p>
          </div>

          {/* 生理学的役割 */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
              <Activity className="w-4 h-4 text-emerald-600" />
              <h4>生体内における生理学的役割</h4>
            </div>
            <p className="text-slate-600 pl-3 border-l-2 border-emerald-400">
              {term.physiologicalRole}
            </p>
          </div>

          {/* 栄養学・健康・運動における意義 */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <h4>理学療法士視点での臨床・栄養的意義</h4>
            </div>
            <p className="text-slate-600 pl-3 border-l-2 border-amber-400">
              {term.significanceInNutrition}
            </p>
          </div>

          {/* 関連キーワード */}
          {term.relatedTerms && term.relatedTerms.length > 0 && (
            <div className="pt-4 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                関連キーワード
              </div>
              <div className="flex flex-wrap gap-2">
                {term.relatedTerms.map((relId) => {
                  const relTerm = TERMS[relId];
                  if (!relTerm) return null;
                  return (
                    <button
                      key={relId}
                      onClick={() => onSelectTerm(relId)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-xs text-slate-700 transition-colors border border-slate-200"
                    >
                      <span>{relTerm.name}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
