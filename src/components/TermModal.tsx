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
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-fade-in p-3 sm:p-4 flex min-h-full items-center justify-center cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90dvh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden cursor-default my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-start justify-between flex-shrink-0 sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                {term.category}
              </span>
              <span className="text-xs text-slate-500 font-mono">生化学・生理学事典</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex flex-wrap items-baseline gap-1.5">
              <span>{term.name}</span>
              <span className="text-xs font-normal text-slate-500">（{term.kana}）</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-slate-200/70 hover:bg-slate-300 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors flex-shrink-0 ml-2"
            aria-label="閉じる"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body (Scrollable) */}
        <div className="p-5 sm:p-6 overflow-y-auto overscroll-contain space-y-6 text-slate-700 text-sm leading-relaxed flex-grow">
          {/* Wikipedia風概要 */}
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
              <BookOpen className="w-4 h-4 text-teal-600" />
              <h4>定義・概要（Wikipedia解説）</h4>
            </div>
            <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-700">
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-xs text-slate-700 transition-colors border border-slate-200 cursor-pointer"
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
        <div className="px-5 sm:px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
