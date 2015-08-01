---
author: Thomas Schöps
comments: true
date: 2011-10-21 20:50:11+00:00
layout: page
slug: laserscan-tool
title: Laserscan tool
wordpress_id: 14
---

**[Download here!](https://sourceforge.net/projects/oorienteering/files/Lasertool/)**
_Updated on Feb. 19th 2012: fixes a few bugs and optimizes contour calculation._

The **Laserscan tool** processes point clouds and generates those nice looking images :)
Binaries are provided only for Windows, but the source can also be compiled to run on Linux.

In its current form, this is a very basic command line tool without many options. When it is run on an input file, it will just generate all possible outputs and save them as images. But as it is open source, you are invited to extend it and add your visualization ideas to it!

Currently, the tool only processes classified point clouds which contain ground points and other (object) points. This is because I suppose that there are more than enough programs which handle the ground part alone. Extending the program to support this also would be trivial, though.

The program generates the following visualizations:

  * Contour lines with 1 meter interval, red line every 5 meters
  * Ground height visualizations (gradient, shading & slope)
  * Surface height visualizations (gradient, shading & slope)
  * Ground coverage map (blue: no point in this pixel, yellow: ground free, black: ground covered)
  * Minimum object height map (red: no object point in this pixel, black to white corresponds to height of lowest object point)
  * Point count map (the brighter, the more object points are in one pixel. Only points up to 5 meters above the ground are counted)
  * Vegetation height map


Here are example pictures for the most useful visualizations:

{% include image src="contour-257x300.gif" caption="Contours - 1m interval, red line every 5 meters" href="contour.gif" %}
<br />Contours - 1m interval, red line every 5 meters

{% include image src="height_shade-257x300.jpg" caption="Height shade - the relief with lighting from north west" href="height_shade.jpg" %}
<br />Height shade - the relief with lighting from north west

{% include image src="height_slope-257x300.jpg" caption="Height slope - the darker, the steeper the terrain is" href="height_slope.jpg" %}
<br />Height slope - the darker, the steeper the terrain is

{% include image src="vegetation_height-257x300.jpg" caption="Vegetation height - The brighter, the higher the objects are" href="vegetation_height.jpg" %}
<br />Vegetation height - The brighter, the higher the objects are

The images are generated from the [Trondheim dataset](http://arken.umb.no/~havatv/o/trondheim2010/) using a pixel distance of 1 meter.
