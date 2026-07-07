# Codex引き継ぎメモ: atsushi-uechi.github.io

作成日: 2026-06-08  
対象フォルダ: `/Volumes/personal_folder/01_大学/04_研究室運営/2026/01_HP関連/atsushi-uechi.github.io`

## 目的

既存サイト `https://atsushi-uechi.github.io/` を参考に、GitHub Pagesで公開しやすい静的HTMLの個人HPを作成した。

元サイトは al-folio / Jekyll 系の研究者ページだったが、今回作成したものはビルド不要の静的サイト。GitHub Pagesの `Deploy from a branch` で、リポジトリ直下からそのまま公開できる構成にしている。

## 現在のフォルダ構成

```text
atsushi-uechi.github.io/
├── .nojekyll
├── README.md
├── index.html
├── research.html
├── publications.html
├── projects.html
├── teaching.html
├── news.html
├── news/
│   └── .gitkeep
├── docs/
│   └── お知らせ記事テンプレート.docx
└── assets/
    ├── css/
    │   └── style.css
    ├── icons/
    ├── js/
    │   └── main.js
    └── img/
        ├── profile/
        │   └── prof_pic.jpg
        ├── news/
        │   └── .gitkeep
        ├── research/
        │   └── .gitkeep
        └── projects/
            └── .gitkeep
```

`atsushi-uechi.github.io/.DS_Store` が存在する場合がある。Macの自動生成ファイルなので、GitHubへアップロードしない方がよい。

## 作成済みページ

- `index.html`: トップページ。プロフィール、研究分野、リンク、学歴、略歴。
- `research.html`: 研究内容。人流、観光行動、都市計画、防災・避難など。
- `publications.html`: 主要業績と受賞歴。
- `projects.html`: 研究プロジェクト用カード。
- `teaching.html`: 担当講義。
- `news.html`: お知らせ一覧。
- `news/`: 個別のお知らせ記事HTMLを置くフォルダ。
- `docs/`: Wordテンプレートや下書き資料を置くフォルダ。
- `assets/css/style.css`: 全ページ共通のレスポンシブデザイン。
- `assets/js/main.js`: スマホメニュー開閉と現在ページ表示。
- `assets/img/profile/`: プロフィール写真。
- `assets/img/news/`: お知らせ用画像。
- `assets/img/research/`: 研究紹介用画像。
- `assets/img/projects/`: プロジェクト用画像。

## GitHub Pages設定

GitHubリポジトリ名はユーザーサイト用の `atsushi-uechi.github.io` を想定。

GitHub Pagesは以下にする。

```text
Settings > Pages
Source: Deploy from a branch
Branch: main
Folder: /root
```

以前、PagesのBranchが `gh-pages` になっていた。今回のファイルを `main` ブランチ直下へ置く場合は、Branchを `main` に変更する必要がある。

## アップロード時の注意

GitHubリポジトリ直下は以下のようになっていればよい。

```text
.nojekyll
README.md
index.html
research.html
publications.html
projects.html
teaching.html
news.html
news/
docs/
assets/
```

重要:

- `atsushi-uechi.github.io` フォルダ自体ではなく、その中身をリポジトリ直下へ置く。
- `.git` フォルダは削除しない。
- `.nojekyll` はアップロードする。
- `.DS_Store` はアップロードしない。
- 既存のJekyll / al-folio関連ファイルを全削除して置き換えてよいが、元サイトへ戻したい可能性があるなら事前にバックアップか別ブランチを残す。
- 既存リポジトリに `CNAME` がある場合は独自ドメイン用なので、削除しない方がよい。

## 一括置き換えの例

ローカルでGitHubリポジトリをcloneして作業する場合:

```bash
git clone https://github.com/atsushi-uechi/atsushi-uechi.github.io.git
cd atsushi-uechi.github.io
git rm -r .
```

その後、このワークスペースの `atsushi-uechi.github.io` フォルダの中身を、cloneしたリポジトリ直下へ入れる。

最後に:

```bash
git add .
git commit -m "Replace website with new static site"
git push origin main
```

## ローカル確認方法

フォルダへ移動:

```bash
cd /Volumes/personal_folder/01_大学/04_研究室運営/2026/01_HP関連/atsushi-uechi.github.io
```

簡易サーバーを起動:

```bash
python3 -m http.server 8080
```

ブラウザで確認:

```text
http://127.0.0.1:8080/
```

確認後は `Ctrl+C` でサーバーを停止する。

## これまでの検証

以下を確認済み。

- デスクトップ幅でトップページが表示される。
- スマホ幅で横はみ出しがない。
- スマホメニューが開閉する。
- `prof_pic.jpg` がローカルから読み込まれる。
- 以下ページがHTTP 200で返る。
  - `/index.html`
  - `/research.html`
  - `/publications.html`
  - `/projects.html`
  - `/teaching.html`

## 今後の改善候補

- `publications.html` に全業績を追加する。※2026-06-10時点で、査読付き論文・学会発表・受賞の一覧を追記済み。
- `projects.html` のカードを実プロジェクト名・写真付きにする。
- `teaching.html` にシラバスリンクを追加する。
- GitHubアップロード前に `.DS_Store` を除外する。
- 必要なら `.gitignore` を追加する。

## 今後の記事・画像更新ルール

- ユーザーからWord原稿を受け取ったら、内容をHTML化して `news/` に個別記事として追加する。
- 記事一覧である `news.html` に、新しい記事へのリンクを追加する。
- 記事用画像は `assets/img/news/` に置き、HTMLからは `../assets/img/news/...` またはページ位置に応じた相対パスで参照する。
- 研究紹介用画像は `assets/img/research/`、プロジェクト用画像は `assets/img/projects/` に置く。
- Wordテンプレートや下書き資料は `docs/` に置く。
- 空フォルダをGitで保持するため、必要な空フォルダには `.gitkeep` を置いている。

## 次のCodexへの注意

このワークスペース直下はGitリポジトリではない。`git status` は失敗する可能性がある。Git操作をする場合は、GitHubからcloneした `atsushi-uechi.github.io` リポジトリ内で行うこと。

現時点の作成物はローカルフォルダ:

```text
/Volumes/personal_folder/01_大学/04_研究室運営/2026/01_HP関連/atsushi-uechi.github.io
```

にある。
