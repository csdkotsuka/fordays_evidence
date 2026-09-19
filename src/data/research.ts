export interface UniversityCollaboration {
  university: string;
  departmentOrCourse: string;
  professor: string;
  theme: string;
  details: string;
  significance: string;
}

export interface Paper {
  title: string;
  authors: string;
  journal: string;
  year: string;
  summary: string;
}

export interface Presentation {
  society: string;
  year: string;
  title: string;
  keyFinding: string;
}

export const UNIVERSITY_COLLABORATIONS: UniversityCollaboration[] = [
  {
    university: '神戸大学',
    departmentOrCourse: '大学院保健学研究科 リハビリテーション科学領域',
    professor: '藤野 英己 教授（理学療法士・医学博士）',
    theme: '骨格筋・運動機能・毛細血管新生・サルコペニア予防',
    details: '酵素分解DNAの摂取が筋細胞のミトコンドリア活性因子（PGC-1α）および血管新生因子（VEGF）を増加させ、運動を伴わずに毛細血管新生を促進することを発見（特許第7411938号）。',
    significance: '理学療法士として最も心強いエビデンス。不活動や加齢で退行する毛細血管網を再生し、筋肉への酸素・アミノ酸運搬効率を高めることで、運動療法の効果をブーストします。'
  },
  {
    university: '東京大学',
    departmentOrCourse: '大学院農学生命科学研究科 食と生体機能モデル学 / 先端アンチエイジング研究・加齢生体機能学研究',
    professor: '内田 浩二 特命教授 / 伊藤 公一 特命教授',
    theme: '寿命延伸・睡眠・抗加齢生体機能学',
    details: '2008年より共同研究を継続。寄附講座・社会連携講座を通じて核酸素材が個体寿命や睡眠リズム、生体機能の加齢変化に及ぼす影響を長期にわたり多角的に追究。',
    significance: '日本最高峰の学術機関で十数年にわたり講座が維持されている実績は、素材の安全性と基礎科学的価値の高さを示しています。'
  },
  {
    university: '金沢大学',
    departmentOrCourse: '医薬保健研究域 薬学系 分子薬物動態学',
    professor: '加藤 将夫 教授',
    theme: '脳機能・神経幹細胞増殖・認知機能向上',
    details: 'サケ白子DNA中の微小配列「トリヌクレオチドCCC」を特定し、海馬の神経新生を促すメカニズムを解明（特許第7284955号、第7554420号）。',
    significance: '認知機能の維持や脳の若々しさに直結する先端脳科学アプローチ。'
  },
  {
    university: '岐阜大学',
    departmentOrCourse: '応用生物科学部 / フォーデイズ核酸・ペプチド・タンパク質共同研究講座',
    professor: '長岡 利 特命教授（シニア教授）',
    theme: '抗肥満・脂質代謝改善・機能性ペプチド',
    details: 'プロタミン加水分解物「トリペプチドRPR」の抗肥満・血清コレステロール低減作用を解明（特許第7291917号）。',
    significance: 'メタボリックシンドローム対策、生活習慣病予防に関わる代謝改善の論拠。'
  },
  {
    university: '東京農工大学',
    departmentOrCourse: 'フォーデイズ次世代核酸研究講座 / 次世代核酸ラボFD',
    professor: '田中 あかね 教授',
    theme: '免疫機能・光老化抑制・抗アレルギー',
    details: '学内に「次世代核酸ラボFD」を設置。紫外線によるDNA損傷や免疫バランス（Th1/Th2）の調整作用を追究。',
    significance: '大学キャンパス内に自社ラボを構え、基礎生化学研究のハブとして機能。'
  },
  {
    university: '近畿大学',
    departmentOrCourse: '農学部 応用生命化学科',
    professor: '財満 信宏 教授',
    theme: '血管機能・皮膚美容・フェムケア',
    details: '閉経モデル動物を用いた研究で、表皮肥厚化の抑制と真皮コラーゲン増加作用を立証（特許第7710217号）。',
    significance: '女性ホルモン減少に伴う組織脆弱化（皮膚・血管）に対する栄養学的介入可能性を提示。'
  },
  {
    university: '大阪公立大学',
    departmentOrCourse: '大学院医学研究科',
    professor: '共同研究チーム',
    theme: '肝機能改善・エピジェネティクス・発がん抑制機構',
    details: '化学発がんモデル等における核酸成分の抗腫瘍作用や肝組織保護効果を検証。',
    significance: 'デノボ合成の中心である肝臓の健全性維持と遺伝子発現調節（エピジェネティクス）の探索。'
  },
  {
    university: '米国 カリフォルニア大学デイビス校 (UC Davis)',
    departmentOrCourse: 'Fordays Future Nutrition Research Fund',
    professor: '国際栄養科学チーム',
    theme: 'グローバル基準の次世代栄養科学研究',
    details: '食品科学分野で世界トップクラスのUC Davisに研究ファンドを設置し、核酸の栄養生理学的価値を国際的視野で探求。',
    significance: '国内外の国際共同研究ネットワークの構築。'
  }
];

export const ACADEMIC_PAPERS: Paper[] = [
  {
    title: '酵母由来RNAおよびサケ白子DNAの併用による筋芽細胞のATP産生亢進と酸化ストレス軽減作用',
    authors: 'F Hayashi et al.',
    journal: 'Journal of Nutrition and Metabolism (accepted)',
    year: '2026年',
    summary: 'DNA素材（Fcore-2021）とRNA素材（Fcore-R2023）を組み合わせることで、細胞あたりのATP産生が単独群より有意に増加し、活性酸素の発生を抑制することを実証。'
  },
  {
    title: '酵素分解核酸の摂取が骨格筋毛細血管網および運動持久力に及ぼす影響',
    authors: 'R Nakanishi et al. (Kobe Univ / Fujino Lab)',
    journal: 'Sports Medicine and Health Science (in press)',
    year: '2026年',
    summary: '骨格筋において酵素分解核酸がVEGF誘導と毛細血管新生を促進し、筋機能維持に寄与することを報告。'
  },
  {
    title: 'Dietary salmon milt extract modulates oxidative protein repair mechanisms in aging models',
    authors: 'T Ishimoto et al.',
    journal: 'The Journal of Nutrition 155(2), 643-654',
    year: '2025年',
    summary: 'サケ白子抽出物の摂取が酸化メチオニン還元酵素（Msr）経路を介して生体内の変性タンパク質修復を促すことを示した基礎栄養学論文。'
  },
  {
    title: 'Functional properties of dietary nucleic acid fractions on cellular metabolism and homeostasis',
    authors: 'H Lin et al.',
    journal: 'Life 14(12), 1616',
    year: '2024年',
    summary: '低分子化核酸フラクションの腸管吸収動態と、各組織におけるサルベージ合成寄与率を評価した査読付き論文。'
  }
];

export const SOCIETY_PRESENTATIONS: Presentation[] = [
  {
    society: '第80回 日本栄養・食糧学会大会',
    year: '2026年',
    title: '酵母およびサケ白子抽出物摂取による酸化ストレス耐性獲得にはオートファジーが関与する',
    keyFinding: '核酸素材の継続摂取が細胞内のオートファジー誘導を介して酸化ストレス障害を軽減する機序を解明。'
  },
  {
    society: '第23回 国際栄養学会議 (IUNS-ICN)',
    year: '2025年',
    title: '酵母由来RNAの経口摂取による認知機能向上におけるホスファチジルコリン生合成誘導の関与',
    keyFinding: 'RNA由来のヌクレオチドが脳内リン脂質代謝に働き、膜流動性とシナプス伝達を支える可能性を報告。'
  },
  {
    society: '日本核酸医薬学会 第10回年会',
    year: '2025年',
    title: 'トリデオキシシチジン(CCC)による神経新生促進と健常マウス記憶学習能力向上作用',
    keyFinding: '白子DNA由来トリヌクレオチドCCCが海馬歯状回における神経前駆細胞の分化を促進することを発表。'
  }
];
