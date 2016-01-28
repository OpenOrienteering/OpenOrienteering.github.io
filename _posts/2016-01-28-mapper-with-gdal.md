---
author: Kai Pastor
date: 2016-01-28 23:35:00+01:00
layout: post
title: Accessing Geospatial Data with GDAL
categories:
- Mapper
- Development
---

We are adding [GDAL, the Geospatial Data Abstraction Library](http://www.gdal.org),
to the components of OpenOrienteering Mapper. GDAL is an open source translator
library for raster and vector geospatial data formats. We identified a number of
[feature and change requests](https://github.com/OpenOrienteering/mapper/issues/574)
which will benefit from using GDAL.

It will take a while to materialize, but the implementation of a template class
which loads geospatial vector data through GDAL/OGR is already working very well.
The supported formats include DXF, Shapefiles, and
[many more](http://www.gdal.org/ogr_formats.html). In contrast to existing 
implementation, the new template class can preserve style information e.g. in
DXF files.

The current unstable snapshot comes with GDAL 2.0.1 for Windows, and it uses the 
distributions' packages on Linux. (There is no GDAL support for openSUSE 13.2).

![Shapefile in Mapper](/assets/2016/2016-01-27-GDAL-support.png)
