---
author: Thomas Schöps
comments: true
date: 2011-10-28 21:19:45+00:00
layout: page
slug: cupcalculator
title: CupCalculator
wordpress_id: 24
---

**[Download here!](https://sourceforge.net/projects/oorienteering/files/CupCalculator/)**

**CupCalculator** is a program which calculates scorings from race results. It takes the runners' race times and calculates points for every runner (and optionally also for teams) according to a set of rules which are specified in advance. This makes the point calculation a matter of a few clicks.

A word of warning, though: **always** do a quick check of the calculated points before publishing them! I cannot take responsibility for incorrectly calculated points.

There is a (German only) [manual](http://sourceforge.net/projects/oorienteering/files/CupCalculator/CupCalculator-doc-de_2011-10-28.zip/download) for the program.

_CupCalculator was last updated on April 3rd 2015:
- Added support for OS2010.
- Fixed crash on opening input files without a "first name" column.
- In presentation mode, the final team scoring can now be uncovered step-by-step if desired.
- The program now recognizes Sportsoftware export files in more languages without requiring manual column assignment.
- Added example input file to the download archive._

**Features**



	
  * Import race times from [Sportsoftware](http://www.sportsoftware.de) CSV exports (OE 2003 / 2010 and OS 2003 / 2010)

	
  * Calculation of scorings for single races and series scorings, with adjustable settings including handicapping based on age

	
  * Recognition and correction of misspelled clubs & runner names

	
  * Presentation mode for prize giving ceremonies

	
  * Calculated scorings can be exported as CSV, to be loaded into Excel / LibreOffice Calc to prepare the results as PDF

	
  * Works on Windows and Linux (when compiled yourself); Languages: English and German


**Screenshots**




{% include image src="/assets/2011/Screenshot_2-300x160.png" caption="The main window, with imported race times and calculated points" href="/assets/2011/Screenshot_2.png" %}

{% include image src="/assets/2011/Screenshot_3-300x201.png" caption="Some scoring settings" href="/assets/2011/Screenshot_3.png" %}

{% include image src="/assets/2011/Screenshot-300x137.png" caption="Automatically identified misspellings in imported race results" href="/assets/2011/Screenshot.png" %}

{% include image src="/assets/2011/Screenshot_4-300x225.png" caption="Presentation mode, showing the results of one category" href="/assets/2011/Screenshot_4.png" %}

**---**




You want to use this tool, but the rules for your competition cannot be represented in it yet? You desperately need to import results from unsupported formats? Write me an e-mail explaining it and I might consider implementing it.
