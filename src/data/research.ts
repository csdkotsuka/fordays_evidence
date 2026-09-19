export interface UniversityCollaboration {
  university: string;
  departmentOrCourse: string;
  professor: string;
  theme: string;
  details: string;
  significance: string;
  productImpact: string; // 商品への具体的影響
  officialUrl?: string; // 公式研究室・大学リンク
}

export interface Paper {
  title: string;
  authors: string;
  journal: string;
  year: string;
  summary: string;
  productImpact: string;
  doiUrl?: string;
  pubmedUrl?: string;
}

export interface Presentation {
  society: string;
  year: string;
  title: string;
  keyFinding: string;
  productImpact: string;
  eventUrl?: string;
}

export const UNIVERSITY_COLLABORATIONS: UniversityCollaboration[] = [
  {
    university: '神戸大学',
    departmentOrCourse: '大学院保健学研究科 リハビリテーション科学領域',
    professor: '藤野 英己 教授（理学療法士・医学博士）',
    theme: '骨格筋・運動機能・毛細血管新生・サルコペニア予防',
    details: '酵素分解DNAおよびトルラ酵母RNAの摂取が、筋萎縮時における骨格筋の毛細血管退行を予防し、VEGF等の血管新生因子とミトコンドリア活性化を促すことを発見（特許第7411938号、Life 2024論文）。',
    significance: '理学療法士として最も心強いエビデンス。不活動や加齢で退行する毛細血管網を再生し、筋肉への酸素・アミノ酸運搬効率を高めることで、運動療法の効果を劇的にブーストします。',
    productImpact: '核酸ドリンクの真骨頂である「血流・毛細血管新生」の裏付け。冷えや足のつり対策だけでなく、パーソナルトレーニングによる筋肉づくりの栄養デリバリー効率を飛躍的に高める製品価値となっています。',
    officialUrl: 'https://www.ams.kobe-u.ac.jp/'
  },
  {
    university: '東京大学',
    departmentOrCourse: '大学院農学生命科学研究科 食と生体機能モデル学 / 先端アンチエイジング研究・加齢生体機能学研究',
    professor: '内田 浩二 特任教授 / 伊藤 公一 特任教授',
    theme: '寿命延伸・睡眠リズム・抗加齢生体機能学',
    details: '2008年より継続的な共同研究を実施。寄附講座・社会連携講座を通じて核酸素材が生体の寿命、自律神経・睡眠リズム、細胞老化シグナルに及ぼす影響を長期追究。',
    significance: '日本最高峰の学術機関で十数年にわたり講座が継続されている実績は、素材の安全性と基礎科学的価値の高さを示しています。',
    productImpact: '核酸ドリンクが「寝つき・目覚めの良さ」「日中の活力」を支える学術基盤。長年の研究により、安心してお飲みいただける最高レベルの安全性を証明しています。',
    officialUrl: 'https://www.a.u-tokyo.ac.jp/'
  },
  {
    university: '金沢大学',
    departmentOrCourse: '医薬保健研究域 薬学系 分子薬物動態学',
    professor: '加藤 将夫 教授',
    theme: '脳機能・神経幹細胞増殖・認知機能向上',
    details: 'サケ白子DNA中の微小配列「トリデオキシシチジン（CCC配列）」を特定し、成体マウス海馬の神経前駆細胞を増殖させ神経新生を促すメカニズムを解明（特許第7284955号、第7554420号、J. Nutr. 2025論文）。',
    significance: '「成人の脳細胞は増えない」という常識を覆し、食事由来の低分子核酸が海馬のニューロン新生を促すことを実証した世界的成果。',
    productImpact: 'フォーデイズの脳活サプリメントおよび核酸ドリンクのブレインケア価値に直結。「物忘れが気になる」「集中力を保ちたい」中高年・シニアの脳の健康を強力に支えます。',
    officialUrl: 'https://www.p.kanazawa-u.ac.jp/'
  },
  {
    university: '岐阜大学',
    departmentOrCourse: '応用生物科学部 / フォーデイズ核酸・ペプチド・タンパク質共同研究講座',
    professor: '長岡 利 特命教授（シニア教授）',
    theme: '抗肥満・脂質代謝改善・機能性ペプチド',
    details: 'サケ白子プロタミン加水分解物「トリペプチドRPR」が、高脂肪食負荷時の体重増加抑制や血清コレステロール低減をもたらすことを解明（特許第7291917号）。',
    significance: 'メタボリックシンドローム対策、生活習慣病予防に関わる代謝改善の決定的な論拠。',
    productImpact: '核酸ドリンクに含まれるプロタミン由来機能性ペプチドの付加価値。運動と組み合わせることで脂肪燃焼を助け、太りにくく引き締まった体型づくりをサポートします。',
    officialUrl: 'https://www.gifu-u.ac.jp/'
  },
  {
    university: '東京農工大学',
    departmentOrCourse: 'フォーデイズ次世代核酸研究講座 / 次世代核酸ラボFD',
    professor: '田中 あかね 教授',
    theme: '免疫機能・光老化抑制・抗アレルギー',
    details: '学内に「次世代核酸ラボFD」を設置。紫外線によるDNA損傷防御、オートファジー活性化、免疫バランス（Th1/Th2）の調整作用を先端バイオ技術で研究。',
    significance: '大学キャンパス内に自社研究開発拠点を構え、基礎生化学研究から製品原料開発（FCore-2021等）へ直結させる産学融合体制。',
    productImpact: '独自開発素材「FCore-2021」「FCore-R2023」「coreF-Revo.1」を生み出した中枢拠点。他社が真似できないフォーデイズ独自の核酸ドリンク品質の源泉です。',
    officialUrl: 'https://kakusan-labo.jp/'
  },
  {
    university: '近畿大学',
    departmentOrCourse: '農学部 応用生命化学科',
    professor: '財満 信宏 教授',
    theme: '血管機能・皮膚美容・フェムケア',
    details: '閉経モデルラットにおいて、エストロゲン低下に伴う表皮肥厚化を有意に抑制し、真皮コラーゲン量を回復させることを立証（特許第7710217号）。',
    significance: '女性ホルモン減少に伴う皮膚や血管の脆弱化に対する栄養学的アプローチの有効性を提示。',
    productImpact: '第9世代以降のナチュラルDNコラーゲンに採用された「FCore-2021」の美容・抗老化エビデンス。年齢による肌のゴワつきや弾力低下に悩む女性の強い味方となっています。',
    officialUrl: 'https://www.nara.kindai.ac.jp/'
  },
  {
    university: '大阪公立大学',
    departmentOrCourse: '大学院医学研究科',
    professor: '共同研究チーム',
    theme: '肝機能改善・エピジェネティクス・発がん抑制機構',
    details: '肝組織保護効果や核酸成分がもたらす細胞恒常性維持機構を医学的観点から検証。',
    significance: 'デノボ合成の中心臓器である肝臓の健全性を保ち、全身の代謝バランスを底上げする基礎医学的知見。',
    productImpact: 'お酒を飲む機会が多い方や、日々の生活で肝臓に負担がかかりやすい現代人のコンディション維持を支える製品設計に活かされています。',
    officialUrl: 'https://www.omu.ac.jp/med/'
  },
  {
    university: '米国 カリフォルニア大学デイビス校 (UC Davis)',
    departmentOrCourse: 'Fordays Future Nutrition Research Fund',
    professor: '国際栄養科学チーム',
    theme: 'グローバル基準の次世代栄養科学研究',
    details: '食品・農学分野で世界最高峰のUC Davisに寄付研究ファンドを設置し、核酸の栄養生理学的価値を国際的スタンダードで共同探求。',
    significance: '日本国内にとどまらず、世界最前線の栄養科学ネットワークでエビデンスを構築。',
    productImpact: '海外展開やグローバル基準の安全性・有効性評価をクリアする、世界水準の製品力・ブランド信頼性を担保しています。',
    officialUrl: 'https://www.ucdavis.edu/'
  }
];

export const ACADEMIC_PAPERS: Paper[] = [
  {
    title: 'Dietary RNA from Torula Yeast Prevents Capillary Regression in Atrophied Skeletal Muscle in Rats',
    authors: 'Hao Lin, Jihao Xing, Xiaoqi Ma, Ryosuke Nakanishi, Hiroyo Kondo, Mica Fujita, Keita Sutoh, Noriaki Maeshige, Hidemi Fujino (神戸大学 大学院保健学研究科 藤野英己教授グループ)',
    journal: 'Life, Vol. 14, Issue 12, Article 1616',
    year: '2024年12月',
    summary: '不活動による筋萎縮モデルラットにおいて、トルラ酵母由来の食用RNA摂取が骨格筋の毛細血管網退行を有意に抑制し、微小循環血流を保持することを実証した画期的論文。',
    productImpact: '【核酸ドリンク配合素材 FCore-R2023】に直結。筋肉内の微小毛細血管を守ることで、運動時の酸素・アミノ酸デリバリーを維持し、寝たきり予防や筋萎縮防止に絶大な効果を発揮します。',
    doiUrl: 'https://doi.org/10.3390/life14121616',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/39752538/'
  },
  {
    title: 'Trideoxycytidine Diphosphate Promotes Neural Stem Cell Proliferation and Neurogenesis in Mice',
    authors: 'Takahiro Ishimoto, Fuyu Hayashi, Yuya Yamamoto, Keisuke Kiriyama, Reiya Yamashita, Naoto Matsumura, Takumi Nishiuchi, Yusuke Masuo, Mica Fujita, Keita Sutoh (金沢大学 加藤将夫教授 / 次世代核酸ラボFD)',
    journal: 'The Journal of Nutrition, Vol. 155, Issue 2, pp. 643–654',
    year: '2025年2月',
    summary: 'サケ白子抽出物由来のトリデオキシシチジン二リン酸（CCC）が、成体マウスの海馬における神経幹細胞の増殖とニューロン新生を有意に促進し、記憶・学習能力を向上させるシグナル経路を解明。',
    productImpact: '【特許第7284955号・第7554420号】の論文化。成人の脳でも神経が新たに生まれることを証明し、フォーデイズ製品の「脳の若々しさ・認知ケア」の最高レベルの学術的論拠となっています。',
    doiUrl: 'https://doi.org/10.1016/j.tjnut.2024.12.021',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/39736328/'
  },
  {
    title: '酵母由来RNAおよびサケ白子DNAの併用による筋芽細胞のATP産生亢進と酸化ストレス軽減作用',
    authors: 'F Hayashi et al. (フォーデイズ次世代核酸ラボFD)',
    journal: 'Journal of Nutrition and Metabolism (accepted)',
    year: '2026年',
    summary: '独自開発DNA素材（FCore-2021）とRNA素材（FCore-R2023）を最適配合した複合核酸素材（coreF-Revo.1）が、細胞内のエネルギー通貨であるATP産生を有意に高めつつ、活性酸素の発生を抑える相乗効果を証明。',
    productImpact: '【最新第10.1世代核酸ドリンクの主成分 coreF-Revo.1】のコアエビデンス。「飲むと疲れにくい」「動ける身体になる」という利用者の体感を、細胞のエネルギー工場（ミトコンドリア）レベルで裏付けています。',
    doiUrl: 'https://kakusan-labo.jp/'
  },
  {
    title: '酵素分解核酸の摂取が骨格筋毛細血管網および運動持久力に及ぼす影響',
    authors: 'R Nakanishi, H Fujino et al. (神戸大学 大学院保健学研究科 リハビリテーション科学領域)',
    journal: 'Sports Medicine and Health Science (in press)',
    year: '2026年',
    summary: '酵素分解核酸の投与が骨格筋内の毛細血管密度を向上させ、有酸素運動時の持久性パフォーマンスと筋疲労回復を有意に改善することを報告。',
    productImpact: '【パーソナルトレーニング × 核酸ドリンク】の相乗効果を証明。理学療法士の適切な運動指導と核酸の血流サポートが合わさることで、年齢に関係なく100歳まで歩ける筋肉づくりが可能になります。',
    doiUrl: 'https://www.ams.kobe-u.ac.jp/'
  }
];

export const SOCIETY_PRESENTATIONS: Presentation[] = [
  {
    society: '第80回 日本栄養・食糧学会大会',
    year: '2026年',
    title: '酵母およびサケ白子抽出物摂取による酸化ストレス耐性獲得にはオートファジーが関与する',
    keyFinding: '核酸素材の継続摂取が細胞内の老廃物リサイクル機構「オートファジー」を活性化させ、活性酸素による細胞障害を防ぐ機序を解明。',
    productImpact: '【特許第7627991号（リサイクリング増進）】に連動。核酸ドリンクの「体の内側から不要なものを掃除する」デトックス＆アンチエイジング機能の学術発表です。',
    eventUrl: 'https://www.jsnfs.or.jp/'
  },
  {
    society: '第23回 国際栄養学会議 (IUNS-ICN)',
    year: '2025年',
    title: '酵母由来RNAの経口摂取による認知機能向上におけるホスファチジルコリン生合成誘導の関与',
    keyFinding: 'RNA由来のヌクレオチドが脳内リン脂質代謝に働き、神経細胞膜の流動性とシナプス伝達を支える可能性を世界に向けて発表。',
    productImpact: '食用酵母抽出物（FCore-R2023）の国際的エビデンス。脳の神経ネットワークを維持し、冴えわたるクリアな思考をサポートします。',
    eventUrl: 'https://icn2025.org/'
  },
  {
    society: '日本核酸医薬学会 第10回年会',
    year: '2025年',
    title: 'トリデオキシシチジン(CCC)による神経新生促進と健常マウス記憶学習能力向上作用',
    keyFinding: '白子DNA由来トリヌクレオチドCCCが海馬歯状回における神経前駆細胞の分化を促進し、空間記憶学習テストの成績を有意に向上させることを発表。',
    productImpact: '金沢大学との共同研究による最先端発表。フォーデイズの核酸研究が医薬品学会レベルの学術的厳密さをもって進められている証拠です。',
    eventUrl: 'https://nats.jp/'
  }
];
