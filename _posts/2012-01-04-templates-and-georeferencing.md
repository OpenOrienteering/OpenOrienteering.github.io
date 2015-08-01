---
author: Thomas Schöps
comments: true
date: 2012-01-04 00:19:02+00:00
layout: post
slug: templates-and-georeferencing
title: Templates and Georeferencing
wordpress_id: 47
categories:
- Development
- Mapper
---

Among the few planned features of OpenOrienteering Mapper which are already working are **templates **and **georeferencing** of them. Two types of templates are implemented: image templates which are normally used to display base maps and, since yesterday, also GPS templates.

The supported **formats** for image templates are those supported by QT: bmp, gif (read-only), jpg, png, tiff and a few obscure ones. If someone needs support for another format, it would be very easy to extend this, for example using [FreeImage](http://freeimage.sourceforge.net/index.html).
For GPS tracks, currently only gpx is supported. At first I looked for a C++ library which supports the loading of GPS track files in various formats, but did not find anything which seemed really suitable. The closest was using [GPSBabel](http://www.gpsbabel.org/) as a library, but it seems like [it is not intended to be used like this](http://osdir.com/ml/hardware.gps.gpsbabel.devel/2008-07/msg00008.html). So, for now I implemented a simple gpx loader myself.
To convert the coordinates from the gpx file, consisting of latitude and longitude on the earth ellipsoid model, to map coordinates, an orthographic projection is used. The center of the first loaded track is automatically suggested as the origin for the projection, but this can be adjusted.

All types of templates can be **georeferenced**. This means adjusting their transformation so multiple templates, or a template and the map, fit together. It is done by specifying two or more corresponding points ("pass points") on the template which should be moved and the reference it should be adjusted to, then a transformation for one template can be calculated which makes these points match as good as possible. The program currently uses only scaling, rotation and translation (no shearing) as transformations to do this and no deforming of templates is done.

Following is a screenshot showing an image and a gps template. The image is the green background containing the red line, which was generated from a gps track using an external program, the gps template is the thin purple line showing the same track loaded directly. The picture was taken after I implemented the gps templates, so I wanted to compare the two images of the track to see if the implementation works correctly and they are identical. To be able to do that better, I added four pass points to the directly loaded track which are shown as connected red and green crosses. This is the state before applying the georeferencing:

[![](/assets/2012/georeferencing-1-300x184.png)](/assets/2012/georeferencing-1.png)

After clicking on "Apply georeferencing", it looked like this:

[![](/assets/2012/georeferencing-2-300x184.png)](/assets/2012/georeferencing-2.png)

Seems to fit perfectly :-)
The red and green pass point crosses are now almost on top of each other, showing that the pass points are consistent. The error in meters could be read from the georeferencing box on the left. If something went wrong, it is always possible to undo the transformation by unchecking "Apply georeferencing", moving the pass points, deleting some or adding more, and trying again. The points can even be edited while the transformation is active.

Note that while in the screenshot only a track is shown, displaying waypoints and their associated names from gpx files is also supported. And if another gpx file is loaded, it will automatically be transformed to match with the first loaded track.

A possible addition to the templates for the future would be the ability to load digital elevation models directly, without having to use an external program to visualize them first.
