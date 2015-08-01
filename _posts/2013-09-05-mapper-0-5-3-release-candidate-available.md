---
author: Kai Pastor
comments: true
date: 2013-09-05 05:51:23+00:00
layout: post
slug: mapper-0-5-3-release-candidate-available
title: Mapper 0.5.3 released
wordpress_id: 178
categories:
- Mapper
- Releases
---

{% include image src="/assets/2013/templates-300x189.png" caption="Working with templates in OpenOrienteering Mapper 0.5.3" href="/assets/2013/templates.png" %}OpenOrienteering Mapper 0.5.3 is now available for Windows, OS X, Ubuntu 12.04 Precise and _Debian 7 Wheezy (amd64 only)_. Release 0.5.3 is a maintenance release which brings bug fixes and minor improvements to Mapper's features. However, the underlying Qt framework was updated to the latest stable version.

We recommend the update for all users of previous version. We believe that this release will be running very stable. However, it is recommended to keep backups of files which you modify with the program.

**Program downloads**



	
  * [Windows installer](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.3/openorienteering-mapper_0.5.3-Windows-x86.exe) (13.3 MB)

	
  * [Windows ZIP archive](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.3/openorienteering-mapper_0.5.3-Windows-x86.zip) (16.1 MB)

	
  * [Mac OS X 10.7 or later package 64 bit](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.3/openorienteering-mapper_0.5.3-Darwin-x64.dmg) (15.9 MB; read note for Mac users below)

	
  * [Mac OS X 10.6 or later package 64 bit](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.3/openorienteering-mapper_0.5.3.1-Darwin-x64.dmg) (15.9 MB; read note for Mac users below)

	
  * [Ubuntu 12.04 package 64 bit (amd64)](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.3/openorienteering-mapper_0.5.3-precise_amd64.deb) (15.1 MB)

	
  * [Ubuntu 12.04 package 32 bit (i386)](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.3/openorienteering-mapper_0.5.3-precise_i386.deb) (15.3 MB)

	
  * [Debian 7 package 64 bit (amd64)](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.3/openorienteering-mapper_0.5.3-wheezy_amd64.deb) (14.9 MB)


**Language pack downloads**

Additional translations will be released at [files/Mapper/0.5.3/translations](https://sourceforge.net/projects/oorienteering/files/Mapper/0.5.3/translations/) when they become available. Just download the desired translation and open the downloaded .ts file from the settings dialog.

**Documentation and getting help
**

A basic English manual comes with the program. More resources:



	
  * [Mapmaking with OpenOrienteering Mapper: first steps for beginners](/assets/2013/Mapmaking-first-steps.pdf) (PDF)

	
  * [User wiki - latest program manual](https://sourceforge.net/p/oorienteering/wiki/Home/)

	
  * [User forum](https://sourceforge.net/p/oorienteering/discussion/mapper/)


**Major changes in 0.5.3
**



	
  * The import of OCD version 11, 10, and 9 files was further tested and improved.

	
  * The updated Norwegian translation is now included in the packages.

	
  * The Qt framework was updated to version 5.1.1. This version fixes a number of issues, especially on OS X. But it might also introduce new problems.

	
  * On Windows, the build tools were updated to a GCC 4.8.0 toolchain (the reference platform for Qt 5.1).

	
  * On OS X, the build tools were updated to XCode 4.5.2.


All closed tickets can be found at [https://sourceforge.net/p/oorienteering/tickets/milestone/0.5.3/](https://sourceforge.net/p/oorienteering/tickets/milestone/0.5.3/).

**Note for Mac users**

The original "0.5.3" package works on Mac OS X 10.7 or newer. We later added a second package "0.5.3.1" which runs on Mac OS X 10.6 (or newer).
For systems with activated Gatekeeper (10.8 Mountain Lion and partly also 10.7 Lion) the app has to be started once by right clinking on the file and choosing Open. This is because it is not code signed, which would require an annual license fee.

**Reporting bugs
**

The [Bug tracker](https://sourceforge.net/p/oorienteering/tickets/) is the right place to lookup and report all kinds of issues with the program. You may also submit feature requests here.

**Contributing**

The [user wiki](https://sourceforge.net/p/oorienteering/wiki/Home/) is pre-filled with the program manual. If you have hints to share with the mapper community or want to extend the program documentation, please create a SourceForge account and start editing it.

If you are interested in writing a translation, find more information in a [developer wiki page](http://sourceforge.net/apps/mediawiki/oorienteering/index.php?title=Translation). There are no programming skills required!

If you are a programmer with experience in C++ / Qt, or want to help in any other way, we would like to welcome you at our [developer mailing list](https://lists.sourceforge.net/lists/listinfo/oorienteering-devel). Useful places with resources are:



	
  * [Git repository](https://sourceforge.net/p/oorienteering/code/) with the latest code

	
  * [Developer wiki](https://sourceforge.net/apps/mediawiki/oorienteering/index.php?title=Main_Page) with information about the code, or how to start a new translation


