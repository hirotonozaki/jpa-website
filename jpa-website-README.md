# 日本ペンマンシップ協会 公式サイト

英字の書法・装飾文字のアート「ペンマンシップ」の普及活動を行う団体、日本ペンマンシップ協会の公式サイトです。現在、実際に公開・運用されています。

協会の紹介から6書体のギャラリー、見学・入会の問い合わせ、会員専用エリアまでをまとめた全13ページのコーポレートサイトで、初めてペンマンシップに触れる人にも活動の魅力が伝わり、迷わず目的の情報へたどり着けることを目指して制作しました。

課題整理から情報設計・画面設計・デザイン調整・実装・検証まで、一貫して担当しています。

## リンク

| 種別 | URL |
| :--- | :--- |
| 公開サイト | https://japanpenmanship.org/ |
| サイト本体（GitHub） | https://github.com/hirotonozaki/jpa-website |
| 制作企画書 | https://hirotonozaki.github.io/jpa-project-proposal/ |
| 企画書（GitHub） | https://github.com/hirotonozaki/jpa-project-proposal |

企画書では、ターゲット設定・情報設計・画面設計・実装・検証までを工程ごとにまとめています。あわせてご覧いただくと、制作の背景まで把握いただけます。

## 担当範囲

デザイン方針・原稿・写真は協会側の素材をもとに、私はフロントエンドの実装を担当しました。

- 全ページの HTML / CSS コーディング
- JavaScript による UI 実装（ナビゲーション開閉・スライダー・スクロール連動アニメーションなど）
- PC / タブレット / スマートフォンへのレスポンシブ対応
- 各ブラウザ・端末での表示確認と調整

## 使用技術

| 分類 | 内容 |
| :--- | :--- |
| マークアップ | HTML5（セマンティックタグ） |
| スタイル | CSS3（reset＋common＋ページ別 / BEMライクな命名） |
| スクリプト | JavaScript / jQuery 3.6.1 |
| ライブラリ | slick（スライダー） |
| フォント | Google Fonts、FONTPLUS |
| その他 | OGP、Google カレンダー埋め込み、SVG |

## ページ構成（全13ページ）

トップページを「目次」と位置づけ、4つのテーマへ分岐させる構成にしています。

- `index.html` — TOP（目次）
- `about.html` — About Us（協会について）
- `penmanship.html` — Penmanship（ペンマンシップについて）
- `contact.html` — Contact（見学・入会の問い合わせ）
- `member.html` / `member-single.html` — Members Only（会員専用）
- `privacypolicy.html` — Privacy Policy

Penmanship 配下に、6書体の詳細ページを配置しています。

- `businesswriting.html` — Business Writing
- `raundhand.html` — Roundhand
- `ornamental.html` — Ornamental
- `germantext.html` — German Text
- `flourishing.html` — Flourishing
- `engrossing.html` — Engrossing

## 工夫した点

**情報を段階的に見せる**
スクロール位置を監視し、要素が画面に入ったタイミングで順に表示されるようにしました。情報量の多いページでも一度に見せず、視線を上から自然に誘導することで、読み進めやすさを意識しています。

**6書体ページの共通化**
特徴の異なる6書体の詳細ページを共通の構成・スタイルで構築しました。見た目を統一しつつ、内容の追加・修正がしやすい状態にしています。

**CSS設計の整理**
ヘッダー・フッター・ボタンなど全ページ共通のパーツは `common.css` に集約し、`block__element` 形式の命名で、どの要素のスタイルかを追いやすくしました。あとから別の人が触っても構造を把握しやすいことを意識しています。

**端末ごとの最適化**
スライダーの表示枚数を画面幅ごとに切り替え（PC 3枚 → タブレット 2枚 → スマートフォン 1枚）、どの端末でも見やすさを保つようにしました。

## 実装した主なUI

- ハンバーガーメニュー（スマートフォン時のナビ開閉）
- 写真・筆記具のスライダー（slick、表示枚数を画面幅で可変）
- Q&A のアコーディオン開閉
- スクロール連動のフェードイン表示
- ページトップへ戻るボタン
- 問い合わせフォーム（必須項目・アンケート・同意チェック）
- Google カレンダーの埋め込み、PDF 練習シートの配布

## レスポンシブ対応

PC・タブレット・スマートフォンの表示に対応しています。主なブレークポイントは 1024px / 768px / 500px で、画面幅に応じてレイアウト・ナビゲーション・スライダーの見せ方を切り替えています。

| 端末 | 画面幅 | 主な切り替え |
| :--- | :--- | :--- |
| PC | 1025px 以上 | ナビ横並び／スライダー3枚／2カラム中心 |
| タブレット | 768〜1024px | 余白調整／スライダー2枚／一部1カラム化 |
| スマートフォン | 500px 以下 | ハンバーガー／スライダー1枚／縦積み |

## 検証

Chrome・Safari・スマートフォン・タブレットで表示・動作を確認し、見つけた不具合を原因まで特定して修正しました（iPhone Safari のファーストビュー高さ、タブレットでの画像はみ出し、中間幅でのナビ余白、メニュー展開時の背景スクロールなど）。

## 今後の改善点

公開後も継続して改善していきたい点を、優先度をつけて整理しています。

- 画像（108点）の WebP 化・遅延読み込みによる初回表示の軽量化（優先度 高）
- jQuery のスクロール監視を IntersectionObserver へ置き換え（優先度 中）
- フォーカス表示・ARIA などアクセシビリティのさらなる向上（優先度 低）
- 問い合わせフォームの入力チェック・送信時フィードバックの強化（優先度 低）

## ファイル構成

```
jpa-website/
├── index.html            # TOP
├── about.html            # About Us
├── penmanship.html       # Penmanship
├── businesswriting.html  # 6書体の詳細ページ
├── raundhand.html
├── ornamental.html
├── germantext.html
├── flourishing.html
├── engrossing.html
├── contact.html          # Contact
├── member.html           # Members Only
├── member-single.html
├── privacypolicy.html    # Privacy Policy
├── css/
│   ├── reset.css
│   ├── common.css        # 全ページ共通スタイル
│   ├── top.css
│   ├── about.css
│   ├── gallery.css
│   ├── penmanship.css
│   ├── contact.css
│   ├── member.css
│   ├── member-single.css
│   └── privacypolicy.css
├── js/
│   └── common.js         # ナビ・スライダー・アニメーション等
├── slick/                # スライダーライブラリ
└── images/               # 画像素材（108点）
```

## プロジェクト数値

| 項目 | 値 |
| :--- | :--- |
| 総ページ数 | 13 |
| 使用画像数 | 108 点 |
| CSSファイル数 | 10 枚（自作） |
| レスポンシブ ブレークポイント | 3（1024 / 768 / 500px） |

---

制作：野崎 大翔（Hiroto Nozaki）
