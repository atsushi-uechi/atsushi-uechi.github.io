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

<h2>Peer-Reviewed Paper</h2>
{% bibliography --query @article %}

<h2>Miscellaneous(Non-Peer-Reviewed)</h2>
{% bibliography --query @misc %}

<h2>Conference Presentations</h2>
{% bibliography --query @inproceedings %}

<h2>Awards</h2>
{% bibliography --query @misc[award] %}

</div>
