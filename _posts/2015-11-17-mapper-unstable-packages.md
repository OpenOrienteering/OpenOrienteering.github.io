---
author: Kai Pastor
date: 2015-11-18 09:00:00+01:00
layout: post
slug: mapper-unstable-packages
title: Progress on new release
categories:
- Mapper
- Releases
---

Other than announced, release 0.5.97 - more than one year after 0.5.96 - will bring a lot of changes. Most of the work was internal restructuring which shall improve maintainability but remain invisible. But there are also interesting new features since 0.5.96:

 - PDF export with CMYK colors ([#482](https://github.com/OpenOrienteering/mapper/issues/482))
 - Georeferencing with EPSG code

For Windows, OS X, and Android, the updated Qt library (version 5.5.1) improves the support for the newer version of these operating systems.

Until 0.5.97 release packages are ready for all systems (Windows, OS X, Android, Linux), Windows and Linux users are encouraged to test the packages from the **unstable** series on openSUSE build service (OBS):

 - [Windows Installer (.exe) and self-extracting archive (.sfx.exe) for x64 and x86](http://download.opensuse.org/repositories/home:/dg0yt/Windows/)
 - [Linux packages](https://software.opensuse.org/download.html?project=home%3Adg0yt&package=openorienteering-mapper-unstable)

<iframe markdown="0" src="http://software.opensuse.org/download/package.iframe?project=home:dg0yt&package=openorienteering-mapper-unstable"> </iframe>

Please take care (i.e. backups) of your map files when working with the unstable packages.
See the [known issues for unstable](https://github.com/OpenOrienteering/mapper/issues?q=is:open+label:"known issues unstable").

These unstable packages on OBS are available for a while now and updated frequently. At lot more has happened silently since the last release: Bugs were reported, and some patches were contributed directly, to Qt. Our project hosting was changed from Sourceforge to Github (with some parts still on Sourceforge).
