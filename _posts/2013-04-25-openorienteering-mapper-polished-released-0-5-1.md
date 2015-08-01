---
author: Kai Pastor
comments: true
date: 2013-04-25 22:14:13+00:00
layout: post
slug: openorienteering-mapper-polished-released-0-5-1
title: 'OpenOrienteering Mapper polished: Released 0.5.1'
wordpress_id: 165
categories:
- Mapper
- Releases
---

OpenOrienteering Mapper 0.5.1 was released today. This is a maintenance release which fixes a number of problems found in release 0.5.0. We recommend the update for all users of previous versions. We consider the program stable enough for productive work, though it is always advisable to make regular backups.

**Program downloads**
	
  * [Windows installer](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.1/openorienteering-mapper_0.5.1-Windows-x86.exe/download) (12.2 MB)
	
  * [Windows ZIP archive](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.1/openorienteering-mapper_0.5.1-Windows-x86.zip/download) (14.6 MB)
	
  * [Mac OS X package 64 bit](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.1/openorienteering-mapper_0.5.1-Darwin-x64.dmg/download) (15.3 MB; read note for Mac users below)
	
  * [Ubuntu 12.04 package 64 bit (amd64)](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.1/openorienteering-mapper_0.5.1-precise_amd64.deb/download) (14.4 MB)
	
  * [Ubuntu 12.04 package 32 bit (i386)](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.1/openorienteering-mapper_0.5.1-precise_i386.deb/download) (14.6 MB)


**Language pack downloads**

English, French, German, Latvian, Norwegian and Spanish translations are fully up to date. Additional translations will be released at [files/Mapper/0.5.1/translations](https://sourceforge.net/projects/oorienteering/files/Mapper/0.5.1/translations/) when they become available. Just download the desired translation and open the downloaded .ts file from the settings dialog.


**Documentation and getting help**

A basic English manual comes with the program. More resources:
	
  * [Mapmaking with OpenOrienteering Mapper: first steps for beginners](/assets/2013/Mapmaking-first-steps.pdf) (PDF)
	
  * [User wiki - latest program manual](https://sourceforge.net/p/oorienteering/wiki/Home/)
	
  * [User forum](https://sourceforge.net/p/oorienteering/discussion/mapper/)


**Major changes in 0.5.1**
	
  * Fix for a Windows and Mac OS X printing bug with area fill patterns.
	
  * Fix for the program hanging in special cases when following the shape of an existing object while drawing.
	
  * Fix for dashed, closed lines being invisible if too short to have a gap.
	
  * Fixes for drawing tool quirks when finishing a path by double click, especially while holding Ctrl.
	
  * An improved method of overprinting simulation.
	
  * Bugfixes to the DXF import.
	
  * New and updated translations: French, Latvian, Norwegian and Spanish.
	
  * Qt library updated to 5.0.2.


**Note for Mac users**

Mac OS X 10.6 or newer is required.
For systems with activated Gatekeeper (10.8 Mountain Lion and partly also 10.7 Lion) the app has to be started once by right clinking on the file and choosing Open. This is because it is not code signed, which would require an annual license fee.


**Reporting bugs**

The [Bug tracker](https://sourceforge.net/p/oorienteering/tickets/) is the right place to lookup and report all kinds of issues with the program. You may also submit feature requests here.


**Contributing**

The [user wiki](https://sourceforge.net/p/oorienteering/wiki/Home/) is pre-filled with the program manual. If you have hints to share with the mapper community or want to extend the program documentation, please create a SourceForge account and start editing it.

If you are interested in writing a translation, find more information in a [developer wiki page](http://sourceforge.net/apps/mediawiki/oorienteering/index.php?title=Translation). There are no programming skills required!

If you are a programmer with experience in C++ / Qt, or want to help in any other way, we would like to welcome you at our [developer mailing list](https://lists.sourceforge.net/lists/listinfo/oorienteering-devel). Useful places with resources are:
	
  * [Git repository](https://sourceforge.net/p/oorienteering/code/) with the latest code
	
  * [Developer wiki](https://sourceforge.net/apps/mediawiki/oorienteering/index.php?title=Main_Page) with information about the code, or how to start a new translation


