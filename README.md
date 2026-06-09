# Atsushi UECHI Website

GitHub Pages向けの静的HTMLサイトです。`index.html` を入口に、研究、業績、プロジェクト、講義ページへ移動できます。

## フォルダ構成

```text
atsushi-uechi.github.io/
├── index.html
├── research.html
├── publications.html
├── projects.html
├── teaching.html
├── news.html
├── news/
├── docs/
└── assets/
    ├── css/
    ├── js/
    ├── icons/
    └── img/
        ├── profile/
        ├── news/
        ├── research/
        └── projects/
```

## 更新時の置き場所

- お知らせ記事のHTML: `news/`
- お知らせ記事のWordテンプレートや下書き資料: `docs/`
- プロフィール写真: `assets/img/profile/`
- お知らせ用画像: `assets/img/news/`
- 研究紹介用画像: `assets/img/research/`
- プロジェクト用画像: `assets/img/projects/`

## 公開手順

1. GitHubで新しいリポジトリを作成します。
2. このフォルダの中身をリポジトリにアップロードします。
3. リポジトリの `Settings > Pages` で、`Deploy from a branch`、`main`、`/root` を選択します。
4. 数分後に `https://ユーザー名.github.io/リポジトリ名/` で公開されます。

ユーザーサイトとして公開する場合は、リポジトリ名を `atsushi-uechi.github.io` にしてください。
