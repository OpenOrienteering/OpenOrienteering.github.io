---
author: Thomas Schöps
comments: true
date: 2013-04-18 00:16:23+00:00
layout: post
slug: mapper-news
title: Mapper News
wordpress_id: 160
categories:
- Development
- Mapper
---

After for the last time only releases have been presented on this blog, we hope to provide some information about Mapper's development more often again from now on. This post starts with a description of some of the recent additions for what will become Mapper 0.6.0 later. For the closer future, a release of version 0.5.1 is planned which will fix a number of bugs in 0.5.0.

**{% include image src="/assets/2013/overprinting-revised-150x150.png" caption="overprinting-revised" href="/assets/2013/overprinting-revised.png" %}Mapper 0.5.1: Modified overprinting simulation method
**Overprinting simulation in Mapper 0.5.0 brightened up mixed colors, e.g. ISOM symbol 527 Settlement's 100% yellow, 50% green. Mapper 0.5.1 comes with an improved method which prevents this issue and works much faster.
A comparison of selected results from the different methods can be seen in the picture. Mapper 0.5.1 will use method 2. For a technical description, see [here](https://sourceforge.net/p/oorienteering/tickets/193/).

**Object tagging**
This feature of Mapper 0.6.0 allows to add arbitrary key-value pairs to objects, just like in OpenStreetMap. This way, additional information can be stored, for example the height of certain features (for control descriptions). OSM and DXF file import have been updated to import the tags, respectively the layer names from those files. At the moment the functionality is still quite rough, but will be polished until the release. An object selection method based on tags is also planned.

**Distributing points along paths**
In Mapper 0.6.0 there will be a tool which creates evenly spaced point objects along the selected path(s). This can be e.g. used to draw alleys, or point grids with a set of lines. It can also be used to find the midpoint of a line.

**Spot color separations and Registration Black
**In addition to overprinting simulation (for desktop printers), Mapper 0.6.0 will be able to output spot color separations.** **A special color Registration Black was added which will print black in all spot color separations. This color is used by registration marks.

As usual we are glad about your feedback on how our implementation meets your expectations.

Apart from these points (as a note for programmers), the doxygen comments in Mapper's C++ source code have been extended very much recently in the git master branch to make it easier to understand the code.
