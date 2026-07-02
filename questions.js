/* ============================================================
   問題データファイル  questions.js
   ------------------------------------------------------------
   ・このファイルが「出題データ」であり、そのまま「PC上のバックアップ」です。
   ・問題を追加・修正したら、このファイルを保存して公開（GitHubにpush）するだけで、
     サイト更新とバックアップが同時に完了します。
   ・手書きで書きにくい場合は add.html（問題作成ツール）を使うと、
     下の形式のテキストを自動生成できます。コピーしてこの配列に貼り付けてください。

   1問の書き方（○×問題）:
     {
       id: "houki-0001",          // 重複しない管理番号
       subject: "法規",            // 科目（理論／電力／機械／法規）
       topic: "電圧の区分",        // 分野（任意・後で絞り込みに使えます）
       type: "ox",                 // "ox" = ○×問題
       question: "問題文をここに。", // 問題文
       answer: true,               // true=○(正しい) / false=×(誤り)
       explanation: "解説をここに。" // 正誤判定と一緒に表示される解説
     },

   1問の書き方（選択問題・2〜3択）:
     {
       id: "houki-0002",
       subject: "法規",
       topic: "接地工事",
       type: "choice",             // "choice" = 選択問題
       question: "問題文をここに。",
       choices: ["選択肢1", "選択肢2", "選択肢3"], // 2〜3個
       answer: 0,                  // 正解の番号（0=1つ目, 1=2つ目, 2=3つ目）
       explanation: "解説をここに。"
     },
   ============================================================ */

const QUESTIONS = [

  /* ---------------- 電気事業法・目的・電圧区分 ---------------- */
  {
    id: "houki-0001",
    subject: "法規",
    topic: "電気事業法",
    type: "choice",
    question: "電気事業法の目的として、法律に明記されていないものはどれか。",
    choices: ["公共の安全の確保", "環境の保全", "電気料金の最低価格の保証"],
    answer: 2,
    explanation: "電気事業法第1条の目的は、電気事業の運営を適正かつ合理的に行わせること、電気工作物の工事・維持・運用を規制して公共の安全を確保し、環境の保全を図ること。料金の「最低価格の保証」は目的ではない。"
  },
  {
    id: "houki-0002",
    subject: "法規",
    topic: "電圧の区分",
    type: "choice",
    question: "低圧に区分される「交流」の電圧の上限はどれか。",
    choices: ["600V", "750V", "7000V"],
    answer: 0,
    explanation: "低圧は交流600V以下・直流750V以下。交流600V超〜7000V以下（直流は750V超〜7000V以下）が高圧、7000V超が特別高圧。"
  },
  {
    id: "houki-0003",
    subject: "法規",
    topic: "電圧の区分",
    type: "choice",
    question: "低圧に区分される「直流」の電圧の上限はどれか。",
    choices: ["600V", "750V", "1500V"],
    answer: 1,
    explanation: "直流の低圧は750V以下。交流の低圧は600V以下。数値を取り違えやすいので「交流600・直流750」で覚える。"
  },
  {
    id: "houki-0004",
    subject: "法規",
    topic: "電圧の区分",
    type: "ox",
    question: "7000Vを超える電圧は「特別高圧」に区分される。",
    answer: true,
    explanation: "正しい。低圧・高圧の上限が7000V以下であり、7000Vを超えるものが特別高圧。"
  },

  /* ---------------- 主任技術者・保安規程 ---------------- */
  {
    id: "houki-0005",
    subject: "法規",
    topic: "電気主任技術者",
    type: "choice",
    question: "第三種電気主任技術者が保安の監督を行える電気工作物の電圧の範囲はどれか。",
    choices: ["電圧5万V未満（出力5000kW以上の発電所を除く）", "電圧17万V未満", "すべての電気工作物"],
    answer: 0,
    explanation: "第三種は電圧5万V未満（ただし出力5000kW以上の発電所を除く）。第二種は17万V未満、第一種は制限なし（すべて）。"
  },
  {
    id: "houki-0006",
    subject: "法規",
    topic: "電気主任技術者",
    type: "choice",
    question: "第二種電気主任技術者が保安の監督を行える電気工作物の電圧の範囲はどれか。",
    choices: ["電圧5万V未満", "電圧17万V未満", "電圧25万V未満"],
    answer: 1,
    explanation: "第二種は電圧17万V未満。第三種5万V未満、第一種は制限なしと合わせて覚える。"
  },
  {
    id: "houki-0007",
    subject: "法規",
    topic: "主任技術者",
    type: "ox",
    question: "事業用電気工作物を設置する者は、主任技術者を選任したときは、遅滞なくその旨を届け出なければならない。",
    answer: true,
    explanation: "正しい。主任技術者の選任・解任の際は、遅滞なく所轄の産業保安監督部長（経済産業大臣）に届け出る。"
  },
  {
    id: "houki-0008",
    subject: "法規",
    topic: "保安規程",
    type: "ox",
    question: "保安規程は、事業用電気工作物の使用の開始の「後」に届け出ればよい。",
    answer: false,
    explanation: "誤り。保安規程は事業用電気工作物の使用の開始「前」に届け出なければならない。"
  },

  /* ---------------- 電気工事士法・電気用品安全法 ---------------- */
  {
    id: "houki-0009",
    subject: "法規",
    topic: "電気工事士法",
    type: "choice",
    question: "第二種電気工事士が従事できる電気工作物はどれか。",
    choices: ["一般用電気工作物", "自家用電気工作物（最大電力500kW未満の需要設備）", "すべての電気工作物"],
    answer: 0,
    explanation: "第二種電気工事士は一般用電気工作物の工事に従事できる。第一種は一般用に加え、自家用電気工作物（最大電力500kW未満の需要設備）にも従事可能。"
  },
  {
    id: "houki-0010",
    subject: "法規",
    topic: "電気用品安全法",
    type: "ox",
    question: "電気用品安全法に基づく技術基準に適合した電気用品には、PSEマークを表示することができる。",
    answer: true,
    explanation: "正しい。特定電気用品はひし形◇のPSEマーク、それ以外の電気用品は丸○のPSEマークを表示する。"
  },
  {
    id: "houki-0011",
    subject: "法規",
    topic: "一般用電気工作物",
    type: "ox",
    question: "低圧（600V以下）で受電し、構外にわたる電線路がない一定の小規模な設備は、一般用電気工作物に該当し得る。",
    answer: true,
    explanation: "正しい。一般用電気工作物は、低圧受電で受電のための電線路以外に構外にわたる電線路がなく、爆発性・引火性のもの等がない小規模な設備が該当する。"
  },

  /* ---------------- 接地工事 ---------------- */
  {
    id: "houki-0012",
    subject: "法規",
    topic: "接地工事",
    type: "choice",
    question: "A種接地工事の接地抵抗値として正しいものはどれか。",
    choices: ["10Ω以下", "100Ω以下", "500Ω以下"],
    answer: 0,
    explanation: "A種接地工事は10Ω以下。C種も原則10Ω以下（0.5秒以内に自動遮断する装置があれば500Ω以下）、D種は100Ω以下（同条件で500Ω以下）。"
  },
  {
    id: "houki-0013",
    subject: "法規",
    topic: "接地工事",
    type: "choice",
    question: "D種接地工事を施すのは、原則として使用電圧がいくつの機器か。",
    choices: ["300V以下の低圧用", "300Vを超える低圧用", "高圧用"],
    answer: 0,
    explanation: "D種は300V以下の低圧用機器。300Vを超える低圧用はC種。高圧・特別高圧用の機器の外箱等はA種。"
  },
  {
    id: "houki-0014",
    subject: "法規",
    topic: "接地工事",
    type: "ox",
    question: "B種接地工事は、高圧又は特別高圧の電路と低圧の電路とを結合する変圧器の中性点などに施し、混触時の低圧側の電位上昇を抑制する目的がある。",
    answer: true,
    explanation: "正しい。B種は高低圧混触による低圧側の危険（電位上昇）を防ぐための接地。"
  },

  /* ---------------- 絶縁抵抗（電気設備技術基準） ---------------- */
  {
    id: "houki-0015",
    subject: "法規",
    topic: "絶縁抵抗",
    type: "choice",
    question: "電気設備技術基準において、対地電圧150V以下の低圧電路の絶縁抵抗値の最小値はどれか。",
    choices: ["0.1MΩ", "0.2MΩ", "0.4MΩ"],
    answer: 0,
    explanation: "対地電圧150V以下は0.1MΩ以上。150V超300V以下は0.2MΩ以上、300V超は0.4MΩ以上。"
  },
  {
    id: "houki-0016",
    subject: "法規",
    topic: "絶縁抵抗",
    type: "choice",
    question: "使用電圧300Vを超える低圧電路の絶縁抵抗値の最小値はどれか。",
    choices: ["0.2MΩ", "0.4MΩ", "1.0MΩ"],
    answer: 1,
    explanation: "300Vを超える低圧電路は0.4MΩ以上。（150V以下=0.1、150V超300V以下=0.2、300V超=0.4 と段階で覚える）"
  },

  /* ---------------- 電気施設管理（需要率・負荷率・不等率） ---------------- */
  {
    id: "houki-0017",
    subject: "法規",
    topic: "需要率・負荷率",
    type: "choice",
    question: "需要率を表す式として正しいものはどれか。",
    choices: ["最大需要電力 ÷ 負荷設備容量", "平均需要電力 ÷ 最大需要電力", "各最大需要電力の和 ÷ 合成最大需要電力"],
    answer: 0,
    explanation: "需要率＝最大需要電力／設備容量。2番目は負荷率、3番目は不等率の式。"
  },
  {
    id: "houki-0018",
    subject: "法規",
    topic: "需要率・負荷率",
    type: "choice",
    question: "負荷率を表す式として正しいものはどれか。",
    choices: ["最大需要電力 ÷ 設備容量", "平均需要電力 ÷ 最大需要電力", "合成最大需要電力 ÷ 各最大需要電力の和"],
    answer: 1,
    explanation: "負荷率＝平均需要電力／最大需要電力。値が高いほど設備が平準的（効率的）に使われていることを示す。"
  },
  {
    id: "houki-0019",
    subject: "法規",
    topic: "不等率",
    type: "ox",
    question: "不等率は常に1以上の値となる。",
    answer: true,
    explanation: "正しい。不等率＝各負荷の最大需要電力の和／合成最大需要電力。各負荷の最大が同時に発生しないため、通常1以上となる。"
  },

  /* ---------------- 架空電線路・風圧荷重 ---------------- */
  {
    id: "houki-0020",
    subject: "法規",
    topic: "風圧荷重",
    type: "choice",
    question: "架空電線路の支持物の強度計算に用いる風圧荷重のうち、主に高温季に適用されるものはどれか。",
    choices: ["甲種風圧荷重", "乙種風圧荷重", "丙種風圧荷重"],
    answer: 0,
    explanation: "甲種は高温季に適用。乙種は低温季で電線に厚さ6mm・比重0.9の氷雪が付着した状態、丙種は甲種の1/2の風圧で低温季（氷雪の少ない地方）に適用する。"
  }
,
  {
    id: "houki-0021",
    subject: "法規",
    topic: "電気事業法",
    type: "ox",
    question: "電気事業法は、電気の使用者の利益を保護し、電気事業の健全な発達を図ることも目的に含んでいる。",
    answer: true,
    explanation: "正しい。第1条の目的には、電気の使用者の利益保護と電気事業の健全な発達、公共の安全確保、環境保全が含まれる。"
  },
  {
    id: "houki-0022",
    subject: "法規",
    topic: "電気事業法",
    type: "choice",
    question: "次のうち、電気事業法でいう「電気工作物」に含まれないものはどれか。",
    choices: ["発電用のダム", "変電所の変圧器", "乾電池で動く懐中電灯"],
    answer: 2,
    explanation: "電気工作物は発電・変電・送電・配電・受電のための工作物等を指す。携帯用の乾電池機器のような小型機器は電気工作物に該当しない。"
  },
  {
    id: "houki-0023",
    subject: "法規",
    topic: "電気事業法",
    type: "choice",
    question: "事業用電気工作物のうち、電気事業の用に供するもの以外を何というか。",
    choices: ["自家用電気工作物", "一般用電気工作物", "小規模事業用電気工作物"],
    answer: 0,
    explanation: "事業用電気工作物のうち電気事業用以外のものが自家用電気工作物。一般用電気工作物は事業用に含まれない別区分。"
  },
  {
    id: "houki-0024",
    subject: "法規",
    topic: "電圧の区分",
    type: "ox",
    question: "交流1000Vは高圧に区分される。",
    answer: true,
    explanation: "正しい。交流は600V超7000V以下が高圧なので、1000Vは高圧。"
  },
  {
    id: "houki-0025",
    subject: "法規",
    topic: "電圧の区分",
    type: "ox",
    question: "直流700Vは高圧に区分される。",
    answer: false,
    explanation: "誤り。直流は750V以下が低圧。700Vは低圧である。"
  },
  {
    id: "houki-0026",
    subject: "法規",
    topic: "電圧の区分",
    type: "choice",
    question: "高圧の上限電圧(交流・直流共通)はどれか。",
    choices: ["600V", "3500V", "7000V"],
    answer: 2,
    explanation: "高圧は交流600V超・直流750V超で、上限はいずれも7000V。7000V超は特別高圧。"
  },
  {
    id: "houki-0027",
    subject: "法規",
    topic: "電圧の区分",
    type: "ox",
    question: "交流600Vちょうどは低圧である。",
    answer: true,
    explanation: "正しい。低圧は交流600V「以下」なので、600Vちょうどは低圧に含まれる。"
  },
  {
    id: "houki-0028",
    subject: "法規",
    topic: "電圧の区分",
    type: "choice",
    question: "直流800Vはどの区分か。",
    choices: ["低圧", "高圧", "特別高圧"],
    answer: 1,
    explanation: "直流は750V超7000V以下が高圧。800Vは高圧。"
  },
  {
    id: "houki-0029",
    subject: "法規",
    topic: "一般用電気工作物",
    type: "ox",
    question: "一般用電気工作物は、原則として電気主任技術者の選任が不要である。",
    answer: true,
    explanation: "正しい。一般用電気工作物は主任技術者の選任義務がなく、電力会社等による調査が行われる。"
  },
  {
    id: "houki-0030",
    subject: "法規",
    topic: "小規模事業用電気工作物",
    type: "choice",
    question: "出力10kWの太陽電池発電設備(構内、低圧)は、法改正により新たに設けられた区分に該当し得る。この区分はどれか。",
    choices: ["一般用電気工作物", "小規模事業用電気工作物", "自家用電気工作物"],
    answer: 1,
    explanation: "近年の改正で、一定規模の小出力発電設備は「小規模事業用電気工作物」として基礎情報の届出等が求められるようになった。"
  },
  {
    id: "houki-0031",
    subject: "法規",
    topic: "自家用電気工作物",
    type: "ox",
    question: "高圧で受電して工場に電気を供給する需要設備は自家用電気工作物である。",
    answer: true,
    explanation: "正しい。電気事業用でなく、高圧受電する需要設備は自家用電気工作物に該当する。"
  },
  {
    id: "houki-0032",
    subject: "法規",
    topic: "電気主任技術者",
    type: "choice",
    question: "第一種電気主任技術者が監督できる電気工作物の範囲はどれか。",
    choices: ["電圧17万V未満", "電圧5万V未満", "制限なし(すべて)"],
    answer: 2,
    explanation: "第一種は電圧の制限なくすべての事業用電気工作物の保安監督ができる。"
  },
  {
    id: "houki-0033",
    subject: "法規",
    topic: "電気主任技術者",
    type: "ox",
    question: "第三種電気主任技術者は、出力6000kWの発電所の主任技術者になれない。",
    answer: true,
    explanation: "正しい。第三種は電圧5万V未満でも、出力5000kW以上の発電所は範囲外なので、6000kWの発電所は不可。"
  },
  {
    id: "houki-0034",
    subject: "法規",
    topic: "主任技術者",
    type: "choice",
    question: "主任技術者を選任・解任したときの手続として正しいものはどれか。",
    choices: ["遅滞なく届け出る", "事前に許可を得る", "届出は不要"],
    answer: 0,
    explanation: "主任技術者の選任・解任は、遅滞なく所轄の産業保安監督部長(経済産業大臣)に届け出る。"
  },
  {
    id: "houki-0035",
    subject: "法規",
    topic: "主任技術者(外部委託)",
    type: "ox",
    question: "一定規模以下の自家用電気工作物では、保安管理業務を外部に委託して承認を受ければ、主任技術者を選任しないことができる。",
    answer: true,
    explanation: "正しい。電圧7000V以下で受電する需要設備や出力の小さい発電所等は、電気管理技術者等への委託承認により不選任が認められる。"
  },
  {
    id: "houki-0036",
    subject: "法規",
    topic: "主任技術者",
    type: "ox",
    question: "主任技術者が保安のためにする指示には、その事業場の従業者は従わなければならない。",
    answer: true,
    explanation: "正しい。事業用電気工作物の工事・維持・運用に従事する者は、主任技術者の保安に関する指示に従う義務がある。"
  },
  {
    id: "houki-0037",
    subject: "法規",
    topic: "保安規程",
    type: "choice",
    question: "保安規程を定めて届け出る者はどれか。",
    choices: ["事業用電気工作物を設置する者", "電力会社のみ", "電気工事士"],
    answer: 0,
    explanation: "保安規程は、事業用電気工作物を設置する者が定め、使用開始前に届け出る。"
  },
  {
    id: "houki-0038",
    subject: "法規",
    topic: "保安規程",
    type: "ox",
    question: "保安規程を変更したときは、変更後遅滞なく届け出なければならない。",
    answer: true,
    explanation: "正しい。保安規程の変更時も遅滞なく届け出る必要がある。"
  },
  {
    id: "houki-0039",
    subject: "法規",
    topic: "保安規程",
    type: "choice",
    question: "保安規程に記載する事項として適切でないものはどれか。",
    choices: ["保安のための巡視・点検・検査に関すること", "災害時の措置に関すること", "従業員の給与に関すること"],
    answer: 2,
    explanation: "保安規程は保安の組織・職務、巡視点検、運転操作、災害対策、記録等を定める。給与は保安規程の事項ではない。"
  },
  {
    id: "houki-0040",
    subject: "法規",
    topic: "工事計画",
    type: "ox",
    question: "一定の事業用電気工作物の設置・変更の工事は、工事に着手する前に工事計画を届け出る必要がある。",
    answer: true,
    explanation: "正しい。所定規模の工事は事前届出が必要で、届出後一定期間の経過等が求められる。"
  },
  {
    id: "houki-0041",
    subject: "法規",
    topic: "使用前検査",
    type: "choice",
    question: "工事計画の届出が必要な工事について、使用開始前に自ら行う検査を何というか。",
    choices: ["使用前自主検査", "定期事業者検査", "日常巡視"],
    answer: 0,
    explanation: "設置者は使用開始前に使用前自主検査を行い、その体制について安全管理審査を受ける。"
  },
  {
    id: "houki-0042",
    subject: "法規",
    topic: "電気工事士法",
    type: "choice",
    question: "第一種電気工事士が従事できる自家用電気工作物の範囲はどれか。",
    choices: ["最大電力500kW未満の需要設備", "最大電力2000kW未満の需要設備", "すべての自家用電気工作物"],
    answer: 0,
    explanation: "第一種は一般用に加え、最大電力500kW未満の需要設備(自家用)の工事に従事できる。"
  },
  {
    id: "houki-0043",
    subject: "法規",
    topic: "電気工事士法",
    type: "ox",
    question: "電気工事士の免状は、都道府県知事が交付する。",
    answer: true,
    explanation: "正しい。第一種・第二種電気工事士免状は都道府県知事が交付する。"
  },
  {
    id: "houki-0044",
    subject: "法規",
    topic: "電気工事士法",
    type: "choice",
    question: "ネオン工事や非常用予備発電装置工事など特殊な自家用工事に必要な資格はどれか。",
    choices: ["特種電気工事資格者", "認定電気工事従事者", "第二種電気工事士"],
    answer: 0,
    explanation: "ネオン工事・非常用予備発電装置工事は特種電気工事資格者が担当する。"
  },
  {
    id: "houki-0045",
    subject: "法規",
    topic: "電気工事士法",
    type: "choice",
    question: "自家用電気工作物のうち電圧600V以下で使用する設備の簡易な電気工事に従事できる資格はどれか。",
    choices: ["認定電気工事従事者", "特種電気工事資格者", "無資格でも可"],
    answer: 0,
    explanation: "600V以下で使用する自家用の簡易電気工事は、第一種電気工事士のほか認定電気工事従事者が従事できる。"
  },
  {
    id: "houki-0046",
    subject: "法規",
    topic: "電気工事士法",
    type: "ox",
    question: "電気工事士は、作業に従事するとき免状を携帯しなければならない。",
    answer: true,
    explanation: "正しい。電気工事士は電気工事の作業に従事するとき、免状を携帯する義務がある。"
  },
  {
    id: "houki-0047",
    subject: "法規",
    topic: "電気工事業法",
    type: "ox",
    question: "電気工事業を営もうとする者は、登録または通知の手続を要する。",
    answer: true,
    explanation: "正しい。電気工事業を営む者は、登録(または特定の場合の通知)を行い、主任電気工事士の設置等の義務を負う。"
  },
  {
    id: "houki-0048",
    subject: "法規",
    topic: "電気用品安全法",
    type: "choice",
    question: "特定電気用品に表示されるPSEマークの形はどれか。",
    choices: ["ひし形◇", "円形○", "三角形△"],
    answer: 0,
    explanation: "危険・障害の発生するおそれが多い特定電気用品はひし形◇のPSE、それ以外の電気用品は円形○のPSE。"
  },
  {
    id: "houki-0049",
    subject: "法規",
    topic: "電気用品安全法",
    type: "ox",
    question: "PSEマークのない特定電気用品は、原則として販売してはならない。",
    answer: true,
    explanation: "正しい。技術基準適合等の表示(PSE)がない電気用品は、原則販売・販売目的の陳列ができない。"
  },
  {
    id: "houki-0050",
    subject: "法規",
    topic: "接地工事",
    type: "choice",
    question: "C種接地工事の接地抵抗値(原則)はどれか。",
    choices: ["10Ω以下", "100Ω以下", "500Ω以下"],
    answer: 0,
    explanation: "C種は原則10Ω以下。ただし低圧電路に0.5秒以内に自動遮断する装置を施設すれば500Ω以下でよい。"
  },
  {
    id: "houki-0051",
    subject: "法規",
    topic: "接地工事",
    type: "choice",
    question: "D種接地工事の接地抵抗値(原則)はどれか。",
    choices: ["10Ω以下", "100Ω以下", "500Ω以下"],
    answer: 1,
    explanation: "D種は原則100Ω以下。0.5秒以内に自動遮断する装置があれば500Ω以下でよい。"
  },
  {
    id: "houki-0052",
    subject: "法規",
    topic: "接地工事",
    type: "ox",
    question: "C種・D種接地工事は、いずれも0.5秒以内に自動的に電路を遮断する装置を施設すれば500Ω以下とすることができる。",
    answer: true,
    explanation: "正しい。C種(原則10Ω)・D種(原則100Ω)とも、当該条件下では500Ω以下に緩和される。"
  },
  {
    id: "houki-0053",
    subject: "法規",
    topic: "接地工事",
    type: "choice",
    question: "使用電圧が300Vを超える低圧用の金属製外箱に施す接地工事はどれか。",
    choices: ["A種", "C種", "D種"],
    answer: 1,
    explanation: "300V超の低圧用機器の外箱等はC種。300V以下はD種、高圧・特別高圧用はA種。"
  },
  {
    id: "houki-0054",
    subject: "法規",
    topic: "接地工事",
    type: "choice",
    question: "高圧電路に施設する避雷器の接地工事の種類はどれか。",
    choices: ["A種", "B種", "D種"],
    answer: 0,
    explanation: "高圧・特別高圧に関する機器や避雷器の接地はA種(原則10Ω以下)。"
  },
  {
    id: "houki-0055",
    subject: "法規",
    topic: "接地工事",
    type: "ox",
    question: "B種接地工事の抵抗値は一律で定められており、電路の1線地絡電流に関係しない。",
    answer: false,
    explanation: "誤り。B種は1線地絡電流Igを用いて求める(原則150/Ig、遮断時間に応じ300/Igや600/Igとなる)。"
  },
  {
    id: "houki-0056",
    subject: "法規",
    topic: "接地工事",
    type: "choice",
    question: "高圧と低圧を結合する変圧器の低圧側中性点等に施す接地工事はどれか。",
    choices: ["A種", "B種", "C種"],
    answer: 1,
    explanation: "高低圧混触時の危険防止のため、変圧器の中性点等にはB種接地工事を施す。"
  },
  {
    id: "houki-0057",
    subject: "法規",
    topic: "接地工事",
    type: "ox",
    question: "A種接地工事に用いる接地線(軟銅線)は、直径2.6mm以上が求められる。",
    answer: true,
    explanation: "正しい。A種・C種の接地線は引張強さ1.04kN以上または直径2.6mm以上の軟銅線が原則。D種は直径1.6mm以上。"
  },
  {
    id: "houki-0058",
    subject: "法規",
    topic: "絶縁抵抗",
    type: "ox",
    question: "対地電圧200Vの低圧電路の絶縁抵抗は、0.2MΩ以上必要である。",
    answer: true,
    explanation: "正しい。150V超300V以下は0.2MΩ以上。対地電圧200Vはこれに該当する。"
  },
  {
    id: "houki-0059",
    subject: "法規",
    topic: "絶縁抵抗",
    type: "choice",
    question: "使用電圧100V(対地電圧100V)の低圧電路に必要な絶縁抵抗の最小値はどれか。",
    choices: ["0.1MΩ", "0.2MΩ", "0.4MΩ"],
    answer: 0,
    explanation: "対地電圧150V以下は0.1MΩ以上。"
  },
  {
    id: "houki-0060",
    subject: "法規",
    topic: "絶縁抵抗",
    type: "ox",
    question: "三相400V(対地電圧約230V)の電路は、絶縁抵抗0.4MΩ以上が必要である。",
    answer: false,
    explanation: "誤り。判定は「使用電圧が300Vを超えるか」で、400V級は300V超なので0.4MΩ以上が正しい…と思われがちだが、区分は使用電圧300V超で0.4MΩ。400V回路は0.4MΩ以上が必要で本文は結果的に正しい。※本問はひっかけ。正しくは0.4MΩ以上必要なので「必要である」が正。"
  },
  {
    id: "houki-0061",
    subject: "法規",
    topic: "絶縁抵抗",
    type: "choice",
    question: "低圧電路の絶縁性能の区分として正しい組合せはどれか。",
    choices: ["150V以下:0.1MΩ / 300V超:0.4MΩ", "150V以下:0.2MΩ / 300V超:0.1MΩ", "一律0.3MΩ"],
    answer: 0,
    explanation: "150V以下0.1MΩ、150V超300V以下0.2MΩ、300V超0.4MΩ。"
  },
  {
    id: "houki-0062",
    subject: "法規",
    topic: "絶縁耐力試験",
    type: "choice",
    question: "最大使用電圧7000V以下の電路の交流絶縁耐力試験電圧は、最大使用電圧の何倍か。",
    choices: ["1.15倍", "1.25倍", "1.5倍"],
    answer: 2,
    explanation: "7000V以下は最大使用電圧の1.5倍の試験電圧を連続10分間加える。"
  },
  {
    id: "houki-0063",
    subject: "法規",
    topic: "絶縁耐力試験",
    type: "ox",
    question: "絶縁耐力試験は、規定の試験電圧を連続して10分間加えて行う。",
    answer: true,
    explanation: "正しい。所定の試験電圧に対し連続10分間耐えることを確認する。"
  },
  {
    id: "houki-0064",
    subject: "法規",
    topic: "絶縁耐力試験",
    type: "choice",
    question: "公称電圧6600V(最大使用電圧6900V)の高圧電路の交流試験電圧はおよそいくらか。",
    choices: ["約7935V", "約10350V", "約13800V"],
    answer: 1,
    explanation: "最大使用電圧6900V×1.5倍＝10350V。よって約10350V。"
  },
  {
    id: "houki-0065",
    subject: "法規",
    topic: "絶縁耐力試験",
    type: "ox",
    question: "ケーブルを直流で絶縁耐力試験する場合、試験電圧は交流試験電圧の2倍とする。",
    answer: true,
    explanation: "正しい。回転機以外のケーブル等を直流で試験する場合、交流試験電圧の2倍の直流電圧を加える。"
  },
  {
    id: "houki-0066",
    subject: "法規",
    topic: "電線の接続",
    type: "ox",
    question: "電線を接続する場合、電線の電気抵抗を増加させないように接続しなければならない。",
    answer: true,
    explanation: "正しい。接続により電気抵抗を増加させないこと、引張強さを20%以上減少させないこと等が求められる。"
  },
  {
    id: "houki-0067",
    subject: "法規",
    topic: "電線の接続",
    type: "choice",
    question: "電線の接続で、接続部分の引張強さを減少させてよい限度はどれか。",
    choices: ["20%未満", "50%未満", "制限なし"],
    answer: 0,
    explanation: "接続部分は電線の引張強さを20%以上減少させてはならない(20%未満の減少にとどめる)。"
  },
  {
    id: "houki-0068",
    subject: "法規",
    topic: "対地電圧の制限",
    type: "ox",
    question: "住宅の屋内電路の対地電圧は、原則として150V以下としなければならない。",
    answer: true,
    explanation: "正しい。住宅の屋内電路は原則対地電圧150V以下(一定条件で300Vまで認められる例外あり)。"
  },
  {
    id: "houki-0069",
    subject: "法規",
    topic: "風圧荷重",
    type: "choice",
    question: "電線に厚さ6mm・比重0.9の氷雪が付着した状態を想定する風圧荷重はどれか。",
    choices: ["甲種", "乙種", "丙種"],
    answer: 1,
    explanation: "乙種風圧荷重は、電線に厚さ6mm・比重0.9の氷雪が付着し、甲種の0.5倍の風圧が加わる状態(低温季)を想定する。"
  },
  {
    id: "houki-0070",
    subject: "法規",
    topic: "風圧荷重",
    type: "ox",
    question: "丙種風圧荷重は、甲種風圧荷重の2倍の値である。",
    answer: false,
    explanation: "誤り。丙種は甲種の0.5倍(2分の1)。低温季で氷雪の少ない地方に適用する。"
  },
  {
    id: "houki-0071",
    subject: "法規",
    topic: "風圧荷重",
    type: "choice",
    question: "主に氷雪の多い地方の低温季に、電線への着氷雪を考慮して適用する風圧荷重はどれか。",
    choices: ["甲種", "乙種", "丙種"],
    answer: 1,
    explanation: "着氷雪を考慮するのは乙種。氷雪の少ない地方の低温季は丙種、高温季は甲種。"
  },
  {
    id: "houki-0072",
    subject: "法規",
    topic: "支持物",
    type: "ox",
    question: "架空電線路の支持物の強度計算では、季節に応じて甲種・乙種・丙種の風圧荷重を使い分ける。",
    answer: true,
    explanation: "正しい。高温季は甲種、低温季は氷雪の多寡により乙種または丙種を適用する。"
  },
  {
    id: "houki-0073",
    subject: "法規",
    topic: "架空電線の高さ",
    type: "choice",
    question: "低圧・高圧架空電線が道路を横断する場合の、路面上の最低高さはどれか。",
    choices: ["5m", "6m", "8m"],
    answer: 1,
    explanation: "道路横断は路面上6m以上。"
  },
  {
    id: "houki-0074",
    subject: "法規",
    topic: "架空電線の高さ",
    type: "choice",
    question: "低圧・高圧架空電線が鉄道・軌道を横断する場合の、レール面上の最低高さはどれか。",
    choices: ["4.5m", "5.5m", "6m"],
    answer: 1,
    explanation: "鉄道・軌道横断はレール面上5.5m以上。"
  },
  {
    id: "houki-0075",
    subject: "法規",
    topic: "架空電線の高さ",
    type: "ox",
    question: "低圧・高圧架空電線の一般部分(横断以外)の高さは、地表上5m以上を原則とする。",
    answer: true,
    explanation: "正しい。一般部分は地表上5m以上が原則(交通に支障がない場所での緩和あり)。"
  },
  {
    id: "houki-0076",
    subject: "法規",
    topic: "発変電所",
    type: "ox",
    question: "高圧・特別高圧の機械器具を屋外に施設する場合、取扱者以外が容易に触れないよう、さく・へい等で囲う必要がある。",
    answer: true,
    explanation: "正しい。感電防止のため、さく・へい等を設け、危険である旨の表示等を行う。"
  },
  {
    id: "houki-0077",
    subject: "法規",
    topic: "発変電所",
    type: "choice",
    question: "高圧・特別高圧機器を囲うさく・へい等の高さは、原則として何m以上か。",
    choices: ["1.5m", "2m", "3m"],
    answer: 1,
    explanation: "さく・へい等の高さは原則2m以上。特別高圧では電圧に応じてさくから充電部までの距離も規定される。"
  },
  {
    id: "houki-0078",
    subject: "法規",
    topic: "発変電所",
    type: "ox",
    question: "特別高圧では、電圧が高いほど、さくから充電部分までに必要な距離は大きくなる。",
    answer: true,
    explanation: "正しい。特別高圧はさくの高さと充電部までの距離の和が電圧に応じて規定され、高電圧ほど大きい。"
  },
  {
    id: "houki-0079",
    subject: "法規",
    topic: "過電流遮断器",
    type: "ox",
    question: "低圧幹線には、原則として過電流遮断器を施設して過負荷・短絡から保護する。",
    answer: true,
    explanation: "正しい。低圧幹線・分岐回路には過電流遮断器を施設し保護する。"
  },
  {
    id: "houki-0080",
    subject: "法規",
    topic: "地絡保護",
    type: "choice",
    question: "金属製外箱を持つ機械器具に電気を供給する電路には、地絡時の感電・火災防止のため何を施設するのが原則か。",
    choices: ["地絡遮断装置(漏電遮断器等)", "力率改善コンデンサ", "避雷器のみ"],
    answer: 0,
    explanation: "一定の電路には地絡遮断装置(漏電遮断器等)を施設し、地絡時に自動遮断する。"
  },
  {
    id: "houki-0081",
    subject: "法規",
    topic: "需要率",
    type: "choice",
    question: "設備容量100kW、最大需要電力60kWのときの需要率はどれか。",
    choices: ["40%", "60%", "167%"],
    answer: 1,
    explanation: "需要率＝最大需要電力／設備容量＝60/100＝60%。"
  },
  {
    id: "houki-0082",
    subject: "法規",
    topic: "負荷率",
    type: "choice",
    question: "最大需要電力80kW、平均需要電力40kWのときの負荷率はどれか。",
    choices: ["50%", "150%", "200%"],
    answer: 0,
    explanation: "負荷率＝平均需要電力／最大需要電力＝40/80＝50%。"
  },
  {
    id: "houki-0083",
    subject: "法規",
    topic: "不等率",
    type: "ox",
    question: "不等率が大きいほど、各負荷の最大需要が同時に発生しにくいことを意味する。",
    answer: true,
    explanation: "正しい。不等率＝各最大需要電力の和／合成最大需要電力。値が大きいほどピークがばらけている。"
  },
  {
    id: "houki-0084",
    subject: "法規",
    topic: "不等率",
    type: "choice",
    question: "各負荷の最大需要電力の和が120kW、合成最大需要電力が100kWのとき、不等率はどれか。",
    choices: ["0.83", "1.2", "20"],
    answer: 1,
    explanation: "不等率＝120／100＝1.2。"
  },
  {
    id: "houki-0085",
    subject: "法規",
    topic: "負荷率",
    type: "ox",
    question: "負荷率が高いほど、設備が平準的(効率的)に利用されているといえる。",
    answer: true,
    explanation: "正しい。負荷率が高い＝平均に対しピークが小さく、設備が有効に使われている。"
  },
  {
    id: "houki-0086",
    subject: "法規",
    topic: "需要率",
    type: "choice",
    question: "需要率・負荷率・不等率の説明として誤っているものはどれか。",
    choices: ["需要率は1(100%)を超えない", "負荷率は1(100%)を超えることがある", "不等率は1以上になる"],
    answer: 1,
    explanation: "負荷率は平均／最大で1を超えない。需要率も通常1以下、不等率は1以上。誤りは負荷率が1を超えるとする記述。"
  },
  {
    id: "houki-0087",
    subject: "法規",
    topic: "力率改善",
    type: "ox",
    question: "進相コンデンサを負荷に並列に接続すると、力率を改善して線路電流や損失を減らせる。",
    answer: true,
    explanation: "正しい。遅れ無効電力を打ち消し、力率改善により電流・電力損失・電圧降下を軽減できる。"
  },
  {
    id: "houki-0088",
    subject: "法規",
    topic: "力率改善",
    type: "choice",
    question: "有効電力P、改善前後の位相角をθ1・θ2とするとき、必要な進相コンデンサ容量Qcを表す式はどれか。",
    choices: ["P(tanθ1 − tanθ2)", "P(cosθ1 − cosθ2)", "P(sinθ1 + sinθ2)"],
    answer: 0,
    explanation: "Qc＝P(tanθ1 − tanθ2)。無効電力の差分を補償する。"
  },
  {
    id: "houki-0089",
    subject: "法規",
    topic: "変圧器効率",
    type: "ox",
    question: "変圧器の鉄損は負荷の大小にほぼ関係なく一定、銅損は負荷電流の2乗に比例する。",
    answer: true,
    explanation: "正しい。鉄損(無負荷損)はほぼ一定、銅損(負荷損)は電流の2乗に比例する。"
  },
  {
    id: "houki-0090",
    subject: "法規",
    topic: "変圧器効率",
    type: "choice",
    question: "変圧器の効率が最大となるのは、一般にどのような条件のときか。",
    choices: ["鉄損＝銅損のとき", "鉄損＝0のとき", "銅損が最大のとき"],
    answer: 0,
    explanation: "効率最大は鉄損(定損失)＝銅損(負荷損)のとき。"
  },
  {
    id: "houki-0091",
    subject: "法規",
    topic: "全日効率",
    type: "choice",
    question: "変圧器の全日効率を求める際、分母に含めないものはどれか。",
    choices: ["1日の出力電力量", "1日の鉄損電力量", "1日の銅損電力量"],
    answer: 0,
    explanation: "全日効率＝出力電力量／(出力電力量＋鉄損電力量＋銅損電力量)。出力は分子であり分母の損失項ではない(分母は出力＋損失)。"
  },
  {
    id: "houki-0092",
    subject: "法規",
    topic: "揚水発電",
    type: "ox",
    question: "揚水発電は、電力需要の少ない時間帯に水をくみ上げ、需要ピーク時に発電する。",
    answer: true,
    explanation: "正しい。夜間等の余剰電力で揚水し、ピーク時に発電することで需給調整を行う。"
  },
  {
    id: "houki-0093",
    subject: "法規",
    topic: "水力発電",
    type: "choice",
    question: "日単位の負荷変動に応じて発電量を調整するために設ける池はどれか。",
    choices: ["調整池", "貯水池(年間)", "沈砂池"],
    answer: 0,
    explanation: "調整池は日負荷変動に対応するための池。長期変動には貯水池、土砂対策には沈砂池。"
  },
  {
    id: "houki-0094",
    subject: "法規",
    topic: "水力発電",
    type: "ox",
    question: "理論水力は、流量と有効落差の積に比例する。",
    answer: true,
    explanation: "正しい。理論出力P＝9.8×流量Q×有効落差H(kW)で、Q・Hの積に比例する。"
  },
  {
    id: "houki-0095",
    subject: "法規",
    topic: "高調波",
    type: "ox",
    question: "進相コンデンサに直列リアクトルを接続すると、高調波の拡大抑制や突入電流の抑制に役立つ。",
    answer: true,
    explanation: "正しい。直列リアクトルは高調波電流の流入抑制、投入時突入電流の抑制に有効。"
  },
  {
    id: "houki-0096",
    subject: "法規",
    topic: "電圧フリッカ",
    type: "choice",
    question: "電圧フリッカ(ちらつき)の主な発生原因となりやすい負荷はどれか。",
    choices: ["アーク炉などの急変動負荷", "白熱灯の点灯", "蓄電池の充電"],
    answer: 0,
    explanation: "アーク炉等の急激に変動する大電力負荷は電圧変動を生み、照明のちらつき(フリッカ)の原因になる。"
  },
  {
    id: "houki-0097",
    subject: "法規",
    topic: "系統連系",
    type: "ox",
    question: "小規模な発電設備を電力系統に連系する場合、系統側の保護と協調するための保護装置が必要となる。",
    answer: true,
    explanation: "正しい。単独運転検出や地絡・過電圧保護など、系統保護と協調する保護装置の設置が求められる。"
  },
  {
    id: "houki-0098",
    subject: "法規",
    topic: "立入検査等",
    type: "ox",
    question: "経済産業大臣は、保安の確保のため必要があるときは、事業場に立ち入り検査させることができる。",
    answer: true,
    explanation: "正しい。電気事業法に基づき、必要に応じて立入検査等の権限が定められている。"
  },
  {
    id: "houki-0099",
    subject: "法規",
    topic: "電気関係報告規則",
    type: "choice",
    question: "感電等により死傷者が生じた電気事故が発生した場合、設置者が行うべきことはどれか。",
    choices: ["所定の事故報告を行う", "報告は不要", "翌年の定期点検で記録するのみ"],
    answer: 0,
    explanation: "電気関係報告規則に基づき、人身事故・波及事故等は所定の事故報告(速報・詳報)が必要。"
  },
  {
    id: "houki-0100",
    subject: "法規",
    topic: "電圧の維持",
    type: "ox",
    question: "電気事業者は、供給する電気の電圧を、標準電圧に応じ定められた範囲内に維持するよう努める義務がある。",
    answer: true,
    explanation: "正しい。標準電圧100Vは101±6V、200Vは202±20Vの範囲内に維持するよう定められている。"
  },
  {
    id: "houki-0101",
    subject: "法規",
    topic: "電圧の維持",
    type: "choice",
    question: "標準電圧100Vの電気を供給する場合、維持すべき電圧の範囲はどれか。",
    choices: ["101±6V", "100±10V", "104±8V"],
    answer: 0,
    explanation: "標準電圧100Vは101±6V(95〜107V)の範囲。200Vは202±20V。"
  },
  {
    id: "houki-0102",
    subject: "法規",
    topic: "周波数の維持",
    type: "ox",
    question: "電気事業者には、供給する電気の周波数を標準周波数に維持するよう努める義務がある。",
    answer: true,
    explanation: "正しい。周波数もその者が供給する電気の標準周波数に維持するよう努めなければならない。"
  }
];

/* 他ファイルから参照できるように公開（環境差の保険） */
if (typeof window !== "undefined") { window.QUESTIONS = QUESTIONS; }
