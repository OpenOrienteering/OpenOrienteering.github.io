---
layout: page
slug: mapper
title: Mapper
icon: Mapper-128.png
favicon: Mapper-32.png
release:
   version:      0.6.0
   announcement: http://openorienteering.github.io/news/2015/mapper-0.6.0-released
   predecessor:  0.5.97
---

OpenOrienteering Mapper is an orienteering mapmaking program and provides a free alternative to the existing proprietary solution. Its main advantages compared to it are:
	
  * Open Source: the program is completely free, every programmer can improve it.
  * Cross-platform: the program works on Android, Windows, Mac OS X and Linux.

While it is under continuous development and considered in beta state, it has been used to produce maps for classical orienteering, MTBO and radio orienteering races. All required functions for drawing maps are implemented and the program works very stable. So it can be considered ready for productive use, although it is like always a good idea to keep backups of your files. We are happy about feedback to the program.

&#9733;&#9733;&#9733;&#9733;&#9733; [User reviews](user-reviews.html)



<div class="panel-group" id="release-selection" role="tablist" aria-multiselectable="true">
  <div class="panel panel-info">
    <div class="panel-heading" role="tab" id="heading-stable-release">
      <h4 class="panel-title">
        <a role="button" data-toggle="collapse" data-parent="#release-selection" href="#collapse-stable-release" aria-expanded="true" aria-controls="collapse-stable-release">
          Stable Release
        </a>
      </h4>
    </div>
    <div id="collapse-stable-release" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading-stable-release">
      <div class="panel-body">
        <p>The current recommended version for PC and Android is <b>Mapper {{ page.release.version }}</b>.</p>
        <p><a href="{{ page.release.announcement }}">Release announcement</a>
        <br/><a href="https://github.com/OpenOrienteering/mapper/compare/v{{ page.release.predecessor }}...v{{ page.release.version }}">Changes since {{ page.release.predecessor }}</a>
        <br/><a href="https://github.com/OpenOrienteering/mapper/issues?q=label:%22known%20issues%20{{ page.release.version }}%22">Known issues in {{ page.release.version }}</a></p>
        <p><a class="btn btn-primary btn-lg" href="https://github.com/OpenOrienteering/mapper/releases/v{{ page.release.version }}" role="button">Download Mapper {{ page.release.version }} &raquo;</a></p>
      </div>
    </div>
  </div>
  <div class="panel panel-danger">
    <div class="panel-heading" role="tab" id="heading-unstable-release">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#release-selection" href="#collapse-unstable-release" aria-expanded="false" aria-controls="collapse-unstable-release">
          Development snapshots
        </a>
      </h4>
    </div>
    <div id="collapse-unstable-release" class="panel-collapse collapse panel" role="tabpanel" aria-labelledby="heading-unstable-release">
      <ul class="list-group">
        <li class="list-group-item">
        <p>These Windows and Linux packages are updated shortly after changes are published on Github. They may contain unstable code. Please take care (i.e. backups) of your map files when working with the unstable packages. See the known issues for unstable.</p>
        <p><a href="https://github.com/OpenOrienteering/mapper/compare/v{{ page.release.version }}...master">Changes since {{ page.release.version }}</a>
        <br/><a href="https://github.com/OpenOrienteering/mapper/issues?q=is:open%20label:%22known%20issues%20unstable%22">Known issues</a></p>
        </li>
        <li class="list-group-item"><a href="http://download.opensuse.org/repositories/home:/dg0yt/Windows/">Windows Installer (.exe) and self-extracting archive (.sfx.exe) for x64 and x86</a></li>
        <li class="list-group-item"><a href="https://software.opensuse.org/download.html?project=home%3Adg0yt&package=openorienteering-mapper-unstable">Linux packages</a></li>
      </ul>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="heading-release-history">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#release-selection" href="#collapse-release-history" aria-expanded="false" aria-controls="collapse-release-history">
          Release history
        </a>
      </h4>
    </div>
    <div id="collapse-release-history" class="panel-collapse collapse panel" role="tabpanel" aria-labelledby="heading-release-history">
      <ul class="list-group">
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.6.0">0.6.0</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.5.97">0.5.97</a></li>
        <li class="list-group-item"><a href="/news/2014/mapper-0-6-0-beta-release">0.5.96</a></li>
        <li class="list-group-item"><a href="/news/2013/mapper-0-5-3-release-candidate-available">0.5.3</a></li>
        <li class="list-group-item"><a href="/news/2013/ocd-import-up-to-version-11-openorienteering-mapper-release-0-5-2">0.5.2</a></li>
        <li class="list-group-item"><a href="/news/2013/openorienteering-mapper-polished-released-0-5-1">0.5.1</a></li>
        <li class="list-group-item"><a href="/news/2013/the-next-step-openorienteering-mapper-0-5-0">0.5.0</a></li>
        <li class="list-group-item"><a href="/news/2012/openorienteering-mapper-0-4-provides-a-wealth-of-new-features">0.4.0</a></li>
        <li class="list-group-item"><a href="/news/2012/new-openorienteering-mapper-release-for-mac-os-x">0.3.2</a></li>
        <li class="list-group-item"><a href="/news/2012/openorienteering-mapper-alpha-release-0-3-1">0.3.1</a></li>
        <li class="list-group-item"><a href="/news/2012/third-alpha-version-of-openorienteering-mapper">0.3.0 (Alpha 3)</a></li>
        <li class="list-group-item"><a href="/news/2012/second-alpha-version-of-openorienteering-mapper">0.2.0 (Alpha 2)</a></li>
        <li class="list-group-item"><a href="/news/2012/first-alpha-release-of-openorienteering-mapper">0.1.0 (Alpha 1)</a></li>
      </ul>
    </div>
  </div>
</div>


**Screenshots**:

{% include image src="Schlossbergholz_in_0.5.0-300x205.png" caption="An orienteering map in OO Mapper 0.5.0" href="Schlossbergholz_in_0.5.0.png" %}

{% include image src="Templates_in_0.5.0-300x208.png" caption="Working with templates" href="Templates_in_0.5.0.png" %}


**Main features** of the current version include:
	
  * Native ISOM 2000 (forest) and ISSOM 2007 (sprint) symbol sets
  * Import and export of ocd maps and symbol sets (import: version 6 - 11, export: version 8)
  * Working with various kinds of templates:
    * Images (bmp, jpg, tif, png, gif)
    * GPS tracks (gpx)
    * Vector data (dxf, osm)
    * Maps (ocd, omap, xmap)
  * Working with all important symbol types:
    * Points
    * Lines
    * Areas
    * Text
    * Composite symbols
  * Drawing and many editing tools for objects
  * Printing, PDF and raster image export for getting the map into course setting programs
  * Advanced features like overprinting simulation, different map cutouts, symbol set replacement, and much more ...

The [online manual](http://openorienteering.org/mapper-manual/) can give your more ideas of what the program does.  


**Contributing**

There is a lot to do, and we appreciate every kind of help, whether you are a programmer or not. As an example of a programming free task, ‘official’ symbol sets for MTB and Ski orienteering maps are still missing. If you are interested in contributing, good places to start are:
	
  * [Git repository](https://github.com/OpenOrienteering/mapper) containing the latest source code
  * [Manual repository](https://github.com/OpenOrienteering/mapper-manual)
  * [Ticket system](https://github.com/OpenOrienteering/mapper/issues) showing tasks that have to be done, and the right place to report bugs
  * [Developer mailing list](https://lists.sourceforge.net/lists/listinfo/oorienteering-devel) for discussions (and introducing yourself)
  * [Developer wiki](https://github.com/OpenOrienteering/mapper/wiki) for information about the code


