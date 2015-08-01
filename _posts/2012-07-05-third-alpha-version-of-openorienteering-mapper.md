---
author: Thomas Schöps
comments: true
date: 2012-07-05 23:43:29+00:00
layout: post
slug: third-alpha-version-of-openorienteering-mapper
title: Third alpha version of OpenOrienteering Mapper
wordpress_id: 107
categories:
- Mapper
- Releases
---

The OpenOrienteering team is happy to release the third alpha version 0.3.0 of its free orienteering mapping program today, containing numerous new features and improvements.

**Download**
For Windows:
[openorienteering-mapper_0.3.0-win-x86.zip](http://sourceforge.net/projects/oorienteering/files/Mapper/0.3.0/openorienteering-mapper_0.3.0-win-x86.zip/download)

For Ubuntu Linux 12.04 (Precise), 64 bit:
[openorienteering-mapper_0.3.0-precise_amd64.deb](http://sourceforge.net/projects/oorienteering/files/Mapper/0.3.0/openorienteering-mapper_0.3.0-precise_amd64.deb/download)

For Ubuntu Linux 12.04 (Precise), 32 bit:
[openorienteering-mapper_0.3.0-precise_i386.deb](http://sourceforge.net/projects/oorienteering/files/Mapper/0.3.0/openorienteering-mapper_0.3.0-precise_i386.deb/download)

To view the integrated manual, the help file viewer "Qt Assistant" is required in addition. For Linux it should be installed by the package manager, for Windows it is provided as a separate download because of the file size. To download it (or the program sources), go to the [SourceForge downloads directory](https://sourceforge.net/projects/oorienteering/files/Mapper/0.3.0/).

**Highlights**
Apart from many minor improvements, we would like to point out the following changes:

Templates, data import and export



	
  * Exporting maps in OCD 8 format

	
  * Loading OpenOrienteering and OCD 8 maps as templates

	
  * Exchange of data between map files

	
  * Loading GPX, DXF and OSM files as templates, and importing them into maps


Symbol sets



	
  * New ISSOM symbol sets (1:4000, 1:5000)

	
  * Improved symbol documentation


Editing tools



	
  * Circle/Ellipse and rectangle drawing tools

	
  * Length and area measure tool

	
  * Area union, intersection, subtraction and xor tools

	
  * Scaling tool


User interface



	
  * Many dialogs redesigned and simplified, Help and Reset buttons added

	
  * Input fields display units of measurement


Translations and localization



	
  * Japanese

	
  * Swedish

	
  * Ukrainian

	
  * Number formatting according to localization


Other new features



	
  * Built-in help

	
  * Program settings dialog

	
  * Much faster map drawing especially when interacting with many objects

	
  * Copy'n'Paste for symbols and map objects


**Note**

This is a snapshot release intended for review and testing. Although the ocd export functionality gives the possibility to continue work on maps with other programs in case this should be necessary, this version is not recommended for productive use unless you know what you are doing. We are looking forward to your feedback on bugs, missing features or annoyances.

**Screenshots (Examples)**

Drawing a rectangular object:
[![](/assets/2012/alpha3-screenshot1-300x188.png)](/assets/2012/alpha3-screenshot1.png)

Redesigned text symbol options:
[![](/assets/2012/alpha3-screenshot2-300x172.png)](/assets/2012/alpha3-screenshot2.png)

**Contributing**

If you want to work on a translation for Mapper, are a programmer with experience in C++ / Qt, or want to help in any other way, we would like to welcome you at our [developer mailing list](https://lists.sourceforge.net/lists/listinfo/oorienteering-devel). Other useful places with resources are:



	
  * [Git repository](https://sourceforge.net/p/oorienteering/code/) with the latest code

	
  * [Bug tracker](https://sourceforge.net/p/oorienteering/tickets/), the right place to enter all kinds of issues with the program

	
  * [Developer wiki](https://sourceforge.net/apps/mediawiki/oorienteering/index.php?title=Main_Page) with information about the code, or how to start a new translation


**Developers**

Following is an alphabetically sorted list of all people involved in developing this version of Mapper (apologies in case anyone has been forgotten). Thanks to all who helped to make this release possible!

Peter Curtis
Jan Dalheimer
Eugeniy Fedirets
Peter Hoban
Henrik Johansson
Tojo Masaya
Kai Pastor
Thomas Schöps
