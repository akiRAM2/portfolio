import { Gamepad2, Layers, Users, PenTool, Layout, Monitor, BookOpen } from 'lucide-react';

export const profile = {
  name: "akiRAM",
  role: "XR Content Creator / Community Manager",
  description: "メタバースを中心に活動するクリエイター。\n企画からデザイン、コミュニティ運営まで幅広く手がけています。",
  email: "akiram2022@gmail.com",
  socials: {
    twitter: "@akiram_vr",
    discord: "akiram_"
  }
};

export const skills = [
  { name: "Game Direction", icon: Gamepad2 },
  { name: "3D/2D Design", icon: Layers },
  { name: "Community Management", icon: Users },
  { name: "Technical Writing", icon: BookOpen },
  { name: "System & Network Admin (Former)", icon: Monitor },
];

export const projects = [
  {
    title: "SHOCK STICK",
    year: "2025",
    platform: "Resonite (VR)",
    role: "Direction, Design, Sound",
    description: "派手な演出のVRイライラ棒ゲーム。MMC25 “Other-Misc”部門 優勝。",
    category: "Game",
    tags: ["Director", "Designer"],
    imageUrl: "https://www.youtube.com/embed/fV47s69U8f0?rel=0",
    detail: `1ヵ月間でResonite上に制作した、国際コンペティション「MMC25」に向けた体感型VRアトラクションゲーム。

バラエティ番組で広く知られる「イライラ棒」の直感的なゲーム性とインパクトのある演出をVRで再現。Resoniteの特徴である「どこでもアイテムを取り出せる」機能と組み合わせることで、持ち運び可能な体感型ゲームとして実装しました。

【担当領域】企画立案、ディレクション、3D/2D/UIデザイン、ワールドデザイン、演出設計、SE・BGM、PV制作
※プログラミング以外の全工程を統括

直感的なUI設計、演出の完成度、ポータビリティの革新性が評価され、"Other-Misc"部門で優勝を獲得しました。

![SHOCK STICK画像](/portfolio/images/shockstick1.webp)
![SHOCK STICK画像](/portfolio/images/shockstick2.webp)
![SHOCK STICK画像](/portfolio/images/shockstick3.webp)

Credits:
@akiram_vr – Director, 3D Modeler, UI Designer, Sound
@moto_made – Game Designer, ProtoFlux
@soncho_shiba – Course Editor Developer, Particle
@linki_biotro9s7 – ProtoFlux, Particle
@y_esnya – ProtoFlux
@0_VEX_0 – Sound, Particle
`
  },
  {
    title: "いろいろおばけ",
    year: "2025",
    platform: "Resonite (VR)",
    role: "Game Design, 3D Assets",
    description: "VIVE LBEシステム向け協力型VRアクションゲーム。VIVExResonite LBEコンペティション最優秀賞",
    category: "Game",
    tags: ["Designer"],
    imageUrl: "https://www.youtube.com/embed/-ahH8RTy4pg?rel=0",
    detail: `WeaverseLab株式会社様主催の、Resoniteを使用したLBEコンテンツのコンペティション応募作品。

【担当領域】ゲームシステムのアイデア出し、3Dアセット制作

複数人で協力して遊ぶマルチプレイVR体験として設計。プレイヤー同士のコミュニケーションを促進するゲームメカニクスを考案し、世界観に合わせた3Dアセットを制作しました。

ゲームメカニクスとビジュアルの品質が評価され、【最優秀賞】を受賞しました🏆

▶ 動画: https://www.youtube.com/watch?v=-ahH8RTy4pg
▶ 詳細: https://x.com/akiram_vr/status/1974962804403708332


![いろいろおばけ画像](/portfolio/images/iroiro2.jpg)
![いろいろおばけ画像](/portfolio/images/iroiro3.jpg)

Credits:
sisizanohito - Leader
linki9s7 - Programmer
akiRAM - Designer
`
  },
  {
    title: "俺が盾になるよ",
    year: "2025",
    platform: "Resonite (VR)",
    role: "Planning, Direction",
    description: "VIVE LBEシステム向け一人用体感アクションゲーム。企画・ディレクション担当。",
    category: "Game",
    tags: ["Director", "Designer"],
    imageUrl: "https://www.youtube.com/embed/p3AnBvtT-xM?rel=0",
    detail: `WeaverseLab株式会社主催のResoniteを使用したVIVE LBEシステム向けコンペティション応募作品。

【担当領域】企画、ディレクション

プレイヤー自身の「身体」を盾に見立てて、ヒロインに向けて360度から迫る凶弾を自分の身で守る、LBE向け体感アクションゲーム。
企画・ディレクションを担当し3名で制作。


▶ 動画: https://www.youtube.com/watch?v=p3AnBvtT-xM
▶ 詳細: https://x.com/akiram_vr/status/1974057065141370990

Credits:
akiRAM - Direction, 3D Modeler, Voice
MotoMaid - Programmer, Level Designer
OGURI - 3D Modeler, Voice
`
  },
  {
    title: "下へ参ります。",
    year: "2024",
    platform: "Resonite (VR)",
    role: "3D/2D Design",
    description: "VRマルチプレイヤー間違い探しゲーム。MMC24 “Game”部門 優勝。",
    category: "Game",
    tags: ["Designer"],
    imageUrl: "https://www.youtube.com/embed/ycWLUtaFI3w?rel=0",
    detail: `1ヵ月の期間でResonite上に制作された、国際コンペティション「MMC24」向けVRマルチプレイ対応の間違い探しゲーム。

新興ジャンル「探索型間違い探し」にいち早く着目し、VR空間とマルチプレイ要素を統合した作品として差別化を図りました。

【担当領域】3D・2Dアセット制作、PV制作
限られた開発期間の中で、ホラーテイストと高い実在感を両立させたアセットデザインを実現。汎用性と拡張性を重視した設計により、効率的なワールド構築に貢献しました。

完成度の高いビジュアル表現とプロモーション戦略が評価され、激戦区である"Game"部門で優勝を獲得しました。

![下へ参ります画像](/portfolio/images/goingdown.webp)
![下へ参ります画像](/portfolio/images/goingdown2.webp)
![下へ参ります画像](/portfolio/images/goingdown3.webp)
![下へ参ります画像](/portfolio/images/goingdown4.webp)
![下へ参ります画像](/portfolio/images/goingdown5.webp)

Credits:
sisizanohito - Leader
linki9s7 - Programmer
akiRAM - Visual Artist`
  },
  {
    title: "Train Light",
    year: "2025",
    platform: "Unreal Engine 5",
    role: "All (Team of 2)",
    description: "リアルなライティング表現にこだわったショート動画。UE5ぷちコン参加作品。",
    category: "Video",
    tags: ["Visual Artist/Co-Director"],
    imageUrl: "/portfolio/images/train_light.jpg",
    detail: `UE5の次世代ライティング技術"Lumen"を活用した、1分間のリアルタイムレンダリング映像作品。1週間の制作期間で完成させ、「UE5ぷちコン 映像編」に出品しました。

【担当領域】ビジュアル全般、既存モデルのUE最適化、背景のキットバッシュ、Blueprint実装、ライティング設計、Niagaraパーティクル実装
コンテ・シーン設計：soncho氏 (https://x.com/soncho_shiba)

シングルカット・ドキュメンタリ風の構成で、Lumenの特徴である美しい反射表現とダイナミックライティングによるフォトリアルな映像美を追求。

本作品は公式配信にてピックアップ作品として紹介され、技術力と映像表現力を評価いただきました。

▶ 視聴リンク: https://www.youtube.com/embed/JxSERL5VrX4?rel=0

![Train Light画像](/portfolio/images/trainlight1.webp)
![Train Light画像](/portfolio/images/TrainLight2.webp)
![Train Light画像](/portfolio/images/TrainLight3.webp)
![Train Light画像](/portfolio/images/TrainLight4.webp)`
  },
  {
    title: "Steller Memories",
    year: "2024, 2025",
    platform: "Resonite (VR)",
    role: "Planner, Creator",
    description: "VR空間内の期間限定イベントワールド企画運営。",
    category: "Event",
    tags: ["Organizer"],
    imageUrl: "/portfolio/images/steller_memories.jpg",
    detail: `Resoniteサービス開始1周年を記念した、コミュニティアーカイブプロジェクト。VR空間の住民を登録・記録し、コミュニティの歴史を後世に残すことをコンセプトとしたイベントワールドです。

【実績】(1年目)1週間の稼働期間で279名の住民が登録(2年目)1週間の稼働期間で303名の住民が登録
【担当領域】企画、ワールド制作、イベント運営
登録システム開発：orange氏

SF的な神殿をモチーフに、荘厳かつ神聖な雰囲気を演出。来訪者が特別な体験をできる空間設計を目指しました。

**2年目 (2025):**
▶ 紹介動画: https://www.youtube.com/embed/QQoKfTf0gY4?rel=0

![Steller Memories 2年目](/portfolio/images/steallar4.jpg)
![Steller Memories 2年目](/portfolio/images/steallar5.jpg)

**1年目 (2024):**
▶ 紹介動画: https://www.youtube.com/embed/QmPZ7x7cQH0?rel=0

![Steller Memories 1年目](/portfolio/images/stellar2.webp)
![Steller Memories 1年目](/portfolio/images/stellar3.webp)
`
  },

  {
    title: "思い出降る空",
    year: "2023",
    platform: "Unity",
    role: "Direction, Design",
    description: "縦スクロールジャンプアクションゲーム。Unity1週間ゲームジャム参加作品。",
    category: "Game",
    tags: ["Director"],
    imageUrl: "/portfolio/images/omoide_furu_sora.png",
    detail: `ブラウザゲーム共有プラットフォーム「Unityroom」で開催された「Unity1週間ゲームジャム」参加作品。ワンボタン操作の縦スクロール型2Dアクションゲームとして、1プレイ2-3分で楽しめる設計を実現しました。

【担当領域】ディレクション、背景グラフィック、ロゴデザイン

限られた開発期間内でフルスクラッチ制作されたグラフィック・サウンド・BGMの統一感と世界観の一貫性にこだわり、完成度の高い作品に仕上げました。

▶ プレイはこちら: https://unityroom.com/games/omoide-huru-sora`
  },

  {
    title: "3DCGすきー!",
    year: "Ongoing",
    platform: "Misskey",
    role: "Admin",
    description: "450人規模のMisskeyサーバー運営。",
    category: "Community",
    tags: ["Community Manager"],
    imageUrl: "/portfolio/images/3dcgsuki.png",
    detail: `3DCG愛好者が集まるコミュニティスペースとして、分散型SNS「Misskey」上に専用サーバーを共同開設。

定期イベント「モデリングジャム」の企画・運営を通じて、450名規模のコミュニティへと成長させました。
現在は分散型SNS「Concrnt」上のチャンネルとして、継続的な運営を行っています。

【役割】サーバー管理、イベント企画・運営

▶ Concrnt内の3DCGスキ!コミュニティ: https://concrnt.world/timeline/t9f9xc9t3eegkxnqf06a6x7qm0c@ariake.concrnt.net

![3DCGすきー画像](/portfolio/images/3dcgsuki_event.webp)`
  }
];

export const assets = [
  {
    title: "BOOTHアセット販売",
    year: "Ongoing",
    description: "VRChat向けアクセサリー・3Dアセット販売",
    category: "Assets",
    tags: ["3D Assets", "Sales"],
    imageUrl: "/portfolio/images/booths.jpg",
    detail: `主にVRChat向けアクセサリー・背景3Dアセットを「BOOTH」にて販売。「端子しっぽ」などニッチな需要に応えるアクセサリー商品を展開しています。

バーチャル空間上の商品展示会「バーチャルマーケット」「メタフェス」「X-NEOKET」等にも出展。

【ショップ情報】
▶ 個人ショップ「akiRAM」: https://akiram.booth.pm/
▶ 共同ショップ「SHIBRAMS」(soncho氏と共同運営): https://shibrams.booth.pm/


![BOOTHイベント画像](/portfolio/images/event1.jpg)
Vket2024 Winterに出展している様子

![BOOTHイベント画像](/portfolio/images/event2.jpg)
Vket2025 Winterに出展している様子

![BOOTHイベント画像](/portfolio/images/event3.jpg)
『サキュバス酒場』に掲示している様子`
  },
  {
    title: "VketReal 2024 Summer 'AVATAR MEETS'",
    year: "2024",
    description: "お祭りテーマの小物アセット制作©WeaverseLab株式会社",
    category: "Assets",
    tags: ["3D Assets"],
    imageUrl: "/portfolio/images/vketreal2024.webp",
    detail: `『VketReal 2024 Summer - AVATAR MEETS』における、お祭りをテーマにしたリアル連動コンテンツの3Dアセット制作を担当。(©WeaverseLab株式会社)

【制作アセット】太鼓、杵・臼、土俵など
日本らしいモチーフを実在感のある質感で表現しつつ、VR空間での映えを意識した揺れもの要素や、インタラクションに応じたEmission発光ギミックを使用できるようにしました。視覚的な楽しさとインタラクティブ性を両立させました。

▶ デモ動画: https://www.youtube.com/embed/76yVSJMtiG4?rel=0

![VketReal画像](/portfolio/images/vketreal2024_2.webp)`
  },
  {
    title: "コンビニおにぎり/Konbini Onigiri",
    year: "2025",
    description: "VRおにぎり開封シミュレーター",
    category: "World",
    tags: ["3D Assets"],
    imageUrl: "https://www.youtube.com/embed/zEC--DewPHM?rel=0",
    detail: `Resonite上に実装されたVRおにぎり開封シミュレーター。

【担当領域】おにぎり3Dモデル、背景3Dアセット制作

おにぎりの開封アニメーションをBlendshapeに焼き込むことで、VR空間内で自然なインタラクションによる開封体験を実現。
フィルムを剥がす動作に対応して滑らかに変形するモデル設計により、リアルなフィードバックを提供しています。

▶ デモ動画: https://www.youtube.com/watch?v=zEC--DewPHM

![コンビニおにぎり画像](/portfolio/images/konbini2.webp)
![コンビニおにぎり画像](/portfolio/images/konbini3.webp)
![コンビニおにぎり画像](/portfolio/images/konibini4.webp)
Credit:
MotoMaid
akiRAM
doron`
  },
  {
    title: "すごトーク!",
    year: "2023",
    description: "NeosVR(現:Resonite)上の話題すごろくワールド",
    category: "World",
    tags: ["3D Assets", "Logo Design"],
    imageUrl: "https://www.youtube.com/embed/H3fBKUaqlHU?rel=0",
    detail: `NeosVR(現:Resonite)上に作られた話題すごろくワールド。

【担当領域】背景アセット、ロゴデザイン、紹介PV制作

教育番組のような親しみやすくポップな絵柄というオーダーに合わせ、低負荷を意識してアセットを制作しました。

▶ 紹介PV: https://www.youtube.com/watch?v=H3fBKUaqlHU

![すごトーク画像](/portfolio/images/sugotalk.webp)
![すごトーク画像](/portfolio/images/sugotalk2.webp)
![すごトーク画像](/portfolio/images/sugotalk3.webp)

Credit:
linki9s7(Leader)
`
  }
];

export const articles = [
  {
    title: "XiexeToonマテリアル設定ガイド",
    description: "Resonite内トゥーンシェーダー「XiexeToon」の詳細な使い方と設定方法を解説。",
    url: "https://note.com/akiram_vr/n/n00509a37a7f6",
    platform: "note",
    imageUrl: "/portfolio/images/xiexetoon2.jpg"
  },
  {
    title: "Resoniteひとくち技術メモ - パーティクル編",
    description: "Resoniteでパーティクルシステムを使用する際の基本的な設定方法と、実践的なテクニックを初心者向けに解説。",
    url: "https://note.com/akiram_vr/n/n4a237ffe0f58",
    platform: "note",
    imageUrl: "/portfolio/images/particle.webp"
  },
  {
    title: "Resoniteひとくち技術メモ - 浮遊プラットフォーム編",
    description: "Resoniteで浮遊するプラットフォームを実装する方法を、ステップバイステップで丁寧に解説。",
    url: "https://note.com/akiram_vr/n/n7caee96cf6b6",
    platform: "note",
    imageUrl: "/portfolio/images/platform.webp"
  },
  {
    title: "Resoniteで3Dモデルを配布しよう！",
    description: "Resoniteで自作3Dモデルを他のユーザーに配布する方法を、初心者向けに分かりやすく解説。",
    url: "https://note.com/akiram_vr/n/nf1b28fdf246b",
    platform: "note",
    imageUrl: "/portfolio/images/3dmodel.webp"
  },
  {
    title: "分散型SNS「Concrnt」の紹介",
    description: "次世代分散型SNS「Concrnt」の特徴と使い方を、導入から基本操作まで分かりやすく紹介。",
    url: "https://note.com/akiram_vr/n/nfe5419e4ba2a",
    platform: "note",
    imageUrl: "/portfolio/images/concrnt.webp"
  },
  {
    title: "【手順解説】Resoniteヘッドレスサーバの建て方！",
    description: "Resoniteのヘッドレスサーバーをセットアップするための完全ガイド。初めての方でも迷わず構築できるよう詳細に解説。",
    url: "https://note.com/akiram_vr/n/n695fca3ac4f8",
    platform: "note",
    imageUrl: "/portfolio/images/headless.webp"
  }
];

export const certifications = [
  {
    name: "TOEIC L&R",
    score: "890",
    date: "2025"
  },
  {
    name: "CGクリエイター検定",
    level: "エキスパート",
    date: "2025"
  },
  {
    name: "インテル PCマイスター",
    level: "<中級>",
    date: "2025"
  },
  {
    name: "CCNA",
    level: "(Cisco Certified Network Associate)",
    date: "2019"
  }
];
