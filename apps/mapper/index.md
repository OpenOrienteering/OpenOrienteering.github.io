---
layout: page
slug: mapper
title: Mapper
icon: Mapper-128.png
favicon: Mapper-32.png
release:
   version:      0.9.5
   announcement: https://www.openorienteering.org/news/2020/mapper-v0.9.5-released
   predecessor:  0.9.4
   master:       v0.9.5
---

OpenOrienteering Mapper is an orienteering mapmaking program and provides a free alternative to the existing proprietary solution. Its main advantages compared to it are:
	
  * Open Source: The program is completely free, every programmer can improve it.
  * Cross-platform: The program works on Android, Windows, macOS and Linux.

While it is under continuous development and considered in beta state, it has been used to produce maps for classical orienteering, MTBO and radio orienteering races. All required functions for drawing maps are implemented and the program works very stable. So it can be considered ready for productive use, although it is like always a good idea to keep backups of your files. We are happy about feedback to the program.

[User reviews &#9733;&#9733;&#9733;&#9733;&#9733;](user-reviews.html)

[Online manual](https://www.openorienteering.org/mapper-manual/)

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
        <p>The current release version for PC and Android is <b>Mapper {{ page.release.version }}</b>.</p>
        <p><a href="{{ page.release.announcement }}">Release announcement</a>
        <br/><a href="https://github.com/OpenOrienteering/mapper/issues?q=milestone:v{{ page.release.version }}+is:closed">Resolved issues</a>
        <br/><a href="https://github.com/OpenOrienteering/mapper/compare/v{{ page.release.predecessor }}...v{{ page.release.version }}">Source code changes since {{ page.release.predecessor }}</a>
        <br/><a href="https://github.com/OpenOrienteering/mapper/issues?q=label:%22known%20issues%20v{{ page.release.version }}%22">Known issues in {{ page.release.version }}</a></p>
        {% capture release_tag %}v{{ page.release.version }}{% endcapture %}
        {% include download tag=release_tag class="btn-lg" %}
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="heading-master-release">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#release-selection" href="#collapse-master-release" aria-expanded="false" aria-controls="collapse-master-release">
          Master (Pre-releases and bug fixes)
        </a>
      </h4>
    </div>
    <div id="collapse-master-release" class="panel-collapse collapse panel" role="tabpanel" aria-labelledby="heading-master-release">
      <ul class="list-group">
        <li class="list-group-item">
        <p>The following Windows and Linux packages contain bug fixes for the previous stable release, or provide a fairly stable preview of the coming release.</p>
        <p><a href="https://github.com/OpenOrienteering/mapper/releases/tag/{{ page.release.master }}">Release notes</a> |
           <a href="https://github.com/OpenOrienteering/mapper/compare/v{{ page.release.version }}...{{ page.release.master }}">All changes since {{ page.release.version }}</a></p>
        {% include download tag=page.release.master class="btn-lg" %}
        </li>
        <li class="list-group-item">
          Linux packages based on the code in the <tt>master</tt> branch are available from the 
          <a href="https://software.opensuse.org/download.html?project=home%3Adg0yt&package=openorienteering-mapper-master">Open Build Service</a>
          (<a href="https://download.opensuse.org/repositories/home:/dg0yt/">alternative access</a>).
        </li>
      </ul>
    </div>
  </div>
  <div class="panel panel-danger">
    <div class="panel-heading" role="tab" id="heading-unstable-release">
      <h4 class="panel-title">
        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#release-selection" href="#collapse-unstable-release" aria-expanded="false" aria-controls="collapse-unstable-release">
          Unstable (development snapshots)
        </a>
      </h4>
    </div>
    <div id="collapse-unstable-release" class="panel-collapse collapse panel" role="tabpanel" aria-labelledby="heading-unstable-release">
      <ul class="list-group">
        <li class="list-group-item">
        <b>Warning:</b> These packages may contain unstable code. Please take care (i.e. backups) of your map files when working with the unstable packages. Note the known issues.<br />
        - <a href="https://github.com/OpenOrienteering/mapper/compare/master...dev">Changes from <tt>master</tt> to <tt>dev</tt></a><br />
        - <a href="https://github.com/OpenOrienteering/mapper/issues?q=is:open%20label:%22known%20issues%20unstable%22">Known issues</a>
        </li>
        <li class="list-group-item">
        <b>New!</b> Packages based on the unstable code in the <tt>dev</tt> branch are available for Android, macOS and Windows as "Pre-release" named like "dev vYYYYMMDD.No" on our <a href="https://github.com/OpenOrienteering/mapper/releases">Github releases page</a>.
        </li>
        <li class="list-group-item">
          Linux packages based on the unstable code in the <tt>dev</tt> branch are available from the 
          <a href="https://software.opensuse.org/download.html?project=home%3Adg0yt&package=openorienteering-mapper-unstable">Open Build Service</a>
          (<a href="https://download.opensuse.org/repositories/home:/dg0yt/">alternative access</a>).
        </li>
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
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.9.5">0.9.5</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.9.4">0.9.4</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.9.3">0.9.3</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.9.2">0.9.2</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.9.1">0.9.1</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.9.0">0.9.0</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.8.4">0.8.4</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.8.3">0.8.3</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.8.2">0.8.2</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.8.1">0.8.1</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.8.0">0.8.0</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.7.0">0.7.0</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.6.8">0.6.8</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.6.7">0.6.7</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.6.6">0.6.6</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.6.5">0.6.5</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.6.4">0.6.4</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.6.3">0.6.3</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.6.2">0.6.2</a></li>
        <li class="list-group-item"><a href="https://github.com/OpenOrienteering/mapper/releases/tag/v0.6.1">0.6.1</a></li>
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
	
  * Symbol sets for ISOM 2017-2, ISSprOM (sprint), ISMTBOM (mountain bike), ISSkiOM 2019 (ski),
    course design and control description sheets
  * Import and export of ocd maps and symbol sets (import: version 6 - 2018, export: version 8 - 12)
  * Georeferencing (based on PROJ library)
  * Working with various kinds of templates:
    * Raster images (bmp, jpg, tif, png, gif etc. based on GDAL library), including world files and GeoTIFF
    * GPS tracks (gpx)
    * Vector data (dxf, osm, shp etc. based on GDAL library)
    * Geospatial PDF (based on GDAL library)
    * Maps (ocd, omap)
  * Working with all important symbol types:
    * Points
    * Lines
    * Areas
    * Text
    * Composite symbols
  * Drawing tools and many editing tools for objects
  * Printing, PDF, KMZ and raster image export for getting the map into course setting programs
    * Overprinting simulation (raster output)
    * CMYK PDF export (vector output)
  * Translated into more than 20 languages

The [online manual](https://www.openorienteering.org/mapper-manual/) can give you more ideas of what the program does.


**Contributing**

There is a lot to do, and we appreciate every kind of help, whether you are a programmer or not. If you are interested in contributing, good places to start are:

  * [Translation repository](https://hosted.weblate.org/engage/openorienteering/) for online translation<br/>
    <a href="https://hosted.weblate.org/engage/openorienteering/?utm_source=widget">
<img src="https://hosted.weblate.org/widgets/openorienteering/-/287x66-grey.png" alt="Translation status" />
</a>
  * [Manual repository](https://github.com/OpenOrienteering/mapper-manual)
  * [Git repository](https://github.com/OpenOrienteering/mapper) containing the latest source code
  * [Discussions](https://github.com/OpenOrienteering/mapper/discussions), a place to connect with other members of our user community
  * [Ticket system](https://github.com/OpenOrienteering/mapper/issues) showing tasks that have to be done, and the right place to report bugs
  * [Developer wiki](https://github.com/OpenOrienteering/mapper/wiki) for information about the code

