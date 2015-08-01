---
author: Thomas Schöps
comments: true
date: 2012-02-10 00:06:39+00:00
layout: post
slug: first-alpha-release-of-openorienteering-mapper
title: First alpha release of OpenOrienteering Mapper
wordpress_id: 74
categories:
- Mapper
- Releases
---

**What is OpenOrienteering Mapper?**
OpenOrienteering Mapper is an open source cartography program which is specially aimed at drawing orienteering maps. It is intended as a free alternative to the current standard program for this task, OCAD. Its main advantages compared to it are:



	
  * Open Source: the program is completely free and I will never demand money for it. Every programmer can improve it.

	
  * Cross-platform: the program currently works on Windows, Mac OS X and Linux. An Android version is planned.


**Status**
I am happy to announce the release of the first alpha version today. This version is primarily intended for _interested developers_ and _adventurous_ _users_ who like to try new stuff and give feedback. Though it would be possible to draw most parts of an orienteering map with this alpha version, many comfort functions are missing and the program has not been tested extensively, so I do not recommend to start any mapping projects with it yet.

**Download
**_Updated on Feb. 13th: added Mac port, which was kindly provided by Russell Porter
_
System requirements: Windows (XP or newer), Mac OS X or Linux (compile yourself, needs cmake and a recent Qt)

Usage hints: there is no need to install anything, just start the contained executable. The map can be moved by dragging the mouse with the middle button (mouse wheel) held down and zoomed by using the mouse wheel. The rest should be more or less clear or "OCAD-like". Loading ocd files is not supported yet, but it is planned.

Binaries for Windows: [Mapper-alpha1.zip
](http://sourceforge.net/projects/oorienteering/files/Mapper/0.1.alpha1/Mapper-alpha1.zip/download)Binaries for Mac OS X: [Mapper-alpha1-mac.zip](http://sourceforge.net/projects/oorienteering/files/Mapper/0.1.alpha1/Mapper-alpha1-mac.zip/download)
Source for Windows and Linux: [Mapper-alpha1-src.tar.gz](http://sourceforge.net/projects/oorienteering/files/Mapper/0.1.alpha1/Mapper-alpha1-src.tar.gz/download)

**Screenshots
**Imaginary orienteering map (download [map file](/assets/2012/demo.omap_.zip), [sample 600 dpi image export](/assets/2012/demo.png), [sample pdf export](/assets/2012/demo.pdf)):
[![](/assets/2012/screenshot1-300x204.png)](/assets/2012/screenshot1.png)

Definition of an area symbol:[
![](/assets/2012/screenshot2-300x188.png)](/assets/2012/screenshot2.png)

Three adjusted templates including a half-transparent base map and a gpx track (map source: OpenStreetMap):
[![](/assets/2012/screenshot31-300x164.png)](/assets/2012/screenshot31.png)

**Current feature overview**



	
  * Definition of all symbol types relevant for orienteering maps:
point, line, area, text and combined symbols

	
  * Loading and georeferencing of raster image and gpx track templates

	
  * Basic drawing and editing tools for points and paths (lines, areas and combined symbols) with live preview

	
  * Map printing, direct PDF and raster image export

	
  * Comes with ISOM 2000 foot-o symbol set (except overprinting symbols)


**Plans**
The next goal will be to reach a state where the program can be recommended for mapping projects. I will probably release updated alpha versions from time to time. As soon as this is done, I plan to attempt the Android port, which should get an adapted user interface and make use of digital compasses and GPS devices.

You can find a detailed roadmap [here](/assets/2012/roadmap.pdf). There is also a lengthy [design document](/assets/2012/design-document.pdf) which describes some parts of the planned user interface of the desktop version.

**Contributing
**If you like the project, you are welcome to contribute to it. Up to now, I worked on the project alone, but there is a lot to do and I'd appreciate any help. You do not need to be a programmer to help! Here are some ideas:

_If you are not a programmer ..._



	
  * Try the alpha version and give feedback. Report any bugs you find to the [bug tracker](http://sourceforge.net/p/oorienteering/tickets/). Please make sure that the bug you report does not exist already. Currently the tracker contains all known bugs and the features planned for the first milestone.

	
  * Complete the symbol sets that come with the program. Currently there is only a (big) part of the ISOM 2000 symbol set. Suggestions are to complete this set, have a look at its color priorities and possibly suggest enhancements, to build the ISSOM 2007 sprint symbol set, or to build a school-o symbol set.

	
  * Write general documentation, "tips of the day", or the in-application help.

	
  * Spread the word!


_If you are a programmer ..._

The program is implemented in C++ using Qt. You can get the latest source from the git repository like this:


<blockquote>

>     
>     git clone git://git.code.sf.net/p/oorienteering/code oo-mapper
> 
> 
</blockquote>


Again, some ideas:



	
  * Pick any item from the [bug tracker](http://sourceforge.net/p/oorienteering/tickets/).

	
  * Evaluate the [Necessitas (Qt on Android)](https://sourceforge.net/p/necessitas/home/necessitas/) project, design and implement a mobile user interface for Android.

	
  * Or anything else that you find useful ;-)


In any case, be sure to send me an e-mail or leave a comment here in case you want to contribute!

---

If you want to stay updated on new developments, I recommend to check back here regularly or to read the [RSS feed](http://oorienteering.sourceforge.net/?feed=rss2).
