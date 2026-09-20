'use client';

import React, { useEffect } from 'react';
import { 
  X, Home, Briefcase, ShieldCheck, Dumbbell, 
  HelpCircle, ChevronRight, Sparkles, PhoneCall, ExternalLink 
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPTModal: () => void;
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose, onOpenPTModal }) => {
  const pathname = usePathname();

  // ESCキーで閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // メニューが開いているときは背景スクロールを防止
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    {
      title: 'はじめての方へ（ホーム）',
      subtitle: 'FORDAYSとは？・核酸の基本・選ばれる理由',
      href: '/',
      icon: Home,
      badge: '初心者向け',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    },
    {
      title: 'ビジネスガイド（誠実に取り組む方へ）',
      subtitle: '連鎖販売取引法・他MLM比較・優位性と注意点',
      href: '/business',
      icon: Briefcase,
      badge: 'ビジネス特集',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300 font-bold',
    },
    {
      title: 'エビデンス検証ポータル',
      subtitle: 'Google Patents原本・共同研究論文・生化学機序',
      href: '/evidence',
      icon: ShieldCheck,
      badge: '特許公報原本付',
      badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-200',
    },
    {
      title: '40代〜90代の臨床運動処方学',
      subtitle: 'MVC最大筋力測定・安全な5大エクササイズ・BCAA',
      href: '/exercise-prescription',
      icon: Dumbbell,
      badge: '臨床運動学',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    },
  ];

  return (
    <>
      {/* 背景オーバーレイ */}
      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 左サイドスライドメニュー */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-80 sm:w-96 bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="サイドナビゲーション"
      >
        {/* サイドバーヘッダー */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-slate-950 font-black shadow-md">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight block">FORDAYS ポータル</span>
              <span className="text-[10px] text-teal-300 font-medium">メニューナビゲーション</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="メニューを閉じる"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ナビゲーションリスト */}
        <nav className="flex-grow overflow-y-auto p-4 space-y-2">
          <div className="px-2 py-1 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            サイト案内メニュー
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`group flex items-start gap-3.5 p-3.5 rounded-2xl transition-all border ${
                  isActive
                    ? 'bg-teal-50/80 border-teal-300 text-slate-900 shadow-sm'
                    : 'bg-white hover:bg-slate-50 border-slate-200/80 text-slate-700 hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200 group-hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="font-bold text-sm text-slate-900 truncate">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border whitespace-nowrap ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all self-center flex-shrink-0" />
              </Link>
            );
          })}

          {/* セクション区切り */}
          <div className="pt-4 pb-1">
            <div className="px-2 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
              個別相談 ＆ カウンセリング
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenPTModal();
            }}
            className="w-full text-left p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700 shadow-md hover:border-teal-400/60 transition-all group flex items-center gap-3.5"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/40 text-teal-300 flex items-center justify-center flex-shrink-0">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div className="flex-grow">
              <span className="font-bold text-sm text-white block">
                PT無料個別相談・運動処方
              </span>
              <span className="text-[11px] text-teal-300">
                専門職による関節・運動指導
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
          </button>
        </nav>

        {/* サイドバーフッター */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 text-xs text-slate-500 space-y-1">
          <p className="font-semibold text-slate-700">FORDAYS エビデンス検証</p>
          <p className="text-[11px] text-slate-600">
            科学的客観性と薬機法・特商法コンプライアンスの遵守
          </p>
        </div>
      </aside>
    </>
  );
};
