import React from 'react';
import { ShieldCheck, AlertCircle, FileText, Activity } from 'lucide-react';

interface FooterProps {
  onOpenPTModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPTModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white block">
                  FORDAYS<span className="text-cyan-400 text-sm font-semibold ml-1">EVIDENCE PORTAL</span>
                </span>
                <span className="text-xs text-slate-400">リハビリ専門職・客観的エビデンス検証</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-md">
              長年リハビリテーション教育と臨床に携わる専門職が、FORDAYS（フォーデイズ）の核酸ドリンク・筋肉ケアサプリメントの特許、共同研究論文、基礎生理学メカニズムを学術的かつ誠実に検証した情報整理サイトです。
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <span>監修: リハビリテーション専門職（教育・臨床経験）</span>
              <span>•</span>
              <span>更新: 2026年9月</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">サイトマップ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#author" className="hover:text-cyan-400 transition-colors">執筆者のスタンス</a></li>
              <li><a href="#health-pillars" className="hover:text-cyan-400 transition-colors">健康の4大基盤＆運動寿命</a></li>
              <li><a href="#physiology" className="hover:text-cyan-400 transition-colors">基礎生理学・メカニズム</a></li>
              <li><a href="#patents" className="hover:text-cyan-400 transition-colors">特許・共同研究（原本リンク）</a></li>
              <li><a href="#evidence" className="hover:text-cyan-400 transition-colors">エビデンスの強みと限界</a></li>
              <li><a href="#muscle" className="hover:text-cyan-400 transition-colors">筋肉ケアと運動負荷の重要性</a></li>
              <li>
                <button
                  onClick={onOpenPTModal}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-left"
                >
                  PT無料個別相談・パーソナル指導
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">公的データベース</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://patents.google.com/?assignee=%E3%83%95%E3%82%A9%E3%83%BC%E3%83%87%E3%82%A4%E3%82%BA%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE&country=JP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center space-x-1"
                >
                  <span>Google Patents (フォーデイズ)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.j-platpat.inpit.go.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  J-PlatPat (特許情報プラットフォーム)
                </a>
              </li>
              <li>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  PubMed (米国医学図書館論文検索)
                </a>
              </li>
              <li>
                <a
                  href="https://ci.nii.ac.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  CiNii Research (日本の学術論文検索)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 薬機法・コンプライアンス免責事項 */}
        <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-400 leading-relaxed mb-8">
          <div className="flex items-center space-x-2 text-slate-300 font-bold mb-2">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>【医薬品医療機器等法（薬機法）・健康増進法に基づく免責事項】</span>
          </div>
          <p className="mb-2">
            本ウェブサイトで紹介している特許公報、共同研究、論文、生理学的解説は、原材料（サケ白子抽出物、酵素分解核酸素材、BCAA、グルタミン等）の学術的背景および試験管内・動物実験・臨床試験の報告を客観的に紹介・整理したものです。
          </p>
          <p className="mb-2">
            フォーデイズ株式会社の商品（ナチュラル DNコラーゲン、BCAA＆グルタミンDX等）は医薬品ではなく食品（栄養補助食品）です。特定の疾病の診断、治療、予防、治癒を目的としたものではなく、人体に対する効果効能を医学的・法的に保証・謳うものではありません。
          </p>
          <p>
            健康維持や身体機能の改善においては、バランスの良い食事、睡眠、そして理学療法士などの専門家指導に基づく適切な運動（メカニカルストレス）が土台となります。持病をお持ちの方、治療中の方、服薬中の方は、ご利用前に主治医にご相談ください。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-6 border-t border-slate-800">
          <p>© 2026 FORDAYS Evidence & PT Coaching by Licensed Physical Therapist. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="flex items-center text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              科学的誠実性・公的特許参照
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
