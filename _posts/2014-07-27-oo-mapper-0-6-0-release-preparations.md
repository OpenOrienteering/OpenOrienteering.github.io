---
author: Kai Pastor
comments: true
date: 2014-07-27 21:07:25+00:00
layout: post
slug: oo-mapper-0-6-0-release-preparations
title: OO Mapper 0.6.0 release preview
wordpress_id: 190
categories:
- Mapper
---

Binary preview packages for the coming release are available as **Mapper 0.5.93** from our downloads. This version contains a lot of changes from 0.5.3, so we recommend to use it only for testing with temporary copies at the moment. Depending on the features used in the new version, maps might no longer be readable in older versions of Mapper. We introduced a setting which allows to retain compatibility of files with older versions of Mapper. On the other hand, this preview has good quality and should not show serious issues. The underlying Qt framework was updated to version 5.3.1. However, Linux packages are built on openSUSE Build Service and use the distributions’ library versions. For Windows, the build tools were changed to a GCC 4.9.0 MXE toolchain, i.e. Windows packages are built on Linux.

**Provided packages:**



	
  * _EDIT: The binary packages for this release are no longer available._

	
  * Source code: [openorienteering-mapper_0.5.93-src.tgz](http://sourceforge.net/projects/oorienteering/files/Mapper/Source/openorienteering-mapper_0.5.93-src.tgz)


For getting a stable 0.6.0 we could need some help with:

	
  * testing for new bugs (not on production data, of course...)

	
  * revising documentation

	
  * updating translations.


We are looking forward to your feedback on bugs, annoyances or missing features. When you create trouble tickets, please select milestone 0.5.93.
