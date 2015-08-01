---
author: Thomas Schöps
comments: true
date: 2012-10-25 22:38:04+00:00
layout: post
slug: openorienteering-mapper-0-4-provides-a-wealth-of-new-features
title: OpenOrienteering Mapper 0.4 provides a wealth of new features
wordpress_id: 126
categories:
- Mapper
- Releases
---

After two maintenance releases in the 0.3.x series, the OpenOrienteering team is happy to release a new major version of its free mapping program, containing many new features and improvements.

**Download**



	
  * [Windows installer](http://sourceforge.net/projects/oorienteering/files/Mapper/0.4.0/openorienteering-mapper_0.4.0-Windows-x86.exe/download) (14.0 MB)

	
  * [Windows ZIP archive](http://sourceforge.net/projects/oorienteering/files/Mapper/0.4.0/openorienteering-mapper_0.4.0-Windows-x86.zip/download) (18.1 MB)

	
  * NEW! [Mac OS X 10.8 package](http://sourceforge.net/projects/oorienteering/files/Mapper/0.4.0/openorienteering-mapper_0.4.0-Darwin-x64.dmg/download) (17.8 MB)

	
  * [Ubuntu 12.04 package 64-bit (amd64)](http://sourceforge.net/projects/oorienteering/files/Mapper/0.4.0/openorienteering-mapper_0.4.0-precise_amd64.deb/download) (1.9 MB)

	
  * [Ubuntu 12.04 package 32-bit (i386)](http://sourceforge.net/projects/oorienteering/files/Mapper/0.4.0/openorienteering-mapper_0.4.0-precise_i386.deb/download) (1.9 MB)


You can always find the latest binary and source release on
[http://sourceforge.net/projects/oorienteering/files/Mapper/](http://sourceforge.net/projects/oorienteering/files/Mapper/)

**Important notice**

For ISSOM maps created with the 0.3.x versions of Mapper, the symbol set should be updated to correct some serious problems that have been found with it. See the bottom of this post for instructions.

**Highlights**

Apart from many minor improvements, we would like to point out the following changes:

Editing tools



	
  * Appending to and following existing objects while drawing paths (hold Shift)

	
  * Setting the direction of area fill patterns

	
  * Right-click pie menu for quick tool switching without keyboard shortcuts

	
  * Constrained angles for all editing tools (hold Ctrl)

	
  * Vastly improved rectangle draw tool

	
  * Different strategies for spline node deletion (with Ctrl, or Shift + Ctrl)


Templates



	
  * Loading of images which are georeferenced with world files

	
  * Re-opening of closed templates while retaining their settings


Display



	
  * Display of a configurable map grid

	
  * "Hatch areas" (F2) and "baseline" (F3) view modes to view templates through the map

	
  * Toggle to hide or show all templates at once (F10)


Other



	
  * New map operation to rotate the whole map

	
  * New map operation to exchange the symbol set

	
  * Printing maps in a different scale

	
  * Line symbols can have different borders on left and right side; makes Swiss Scool symbol sets load correctly

	
  * New translation: French (thanks to Vincent Poinsignon)

	
  * XML file format, allowing for easier exchange of map files with other programs


**Screenshots (Examples)**

{% include image src="/assets/2012/mapper4_screenshot1.png" caption="The ring-shaped context menu allows for quick access to tools." href="/assets/2012/mapper4_screenshot1.png" %}

{% include image src="/assets/2012/mapper4_screenshot2-150x150.png" caption="Existing objects can be traced by Shift-clicking them and dragging the mouse along them." href="/assets/2012/mapper4_screenshot2.png" %}

{% include image src="/assets/2012/mapper4_screenshot3-150x150.png" caption="Map grid and constrained angle drawing (by holding Ctrl)." href="/assets/2012/mapper4_screenshot3.png" %}

**User forum**

For all questions regarding the use of OpenOrienteering Mapper, we created a brand new user forum which can be found [here](https://sourceforge.net/p/oorienteering/discussion/mapper/). This is separate from discussions about its development, which are done on the [mailing list](https://lists.sourceforge.net/lists/listinfo/oorienteering-devel) as before.

**Contributing**

If you want to work on a translation for Mapper, are a programmer with experience in C++ / Qt, or want to help in any other way, we would like to welcome you at our [developer mailing list](https://lists.sourceforge.net/lists/listinfo/oorienteering-devel). Other useful places with resources are:



	
  * [Git repository](https://sourceforge.net/p/oorienteering/code/) with the latest code

	
  * [Bug tracker](https://sourceforge.net/p/oorienteering/tickets/), the right place to enter all kinds of issues with the program

	
  * [Developer wiki](https://sourceforge.net/apps/mediawiki/oorienteering/index.php?title=Main_Page) with information about the code, or how to start a new translation


**How to: update the ISSOM symbol set**



	
  * Open your map in Mapper 0.4.0.

	
  * Choose Symbols -> Replace symbol set... from the menu.

	
  * Select the new ISSOM symbol file with the correct scale from your Mapper installation, for example C:/Program Files/OpenOrienteering Mapper 0.4.0/symbol sets/5000/ISSOM_5000.omap.

	
  * Untick the checkbox "Match replacement symbols by symbol number".

	
  * In the symbol list, scroll down to the two symbols with number 210 and choose the corresponding symbols numbered 210.1 and 210.2 on the right side, as shown here:
[![](/assets/2012/Symbol_replacement_step1.png)](/assets/2012/Symbol_replacement_step1.png)

	
  * Scroll further down to the symbol "Prominent man-made feature" in X shape, and choose the corresponding symbol numbered 540 on the right side, as shown here:
[![](/assets/2012/Symbol_replacement_step2.png)](/assets/2012/Symbol_replacement_step2.png)

	
  * Apply the changes by clicking Ok.

	
  * In the new symbol set, the dash directions of fence symbols have been made consistent with those of other line symbols. This means that all fences will be flipped by this procedure. To correct this, do the following steps for every fence symbol in the symbol list on the right side:

	
    * Right-click the symbol and choose "Select all objects with this symbol".

	
    * Use the "Flip dash direction" tool.




	
  * Done. As some color priorities of greens have been changed, you finally should have a look at the map and correct any problems that may occur.


This procedure corrects among other things some wrong or duplicate symbol numbers, improves color priorities and most importantly fixes the problem that some symbols were incorrectly marked as "helper symbols", which makes them disappear when the map is printed.

In case you run into problems with this, contact puzzlepaint at ymail.com for support.
