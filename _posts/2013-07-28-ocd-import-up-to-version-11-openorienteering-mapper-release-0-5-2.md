---
author: Kai Pastor
comments: true
date: 2013-07-28 13:06:47+00:00
layout: post
slug: ocd-import-up-to-version-11-openorienteering-mapper-release-0-5-2
title: 'OCD import up to version 11: OpenOrienteering Mapper Release 0.5.2 '
wordpress_id: 171
categories:
- Mapper
- Releases
---

OpenOrienteering Mapper 0.5.2 was released today. This is a maintenance release which fixes a number of problems found in release 0.5.1, and improves the usability of the color and template dialogs. In addition, it brings a new importer which supports OCD files of version 11, 10, 9 and - after activation in the settings - version 8.

Please note that OCD export still is at version 8 only. Round-trip editing of OCD files is not recommended because there are quite a lot of details from OCD files that are not handled by import and export. (This is true also for previous Mapper versions.)

We recommend the update for all users of previous versions. We consider the program stable enough for productive work, though it is always advisable to make regular backups.


**Program downloads**
	
  * [Windows installer](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.2/openorienteering-mapper_0.5.2-Windows-x86.exe/download) (12.3 MB)
	
  * [Windows ZIP archive](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.2/openorienteering-mapper_0.5.2-Windows-x86.zip/download) (14.7 MB)
	
  * [Mac OS X package 64 bit](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.2/openorienteering-mapper_0.5.2-Darwin-x64.dmg/download) (15.4 MB; read note for Mac users below)
	
  * [Ubuntu 12.04 package 64 bit (amd64)](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.2/openorienteering-mapper_0.5.2-precise_amd64.deb/download) (14.3 MB)
	
  * [Ubuntu 12.04 package 32 bit (i386)](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.2/openorienteering-mapper_0.5.2-precise_i386.deb/download) (14.7 MB)


**Language pack downloads**

Additional translations will be released at [files/Mapper/0.5.2/translations](https://sourceforge.net/projects/oorienteering/files/Mapper/0.5.2/translations/) when they become available. Just download the desired translation and open the downloaded .ts file from the settings dialog.


**Documentation and getting help**

A basic English manual comes with the program. More resources:
	
  * [Mapmaking with OpenOrienteering Mapper: first steps for beginners](/assets/2013/Mapmaking-first-steps.pdf) (PDF)
	
  * [User wiki - latest program manual](https://sourceforge.net/p/oorienteering/wiki/Home/)
	
  * [User forum](https://sourceforge.net/p/oorienteering/discussion/mapper/)


**Major changes in 0.5.2**
	
  * NEW: Import of OCD version 11, 10, and 9 files.
	
  * NEW: Importing template maps (OMAP, OCD) into the current map as adjusted.
	
  * NEW: After having finished drawing a line, you may still undo the last point as long as the line is selected.
	
  * Revision of the color and template dialogs..
	
  * A number of fixes to the OCD version 8 import.
	
  * A number of fixes to printing and PDF export.
	
  * A few triggers for crashes removed.

All closed tickets can be found at [https://sourceforge.net/p/oorienteering/tickets/milestone/0.5.2/](https://sourceforge.net/p/oorienteering/tickets/milestone/0.5.2/).


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


