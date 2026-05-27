---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

<div class="publications">

<h2>査読付き論文</h2>
{% bibliography --query @article %}

<h2>MISC（その他業績・査読なし論文など）</h2>
{% bibliography --query @misc %}

<h2>研究発表などの成果普及活動</h2>
{% bibliography --query @inproceedings %}

<h2>学術関係受章</h2>
{% bibliography --query @misc[award] %}

</div>
