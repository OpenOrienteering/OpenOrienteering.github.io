---
author: Kai Pastor
comments: true
date: 2014-11-03 06:59:20+00:00
layout: post
slug: mapper-0-6-0-beta-release
title: Mapper 0.6.0 Beta Release
wordpress_id: 194
categories:
- Mapper
- Releases
---

Beta release packages for the coming release are available as [**Mapper 0.5.96**](https://sourceforge.net/projects/oorienteering/files/Mapper/0.5.96/) from our downloads. It is almost a release candidate, i.e. no major changes to the program are planned. However, for the final release the documentation and the translations need an update, and a comprehensive release announcement needs to be written.

This is an beta quality release. It is recommended to make regular backups of original files. However, we believe that this release will be running very stable, and we will do our best to fix major bugs quickly in follow-up releases.

This version contains a lot of changes from 0.5.3, and [a small number of bugs were fixed since 0.5.95](https://github.com/OpenOrienteering/mapper/issues?q=label%3Aknown_issues_0.5.95). Depending on the features used in the new version, maps might no longer be readable in Mapper version 0.5.3 or older. We introduced a setting which allows to retain compatibility of files with older versions of Mapper.

For the first time, we offer 64-bit Windows packages (x64). These packages are required to make full use of more than 2 GB of RAM, e.g. when loading many or large templates. For Windows, the build tools were updated to a GCC 4.9.2. The installer package for Windows now deals more cleanly with file extensions, and it even adds Mapper as an alternative editor for .ocd files.

The Linux link is now pointing to the "openorienteering-mapper" repository which is meant for stable packages. The past packages from openSUSE Build Service were named "openorienteering-mapper-unstable" and have to be removed explicitly if you don't want to have them both installed (which is possible, due to different file names).

To get started with the Android app, please read the [manual page in the user wiki](https://sourceforge.net/p/oorienteering/wiki/Android%20Manual/) first! To install the .apk, you may need to (temporarily) enable app installation from unknown sources first. The location of this setting depends on the Android version; e.g. Settings -> Security -> Unknown sources.

**Provided packages:**



	
  * **New:** 64-bit Windows Installer (x64): [openorienteering-mapper_0.5.96-Windows-x64-Installer.exe](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.96/openorienteering-mapper_0.5.96-Windows-x64-Installer.exe)

	
  * **New:** 64-bit Windows Portable (x64): [openorienteering-mapper_0.5.96-Windows-x64.zip](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.96/openorienteering-mapper_0.5.96-Windows-x64.zip)

	
  * Windows Installer (x86): [openorienteering-mapper_0.5.96-Windows-x86-Installer.exe](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.96/openorienteering-mapper_0.5.96-Windows-x86-Installer.exe)

	
  * Windows Portable (x86): [openorienteering-mapper_0.5.96-Windows-x86.zip](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.96/openorienteering-mapper_0.5.96-Windows-x86.zip)

	
  * OS X (10.7 or later): [openorienteering-mapper_0.5.96-Darwin-x64.dmg](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.96/openorienteering-mapper_0.5.96-Darwin-x64.dmg)

	
  * Android armeabi_v7a: [openorienteering-mapper_0.5.96-Android-armv7.apk](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.96/openorienteering-mapper_0.5.96-Android-armv7.apk)

	
  * Android x86: [openorienteering-mapper_0.5.96-Android-x86.apk](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.96/openorienteering-mapper_0.5.96-Android-x86.apk)

	
  * Linux packages for current OpenSUSE, Fedora, Ubuntu:
Download from [openSUSE Build Service](http://software.opensuse.org/download.html?project=home%3Adg0yt&package=openorienteering-mapper)

	
  * Source code: [openorienteering-mapper_0.5.96-src.tgz](http://sourceforge.net/projects/oorienteering/files/Mapper/Source/openorienteering-mapper_0.5.96-src.tgz)


For getting a stable 0.6.0 we could need some help with:

	
  * testing for new bugs

	
  * revising documentation

	
  * updating translations.


We are looking forward to your feedback on bugs, annoyances or missing features.

	
  * **[Known issues / ticket system](https://github.com/OpenOrienteering/mapper/issues?q=label%3Aknown_issues_0.5.96)**


