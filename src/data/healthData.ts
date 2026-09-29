export interface HealthPillar {
  id: string;
  title: string;
  englishTitle: string;
  subtitle: string;
  iconName: string;
  themeColor: string; // 'indigo' | 'emerald' | 'cyan' | 'amber' | 'rose' | 'purple'
  summary: string;
  
  // あることのエビデンス（最先端科学）
  positiveEvidence: {
    heading: string;
    description: string;
    keyPoints: string[];
    papersOrTheories: string[];
    patents: {
      number: string;
      title: string;
      role: string;
    }[];
  };

  // ないことの恐怖（科学的リスク・煽り）
  negativeRisk: {
    heading: string;
    warningLevel: '極めて危険' | '細胞崩壊リスク' | '不可逆的老化' | '全身機能低下';
    description: string;
    consequences: {
      timeline: string;
      damage: string;
    }[];
    horrorSummary: string;
  };

  // 効果的な取り込み方（実践バイオハック）
  actionHacks: {
    step: string;
    title: string;
    method: string;
    scientificReason: string;
  }[];

  // FORDAYS商品の劇的シナジー（盛り気味訴求）
  fordaysSynergy: {
    productName: string;
    productCategory: string;
    synergyHeadline: string;
    synergyDetail: string;
    boostEffects: string[];
    recommendedTiming: string;
  };
}

export const HEALTH_PILLARS: HealthPillar[] = [
  {
    id: 'sleep',
    title: '睡眠科学（ブレインクリアランス）',
    englishTitle: 'Sleep & Glymphatic Bio-Hack',
    subtitle: '脳の老廃物を洗い流し、遺伝子を修復する究極の生体リセット',
    iconName: 'Moon',
    themeColor: 'indigo',
    summary: '睡眠は単なる「休息」ではありません。睡眠中、脳内では「グリンパティックシステム」が起動し、日中蓄積したアミロイドβなどの有害毒素を脳脊髄液で洗い流します。さらに深睡眠時に分泌される成長ホルモンと核酸が連動し、全身の細胞DNA修復とオートファジー（細胞浄化）がピークに達します。',
    
    positiveEvidence: {
      heading: 'ノーベル賞級の発見：睡眠中に脳が自己洗浄する「グリンパティックシステム」',
      description: 'ロチェスター大学のマイケン・ネーデルガード教授らによる発見（Science誌等）により、睡眠中、脳のグリア細胞が収縮して細胞間隙が60%広がり、脳脊髄液（CSF）がドッと流れ込んで老廃物を排出することが判明しました。',
      keyPoints: [
        '徐波睡眠（深睡眠・ノンレム睡眠ステージ3）で脳脊髄液の循環流速が最大化',
        '脳内老廃物（アミロイドβ、タウタンパク質、酸化変性物質）の劇的な洗い流し',
        '成長ホルモン（GH）の大量分泌と、肝臓での核酸サルベージ合成による遺伝子損傷修復',
        '自律神経の完全な副交感神経モードシフトによる全身血管の弛緩と内臓修復'
      ],
      papersOrTheories: [
        'Nedergaard et al., "The Glymphatic System: A Beginner\'s Guide" (Science, 2013)',
        'Xie et al., "Sleep Drives Metabolite Clearance from the Adult Brain" (Science, 2013)',
        'Walker M., "Why We Sleep: Unlocking the Power of Sleep and Dreams" (2017)'
      ],
      patents: [
        {
          number: '特許第6791696号',
          title: '脳機能改善剤（アミロイドβ凝集抑制・神経保護）',
          role: '睡眠中の脳内クリアランスをサポートし、神経細胞死を防ぐサケ白子抽出物エビデンス'
        },
        {
          number: '特許第7627991号',
          title: 'リサイクリング増進のための分解系促進剤（オートファジー活性）',
          role: '夜間睡眠中の細胞内不良ミトコンドリア・老廃タンパク質の分解リサイクルを劇的促進'
        }
      ]
    },

    negativeRisk: {
      heading: '【警告】睡眠不足は「脳をゴミ屋敷にし、寿命を削る」自殺行為',
      warningLevel: '極めて危険',
      description: 'たった一晩の徹夜や6時間未満の睡眠負債は、脳にとっては「泥酔状態」で毒素を溜め込み続けることと同義です。睡眠を削ることは、老廃物のプールで脳細胞を溺れさせるに等しい行為です。',
      consequences: [
        {
          timeline: 'たった1日（徹夜・短時間睡眠）',
          damage: '脳内アミロイドβが約30%急増。注意力・認知能力は血中アルコール濃度0.1%（泥酔）と同等まで低下。'
        },
        {
          timeline: '1週間（5〜6時間睡眠継続）',
          damage: '血糖コントロールが悪化し前糖尿病状態へ。NK細胞（がん細胞を攻撃する免疫）活性が70%激減。'
        },
        {
          timeline: '1ヶ月〜数年（慢性的睡眠負債）',
          damage: 'テロメアが急激に短縮（細胞年齢が5〜10年老化）。脳の海馬・前頭葉が不可逆的に萎縮し、認知症リスクが最大5倍に跳ね上がる。'
        }
      ],
      horrorSummary: '「寝ないでも平気」は単なる脳麻痺です。睡眠を怠ると、細胞修復が一切行われず、傷ついた遺伝子がそのままコピーされ、あらゆる慢性疾患の引き金となります。'
    },

    actionHacks: [
      {
        step: '01',
        title: '就寝90分前の「40℃入浴法」',
        method: '湯船に15分浸かり深部体温を一時的に0.5℃上昇させます。90分かけて深部体温が急降下する落差が、強烈な深睡眠のスイッチを入れます。',
        scientificReason: '深部体温と皮膚表面温度の逆転現象がメラトニン放出を最大化。'
      },
      {
        step: '02',
        title: '朝の「光シャワー」＆体内時計リセット',
        method: '起床後30分以内にカーテンを開け、15〜30分太陽光を浴びる。セロトニンが合成され、14〜16時間後のメラトニン生成タイマーがセットされます。',
        scientificReason: '視交叉上核の体内時計遺伝子（PER, CRY）の完全同期。'
      },
      {
        step: '03',
        title: '就寝前60分の「ブルーライト＆カフェイン遮断」',
        method: 'カフェインは就寝8時間前でストップ。スマホやPCはナイトモード＋暗めの間接照明へ。',
        scientificReason: 'メラトニン分泌を阻害する460nm付近の波長を徹底カット。'
      },
      {
        step: '04',
        title: '就寝直前の「核酸＆コラーゲンナイトショット」',
        method: 'ベッドに入る30分前にフォーデイズの核酸ドリンクを摂取。睡眠中の成長ホルモン分泌と同時に、細胞修復の原材料を一気に届ける。',
        scientificReason: '夜間サルベージ合成とオートファジーの爆発的シナジー。'
      }
    ],

    fordaysSynergy: {
      productName: 'ナチュラル DNコラーゲン（第9世代最新フォーミュラ）',
      productCategory: '水溶性核酸・コラーゲンドリンク',
      synergyHeadline: '睡眠中の「細胞超回復」を異次元に加速！翌朝の目覚めが別世界に変わる',
      synergyDetail: '睡眠中に分泌される成長ホルモンは、体内の材料（核酸・アミノ酸）がなければ細胞を修復できません。フォーデイズの独自素材「FCore-2021（DNA）」およびRNA・水溶性コラーゲンペプチドを就寝前に取り込むことで、夜間のDNAサルベージ合成・酸化タンパク質修復（特許第7857645号）・オートファジー（特許第7627991号）がフルブースト。睡眠中の脳内クレンジングと細胞修復が同時に完了し、翌朝「鏡を見るのが楽しみになるほどの透明感」と「羽が生えたような身体の軽さ」をもたらします。',
      boostEffects: [
        '特許第7627991号：夜間の不良ミトコンドリア分解（オートファジー亢進）で朝のだるさを根絶',
        '特許第6791696号：睡眠中の脳内アミロイドβ蓄積をブロックし、クリアな頭脳を維持',
        '特許第7857645号：睡眠中の酸化変性タンパク質を遺伝子レベルで強力修復',
        '翌朝の肌水分量・ハリ・化粧ノリの圧倒的違いを実感'
      ],
      recommendedTiming: '毎晩の就寝30分前に30ml〜60ml（常温または白湯割りがおすすめ）'
    }
  },

  {
    id: 'exercise',
    title: '臨床運動生理学（メカニカルストレス）',
    englishTitle: 'Exercise, Myokines & Mitochondrial Renewal',
    subtitle: '筋肉から分泌される若返りホルモン「マイオカイン」と血管拡張',
    iconName: 'Dumbbell',
    themeColor: 'emerald',
    summary: '運動は単なるカロリー消費ではありません。筋肉を収縮させることで「マイオカイン（IrisinやIL-6）」という数百種類の若返りホルモンが分泌され、脳神経を保護し、脂肪を燃焼させ、血管を若返らせます。さらにミトコンドリアが新生され、細胞のエネルギー生産工場が劇的にアップデートされます。',

    positiveEvidence: {
      heading: '最先端の筋生理学：筋肉は「全身をコントロールする最大の内分泌器官」',
      description: 'デンマークのペダーセン教授らの研究により、骨格筋は単なる運動器官ではなく、収縮時にサイトカインの一種「マイオカイン」を血中に放出し、脳・肝臓・血管・脂肪組織を若返らせる内分泌器官であることが証明されました。',
      keyPoints: [
        'マイオカイン（Irisin）が脳の海馬でBDNF（脳由来神経栄養因子）を増やし、記憶力を強化',
        '筋肉へのメカニカルストレスが毛細血管網を拡張（特許第7216260号 血管内皮機能改善）',
        'ミトコンドリア生合成因子（PGC-1α）の活性化による細胞エネルギー（ATP）爆発産生',
        'インスリン受容体の感受性向上による血糖スパイク抑制と抗糖化（AGEs蓄積ブロック）'
      ],
      papersOrTheories: [
        'Pedersen BK., "Muscle as an endocrine organ" (Nat Rev Endocrinol, 2012)',
        'Boström et al., "A PGC1-α-dependent myokine that drives brown-fat-like development" (Nature, 2012)',
        'Wrann et al., "Exercise Induces Hippocampal BDNF through a PGC-1α/FNDC5 Pathway" (Cell Metab, 2013)'
      ],
      patents: [
        {
          number: '特許第7216260号',
          title: '血管内皮機能改善・血流促進剤',
          role: '運動によるNO（一酸化窒素）産生をサポートし、全身の毛細血管を隅々まで拡張'
        },
        {
          number: '特許第7442308号',
          title: '筋肉萎縮抑制剤（サルコペニア・ロコモ予防）',
          role: '加齢や不活動に伴う筋タンパク分解を抑え、筋合成シグナルを最大化'
        }
      ]
    },

    negativeRisk: {
      heading: '【警告】座りっぱなしは「第二の喫煙」。毎年1%ずつ筋肉が溶解する',
      warningLevel: '不可逆的老化',
      description: '何もしなければ30代をピークに毎年1%ずつ筋肉量が減少し、70代にはピーク時の半分近くまで脱落します（サルコペニア）。筋肉を失うことは、糖の貯蔵庫とホルモン分泌器官を失うこと。代謝の完全停止と寝たきりへの最短ルートです。',
      consequences: [
        {
          timeline: '運動不足1〜2週間',
          damage: 'インスリン感受性が20%低下。筋肉内のミトコンドリア機能が急激に衰退し、全身が疲れやすくなる。'
        },
        {
          timeline: '運動不足数ヶ月',
          damage: '毛細血管がゴースト化（消滅）。末梢組織に酸素と栄養が届かなくなり、冷え・浮腫・肌のくすみが常態化。'
        },
        {
          timeline: '40代〜60代放置',
          damage: 'サルコペニア肥満・ロコモティブシンドロームへ進行。関節軟骨の変性・転倒骨折・要介護リスクが跳ね上がる。'
        }
      ],
      horrorSummary: '「歩かない生活」は筋肉の自己融解を招きます。筋肉が落ちれば代謝が落ち、血液がドロドロになり、血管病と認知症のダブルパンチが襲います。'
    },

    actionHacks: [
      {
        step: '01',
        title: '「大筋群（下半身）」をターゲットにしたスクワット',
        method: '全身の筋肉の約70%が集中する下半身（大腿四頭筋・殿筋）を週2〜3回、10〜15回×3セット刺激する。',
        scientificReason: '最も効率よく大量のマイオカインとテストステロン/成長ホルモンを分泌。'
      },
      {
        step: '02',
        title: 'インターバル速歩（3分早歩き＋3分普通歩き）',
        method: '息が少し上がる程度の早歩きと通常歩行を交互に15分〜30分実施。',
        scientificReason: '心肺機能（VO2max）の向上とミトコンドリア新生を同時に刺激。'
      },
      {
        step: '03',
        title: '筋トレ直後の「アミノ酸＆核酸ゴールデンタイム補給」',
        method: '運動後30分以内にBCAA・グルタミン・核酸を速やかにチャージし、筋分解を瞬時にストップ。',
        scientificReason: 'mTORシグナル伝達経路の最大活性化による超回復。'
      }
    ],

    fordaysSynergy: {
      productName: 'アミノアクティ BCAA＆グルタミンDX ＋ ムーヴセラム',
      productCategory: '必須アミノ酸サプリメント ＆ 筋肉サポート',
      synergyHeadline: '運動効果を極限まで引き出し、筋肉の分解を防ぐ「超回復ブースター」',
      synergyDetail: '運動による刺激（メカニカルストレス）に、フォーデイズの特許配合アミノ酸（BCAA・グルタミン）と核酸ドリンクを組み合わせることで、筋タンパク合成速度が劇的にアップ。運動中の筋破壊を防ぎ、翌日の筋肉痛や疲労感を劇的に軽減。さらに特許第7442308号（筋肉萎縮抑制）のエビデンスが、年齢に負けない引き締まった若々しい肉体づくりを強烈にバックアップします。',
      boostEffects: [
        '特許第7442308号：筋タンパク分解をブロックし、合成シグナルを最大化',
        'BCAA黄金比率（ロイシン高配合）がmTORを直接刺激し筋肉新生を促す',
        'グルタミン配合によりハードな運動後の免疫力低下と胃腸疲労をガード',
        '核酸ドリンクとの併用で、運動後の毛細血管拡張と栄養デリバリーを極大化'
      ],
      recommendedTiming: '運動の20分前（BCAA）および運動直後の30分以内（核酸ドリンク＋BCAA）'
    }
  },

  {
    id: 'recovery',
    title: '積極的休養（自律神経・酸化修復）',
    englishTitle: 'Active Recovery & Cellular Repair',
    subtitle: '副交感神経を優位にし、傷ついた酸化タンパク質を遺伝子レベルで修復',
    iconName: 'Sparkles',
    themeColor: 'cyan',
    summary: '休養とは「何もしないこと」ではありません。現代人の疲労は自律神経の過緊張（交感神経過多）と、細胞内に溜まった「酸化変性タンパク質」が原因です。積極的なリラクセーションと酸化修復素材を取り入れることで、自律神経を瞬時にリセットし、細胞の自己修復システムをフル稼働させます。',

    positiveEvidence: {
      heading: '酸化ストレス制御の最前線：酸化したタンパク質を元に戻す酵素の発見',
      description: 'かつて「一度酸化して変性したタンパク質は元に戻らない」と考えられていましたが、近年の分子生物学により、酸化メチオニン修復酵素（Msr）などの修復系が存在することが明らかになりました。',
      keyPoints: [
        '副交感神経優位（心拍変動・HRV向上）による末梢血流の劇的改善と内臓修復',
        '特許第7857645号：サケ白子抽出物による酸化メチオニン修復酵素（MsrA等）遺伝子発現の上昇',
        '活性酸素（ROS）による細胞膜脂質・ミトコンドリアDNA損傷の速やかな中和',
        'リンパ球・マクロファージの正常化による慢性微小炎症（Inflammaging）の沈静化'
      ],
      papersOrTheories: [
        'Stadtman ER., "Protein oxidation and aging" (Science, 1992)',
        'Moskovitz et al., "Methionine sulfoxide reductase A is a regulator of antioxidant defense" (PNAS, 2001)',
        'Kabat-Zinn J., "Full Catastrophe Living: Using the Wisdom of Your Body and Mind to Face Stress" (2013)'
      ],
      patents: [
        {
          number: '特許第7857645号',
          title: '酸化タンパク質修復剤、及び酸化タンパク質の修復を媒介した酸化ストレス抑制剤',
          role: '加齢や紫外線、疲労で錆びついた体内のタンパク質を遺伝子レベルで巻き戻す最新特許'
        },
        {
          number: '特許第6947610号',
          title: '腸内環境改善剤・抗炎症性短鎖脂肪酸産生促進',
          role: '腸管バリアを修復し、全身の慢性炎症と自律神経の乱れを根源から鎮静'
        }
      ]
    },

    negativeRisk: {
      heading: '【警告】休まない身体は「全身が錆びついて焦げ付く」酸化の嵐',
      warningLevel: '細胞崩壊リスク',
      description: '休養を取らずにストレスと過労に晒され続けると、体内では活性酸素（ROS）が暴走。細胞内のタンパク質やDNAが酸化・糖化され、まるで「焦げたパン」のように機能不全を起こします。',
      consequences: [
        {
          timeline: '過労状態の数週間',
          damage: '副腎疲労（アドレナルファティーグ）を発症。朝起きられず、日中強烈な疲労感とブレインフォグが続く。'
        },
        {
          timeline: '慢性的過緊張数ヶ月',
          damage: '血管内皮が酸化され動脈硬化が急進行。自律神経失調により胃腸障害・不眠・動悸が固定化。'
        },
        {
          timeline: '数年放置',
          damage: '全身の慢性炎症（Inflammaging）が固定化。がん、心疾患、自己免疫疾患の発症リスクが急激に跳ね上がる。'
        }
      ],
      horrorSummary: '「気合いで乗り切る」は細胞への死刑宣告です。酸化したタンパク質を修復しないまま放置すれば、体は内側から確実に腐食していきます。'
    },

    actionHacks: [
      {
        step: '01',
        title: '「4-7-8 呼吸法」による副交感神経ハック',
        method: '4秒で鼻から吸い、7秒息を止め、8秒かけて口から細く吐き切る。これを4サイクル実施。',
        scientificReason: '迷走神経を直接刺激し、心拍数を下げて交感神経の暴走を1分でシャットダウン。'
      },
      {
        step: '02',
        title: 'デジタルデトックス＆自然グリーン浴',
        method: '休日はスマートフォンを機内モードにし、公園や森林を20分間散歩する。',
        scientificReason: 'フィトンチッドの吸入と視覚的自然接触がコルチゾール値を劇的に低減。'
      },
      {
        step: '03',
        title: '酸化ストレスをリセットする「抗酸化＋核酸チャージ」',
        method: '疲れを感じた午後に、フォーデイズの核酸ドリンクまたは抗酸化サプリを補給。',
        scientificReason: '体内の酸化タンパク質修復酵素（MsrA）の働きを一気にサポート。'
      }
    ],

    fordaysSynergy: {
      productName: 'ナチュラル DNコラーゲン ＋ エナシエント',
      productCategory: '抗酸化・酸化タンパク質修復 ＆ 活力補給',
      synergyHeadline: '錆びついた細胞を巻き戻す！特許取得の「酸化タンパク質修復パワー」',
      synergyDetail: 'フォーデイズが誇る最新特許「特許第7857645号（酸化タンパク質修復剤）」は、単に活性酸素を除去するだけでなく、「すでに酸化してしまったタンパク質を元通りに修復する」という世界を驚かせた最先端メカニズム。休養時に摂取することで、日々の疲労物質やサビつきを細胞レベルでクレンジングし、驚異的なリカバリースピードを実現します。',
      boostEffects: [
        '特許第7857645号：酸化変性した体内のタンパク質を修復し、疲労の根源を解消',
        '副交感神経へのスムーズな移行をサポートし、心身の深いリラックスを促進',
        '腸内環境（特許第6947610号）を整えることで、腸から自律神経を安定化',
        '「週末に休んでも取れなかった重い疲労」がすっきりとリセットされる感動'
      ],
      recommendedTiming: '夕方のリラックスタイムや、仕事終わりの入浴前後に30ml'
    }
  },

  {
    id: 'nutrition',
    title: '分子栄養学（核酸・サルベージ経路）',
    englishTitle: 'Cellular Nutrition & Nucleic Acid Salvage Pathway',
    subtitle: '60兆個の細胞分裂とDNA修復を支える「第7の必須栄養素」',
    iconName: 'Apple',
    themeColor: 'amber',
    summary: '私たちの身体は毎日数千億個の細胞が生まれ変わっています。そのすべての設計図がDNA（核酸）であり、タンパク質を作る司令塔がRNA（核酸）です。核酸は「デノボ合成（肝臓でゼロから作る負担の大きい経路）」と「サルベージ合成（食事から再利用する超効率経路）」の2つで供給されますが、加齢とともに肝機能が低下するため、外からの核酸補給が細胞若返りの絶対条件となります。',

    positiveEvidence: {
      heading: '分子生物学の黄金律：細胞新生とテロメア維持に不可欠な「核酸栄養」',
      description: '1990年代以降、ハーバード大学や国内外の研究機関により、核酸（DNA・RNA）を経口摂取することで腸管免疫の強化、肝機能の保護、細胞再生速度の向上が数多く報告されています。',
      keyPoints: [
        'サルベージ合成経路の活用により、肝臓のデノボ合成エネルギー負担を劇的に軽減',
        '腸粘膜上皮細胞（2〜3日で入れ替わる）や免疫細胞の爆発的ターンオーバーを支える',
        '遺伝子コピーミスの低減と、DNA修復酵素（PARP等）の基質供給',
        '特許第7710217号：真皮コラーゲン染色面積を19.3%から34.1%へ劇的増加させる皮膚再生エビデンス'
      ],
      papersOrTheories: [
        'Carver JD., "Dietary nucleotides: effects on the immune and gastrointestinal systems" (Acta Paediatr, 1999)',
        'Yamauchi et al., "Nutritional role of dietary nucleic acids" (Biosci Biotechnol Biochem, 2002)',
        'Zaima N. et al., "Suppression of epidermal thickening by salmon milt extract" (Kindai Univ, 2024)'
      ],
      patents: [
        {
          number: '特許第7710217号',
          title: '表皮肥厚化を抑制する健康食品（真皮コラーゲン増加）',
          role: 'FCore-2021配合核酸による、更年期・加齢皮膚の弾力回復と真皮構造の再生'
        },
        {
          number: '特許第7627991号',
          title: 'リサイクリング増進のための分解系促進剤',
          role: 'サケ白子抽出物による細胞内オートファジー・プロテアソームの劇的活性化'
        }
      ]
    },

    negativeRisk: {
      heading: '【警告】核酸不足は「遺伝子のコピーミス多発」と「全身の急速劣化」',
      warningLevel: '全身機能低下',
      description: '20代をピークに肝臓での核酸デノボ合成能力は急降下します。食事からの核酸補給を怠ると、細胞分裂に必要な材料が枯渇し、傷ついたDNAがそのまま放置され、全身のターンオーバーが停止します。',
      consequences: [
        {
          timeline: '核酸・必須栄養の慢性欠乏',
          damage: '胃腸粘膜が薄くなり栄養吸収力が激減。肌のターンオーバーが40日〜60日へと遅延し、シワ・シミ・たるみが定着。'
        },
        {
          timeline: '中年期（40代以降）の枯渇',
          damage: '白髪・薄毛・爪の割れが急増。免疫細胞の増殖が追いつかず、感染症にかかりやすくなり治りにくくなる。'
        },
        {
          timeline: '老年期の細胞不全',
          damage: '血管壁や内臓の結合組織が脆弱化。全身の機能不全とテロメア短縮による老化速度が2〜3倍に加速。'
        }
      ],
      horrorSummary: '「普通の食事をしているから大丈夫」は大間違いです。現代の加工食品には核酸がほとんど含まれておらず、あなたの細胞は毎日「設計図の材料不足」で悲鳴を上げています。'
    },

    actionHacks: [
      {
        step: '01',
        title: '高分子DNAと低分子RNAを組み合わせた「ハイブリッド核酸摂取」',
        method: 'サケ白子抽出物（DNA）と酵母抽出物（RNA）をバランスよく含むリキッドを毎日の習慣にする。',
        scientificReason: 'DNA（設計図）とRNA（タンパク質合成工場）の相乗的デリバリー。'
      },
      {
        step: '02',
        title: '水溶性コラーゲンペプチドとの同時摂取',
        method: '核酸とコラーゲン、ヒアルロン酸を同時に摂ることで、真皮や血管の細胞外マトリックスを再構築。',
        scientificReason: 'ビタミンC・ミネラルが補酵素となり結合組織の合成効率が最大化。'
      },
      {
        step: '03',
        title: '空腹時または食間でのスムーズな吸収',
        method: '胃酸の影響を抑え小腸へ素早く届けるため、起床時や就寝前などの空腹時に摂取する。',
        scientificReason: '腸管パイエル板およびヌクレオチドトランスポーターの最大活用。'
      }
    ],

    fordaysSynergy: {
      productName: 'ナチュラル DNコラーゲン ＆ アドバンス1',
      productCategory: '第9世代独自開発DNA素材「FCore-2021」配合',
      synergyHeadline: '水溶性特許核酸が細胞の隅々まで染み渡る！圧倒的吸収スピードの結晶',
      synergyDetail: 'フォーデイズは創業以来25年以上にわたり核酸研究のトップランナー。通常は水に溶けにくく吸収されにくい高分子DNAを、独自特許技術で高純度・低分子水溶化。さらに近畿大学や東京大学等との共同研究から生まれた独自開発素材「FCore-2021」を配合。飲んだ瞬間に腸から吸収され、全身の細胞分裂とDNA修復をダイレクトに後押しします。',
      boostEffects: [
        '独自素材「FCore-2021」：真皮のコラーゲン密度を劇的向上（特許第7710217号）',
        '水溶性サケ白子DNA＋酵母RNA＋コラーゲンの黄金トリプルブレンド',
        '亜鉛、マグネシウム、ビタミン群が核酸サルベージ合成を完全アシスト',
        '飲みやすいパイナップル風味で毎日の続けやすさNo.1'
      ],
      recommendedTiming: '朝の起床時（30ml）と夜の就寝前（30ml）の1日2回チャージが黄金ルーティン'
    }
  },

  {
    id: 'stress',
    title: 'ストレス制御（腸脳相関・メンタルタフネス）',
    englishTitle: 'Stress Resilience & Gut-Brain Axis',
    subtitle: '幸せホルモン「セロトニン」の90%を生み出す腸内環境とメンタル安定',
    iconName: 'Brain',
    themeColor: 'rose',
    summary: 'ストレスは心だけの問題ではありません。脳と腸は自律神経と迷走神経で直結しており（腸脳相関）、精神的ストレスは瞬時に腸内フローラを破壊し、逆に腸の乱れが不安やブレインフォグ、うつ症状を引き起こします。腸内細菌が産生する短鎖脂肪酸（酪酸・プロピオン酸など）を増やし、コルチゾールの暴走を抑えることが、折れないメンタルを作る最強のバイオハックです。',

    positiveEvidence: {
      heading: '腸脳相関の衝撃事実：脳の健康とメンタルの鍵は「腸内細菌叢」が握る',
      description: '九州大学の須藤教授らの研究や世界のマイクロバイオーム研究により、無菌マウスは過剰なストレス反応を示すこと、腸内細菌叢の改善が抗不安・抗うつ作用をもたらすことが証明されました。',
      keyPoints: [
        '幸せホルモン「セロトニン」の前駆物質およびドーパミン受容体の調節',
        '特許第6947610号：サケ白子抽出物による腸内短鎖脂肪酸（酪酸等）産生の劇的促進',
        'HPA軸（視床下部-下垂体-副腎系）の過剰興奮を抑え、コルチゾール分泌を適正化',
        '脳血管関門（BBB）の透過性を保護し、脳内への炎症性サイトカイン侵入をブロック'
      ],
      papersOrTheories: [
        'Sudo N. et al., "Postnatal microbial colonization programs the hypothalamic-pituitary-adrenal system for stress response in mice" (J Physiol, 2004)',
        'Cryan JF, Dinan TG., "Mind-altering microorganisms: the impact of the gut microbiota on brain and behaviour" (Nat Rev Neurosci, 2012)',
        'Foster JA., "Gut-brain axis: how the microbiome influences anxiety and depression" (Trends Neurosci, 2013)'
      ],
      patents: [
        {
          number: '特許第6947610号',
          title: '腸内環境改善剤・短鎖脂肪酸産生促進剤',
          role: '腸内のビフィズス菌・酪酸菌を活性化し、短鎖脂肪酸を増やすことで腸脳相関を安定化'
        },
        {
          number: '特許第6791696号',
          title: '脳機能改善剤',
          role: '神経細胞死の抑制と神経新生サポートにより、ストレス下でもクリアな思考力を維持'
        }
      ]
    },

    negativeRisk: {
      heading: '【警告】慢性ストレスは「脳の海馬を萎縮させ、免疫を自爆させる」',
      warningLevel: '極めて危険',
      description: '過剰なストレスホルモン（コルチゾール）が長期間分泌されると、脳の記憶中枢である海馬の神経細胞が毒殺され、物理的に縮んでいきます。同時に腸のバリアが破れ（リーキーガット）、毒素が血中に漏れ出して全身が火の海になります。',
      consequences: [
        {
          timeline: '慢性的ストレス数週間',
          damage: 'セロトニン分泌が激減し、慢性的なイライラ・不安・不眠・集中力散漫（ブレインフォグ）が慢性化。'
        },
        {
          timeline: 'ストレス継続数ヶ月',
          damage: '腸粘膜の結合が破壊されリーキーガット症候群へ。慢性アレルギー・自己免疫疾患・全身倦怠感が爆発。'
        },
        {
          timeline: '数年放置',
          damage: '海馬の神経細胞死と前頭前野の萎縮。うつ病やパニック障害、認知症発症リスクが急上昇。'
        }
      ],
      horrorSummary: '「ストレス社会だから仕方ない」と放置すれば、あなたの脳と腸は修復不可能なダメージを負い続けます。科学的な防壁を今すぐ築く必要があります。'
    },

    actionHacks: [
      {
        step: '01',
        title: '毎日の「発酵食品＋核酸」による腸内マイクロバイオーム育成',
        method: '水溶性食物繊維とオリゴ糖、そして核酸を摂取し、善玉菌（酪酸菌・乳酸菌）の餌を与える。',
        scientificReason: '腸内短鎖脂肪酸の濃度を高め、迷走神経経由で脳へリラックスシグナルを伝達。'
      },
      {
        step: '02',
        title: 'マインドフルネス瞑想（1日10分）',
        method: '静かな場所で背筋を伸ばし、自分の呼吸のみに注意を集中する。雑念が浮かんだら優しく呼吸に戻す。',
        scientificReason: '扁桃体（恐怖・ストレス中枢）の過剰活動を鎮静化し前頭前野を強化。'
      },
      {
        step: '03',
        title: '感謝ノートと感情のアウトプット',
        method: '就寝前に「今日良かったこと3つ」を紙に書き出す。',
        scientificReason: 'オキシトシンとエンドルフィンの分泌を促し、コルチゾールを瞬時に低下。'
      }
    ],

    fordaysSynergy: {
      productName: 'ナチュラル DNコラーゲン ＆ エナシエント ＆ セラム',
      productCategory: '腸内フローラ支援 ＆ 脳機能サポートサプリ',
      synergyHeadline: '腸から脳へ！特許素材がもたらす「揺るぎないメンタルタフネス」',
      synergyDetail: 'フォーデイズの核酸ドリンクに含まれるサケ白子抽出物および酵母成分は、特許第6947610号（腸内短鎖脂肪酸産生促進）に裏付けられた強力な腸活エビデンスを保持。さらに特許第6791696号の脳機能保護作用と合わさることで、腸と脳の両面からストレス耐性を劇的に強化。「プレッシャーに強い澄んだ頭脳」と「穏やかなメンタル」を同時に手に入れることができます。',
      boostEffects: [
        '特許第6947610号：腸内の短鎖脂肪酸を増やし、リーキーガットと脳内炎症を強力ブロック',
        '特許第6791696号：ストレスによる脳神経細胞死を防ぎ、ブレインフォグをスカッと解消',
        'セロトニン・メラトニンの体内生合成をスムーズにし、情緒の波をフラットに安定化',
        '過密スケジュールでもへこたれない驚異のメンタル持久力を獲得'
      ],
      recommendedTiming: 'ストレスを感じやすい朝の出社前、または勝負前の集中チャージとして'
    }
  }
];

export interface BiohackTimelineItem {
  time: string;
  phase: string;
  category: 'sleep' | 'exercise' | 'nutrition' | 'recovery' | 'stress';
  action: string;
  scientificReason: string;
  fordaysProduct?: string;
}

export const BIOHACK_TIMELINE: BiohackTimelineItem[] = [
  {
    time: '06:30 - 07:00',
    phase: '覚醒・光同調フェーズ',
    category: 'sleep',
    action: '起床後すぐに太陽光を15分浴び、常温の白湯を1杯飲む',
    scientificReason: '視交叉上核の体内時計遺伝子をリセットし、夜間のメラトニン生成タイマーを起動',
    fordaysProduct: 'ナチュラル DNコラーゲン 30ml（空腹時吸収）'
  },
  {
    time: '07:30 - 08:30',
    phase: '朝の代謝ブーストフェーズ',
    category: 'nutrition',
    action: '高タンパク朝食（卵、納豆、魚等）と発酵食品を摂取',
    scientificReason: 'トリプトファンを補給して日中のセロトニン合成を最大化',
    fordaysProduct: 'アドバンス1 / ビタミンサプリ'
  },
  {
    time: '12:30 - 13:00',
    phase: 'パワーナップ＆リセット',
    category: 'recovery',
    action: '昼食後に15〜20分のパワーナップ（仮眠）または4-7-8呼吸法',
    scientificReason: '午後のアデノシン蓄積をクリアし、集中力と認知機能を回復'
  },
  {
    time: '17:30 - 18:30',
    phase: '運動・マイオカイン分泌フェーズ',
    category: 'exercise',
    action: '筋トレ（スクワット等の大筋群）＋インターバル速歩',
    scientificReason: '体温が最も高い時間帯で運動効率が最大。マイオカイン分泌で全身若返り',
    fordaysProduct: 'アミノアクティ BCAA＆グルタミンDX（運動前後に摂取）'
  },
  {
    time: '19:30 - 20:30',
    phase: '腸活ディナー＆デトックス',
    category: 'stress',
    action: '食物繊維豊富な夕食＋就寝3時間前までに食事完了',
    scientificReason: '消化器を休ませ、睡眠中のグリンパティックシステムと成長ホルモンを邪魔しない'
  },
  {
    time: '21:30 - 22:00',
    phase: '40℃入浴＆深部体温コントロール',
    category: 'sleep',
    action: '就寝90分前に15分間入浴。スマホをナイトモードにし間接照明へ',
    scientificReason: '深部体温の急降下スイッチを入れ、メラトニン分泌を阻害する光をカット'
  },
  {
    time: '23:00 - 23:15',
    phase: 'ナイトショット＆細胞超回復フェーズ',
    category: 'nutrition',
    action: '就寝直前の核酸ドリンク摂取＋完全遮光の寝室へ',
    scientificReason: '成長ホルモン分泌と同時に特許核酸を供給。DNA修復とオートファジーを極大化',
    fordaysProduct: 'ナチュラル DNコラーゲン 30〜60ml（至高のナイトショット）'
  }
];

export interface DiagnosticQuestion {
  id: string;
  category: 'sleep' | 'exercise' | 'recovery' | 'nutrition' | 'stress';
  question: string;
  riskPoint: number;
}

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 'q1',
    category: 'sleep',
    question: '平日の平均睡眠時間が6時間未満、または朝起きたときに疲れが残っている',
    riskPoint: 20
  },
  {
    id: 'q2',
    category: 'sleep',
    question: 'ベッドに入ってからもスマホを見続け、就寝時間がバラバラである',
    riskPoint: 15
  },
  {
    id: 'q3',
    category: 'exercise',
    question: '1日の歩数が5,000歩未満で、息が上がるような運動を週1回もしていない',
    riskPoint: 20
  },
  {
    id: 'q4',
    category: 'exercise',
    question: '階段を上るとすぐに息切れし、以前より足腰の衰えや筋力低下を感じる',
    riskPoint: 15
  },
  {
    id: 'q5',
    category: 'recovery',
    question: '週末に寝だめをしても疲れが取れず、日中常にだるさや頭重感がある',
    riskPoint: 20
  },
  {
    id: 'q6',
    category: 'nutrition',
    question: '加工食品や外食が多く、魚・海藻・核酸などの細胞材料を意識して摂っていない',
    riskPoint: 20
  },
  {
    id: 'q7',
    category: 'nutrition',
    question: '肌のハリ低下、髪のパサつき、爪の割れなど、外見の老化スピードが早くなった',
    riskPoint: 15
  },
  {
    id: 'q8',
    category: 'stress',
    question: '仕事や人間関係で常にイライラや不安を感じ、リラックスする時間がほとんどない',
    riskPoint: 20
  },
  {
    id: 'q9',
    category: 'stress',
    question: '便秘や下痢を繰り返しやすく、胃腸の不調やブレインフォグ（頭のモヤモヤ）がある',
    riskPoint: 15
  }
];
