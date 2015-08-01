---
author: Thomas Schöps
comments: true
date: 2013-03-29 16:56:36+00:00
layout: post
slug: the-next-step-openorienteering-mapper-0-5-0
title: 'The next step: OpenOrienteering Mapper 0.5.0'
wordpress_id: 141
categories:
- Mapper
- Releases
---

Version 0.5.0 marks the next step in the development of the free mapmaking program. Again many new features made it into the release - see the list of highlights below.


**Download**
	
  * [Windows installer](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.0/openorienteering-mapper_0.5.0-Windows-x86.exe/download) (12.1 MB)

	
  * [Windows ZIP archive](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.0/openorienteering-mapper_0.5.0-Windows-x86.zip/download) (14.5 MB)

	
  * [Mac OS X package 64 bit](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.0/openorienteering-mapper_0.5.0-Darwin-x64.dmg/download) (15.1 MB, important note)

	
  * [Ubuntu 12.04 package 32 bit (i386)](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.0/openorienteering-mapper_0.5.0-precise_i386.deb/download) (14.3 MB)

	
  * [Ubuntu 12.04 package 64 bit (amd64)](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.0/openorienteering-mapper_0.5.0-precise_amd64.deb/download) (14.0 MB)


You can always find the latest binary and source release on
[http://sourceforge.net/projects/oorienteering/files/Mapper/](http://sourceforge.net/projects/oorienteering/files/Mapper/)


**Translations**

Currently, English, German, Norwegian and Polish translations are fully up to date.
Additional translations will be released on [http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.0/translations/](http://sourceforge.net/projects/oorienteering/files/Mapper/0.5.0/translations/) when they become available. You can simply open a downloaded translation file in the settings dialog.

If you are interested in writing a translation, find more information [here](http://sourceforge.net/apps/mediawiki/oorienteering/index.php?title=Translation).


**Documentation links**
	
  * [Wiki with program manual](https://sourceforge.net/p/oorienteering/wiki/Home/)

	
  * [Forum](https://sourceforge.net/p/oorienteering/discussion/mapper/)

	
  * [Mapmaking with OpenOrienteering Mapper: first steps for beginners](/assets/2013/Mapmaking-first-steps.pdf)


**Highlights in this version**

Example maps
{% include image src="/assets/2013/Release_0_5_0_Sample_map-300x200.png" caption="Release 0.5.0 Sample map" href="/assets/2013/Release_0_5_0_Sample_map.png" %}

  * This version of Mapper comes with three example files:
	
    * Sprint sample from map "Landschaftspark Hachinger Tal" by Bettina Deixler
    * Forest sample from map "Schlossbergholz" by Thomas Schöps
    * Overprinting example

  * You can open them from the second Tip of the Day, or find them directly in the examples folder of your Mapper installation directory, e.g. C:/Program Files/OpenOrienteering Mapper 0.5.0/examples.

Editing tools
{% include image src="/assets/2013/Release_0_5_0_Cut_away_tool-300x200.png" caption="Release 0.5.0 Cut away tool" href="/assets/2013/Release_0_5_0_Cut_away_tool.png" %}


{% include image src="/assets/2013/Release_0_5_0_Line_edit_tool-300x200.png" caption="Release 0.5.0 Line edit tool" href="/assets/2013/Release_0_5_0_Line_edit_tool.png" %}

{% include image src="/assets/2013/Release_0_5_0_Drawing_tricks-300x200.png" caption="Release 0.5.0 Drawing tricks" href="/assets/2013/Release_0_5_0_Drawing_tricks.png" %}



	
  * New line edit tool. Allows to edit rectangular objects while ensuring that they stay rectangular, and to switch line segments between straight and curved.

	
  * Reworked rectangle tool, now supports drawing 45 degree angles and snapping to previous lines.

	
  * New cutout and cut away tools

	
  * New experimental tools: convert to curves and simplify path

	
  * New panning tool for users without mouse wheel or keyboard

	
  * Path and rectangle drawing tools: Ctrl+Click on existing objects to pick a direction from them

	
  * Path closing tool: now connects open ends always to the closest other end


Import & Export



	
  * Improved OCD, DXF and GPX import

	
  * Image templates should now be correctly located in exported OCD files

	
  * OMAP file format is now XML-based


Display

{% include image src="/assets/2013/Release_0_5_0_Overprinting1-300x128.png" caption="Release 0.5.0 Overprinting" href="/assets/2013/Release_0_5_0_Overprinting1.png" %}



	
  * Overprinting simulation, based on spot color support

	
  * Improved display of lines, especially with sharp angles


Other



	
  * Extensive, updated program documentation

	
  * Reworked color window & color editing dialog

	
  * Reworked georeferencing dialog

	
  * Reworked home screen

	
  * Support for multi-page printing

	
  * Improved selection possibilities in the symbol pane

	
  * Course setting symbols now included in all symbol sets, including a basic all-in-one line symbol for start, controls and finish

	
  * Program logo included in symbol sets

	
  * Improved program icon

	
  * Option to load most recent file on program startup

	
  * Persistent toolbar and dock widget positions

	
  * Program switched to Qt5 toolkit internally

	
  * Many, many bugfixes and usability improvements


**Note about overprinting**

For existing OpenOrienteering maps, you need to update the symbol set to benefit from the new overprint feature. To do so, choose Symbols -> Replace symbol set... from the menu and choose the new symbol set from the location where Mapper is installed, for example C:/Program Files/OpenOrienteering Mapper 0.5.0/symbol sets/5000/ISSOM_5000.xmap. Then check if all symbols are replaced correctly and confirm with Ok. Now you can activate overprinting by clicking View -> Overprinting simulation.

**Note for Mac users**

Mapper requires Mac OS X 10.6 or newer.

On systems with activated Gatekeeper (10.8 Mountain Lion and partly also 10.7 Lion) the app has to be started once by right clinking on the file and choosing Open. This is because it is not code signed, which would require an annual license fee.

**Documentation**

In addition to the [user forum](https://sourceforge.net/p/oorienteering/discussion/mapper/), there is now also a [user wiki](https://sourceforge.net/p/oorienteering/wiki/Home/). It is pre-filled with the program manual. If you have hints to share with the mapper community or want to extend the program documentation, please create a SourceForge account and start editing it!

A presentation "[Mapmaking with OpenOrienteering Mapper: first steps for beginners](/assets/2013/Mapmaking-first-steps.pdf)" is now available to get you started quickly.

**Contributing**

If you want to work on a translation for Mapper, are a programmer with experience in C++ / Qt, or want to help in any other way, we would like to welcome you at our [developer mailing list](https://lists.sourceforge.net/lists/listinfo/oorienteering-devel). Other useful places with resources are:



	
  * [Git repository](https://sourceforge.net/p/oorienteering/code/) with the latest code

	
  * [Bug tracker](https://sourceforge.net/p/oorienteering/tickets/), the right place to lookup and report all kinds of issues with the program

	
  * [Developer wiki](https://sourceforge.net/apps/mediawiki/oorienteering/index.php?title=Main_Page) with information about the code, or how to start a new translation


