---
author: Thomas Schöps
comments: true
date: 2012-01-04 00:22:17+00:00
layout: post
slug: code-for-mapper-is-now-public
title: Code for Mapper is now public
wordpress_id: 50
categories:
- Development
- Mapper
- Releases
---

From now on, I will push code changes to a public **git repository** so everyone can have a look at the code. You can download it like this:

    
    git clone git://git.code.sf.net/p/oorienteering/code oo-mapper


Some more or less technical details:
The program is written in C++ using QT. While developing, I only test on Ubuntu linux, so the code probably won't even compile with Visual C++ on Windows without some changes. The license is GNU GPL v3. At the moment, the code is only interesting for programmers, as it is not possible to do anything useful with the program yet. Ok, actually it could be abused as a simple painting program or gpx viewer, but that is not really its purpose.

You might be wondering how C++ with QT is supposed to work on Android. If so, check out the "**[Necessitas](https://sourceforge.net/p/necessitas/home/necessitas/)**" project. It is still in alpha stage, but I hope that it will work well enough.
