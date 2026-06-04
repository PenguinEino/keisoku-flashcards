const cards = [
  {
    answer: "測定",
    aliases: ["そくてい"],
    prompt: "ある量を、基準として用いる量と比較して、数値または符号で表すこと。",
    hint: "test.pdf 1番の最初の空欄。目的達成まで含む「計測」と区別する。",
    detail: "装置などで量を数値化する行為。計測は、その数値を使って判断し目的を達成するところまで含む。",
    pages: "slide 6",
    tags: ["test", "supplement"],
  },
  {
    answer: "計測",
    aliases: ["けいそく"],
    prompt: "特定の目的をもって物事を量的にとらえる手段・方法を考究し、実施し、目的を達成すること。",
    hint: "測った数値をもとに判断を下すところまで含む語。",
    detail: "JISで示される定義。単なる数値化である測定より広い。",
    pages: "slide 6-7",
    tags: ["red", "test"],
  },
  {
    answer: "量",
    aliases: ["りょう"],
    prompt: "現象、物体、物質の持つ属性で、定量的に区別・決定できるもの。",
    hint: "「A君の身長は185.7 cm」の身長のように、数で扱える属性。",
    detail: "計測では、対象を量としてとらえることで比較・数値化できる。",
    pages: "slide 7",
    tags: ["red"],
  },
  {
    answer: "量的",
    aliases: ["りょうてき"],
    prompt: "物事を数値や数量として扱える方向でとらえる性質。",
    hint: "計測の定義中の「物事を○○にとらえる」に入る語。",
    detail: "計測は物事を量的にとらえ、目的に応じて測定・判断する。",
    pages: "slide 7",
    tags: ["red"],
  },
  {
    answer: "定量的",
    aliases: ["ていりょうてき"],
    prompt: "主観的な表現ではなく、数値で区別・決定できること。",
    hint: "「背が高い」ではなく「身長185.7 cm」のような表し方。",
    detail: "量は定量的に区別でき、定量的に決定できる属性として扱う。",
    pages: "slide 7",
    tags: ["red"],
  },
  {
    answer: "定量的表現",
    aliases: ["定量表現"],
    prompt: "誰が見ても同じ意味になるよう、数値として表す表現。",
    hint: "定性的表現は主観が入り、具体性に欠ける。",
    detail: "計測結果は定量的表現にすることで比較や判断に使える。",
    pages: "slide 8",
    tags: ["red"],
  },
  {
    answer: "有効数字",
    aliases: ["有効桁", "有効桁数"],
    prompt: "測定値の確度を考慮した上で、意味のある有効な数字。",
    hint: "桁数は測定の精度を表す。",
    detail: "例: 4.00 V は 3桁、0.0230 は 3桁。位取りの0と有効な0を区別する。",
    pages: "slide 9-14",
    tags: ["red"],
  },
  {
    answer: "測定の精度",
    aliases: ["精度"],
    prompt: "測定値における有効数字の桁数が表しているもの。",
    hint: "有効数字が多いほど、より細かい桁まで意味を持つ。",
    detail: "ただし精度は正確さと精密さの両方を含む用語としても使われる。",
    pages: "slide 9, 80",
    tags: ["red"],
  },
  {
    answer: "小さい数値",
    aliases: ["最も有効桁数が小さい数値"],
    prompt: "有効桁数が異なる数値を使った計算で、結果の表記を合わせる基準。",
    hint: "演算に用いた数値のうち、最も有効桁数がどうなっているもの？",
    detail: "測定値を含む四則演算では、基本的に最も有効桁数が小さい数値に合わせて丸める。",
    pages: "slide 13",
    tags: ["red"],
  },
  {
    answer: "丸め",
    aliases: ["rounding", "数値の丸め"],
    prompt: "数値を有効数字の桁数で表現するため、有効桁数を超える桁を処理すること。",
    hint: "一般には四捨五入。JISでは5ちょうどの扱いに偶数丸めがある。",
    detail: "計算途中ではなく、最終結果で丸めるのが基本。",
    pages: "slide 14",
    tags: ["red"],
  },
  {
    answer: "組立単位",
    aliases: ["誘導単位", "組み立て単位"],
    prompt: "基本単位から組み立てられた単位。",
    hint: "test.pdf 1(2)の空欄。長さ、質量、時間などから導かれる。",
    detail: "基本単位と組立単位によって単位の定義体系が作られる。",
    pages: "slide 19-20",
    tags: ["red", "test"],
  },
  {
    answer: "単位系",
    aliases: ["単位の定義体系"],
    prompt: "基本単位と組立単位によって構成された単位の定義体系。",
    hint: "SIはこの代表例。",
    detail: "計測では量を同じ基準で比較するため、単位系が必要になる。",
    pages: "slide 19",
    tags: ["red"],
  },
  {
    answer: "国際単位系",
    aliases: ["SI", "Système International d'Unités"],
    prompt: "長さ m、質量 kg、時間 s、電流 A、熱力学温度 K、物質量 mol、光度 cd の7基本単位を持つ単位系。",
    hint: "test.pdf 1(3)の SI の正式名称。",
    detail: "補助単位として平面角 rad、立体角 sr も扱われる。",
    pages: "slide 20",
    tags: ["red", "test"],
  },
  {
    answer: "時間",
    aliases: ["time"],
    prompt: "力学現象で、長さ・質量とともに基本単位として設定される量。",
    hint: "test.pdf 1(2)(3)の空欄。単位記号は s。",
    detail: "SI基本単位では、時間の単位名称は秒。",
    pages: "slide 19-21",
    tags: ["red", "test"],
  },
  {
    answer: "秒",
    aliases: ["second"],
    prompt: "SI基本単位における時間の単位名称。",
    hint: "単位記号は s。",
    detail: "セシウム133原子の遷移に対応する放射周期を用いて定義される。",
    pages: "slide 21",
    tags: ["red"],
  },
  {
    answer: "s",
    aliases: ["秒"],
    prompt: "SI基本単位で、時間を表す単位記号。",
    hint: "second の記号。",
    detail: "時間の単位名称は秒、単位記号は s。",
    pages: "slide 21",
    tags: ["red", "test"],
  },
  {
    answer: "センチ",
    aliases: ["c", "10^-2", "10−2"],
    prompt: "10 cm³ = 10 × (□ m)³ = 10⁻⁵ m³ の □ に対応する接頭語の倍率。",
    hint: "1 cm = 10⁻² m。",
    detail: "test.pdf 1(4)では □ は 10⁻²。cm³ では長さの換算を3乗する。",
    pages: "test.pdf 1(4)",
    tags: ["test", "calc", "supplement"],
  },
  {
    answer: "マイクロ",
    aliases: ["µ", "μ", "10^-6", "10−6"],
    prompt: "1 µs⁻¹ = (□ s)⁻¹ = 10⁶ s⁻¹ の □ に対応する接頭語の倍率。",
    hint: "1 µs = 10⁻⁶ s。逆数にすると 10⁶ s⁻¹。",
    detail: "test.pdf 1(4)では □ は 10⁻⁶。",
    pages: "test.pdf 1(4)",
    tags: ["test", "calc", "supplement"],
  },
  {
    answer: "量子標準",
    aliases: ["量⼦標準"],
    prompt: "量子レベルで解析された物理現象を用いて、標準を実現する考え方。",
    hint: "test.pdf 1(6)の空欄。電気標準の実現に関係する。",
    detail: "ジョセフソン効果による電圧標準、量子ホール効果による抵抗標準が代表例。",
    pages: "slide 22, 44-49",
    tags: ["red", "test"],
  },
  {
    answer: "長さ",
    aliases: ["⻑さ"],
    prompt: "SI基本単位の量の一つで、単位名称はメートル。",
    hint: "単位記号は m。",
    detail: "力学現象では長さ・質量・時間から他の単位を導ける。",
    pages: "slide 23",
    tags: ["red"],
  },
  {
    answer: "メートル",
    aliases: ["meter", "metre"],
    prompt: "SI基本単位における長さの単位名称。",
    hint: "単位記号は m。",
    detail: "光速度など自然定数に基づいて定義される。",
    pages: "slide 23",
    tags: ["red"],
  },
  {
    answer: "m",
    aliases: ["メートル"],
    prompt: "SI基本単位で、長さを表す単位記号。",
    hint: "meter の記号。",
    detail: "test.pdf の換算問題では cm から m へ直す。",
    pages: "slide 23",
    tags: ["red", "test"],
  },
  {
    answer: "質量",
    aliases: ["しつりょう"],
    prompt: "SI基本単位の量の一つで、単位名称はキログラム。",
    hint: "単位記号は kg。",
    detail: "2018年改訂で物理定数に基づく定義になった。",
    pages: "slide 25, 43",
    tags: ["red", "test"],
  },
  {
    answer: "キログラム",
    aliases: ["kilogram"],
    prompt: "SI基本単位における質量の単位名称。",
    hint: "単位記号は kg。",
    detail: "kg はSI基本単位の中で接頭語を含む名称になっている。",
    pages: "slide 25",
    tags: ["red", "test"],
  },
  {
    answer: "kg",
    aliases: ["キログラム"],
    prompt: "SI基本単位で、質量を表す単位記号。",
    hint: "kilogram の記号。",
    detail: "test.pdf の基本単位列にも出る。",
    pages: "slide 25",
    tags: ["red", "test"],
  },
  {
    answer: "電流",
    aliases: ["でんりゅう"],
    prompt: "SI基本単位の量の一つで、単位名称はアンペア。",
    hint: "test.pdf 1(3)にも出る。単位記号は A。",
    detail: "可動コイル形計器では、回路内の電流によりトルクが発生する。",
    pages: "slide 28, 67",
    tags: ["red", "test"],
  },
  {
    answer: "アンペア",
    aliases: ["ampere"],
    prompt: "SI基本単位における電流の単位名称。",
    hint: "単位記号は A。",
    detail: "電気標準や可動コイル形計器の理解でも重要。",
    pages: "slide 28",
    tags: ["red", "test"],
  },
  {
    answer: "A",
    aliases: ["アンペア"],
    prompt: "SI基本単位で、電流を表す単位記号。",
    hint: "ampere の記号。",
    detail: "磁界の強さ H の単位 A/m、透磁率 μ の単位計算にも使う。",
    pages: "slide 28",
    tags: ["red", "test"],
  },
  {
    answer: "熱力学温度",
    aliases: ["熱⼒学温度", "温度"],
    prompt: "SI基本単位の量の一つで、単位名称はケルビン。",
    hint: "test.pdf 1(3)の基本単位列に出る。単位記号は K。",
    detail: "温度の標準や不確かさの例でも扱われる。",
    pages: "slide 30",
    tags: ["red", "test"],
  },
  {
    answer: "ケルビン",
    aliases: ["kelvin"],
    prompt: "SI基本単位における熱力学温度の単位名称。",
    hint: "単位記号は K。",
    detail: "基本単位7個の一つ。",
    pages: "slide 30",
    tags: ["red", "test"],
  },
  {
    answer: "K",
    aliases: ["ケルビン"],
    prompt: "SI基本単位で、熱力学温度を表す単位記号。",
    hint: "kelvin の記号。",
    detail: "温度の単位記号として使う。",
    pages: "slide 30",
    tags: ["red", "test"],
  },
  {
    answer: "物質量",
    aliases: ["ぶっしつりょう"],
    prompt: "SI基本単位の量の一つで、単位名称はモル。",
    hint: "単位記号は mol。",
    detail: "基本単位7個の一つ。",
    pages: "slide 32",
    tags: ["red", "test"],
  },
  {
    answer: "モル",
    aliases: ["mole"],
    prompt: "SI基本単位における物質量の単位名称。",
    hint: "単位記号は mol。",
    detail: "化学量の基準になるSI基本単位。",
    pages: "slide 32",
    tags: ["red", "test"],
  },
  {
    answer: "mol",
    aliases: ["モル"],
    prompt: "SI基本単位で、物質量を表す単位記号。",
    hint: "mole の記号。",
    detail: "国際単位系の7基本単位の一つ。",
    pages: "slide 32",
    tags: ["red", "test"],
  },
  {
    answer: "光度",
    aliases: ["こうど"],
    prompt: "SI基本単位の量の一つで、単位名称はカンデラ。",
    hint: "単位記号は cd。",
    detail: "国際単位系の7基本単位の一つ。",
    pages: "slide 34",
    tags: ["red", "test"],
  },
  {
    answer: "カンデラ",
    aliases: ["candela"],
    prompt: "SI基本単位における光度の単位名称。",
    hint: "単位記号は cd。",
    detail: "光の強さを表す基本単位。",
    pages: "slide 34",
    tags: ["red", "test"],
  },
  {
    answer: "cd",
    aliases: ["カンデラ"],
    prompt: "SI基本単位で、光度を表す単位記号。",
    hint: "candela の記号。",
    detail: "国際単位系の7基本単位の一つ。",
    pages: "slide 34",
    tags: ["red", "test"],
  },
  {
    answer: "普遍性",
    aliases: ["ふへんせい"],
    prompt: "長さ、時間、重さなどの物理量の標準である単位に求められる性質。",
    hint: "test.pdf 1(5)の空欄。基準標準は可能な限りどうあるべきか。",
    detail: "自然現象や物理定数に基づく定義が使われるのは、普遍性を高めるため。",
    pages: "slide 43",
    tags: ["red", "test"],
  },
  {
    answer: "電気標準",
    aliases: ["でんきひょうじゅん"],
    prompt: "多くの計測量が電気量に変換されるため、計測で重要な標準の一つ。",
    hint: "test.pdf 1(5)の空欄。ジョセフソン効果と量子ホール効果が代表。",
    detail: "直流電圧標準、直流抵抗標準などがある。",
    pages: "slide 44",
    tags: ["red", "test"],
  },
  {
    answer: "ジョセフソン効果電圧標準",
    aliases: ["ジョセフソン効果電圧標準装置"],
    prompt: "1977年以降、直流電圧標準として使われる量子標準装置。",
    hint: "従来のウェストン電池に代わる電圧標準。",
    detail: "ジョセフソン効果を用いて、再現性の高い直流電圧を実現する。",
    pages: "slide 45",
    tags: ["red", "test"],
  },
  {
    answer: "ジョセフソン効果",
    aliases: ["Josephson effect"],
    prompt: "弱く結合した2つの超伝導体の間に、超伝導電子対のトンネル効果で超伝導電流が流れる現象。",
    hint: "test.pdf 1(6)の直流電圧標準に関する空欄。",
    detail: "照射マイクロ波により電圧電流特性がステップ状に変化し、電圧標準へ応用される。",
    pages: "slide 46",
    tags: ["red", "test"],
  },
  {
    answer: "量子ホール効果",
    aliases: ["量⼦ホール効果", "quantum Hall effect"],
    prompt: "二次元電子系に垂直磁場を印加したとき、ホール抵抗が階段状に量子化される現象。",
    hint: "test.pdf 1(6)の抵抗標準に関する空欄。",
    detail: "1980年にフォン・クリッツィングらにより発見され、直流抵抗標準に応用される。",
    pages: "slide 49",
    tags: ["red", "test"],
  },
  {
    answer: "標準電池",
    aliases: ["ウェストン電池", "中性飽和型カドミウム電池"],
    prompt: "過去に直流電圧標準として利用された標準器。",
    hint: "20℃で起電力が約 1.01864 V。",
    detail: "個体差、内部抵抗、分極作用、温度差などに注意が必要。",
    pages: "slide 51",
    tags: ["red"],
  },
  {
    answer: "ツェナーダイオード",
    aliases: ["Zener diode"],
    prompt: "逆方向電圧 Vz が、電流が増加してもほとんど一定になる素子。",
    hint: "一般に 5〜40 V 程度の直流電圧標準として利用される。",
    detail: "温度係数が小さい、動作抵抗が小さい、動作電流を一定に保つことが選定条件。",
    pages: "slide 52",
    tags: ["red"],
  },
  {
    answer: "共通の標準",
    aliases: ["共通標準"],
    prompt: "すべての測定で個別の標準を用意できないため、適切な機関で作成される標準。",
    hint: "test.pdf 1(7)の空欄候補。これと測定器の指示を関係づける。",
    detail: "この標準に基づいて計測器の指示値を定期的に修正する。",
    pages: "slide 54",
    tags: ["test", "supplement"],
  },
  {
    answer: "校正",
    aliases: ["calibration", "こうせい"],
    prompt: "標準に基づいて、定期的に計測器の指示値を修正すること。",
    hint: "test.pdf 1(7)の空欄。英語では calibration。",
    detail: "計測器の指示と標準の関係づけを行い、測定値の信頼性を保つ。",
    pages: "slide 54",
    tags: ["red", "test"],
  },
  {
    answer: "トレーサビリティー",
    aliases: ["トレーサビリティ", "traceability"],
    prompt: "測定結果が、国際または国家標準のような適切な標準に、切れ目のない比較の連鎖で関連づけられること。",
    hint: "test.pdf 1(8)の空欄。標準をたどると国家計量標準につながる。",
    detail: "品質や信頼性の根拠になる。",
    pages: "slide 57",
    tags: ["red", "test"],
  },
  {
    answer: "直接測定法",
    aliases: ["直接測定", "直接"],
    prompt: "被測定量とその基準量とを、計測器によって直接比較して結果を得る方法。",
    hint: "test.pdf 1(9)の前半の空欄。",
    detail: "例: 被測定量の電流を電流計で直接測定する。",
    pages: "slide 63, 84",
    tags: ["red", "test"],
  },
  {
    answer: "間接測定法",
    aliases: ["間接測定", "間接"],
    prompt: "いくつかの量を直接測定した結果から、計算によって最終的な測定結果を得る方法。",
    hint: "test.pdf 1(9)の後半の空欄。",
    detail: "例: 電圧降下と電流を測って、オームの法則から抵抗を求める。",
    pages: "slide 64, 85",
    tags: ["red", "test"],
  },
  {
    answer: "絶対測定",
    aliases: ["ぜったいそくてい"],
    prompt: "長さ、質量、時間などSI基本単位の定義に従って測定する方法。",
    hint: "比較測定と対になる分類。",
    detail: "基本単位の定義に直接つながる測定。",
    pages: "slide 65, 86",
    tags: ["red"],
  },
  {
    answer: "比較測定",
    aliases: ["⽐較測定"],
    prompt: "同種の物理量との比較により測定する方法。",
    hint: "絶対測定と対になる分類。電気量どうしの比較など。",
    detail: "既知量・標準量との比較で未知量を求める。",
    pages: "slide 65, 86",
    tags: ["red"],
  },
  {
    answer: "受動的測定",
    aliases: ["じゅどうてきそくてい"],
    prompt: "測定対象・現象にエネルギーを与えずに測定する計測手法。",
    hint: "例: 地震計による地震波動の伝搬計測。",
    detail: "対象に働きかける能動的測定と対になる。",
    pages: "slide 66, 87",
    tags: ["red"],
  },
  {
    answer: "能動的測定",
    aliases: ["のうどうてきそくてい"],
    prompt: "測定対象にエネルギーを与えるなど、働きかけて測定する手法。",
    hint: "例: 抵抗に電圧を印加して電流を測り、抵抗値を求める。",
    detail: "対象にエネルギーを与えない受動的測定と対になる。",
    pages: "slide 66, 87",
    tags: ["red"],
  },
  {
    answer: "偏位法",
    aliases: ["へんいほう"],
    prompt: "被測定量に対して、法則に関連づけられる量を指示する計測器を用いる方法。",
    hint: "test.pdf 1(10)の空欄。可動コイル形の電圧計が例。",
    detail: "測定対象に計測器を接続することで、回路状態が変化する影響は避けにくい。",
    pages: "slide 67, 88",
    tags: ["red", "test"],
  },
  {
    answer: "電気エネルギー",
    aliases: ["でんきエネルギー"],
    prompt: "可動コイル形の電圧計で、測定対象の回路内にあるもの。",
    hint: "test.pdf 1(10)の19番。これが力学的エネルギーへ変換される。",
    detail: "偏位法の例では、回路内の電気エネルギーが指針の振れに変換される。",
    pages: "slide 67",
    tags: ["test", "supplement"],
  },
  {
    answer: "力学的エネルギー",
    aliases: ["⼒学的エネルギー", "指針の振れ"],
    prompt: "可動コイル形の電圧計で、回路内の電気エネルギーが変換される先。",
    hint: "test.pdf 1(10)の20番。括弧内には指針の振れとある。",
    detail: "磁界中のコイルに電流を流すとトルクが発生し、指針が振れる。",
    pages: "slide 67",
    tags: ["test", "supplement"],
  },
  {
    answer: "トルク",
    aliases: ["torque"],
    prompt: "可動コイル形計器で、磁界中のコイルに電流を流したとき発生するもの。",
    hint: "指針の振れを生む力の回転版。",
    detail: "可動コイル形計器はこのトルクを利用した直流専用の指示計器。",
    pages: "slide 67",
    tags: ["supplement"],
  },
  {
    answer: "零位法",
    aliases: ["れいいほう"],
    prompt: "被測定量を可変な基準量と平衡させて測定する方法。",
    hint: "ホイーストンブリッジによる抵抗測定が例。",
    detail: "平衡条件を満たすまで値を変化させるフィードバック過程が必要。",
    pages: "slide 68, 89",
    tags: ["red"],
  },
  {
    answer: "母集団",
    aliases: ["population", "⺟集団"],
    prompt: "あるデータ全体の集団。",
    hint: "標本はここから抽出される。",
    detail: "統計処理では、測定値は母集団から抽出された標本として扱う。",
    pages: "slide 70, 90, 103",
    tags: ["red"],
  },
  {
    answer: "標本",
    aliases: ["sample"],
    prompt: "母集団から抽出されたデータの集団。",
    hint: "N個の測定値はこれとして扱われる。",
    detail: "標本から標本平均や標本標準偏差を計算する。",
    pages: "slide 70, 90, 103",
    tags: ["red"],
  },
  {
    answer: "母平均",
    aliases: ["ぼへいきん"],
    prompt: "母集団の平均。",
    hint: "標本平均とは違い、母集団全体に対する平均。",
    detail: "母平均は真の値や偏りの説明で使われる。",
    pages: "slide 70, 90",
    tags: ["red"],
  },
  {
    answer: "標本平均",
    aliases: ["標本平均値", "sample mean"],
    prompt: "標本の平均。",
    hint: "N個の測定値を足し、Nで割る。",
    detail: "複数回測定したときの最確値として使われることが多い。",
    pages: "slide 70, 90, 96, 99",
    tags: ["red"],
  },
  {
    answer: "真の値",
    aliases: ["true number", "真値"],
    prompt: "測定によって直接求めることはできないが、存在すると仮定する値。",
    hint: "測定値との差が誤差。",
    detail: "test.pdf の誤差計算では T = 10.00 V が真の値。",
    pages: "slide 71, 91",
    tags: ["red", "test"],
  },
  {
    answer: "誤差",
    aliases: ["error", "絶対誤差"],
    prompt: "測定値と真の値との差。",
    hint: "test.pdf 3番。M = 9.74 V、T = 10.00 V なら M - T。",
    detail: "符号つきなら -0.26 V。大きさだけなら 0.26 V。",
    pages: "slide 71, 91",
    tags: ["red", "test", "calc"],
  },
  {
    answer: "補正",
    aliases: ["correction"],
    prompt: "誤差を打ち消すために測定値へ加える修正。",
    hint: "誤差が M - T なら、補正は T - M の向き。",
    detail: "系統誤差が分かっている場合、測定結果の補正に利用できる。",
    pages: "slide 71, 91",
    tags: ["red"],
  },
  {
    answer: "誤差率",
    aliases: ["相対誤差"],
    prompt: "誤差を真の値で割って、割合で表したもの。",
    hint: "test.pdf 3番。M = 9.74 V、T = 10.00 V なら -0.26 / 10.00。",
    detail: "百分率では -2.6%。大きさだけ問う場合は 2.6%。",
    pages: "slide 71, 91",
    tags: ["red", "test", "calc"],
  },
  {
    answer: "正規分布",
    aliases: ["normal distribution"],
    prompt: "同じ量を同じ条件下で複数回繰り返した測定値が、統計上従う代表的な分布。",
    hint: "平均を中心に左右対称の山形になる分布。",
    detail: "68.3%、95.4%、99.7% の範囲理解にも関係する。",
    pages: "slide 74, 92, 102",
    tags: ["red"],
  },
  {
    answer: "正確さ",
    aliases: ["trueness"],
    prompt: "偏りの小ささの程度。",
    hint: "偏りが小さいほど正確。",
    detail: "系統誤差の小ささと関係する。",
    pages: "slide 78",
    tags: ["red"],
  },
  {
    answer: "精密さ",
    aliases: ["precision"],
    prompt: "ばらつきの小ささの程度。",
    hint: "ばらつきが小さいほど精密。",
    detail: "偶然誤差の小ささと関係する。",
    pages: "slide 79",
    tags: ["red"],
  },
  {
    answer: "不確かさ",
    aliases: ["uncertainty"],
    prompt: "測定値に含まれるすべての誤差の値の限界の推定値。",
    hint: "測定結果の疑わしさを定量的に表すパラメータ。",
    detail: "測定結果に付随する値のばらつきを特徴づける。",
    pages: "slide 80, 96",
    tags: ["red"],
  },
  {
    answer: "最確値",
    aliases: ["最良推定値"],
    prompt: "測定値として最も確からしい値。多くの場合、測定の平均値。",
    hint: "不確かさの表記 x = x0 ± Δx の x0。",
    detail: "複数回測定では標本平均を最確値として使うことが多い。",
    pages: "slide 96, 98, 118",
    tags: ["red"],
  },
  {
    answer: "標本標準偏差",
    aliases: ["sample standard deviation"],
    prompt: "N個の測定値のばらつきを表す標本の標準偏差。",
    hint: "標本の分散の平方根として扱う。",
    detail: "標本平均とともに、測定値のばらつき評価に使う。",
    pages: "slide 96, 99, 119",
    tags: ["red"],
  },
  {
    answer: "標本の分散",
    aliases: ["分散"],
    prompt: "標本標準偏差の二乗で表される、ばらつきの量。",
    hint: "標準偏差より単位は元の測定量の二乗になる。",
    detail: "統計処理で測定値のばらつきを定量化する。",
    pages: "slide 96, 99, 119",
    tags: ["red"],
  },
  {
    answer: "確率密度関数",
    aliases: ["probability density function", "p(y)"],
    prompt: "測定量 y が y と y + dy の間に入る確率を p(y)dy として表す関数。",
    hint: "母平均や母標準偏差を積分で定義するときに使う。",
    detail: "正規分布の山形曲線も確率密度関数の一つ。",
    pages: "slide 101, 102, 120",
    tags: ["red"],
  },
  {
    answer: "母数",
    aliases: ["parameter"],
    prompt: "母集団を特徴づける値。",
    hint: "母平均や母標準偏差など。",
    detail: "標本から推定する対象になる。",
    pages: "slide 103, 104",
    tags: ["red"],
  },
  {
    answer: "母標準偏差",
    aliases: ["population standard deviation"],
    prompt: "母集団全体の標準偏差。",
    hint: "標本標準偏差とは違い、母集団側のばらつき。",
    detail: "N が十分大きい場合、標本標準偏差は母標準偏差に近づく。",
    pages: "slide 101",
    tags: ["red"],
  },
  {
    answer: "誤差伝搬の法則",
    aliases: ["誤差の伝搬", "propagation of measurement error"],
    prompt: "間接測定で、直接測定された各量の誤差が最終結果へ伝わる関係を表す法則。",
    hint: "test.pdf 4番の P = I²R の誤差率に使う。",
    detail: "積やべき乗では相対誤差を係数つきで足す。P = I²R なら ΔP/P ≈ 2ΔI/I + ΔR/R。",
    pages: "slide 108-109, 121-122",
    tags: ["red", "test", "calc"],
  },
  {
    answer: "散布図",
    aliases: ["scatter plot"],
    prompt: "2つの量 x と y の測定結果を xy 平面に描いた図。",
    hint: "相関係数や直線回帰の前に見る図。",
    detail: "測定値間の関係を視覚的に確認する。",
    pages: "slide 110, 123",
    tags: ["red"],
  },
  {
    answer: "相関係数",
    aliases: ["correlation coefficient", "γ", "ガンマ"],
    prompt: "x と y の関係性を示す値。",
    hint: "1に近いほど正の相関が高い。",
    detail: "散布図とあわせて、測定値間の関係を調べる。",
    pages: "slide 110, 113-115, 123",
    tags: ["red"],
  },
  {
    answer: "正の相関",
    aliases: ["右肩上がり"],
    prompt: "x が増えると y も増える傾向。",
    hint: "散布図では右肩上がり。",
    detail: "相関係数が正で、1に近いほど関係が強い。",
    pages: "slide 111-113, 124-125",
    tags: ["red"],
  },
  {
    answer: "最小二乗法",
    aliases: ["最⼩⼆乗法", "least squares"],
    prompt: "測定点と近似直線の残差の二乗和が最小になるように係数を求める方法。",
    hint: "test.pdf 5番で、利得 G とオフセット電圧 F を求める方法。",
    detail: "y = Gx + F の直線回帰では、G が傾き、F が切片。",
    pages: "slide 114-115, 126-127",
    tags: ["red", "test", "calc"],
  },
  {
    answer: "直線回帰",
    aliases: ["linear regression"],
    prompt: "測定値の関係を y = ax + b のような直線で近似すること。",
    hint: "最小二乗法で係数を求める代表例。",
    detail: "test.pdf 5番では y = Gx + F として利得とオフセットを求める。",
    pages: "slide 115, 127",
    tags: ["red", "test", "calc"],
  },
  {
    answer: "標準偏差",
    aliases: ["standard deviation"],
    prompt: "測定値のばらつきを表す代表的な統計量。",
    hint: "タイプA評価では、統計的手法でばらつきを算出する。",
    detail: "標準不確かさや標本標準偏差の理解に必要。",
    pages: "slide 132",
    tags: ["red"],
  },
  {
    answer: "標準不確かさ",
    aliases: ["standard uncertainty"],
    prompt: "標準偏差として表した不確かさ。",
    hint: "タイプA評価やタイプB評価の結果を合成するときの基本単位。",
    detail: "統計的に求めるタイプAと、仕様・経験などから求めるタイプBがある。",
    pages: "slide 132, 136, 138",
    tags: ["red"],
  },
  {
    answer: "矩形分布",
    aliases: ["一様分布", "rectangular distribution"],
    prompt: "ある範囲内の値が同じ確率で起こるとみなす分布。",
    hint: "タイプB評価で、範囲だけ分かる場合によく使う。",
    detail: "幅から標準不確かさへ換算する場面で出る。",
    pages: "slide 137",
    tags: ["red"],
  },
  {
    answer: "偏り",
    aliases: ["bias"],
    prompt: "測定結果の中心が真の値からずれている量。",
    hint: "正確さは、この小ささの程度。",
    detail: "系統誤差と関係し、補正できる場合がある。",
    pages: "slide 74, 78, 138",
    tags: ["red"],
  },
  {
    answer: "合成標準不確かさ",
    aliases: ["combined standard uncertainty"],
    prompt: "複数の標準不確かさを、不確かさの伝搬則で合成したもの。",
    hint: "不確かさの伝搬則により求める。",
    detail: "複数要因の不確かさを一つの標準不確かさとしてまとめる。",
    pages: "slide 142",
    tags: ["red"],
  },
  {
    answer: "包含係数",
    aliases: ["coverage factor"],
    prompt: "合成標準不確かさに掛けて、拡張不確かさを求める係数。",
    hint: "記号 k で表されることが多い。",
    detail: "信頼の幅を広げるために使う。",
    pages: "slide 143",
    tags: ["red"],
  },
  {
    answer: "拡張不確かさ",
    aliases: ["expanded uncertainty"],
    prompt: "合成標準不確かさに包含係数を掛けて得られる不確かさ。",
    hint: "U = k uc の形で表す。",
    detail: "測定結果の範囲を示す実用的な表現。",
    pages: "slide 143",
    tags: ["red"],
  },
  {
    answer: "指示計器",
    aliases: ["指⽰計器"],
    prompt: "測定量を針や目盛などの指示として読み取る計器。",
    hint: "可動コイル形計器はこの一種。",
    detail: "電圧・電流・電力の測定で扱う。",
    pages: "slide 146",
    tags: ["red"],
  },
  {
    answer: "短所",
    aliases: ["デメリット"],
    prompt: "指示計器などの特性を説明するとき、利点に対して不利な点を表す語。",
    hint: "利点・長所の反対。",
    detail: "測定器は長所だけでなく、内部抵抗などによる測定誤差も考える必要がある。",
    pages: "slide 147",
    tags: ["red"],
  },
  {
    answer: "系統誤差",
    aliases: ["systematic error"],
    prompt: "一定方向に偏って生じる誤差。",
    hint: "内部抵抗による計測誤差など。補正に利用できる場合がある。",
    detail: "直流電圧・電流の計測では、内部抵抗による系統誤差を避けられない。",
    pages: "slide 160, 165",
    tags: ["red"],
  },
  {
    answer: "N/A²",
    aliases: ["N/A^2", "H/m", "ヘンリー毎メートル"],
    prompt: "B = μH、B の単位が T = N/(A·m)、H の単位が A/m のとき、透磁率 μ のSI単位。",
    hint: "μ = B/H。m が消えて A がもう一つ分母に残る。",
    detail: "test.pdf 2番。μ = [N/(A m)] / [A/m] = N/A²。H/m とも表せる。",
    pages: "test.pdf 2",
    tags: ["test", "calc", "supplement"],
  },
  {
    answer: "-0.26 V",
    aliases: ["0.26V", "-0.26[V]", "0.26[V]"],
    prompt: "測定値 M = 9.74 V、真の値 T = 10.00 V のときの誤差。",
    hint: "誤差 = M - T。",
    detail: "符号つきでは -0.26 V。絶対誤差として答えるなら 0.26 V。",
    pages: "test.pdf 3",
    tags: ["test", "calc", "supplement"],
  },
  {
    answer: "-2.6%",
    aliases: ["2.6%", "-0.026", "0.026"],
    prompt: "測定値 M = 9.74 V、真の値 T = 10.00 V のときの誤差率。",
    hint: "誤差率 = (M - T) / T × 100%。",
    detail: "(-0.26 / 10.00) × 100% = -2.6%。大きさだけなら 2.6%。",
    pages: "test.pdf 3",
    tags: ["test", "calc", "supplement"],
  },
  {
    answer: "±5%",
    aliases: ["5%", "±5[%]"],
    prompt: "P = I²R、抵抗の誤差率 ±1%、電流の誤差率 ±2% のとき、P の誤差率。",
    hint: "P の相対誤差は R の相対誤差 + 2×I の相対誤差。",
    detail: "±1% + 2×±2% = ±5%。誤差伝搬の法則を使う。",
    pages: "test.pdf 4",
    tags: ["test", "calc", "supplement"],
  },
  {
    answer: "G = 3.41, F = 0.63 V",
    aliases: ["G=3.41,F=0.63", "3.41,0.63", "利得3.41オフセット0.63"],
    prompt: "x = 1,2,3,4,5、y = 4.2,7.3,10.8,14.2,17.8 を y = Gx + F に最小二乗法で近似した結果。",
    hint: "x̄ = 3、ȳ = 10.86。G = Σ(xi-x̄)(yi-ȳ) / Σ(xi-x̄)²。",
    detail: "G = 34.1 / 10 = 3.41、F = 10.86 - 3.41×3 = 0.63 V。",
    pages: "test.pdf 5",
    tags: ["test", "calc", "supplement"],
  },
];

const state = {
  filter: "all",
  query: "",
  order: cards.map((_, index) => index),
  current: 0,
  flipped: false,
  learned: new Set(JSON.parse(localStorage.getItem("learnedCards") || "[]")),
};

const els = {
  card: document.getElementById("flashcard"),
  prompt: document.getElementById("promptText"),
  hint: document.getElementById("hintText"),
  answer: document.getElementById("answerText"),
  detail: document.getElementById("detailText"),
  tag: document.getElementById("tagText"),
  page: document.getElementById("pageText"),
  feedback: document.getElementById("feedbackText"),
  input: document.getElementById("answerInput"),
  form: document.getElementById("answerForm"),
  list: document.getElementById("cardList"),
  count: document.getElementById("cardCount"),
  progress: document.getElementById("progressCount"),
  search: document.getElementById("searchInput"),
};

function normalize(value) {
  return value
    .toString()
    .toLowerCase()
    .replace(/[ 　\t\n\r()[\]{}（）［］【】「」、。.,，:：;；/／\\・\-−ー_=＝±+＋]/g, "")
    .replace(/⼦/g, "子")
    .replace(/⽴/g, "立")
    .replace(/⽐/g, "比")
    .replace(/⼩/g, "小")
    .replace(/⻑/g, "長")
    .replace(/⼆/g, "二")
    .replace(/⽰/g, "示")
    .replace(/µ/g, "μ");
}

function filteredOrder() {
  const q = normalize(state.query);
  return state.order.filter((index) => {
    const card = cards[index];
    const tagMatch =
      state.filter === "all" ||
      (state.filter === "red" && card.tags.includes("red")) ||
      (state.filter === "test" && card.tags.includes("test")) ||
      (state.filter === "calc" && card.tags.includes("calc"));
    if (!tagMatch) return false;
    if (!q) return true;
    return normalize(
      [card.answer, card.prompt, card.hint, card.detail, card.pages, ...(card.aliases || [])].join(" ")
    ).includes(q);
  });
}

function currentCard() {
  const order = filteredOrder();
  if (order.length === 0) return null;
  state.current = Math.max(0, Math.min(state.current, order.length - 1));
  return cards[order[state.current]];
}

function render() {
  const order = filteredOrder();
  const card = currentCard();
  els.count.textContent = `${order.length} cards`;
  els.progress.textContent = `${state.learned.size} learned`;
  els.card.classList.toggle("flipped", state.flipped);
  els.list.innerHTML = "";

  order.forEach((cardIndex, position) => {
    const cardItem = cards[cardIndex];
    const li = document.createElement("li");
    li.className = position === state.current ? "active" : "";
    const mark = document.createElement("span");
    mark.textContent = state.learned.has(cardItem.answer) ? "✓" : "•";
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = cardItem.answer;
    button.addEventListener("click", () => {
      state.current = position;
      state.flipped = false;
      els.feedback.textContent = "";
      els.input.value = "";
      render();
    });
    li.append(mark, button);
    els.list.appendChild(li);
  });

  if (!card) {
    els.prompt.textContent = "該当するカードがありません。";
    els.hint.textContent = "";
    els.answer.textContent = "";
    els.detail.textContent = "";
    els.tag.textContent = "";
    els.page.textContent = "";
    return;
  }

  els.prompt.textContent = card.prompt;
  els.hint.textContent = card.hint;
  els.answer.textContent = card.answer;
  els.detail.textContent = card.detail;
  els.tag.textContent = card.tags.includes("red") ? "赤字語" : card.tags.includes("calc") ? "計算対策" : "補助";
  els.page.textContent = card.pages;
}

function saveLearned() {
  localStorage.setItem("learnedCards", JSON.stringify([...state.learned]));
}

function move(delta) {
  const order = filteredOrder();
  if (order.length === 0) return;
  state.current = (state.current + delta + order.length) % order.length;
  state.flipped = false;
  els.feedback.textContent = "";
  els.input.value = "";
  render();
}

document.getElementById("flipBtn").addEventListener("click", () => {
  state.flipped = !state.flipped;
  render();
});

document.getElementById("prevBtn").addEventListener("click", () => move(-1));
document.getElementById("nextBtn").addEventListener("click", () => move(1));

document.getElementById("knownBtn").addEventListener("click", () => {
  const card = currentCard();
  if (!card) return;
  state.learned.add(card.answer);
  saveLearned();
  move(1);
});

document.getElementById("shuffleBtn").addEventListener("click", () => {
  for (let i = state.order.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.order[i], state.order[j]] = [state.order[j], state.order[i]];
  }
  state.current = 0;
  state.flipped = false;
  render();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  state.learned.clear();
  saveLearned();
  render();
});

els.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.current = 0;
  state.flipped = false;
  render();
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    state.current = 0;
    state.flipped = false;
    render();
  });
});

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const card = currentCard();
  if (!card) return;
  const expected = [card.answer, ...(card.aliases || [])].map(normalize);
  const actual = normalize(els.input.value);
  const ok = actual.length > 0 && expected.some((value) => value === actual || value.includes(actual));
  els.feedback.className = ok ? "feedback good" : "feedback bad";
  els.feedback.textContent = ok ? "正解" : `もう一度。答えは「${card.answer}」`;
  if (ok) {
    state.learned.add(card.answer);
    saveLearned();
  }
  state.flipped = true;
  render();
});

document.addEventListener("keydown", (event) => {
  if (document.activeElement === els.input || document.activeElement === els.search) return;
  if (event.key === "ArrowRight") move(1);
  if (event.key === "ArrowLeft") move(-1);
  if (event.key === " ") {
    event.preventDefault();
    state.flipped = !state.flipped;
    render();
  }
});

render();
