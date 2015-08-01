---
author: Thomas Schöps
comments: true
date: 2012-01-30 20:50:14+00:00
layout: post
slug: line-symbols
title: Line symbols
wordpress_id: 63
categories:
- Development
- Mapper
---

Initial support for line symbols is now finished. In theory, all types of lines described in the orienteering map standards should be supported. On the other hand, there are still some possible setting combinations which do not give sensible results. Here are a few screenshots showing different possibilities:

{% include image src="/assets/2012/line_symbols_1-300x237.png" caption="Dashed lines with end symbols (arrow caps) and mid symbols (yellow dots)" href="/assets/2012/line_symbols_1.png" %}

{% include image src="/assets/2012/line_symbols_2-300x237.png" caption="Rock faces!" href="/assets/2012/line_symbols_2.png" %}

{% include image src="/assets/2012/line_symbols_3-300x187.png" caption="Using mid symbols without a line to create e.g. vegetation boundaries" href="/assets/2012/line_symbols_3.png" %}

{% include image src="/assets/2012/line_symbols_4-300x232.png" caption="At the top: my personal nightmare, dashed bezier curves with dashed border lines ;-)" href="/assets/2012/line_symbols_4.png" %}

One thing to note about the line symbols is that the orienteering map standards just specify 'ideal' lengths for the dashes and breaks of the line types. There are no recommendations for how to handle the case where these ideal lengths do not add up to fill a line exactly. The simplest way would be to use the ideal dash and break lengths and just cut the line off where it ends. This will look bad at one line end in the most cases, so a solution which scales the dashes and/or breaks to fit into the line should be preferred.

OpenOrienteering Mapper currently does it like this:



	
  * Only dashes are scaled, the breaks are always of the same (ideal) length.

	
  * When a dashed line segment is created, to determine the number of dashes to show, first the dash counts for the two ideal line lengths which are closest to its actual length are calculated. From this, the deviation of the ideal length of the dashes themselves when scaled into the real line is calculated for the two possibilities and the number of dashes where this deviation is smaller is chosen. In other words, when determining the number of dashes for a line, the program tries to minimize the deviation from the ideal dash length.

	
  * Special case: if the length of the segment in question is smaller than the length of the ideal segment with two dashes (or dash groups) minus the maximum amount of deviation from the ideal dash length (calculated from the point where the dash (group) count switches from two to three) for every dash, the line is considered too short for dashes and displayed as a continuous line.


This seems to look okay in most cases (as can be seen in the screenshots above). But in the case where multiple dashes are grouped together (with the intent of having a different break length inside groups than outside), the length of the line it takes until the dashes show up feels rather long, as can be seen here:

[![](/assets/2012/line_symbols_5-300x198.png)](/assets/2012/line_symbols_5.png)

This of course assumes that the system works correctly, which I am not completely sure about ;-)
It would be possible to specify an arbitrarily lower limit for the dashes of lines with dash groups. But that is the problem I see with it: it would be arbitrary.

Does this system sound reasonable? Do you have any ideas for improving it? Feel free to leave a comment.
