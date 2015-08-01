---
author: Thomas Schöps
comments: true
date: 2013-04-09 20:31:51+00:00
layout: post
slug: printing-in-openorienteering-mapper-0-5-0-on-windows
title: Printing issue on Windows and Mac OS X in OpenOrienteering Mapper 0.5.0
wordpress_id: 156
categories:
- Mapper
---

A problem in Mapper 0.5.0 has been discovered which leads to missing parts of area symbol patterns when printing maps directly to a Windows or Mac OS X printer. As a workaround, for printing please export the map as PDF first using the program's PDF exporter (not an external PDF printer!) and then print the PDF file. This should be equivalent to direct printing, apart from not being affected by the bug.

The issue is solved in the upcoming 0.5.1 release.
