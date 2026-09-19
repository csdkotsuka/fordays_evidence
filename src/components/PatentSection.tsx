'use client';

import React, { useState } from 'react';
import { 
  FileCheck, ExternalLink, GraduationCap, Building2, Search, 
  Filter, Award, Sparkles, Activity, BookOpen, Layers, CheckCircle2 
} from 'lucide-react';
import { PATENTS, PatentItem } from '@/data/patents';
import { UNIVERSITY_COLLABORATIONS, ACADEMIC_PAPERS, SOCIETY_PRESENTATIONS } from '@/data/research';

interface PatentSectionProps {
  onSelectTerm?: (id: string) => void;
}

export const PatentSection: React.FC<PatentSectionProps> = ({ onSelectTerm }) => {
  const [activeTab, setActiveTab] = useState<'patents' | 'collaborations' | 'papers'>('patents');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'すべて' },
    { id: '筋肉・血流', label: '筋肉・血流（PT注目）' },
    { id: '抗酸化・細胞修復', label: '抗酸化・細胞修復' },
    { id: '脳・神経', label: '脳・神経' },
    { id: '代謝・抗肥満', label: '代謝・抗肥満' },
    { id: '皮膚・美容', label: '皮膚・美容' },
  ];

  const filteredPatents = PATENTS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.collaborator && item.collaborator.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.institution && item.institution.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="patents" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-3">
            <FileCheck className="w-4 h-4 text-indigo-600" />
            <span>学術・知的財産データベース</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            フォーデイズ取得特許 ＆ 大学共同研究の全貌
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            特許庁に正式登録された特許原本（Google Patents）へ直接リンクしています。
            どのような大学と共同研究を行い、どのような生体内メカニズムにおいて特許性が認められているのか客観的に検証できます。
          </p>
        </div>

        {/* PT Special Highlight Box */}
        <div className="mb-12 bg-gradient-to-br from-brand-900 via-slate-900 to-teal-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-teal-800/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start justify-between">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold">
                <Award className="w-4 h-4 text-teal-400" />
                <span>理学療法士として最も注目すべき共同研究 ＆ 特許</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                神戸大学 藤野英己教授との共同研究：<br />
                「運動を伴わずに毛細血管新生をもたらす」特許第7411938号
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                理学療法学およびサルコペニア研究の国内最高峰・神戸大学大学院の藤野英己教授（理学療法士・医学博士）との研究において、
                <strong>酵素分解核酸（DNA）の経口摂取が、骨格筋において血管新生因子（VEGF）やミトコンドリア活性因子（PGC-1α）を増加させ、運動を伴わずに毛細血管を新生させる</strong>ことが確認されました。
              </p>
              <div className="bg-slate-800/80 border border-teal-500/30 rounded-xl p-3.5 text-xs text-teal-200">
                <strong>理学療法士視点での臨床的意義：</strong>
                加齢や術後、長期臥床で失われやすい骨格筋の微小循環（毛細血管網）をサポートし、筋肉への酸素と栄養素（BCAA）の運搬路を確保する極めて重要な論拠です。
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <a
                href="https://patents.google.com/patent/JP7411938B2/ja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-5 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg transition-all hover:scale-[1.02]"
              >
                <span>特許第7411938号 原本を見る</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('patents')}
            className={`flex items-center gap-2 px-6 py-3.5 font-bold text-sm whitespace-nowrap border-b-2 transition-all ${
              activeTab === 'patents'
                ? 'border-brand-600 text-brand-600 bg-brand-50/50'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileCheck className="w-4 h-4" />
            <span>特許一覧 ＆ 原本リンク ({PATENTS.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('collaborations')}
            className={`flex items-center gap-2 px-6 py-3.5 font-bold text-sm whitespace-nowrap border-b-2 transition-all ${
              activeTab === 'collaborations'
                ? 'border-brand-600 text-brand-600 bg-brand-50/50'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>大学共同研究・講座マップ ({UNIVERSITY_COLLABORATIONS.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('papers')}
            className={`flex items-center gap-2 px-6 py-3.5 font-bold text-sm whitespace-nowrap border-b-2 transition-all ${
              activeTab === 'papers'
                ? 'border-brand-600 text-brand-600 bg-brand-50/50'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>学術論文 ＆ 学会発表 ({ACADEMIC_PAPERS.length + SOCIETY_PRESENTATIONS.length})</span>
          </button>
        </div>

        {/* TAB 1: Patents */}
        {activeTab === 'patents' && (
          <div>
            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
              {/* Category buttons */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-brand-600 text-white shadow-sm'
                        : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="特許名・大学・キーワード検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                />
              </div>
            </div>

            {/* Patent Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredPatents.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-xs font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                          {item.number}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                          {item.type}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
                          {item.category}
                        </span>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        item.status === '登録済' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 leading-snug mb-2">
                      {item.title}
                    </h4>

                    {(item.collaborator || item.institution) && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3 bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <GraduationCap className="w-4 h-4 text-brand-600 flex-shrink-0" />
                        <span>
                          {item.institution && <strong>{item.institution}</strong>}
                          {item.collaborator && `（${item.collaborator}）`}
                        </span>
                      </div>
                    )}

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {item.summary}
                    </p>

                    <div className="p-2.5 rounded-lg bg-slate-50 text-[11px] text-slate-500 leading-normal border border-slate-100 mb-4">
                      <strong className="text-slate-700">生理学的意義：</strong>
                      {item.scientificContext}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">
                      出願: {item.applicationDate} / 登録: {item.registeredDate}
                    </span>
                    <a
                      href={item.googlePatentsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-700 font-semibold transition-colors border border-slate-200"
                    >
                      <span>原本リンク</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredPatents.length === 0 && (
              <div className="text-center py-12 text-slate-500 text-sm">
                該当する特許が見つかりませんでした。検索条件を変更してください。
              </div>
            )}
          </div>
        )}

        {/* TAB 2: University Collaborations */}
        {activeTab === 'collaborations' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {UNIVERSITY_COLLABORATIONS.map((collab, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-brand-100 text-brand-800">
                      {collab.university}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {collab.professor}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    {collab.departmentOrCourse}
                  </h4>
                  <div className="text-xs font-semibold text-teal-700 mb-3">
                    テーマ: {collab.theme}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {collab.details}
                  </p>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600">
                    <strong className="text-slate-800">専門家評価：</strong>
                    {collab.significance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Papers & Presentations */}
        {activeTab === 'papers' && (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-600" />
                <span>査読付き学術論文 (Peer-Reviewed Papers)</span>
              </h3>
              <div className="space-y-3">
                {ACADEMIC_PAPERS.map((paper, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                        {paper.journal}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{paper.year}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {paper.title}
                    </h4>
                    <p className="text-xs text-slate-500 mb-2">
                      著者: {paper.authors}
                    </p>
                    <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      {paper.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600" />
                <span>学会発表 (Academic Conferences)</span>
              </h3>
              <div className="space-y-3">
                {SOCIETY_PRESENTATIONS.map((pres, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                        {pres.society}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{pres.year}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {pres.title}
                    </h4>
                    <p className="text-xs text-slate-600">
                      <strong>要旨：</strong> {pres.keyFinding}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
