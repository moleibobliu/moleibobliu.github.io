---
permalink: /
title: "Molei Liu"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a tenure-track **Researcher in Biostatistics at Peking University Health Science Center**, jointly affiliated with the **Beijing International Center for Mathematical Research**.

My research develops statistical and machine-learning methodology for large-scale electronic health records and biobank data. I am particularly interested in problems involving high dimensionality, limited reliable labels, population heterogeneity, privacy constraints, and distribution shift. My work spans high-dimensional statistics, semiparametric inference, federated and transfer learning, semi-supervised learning, distributionally robust optimization, model-X inference, and selective inference.

<div class="home-actions">
  <a class="btn btn--primary" href="/research/">Research overview</a>
  <a class="btn" href="/publications/">Publications</a>
  <a class="btn" href="/cv/">Curriculum vitae</a>
</div>

## Research interests

<div class="research-grid">
  <div class="research-card">
    <h3>Robust and transferable learning</h3>
    <p>Methods for heterogeneous populations, covariate shift, distributional robustness, and multi-source data integration.</p>
  </div>
  <div class="research-card">
    <h3>Semi-supervised and model-X inference</h3>
    <p>Valid and efficient inference with limited labels, high-dimensional nuisance models, and flexible covariate distributions.</p>
  </div>
  <div class="research-card">
    <h3>Biomedical data science</h3>
    <p>Applications to EHR phenotyping, prediction evaluation, biobank studies, genetic association, proteomics, and clinical knowledge extraction.</p>
  </div>
</div>

## Selected recent work

{% assign selected_publications = site.publications | where: "selected", true | sort: "sort_key" | reverse %}
{% for post in selected_publications %}
  {% include publication-item.html post=post compact=true %}
{% endfor %}

[View the complete publication list →](/publications/)

## Experience

<div class="timeline">
  <div class="timeline-item"><span class="timeline-year">2025–present</span><strong>Peking University</strong><br>Tenure-track Researcher, Department of Biostatistics; joint appointment with the Beijing International Center for Mathematical Research.</div>
  <div class="timeline-item"><span class="timeline-year">2022–2025</span><strong>Columbia University</strong><br>Tenure-track Assistant Professor, Department of Biostatistics, Mailman School of Public Health.</div>
  <div class="timeline-item"><span class="timeline-year">2017–2022</span><strong>Harvard T.H. Chan School of Public Health</strong><br>Ph.D. in Biostatistics, advised by Tianxi Cai; committee members Lucas Janson and Junwei Lu.</div>
  <div class="timeline-item"><span class="timeline-year">2013–2017</span><strong>Peking University</strong><br>B.S., School of Mathematical Sciences; advised by Xiaohua Zhou, Hao Ge, and Minping Qian.</div>
  <div class="timeline-item"><span class="timeline-year">2016</span><strong>Yale School of Public Health</strong><br>Summer research intern in Hongyu Zhao's group.</div>
</div>
