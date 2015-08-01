---
author: Thomas Schöps
comments: true
date: 2013-08-22 21:05:44+00:00
layout: post
slug: ideas-wanted-mapper-for-android-user-interface
title: 'Ideas wanted: Mapper for Android user interface'
wordpress_id: 173
categories:
- Development
- Mapper
---

A short video of trying out a very early version of Mapper for Android:



And a screenshot:

{% include image src="/assets/2013/Mapper_on_Android.jpg" caption="Mapper on Android" href="/assets/2013/Mapper_on_Android.jpg" %}

---

Mapper is currently in the process of being ported to Android, so that in the near future it should be possible to use a wide range of devices for mobile surveying. As can be seen above, the first tests have already been done successfully. However, one missing part is the user interface: the current one is designed for desktop PCs and relies for example on a keyboard, the right mouse button, and the mouse itself as high-precision input device, which are not available on a smartphone.

Because of this, a new user interface should be designed. This has to address a range of issues, for example:



	
  * What should be the general concept for the mobile UI (e.g. screen layout)?

	
  * How to best get high-precision, but also quick input for drawing when only a touch screen usable by finger touches is available? Note that even input pens for normal capacitive touch screens have a rather wide tip.

	
  * How to best replace the keys and right mouse button in the various tools where they are currently required?


As we want to select the best solutions, we encourage you to participate with your ideas. We are looking for feedback from experienced mappers as well as all others who may use the app. So, if you have an idea, please go to the design page in Mapper's user wiki and enter it there:
[https://sourceforge.net/p/oorienteering/wiki/Mobile%20UI%20design/](https://sourceforge.net/p/oorienteering/wiki/Mobile%20UI%20design/)

Note that editing the page or creating a new page requires to register an account at SourceForge and log in, but posting (moderated) comments is possible without registration. We look forward to your contributions!

**For programmers:**
You may already try out running Mapper on Android with the desktop UI as shown in the above screenshots by compiling it yourself from git master. See the INSTALL file for instructions for compiling on Linux. When running the app, it should be possible to open an existing map file and play around with the tools. Note however that there are many limitations with the desktop UI, not only because of the above mentioned problems, but also due to the constraint of the current QT on Android version that only one window can be active at a time. Additional dialogs like the dialog to create a new map will not work correctly.
