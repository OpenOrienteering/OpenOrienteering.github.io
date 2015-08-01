---
author: Thomas Schöps
comments: true
date: 2012-01-10 19:27:09+00:00
layout: post
slug: point-symbol-definition
title: Point symbol editor
wordpress_id: 54
categories:
- Development
- Mapper
---

As usual, here comes a small update about development on the Mapper program.
A feature which I finished recently is the point symbol editor. It should already be usable to define all point symbols in the ISOM/ISSOM standards.

[![](/assets/2012/point_symbol_editor-300x181.png)](/assets/2012/point_symbol_editor.png)

The screenshot shows a demo symbol containing one line element (black), one area element (orange) and some point elements.
On the left side, there are some general settings which are the same for every symbol type. In the lower left part, there are the symbol type specific settings. For point symbols, this is currently only one: whether the symbol should be rotatable or always oriented to north.
In the middle of the window, there is a preview of the symbol. The bar at the bottom allows to load a template and to center it on the coordinate system origin, either using its bounding box or using its center of gravity - something that could be useful to draw some of the orienteering point symbols.
On the right side is the point symbol editor. Here, the elements the point symbol consists of can be defined. The element coordinates can either be entered at the bottom or set by clicking at the preview in the middle. For lines and areas, there is also the possibility to use bezier curves (not shown here).

That's it already for this time. My plan is now to continue with the symbol browser and the other symbol types, after that the drawing tools can be implemented and the program will hopefully slowly start to become usable for map drawing.
