'use client';

import React, { useEffect } from 'react';
import { 
  X, ShieldCheck, AlertTriangle, Info, Sparkles, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { PPK_MODAL_TOPICS, PPKModalTopic } from '@/data/ppkData';

interface PPKModalProps {
  topicId: string | null;
  onClose: () => void;
}

export const PPKModal: React.FC<PPKModalProps> = ({ topicId, onClose }) => {
  useEffect(() => {
    if (!topicId) return;

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
  }, [topicId, onClose]);

  if (!topicId) return null;

  const topic: PPKModalTopic | undefined = PPK_MODAL_TOPICS[topicId];
  if (!topic) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col cursor-default animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white flex items-start justify-between border-b border-slate-800 gap-4">
          <div className="space-y-1.5">
            <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${topic.badgeColor}`}>
              {topic.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-black tracking-tight leading-snug">
              {topic.title}
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              {topic.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
            aria-label="閉じる"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Summary Box */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-800 font-medium leading-relaxed">
            <p className="text-xs sm:text-sm text-slate-700">
              {topic.summary}
            </p>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-5">
            {topic.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2.5">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-1.5 h-4 bg-teal-600 rounded-full" />
                  <span>{sec.heading}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-3.5">
                  {sec.content}
                </p>

                {sec.points && (
                  <ul className="pl-3.5 space-y-2 pt-1">
                    {sec.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.alert && (
                  <div className={`mt-2.5 p-3 rounded-xl border flex items-start gap-2.5 text-xs leading-relaxed ${
                    sec.alert.type === 'warning' 
                      ? 'bg-amber-50 border-amber-200 text-amber-900' 
                      : sec.alert.type === 'tip'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-cyan-50 border-cyan-200 text-cyan-900'
                  }`}>
                    {sec.alert.type === 'warning' ? (
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    ) : (
                      <Info className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    )}
                    <span>{sec.alert.text}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Key Takeaway Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-50 via-cyan-50 to-emerald-50 border border-teal-200">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-900 mb-1">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>本質的な結論（Key Takeaway）</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-teal-950 leading-relaxed">
              {topic.keyTakeaway}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs sm:text-sm font-bold transition-colors shadow-sm"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
