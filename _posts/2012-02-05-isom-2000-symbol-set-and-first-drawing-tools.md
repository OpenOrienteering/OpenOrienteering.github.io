---
author: Thomas Schöps
comments: true
date: 2012-02-05 23:44:34+00:00
layout: post
slug: isom-2000-symbol-set-and-first-drawing-tools
title: ISOM 2000 symbol set and first drawing tools
wordpress_id: 70
categories:
- Development
- Mapper
---

In the meantime I built the [ISOM 2000](http://orienteering.org/wp-content/uploads/2010/12/International-Specification-for-Orienteering-Maps-2000.pdf) foot-o symbol set in OpenOrienteering Mapper, except the overprinting symbols, because there is no course setting support planned for the near future (I recommend [Purple Pen](http://purplepen.golde.org/) for that task). All of the symbols should display correctly, apart from any mistakes. Working with the program to create the symbol set allowed me to find and fix a lot of bugs and usability problems.

In addition to that, it is now possible to draw point and path objects on the map and there is a basic edit tool to adjust their control points. All of the tools show a neat live preview of the objects that are drawn. You will soon be able to try it yourself easily because I plan to release a first preview version for Windows the next days (well, I think that I should at least try to counteract the announcement of the OCAD 11 beta a bit ;-) ). There are only a few things missing that I want to add beforehand. For now, here are two screenshots:

{% include image src="/assets/2012/draw_path_ISOM-300x235.png" caption="Drawing a path with half-transparent live preview" href="/assets/2012/draw_path_ISOM.png" %}

{% include image src="/assets/2012/edit_path_ISOM-300x233.png" caption="Editing a path, also with live preview :-)" href="/assets/2012/edit_path_ISOM.png" %}
