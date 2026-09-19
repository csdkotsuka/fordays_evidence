export interface PatentItem {
  id: string;
  number: string;
  applicationNumber: string;
  title: string;
  registeredDate: string;
  applicationDate: string;
  collaborator?: string;
  institution?: string;
  type: '物質特許' | '用途特許' | '製法特許' | '測定特許' | '海外特許';
  category: '抗酸化・細胞修復' | '脳・神経' | '筋肉・血流' | '代謝・抗肥満' | '皮膚・美容' | 'その他';
  summary: string;
  scientificContext: string;
  googlePatentsUrl: string;
  status: '登録済' | '存続期間満了' | '出願中';
}

export const PATENTS: PatentItem[] = [
  {
    id: 'pat-7857645',
    number: '特許第7857645号',
    applicationNumber: '特願2024-541104等',
    title: '酸化タンパク質修復剤、及び酸化タンパク質の修復を媒介した酸化ストレス抑制剤',
    registeredDate: '2025年',
    applicationDate: '2024年',
    collaborator: 'フォーデイズ次世代核酸ラボFD',
    institution: '自社ラボ独自研究',
    type: '用途特許',
    category: '抗酸化・細胞修復',
    summary: 'サケ白子抽出物の摂取による酸化ストレス抑制効果において、酸化メチオニン修復酵素遺伝子発現の増加による体内の酸化タンパク質の修復が関与していることを見出しました。',
    scientificContext: '加齢や運動ストレスで蓄積する酸化変性タンパク質を、遺伝子レベルで修復する酵素（MsrAなど）の活性化を促す作用機序が示されています。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP7857645B2/ja',
    status: '登録済'
  },
  {
    id: 'pat-7710217',
    number: '特許第7710217号',
    applicationNumber: '特願2024-553215',
    title: '表皮肥厚化を抑制する健康食品',
    registeredDate: '2025年',
    applicationDate: '2024年',
    collaborator: '財満信宏 教授',
    institution: '近畿大学',
    type: '用途特許',
    category: '皮膚・美容',
    summary: '卵巣摘出による閉経モデルラットにおいて、エストロゲン低下に伴う表皮の肥厚化を有意に抑制し、真皮中のコラーゲン染色面積を増加（19.3%→34.1%）させることを確認。Fcore-2021配合核酸ドリンクとしての特許性を取得。',
    scientificContext: '更年期・加齢による皮膚弾力性低下や構造劣化に対する栄養介入の新規性。外用だけでなく経口摂取による真皮結合組織サポートを示しています。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP7710217B2/ja',
    status: '登録済'
  },
  {
    id: 'pat-7627991',
    number: '特許第7627991号',
    applicationNumber: '特願2024-541104',
    title: 'リサイクリング増進のための分解系促進剤',
    registeredDate: '2025年1月30日',
    applicationDate: '2024年1月16日',
    collaborator: 'フォーデイズ次世代核酸ラボFD',
    institution: '自社ラボ独自研究',
    type: '用途特許',
    category: '抗酸化・細胞修復',
    summary: '魚類白子の酵素処理物（サケ白子抽出物）の摂取により、細胞内成分・小器官の分解系であるプロテアソーム、オートファジー、アポトーシスといった生体内リサイクリング機構を活性化し、不良ミトコンドリア等の除去を促進。',
    scientificContext: '細胞が自らを浄化・刷新するオートファジー機構の亢進。老廃物の蓄積を防ぎ、細胞の恒常性を維持するアンチエイジングの根幹作用です。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP7627991B2/ja',
    status: '登録済'
  },
  {
    id: 'pat-7554420',
    number: '特許第7554420号',
    applicationNumber: '特願2023-077502',
    title: '神経幹細胞の増殖促進剤及びそれを用いた神経幹細胞の増殖促進方法',
    registeredDate: '2024年9月11日',
    applicationDate: '2021年7月20日',
    collaborator: '加藤将夫 教授',
    institution: '金沢大学',
    type: '物質特許',
    category: '脳・神経',
    summary: '先行特許第7284955号で発見した「末端リン酸除去トリヌクレオチドCCC」などについて、新規化学物質としての物質特許を取得。',
    scientificContext: '特定の配列（シトシン3連鎖：CCC）を持つ低分子オリゴヌクレオチドが海馬の神経幹細胞に特異的に作用することを発見した画期的な物質特許です。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP7554420B2/ja',
    status: '登録済'
  },
  {
    id: 'pat-7411938',
    number: '特許第7411938号',
    applicationNumber: '特願2022-032879',
    title: '酵素分解核酸による毛細血管新生剤及び毛細血管を新生する方法',
    registeredDate: '2023年12月28日',
    applicationDate: '2022年3月3日',
    collaborator: '藤野英己 教授（理学療法士・医学博士）',
    institution: '神戸大学',
    type: '用途特許',
    category: '筋肉・血流',
    summary: '酵素分解核酸（DNA）が血管内皮増殖因子（VEGF）やミトコンドリア機能関連タンパク質（PGC-1α等）を増加させ、ラットの骨格筋において「運動を伴わずに毛細血管新生を促進する」作用を確認。',
    scientificContext: '理学療法士・リハビリテーション分野の世界的権威である藤野教授との共同研究。筋肉への血流供給網を増やし、筋萎縮予防や運動持久力向上の基盤となる重要知見です。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP7411938B2/ja',
    status: '登録済'
  },
  {
    id: 'pat-7291917',
    number: '特許第7291917号',
    applicationNumber: '特願2020-044636',
    title: 'トリペプチドRPRを含有する抗肥満薬並びに健康食品',
    registeredDate: '2023年6月8日',
    applicationDate: '2020年3月13日',
    collaborator: '長岡利 シニア教授',
    institution: '岐阜大学',
    type: '用途特許',
    category: '代謝・抗肥満',
    summary: 'サケ白子中の核タンパク質プロタミン由来の加水分解物「トリペプチドRPR（アルギニン-プロリン-アルギニン）」が、強力な抗肥満効果および血清総コレステロール低下作用を有することを発見。',
    scientificContext: '食品由来の特定のペプチド配列が生体内の脂質代謝系に働きかける機序を解明。メタボリックシンドローム予防への寄与が期待されます。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP7291917B2/ja',
    status: '登録済'
  },
  {
    id: 'pat-7284955',
    number: '特許第7284955号',
    applicationNumber: '特願2021-120019',
    title: '神経幹細胞の増殖促進剤及びそれを用いた神経幹細胞の増殖促進方法',
    registeredDate: '2023年5月24日',
    applicationDate: '2021年7月20日',
    collaborator: '加藤将夫 教授',
    institution: '金沢大学',
    type: '用途特許',
    category: '脳・神経',
    summary: 'サケ白子由来DNA中から同定した「トリヌクレオチドCCC」を機能性成分とし、記憶や学習能を司る脳海馬の神経幹細胞の増殖を促進することを確認。',
    scientificContext: '成人脳においても神経新生（ニューロジェネシス）が生じる海馬歯状回にアプローチし、加齢に伴う認知機能低下の予防に示唆を与える用途特許。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP7284955B2/ja',
    status: '登録済'
  },
  {
    id: 'pat-7054193',
    number: '特許第7054193号',
    applicationNumber: '特願2018-148432',
    title: '蛋白質含有酸性飲料の製造方法',
    registeredDate: '2022年4月5日',
    applicationDate: '2018年8月7日',
    collaborator: '株式会社エル・エスコ―ポレーション',
    institution: '共同出願',
    type: '製法特許',
    category: 'その他',
    summary: '水溶性核酸やコラーゲンなどのタンパク質を含む酸性健康飲料において、長期保管環境下（冷蔵〜37℃等）での沈殿・凝集を顕著に抑制する独自の安定化製造技術。',
    scientificContext: 'サプリメントとしての品質保持・製品の均一性と吸収性を長期間維持するための基盤工学特許です。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP7054193B2/ja',
    status: '登録済'
  },
  {
    id: 'pat-6660994',
    number: '特許第6660994号',
    applicationNumber: '特願2018-219366',
    title: '核酸(DNA及びRNA)由来のヌクレオチド、ヌクレオシド及び／又は塩基の定量方法',
    registeredDate: '2020年2月13日',
    applicationDate: '2018年11月22日',
    collaborator: '株式会社ライフ・サイエンス研究所',
    institution: '共同出願',
    type: '測定特許',
    category: 'その他',
    summary: '試料中の核酸成分（DNA・RNA由来ヌクレオチド、ヌクレオシド、遊離塩基）を逆相カラムを用いた1回のHPLC分析によって高精度に一括定量する分析法。',
    scientificContext: '品質管理や学術実験において、原材料および体内代謝物中の微量核酸成分を厳密に同定・規格化するための測定基盤技術。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP6660994B2/ja',
    status: '登録済'
  },
  {
    id: 'pat-6499740',
    number: '特許第6499740号',
    applicationNumber: '特願2017-192510',
    title: '食品組成物',
    registeredDate: '2019年3月22日',
    applicationDate: '2017年10月2日',
    collaborator: 'フォーデイズ独自開発',
    institution: '自社開発',
    type: '用途特許',
    category: '抗酸化・細胞修復',
    summary: 'ベニクスノキタケ抽出物とナリネ菌（乳酸菌）を特定比率で含有することで、生体防御・免疫機能を相乗的に正常化・増進させる組成物。',
    scientificContext: '腸内フローラと自然免疫系のバランスを整え、外敵に対する生体恒常性を維持することを目的とした配合特許です。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP6499740B2/ja',
    status: '登録済'
  },
  {
    id: 'pat-6153736',
    number: '特許第6153736号',
    applicationNumber: '特願2013-23839',
    title: '癌細胞増殖抑制剤並びに健康食品',
    registeredDate: '2017年6月9日',
    applicationDate: '2013年2月8日',
    collaborator: 'フォーデイズ学術研究',
    institution: '学術研究成果',
    type: '用途特許',
    category: '抗酸化・細胞修復',
    summary: '鮭白子を酵素低分子化して得られる水溶性核酸分解生成物が、複数の培養癌細胞株に対して特異的に増殖抑制効果を示すことを見出しました。',
    scientificContext: '※培養細胞（in vitro）レベルでの基礎実験所見。生体内で抗がん剤のように働くわけではなく、細胞増殖制御シグナルへの影響を調査した学術的用途特許です。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP6153736B2/ja',
    status: '登録済'
  },
  {
    id: 'pat-6138048',
    number: '特許第6138048号',
    applicationNumber: '特願2013-538440',
    title: 'システインペプチド含有健康飲料',
    registeredDate: '2017年5月12日',
    applicationDate: '2012年10月11日',
    collaborator: 'フォーデイズ独自開発',
    institution: '海外特許展開（韓国でも特許取得）',
    type: '用途特許',
    category: '抗酸化・細胞修復',
    summary: '水溶性核酸・コラーゲン飲料にシステインペプチドを配合。若さ・活力の指標とされるホルモン「DHEA-S」の血中濃度を有意に増加させ、全身の健康度・自覚的活力を改善することを確認。',
    scientificContext: '強力な抗酸化物質グルタチオンの前駆体であるシステインと核酸の相乗効果に着目。ホルモンバランスと疲労感の改善指標が示されています。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP6138048B2/ja',
    status: '登録済'
  },
  {
    id: 'pat-5820127',
    number: '特許第5820127号',
    applicationNumber: '特願2011-32506',
    title: 'アミロイド線維の形成を伴う神経変性疾患の予防・改善薬',
    registeredDate: '2015年10月9日',
    applicationDate: '2011年2月17日',
    collaborator: 'フォーデイズ学術研究',
    institution: '学術研究成果',
    type: '用途特許',
    category: '脳・神経',
    summary: '核タンパク質成分がアルツハイマー病の原因物質とされるアミロイドβペプチド線維の凝集・形成を阻害し、中脳黒質におけるドーパミン神経細胞の脱落を抑制することを発見。',
    scientificContext: '神経細胞の凝集性ストレスに対する保護作用。基礎研究段階での神経変性抑制作用機序を示した特許です。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP5820127B2/ja',
    status: '登録済'
  },
  {
    id: 'pat-3899436',
    number: '特許第3899436号',
    applicationNumber: '特願2002-135576',
    title: '水溶性核蛋白入り健康ドリンク',
    registeredDate: '2007年1月12日',
    applicationDate: '2002年5月10日',
    collaborator: '株式会社エル・エスコーポレーション',
    institution: '第一世代基礎特許',
    type: '製法特許',
    category: 'その他',
    summary: '魚の白子中の高分子で不溶性の核タンパク質を酵素加水分解によって低分子化・水溶性化し、消化吸収に優れた健康ドリンクとして安定配合する技術。',
    scientificContext: 'フォーデイズ核酸ドリンクの原点となる技術。本来消化吸収しにくい白子核酸を日常的に飲用可能にしたエポックメイキングな特許（現在は20年の存続期間満了）。',
    googlePatentsUrl: 'https://patents.google.com/patent/JP3899436B2/ja',
    status: '存続期間満了'
  }
];
