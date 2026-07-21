---
permalink: /research/
title: "Research"
author_profile: true
---

My research develops principled and practical statistical tools for biomedical data that are high-dimensional, heterogeneous, weakly labeled, distributed across institutions, or subject to population shift.

{% for area in site.data.research_areas %}
## {{ area.title }}

{{ area.description }}

{% assign area_publications = site.publications | where: "research_area", area.key | sort: "sort_key" | reverse %}
{% for post in area_publications limit: 5 %}
  {% include publication-item.html post=post compact=true %}
{% endfor %}

[See all work in this area →](/publications/#{{ area.key }})
{% endfor %}
