---
author: Kai Pastor
date: 2019-09-16 07:50:00+02:00
layout: post
title: Mapper development snapshots
categories:
- Mapper
- Releases
---

Mapper 0.9.0 is coming closer. There has been a lot of progress since v0.8.4.
While we didn't report any details here, we continued to provide snapshots of
the development work for testing. The 'unstable' builds we used to provide for
Windows via Open Build Service have been replaced by 'dev' builds for Windows,
macOS and Android, published on our Releases page on Github. These builds are
done on Microsoft's Azure Pipelines service now, and we will create the official
releases in the same way. Continuous integration in Azure Pipelines already
helped a lot in verifying the quality of the source code.

The latest 'dev' build was published yesterday. Its major addition is support
for enabling touch mode (i.e. the mobile user interface) on PCs, and access to
the GPS location on Windows (for tracking in touch mode).

Since v0.8.4, the most prominent improvement is the extended OCD import and export,
which now covers more versions and features. Another addition is GeoTIFF support.
Of course there were significant updates to third-party components, and updates
required for supporting new Android versions.

By testing the dev builds, you can help us to remove sharp edges before releasing
Mapper 0.9.0. 

There is work-in-progress on ISSprOM 2019 and ISOM 2017-2 symbol sets, but these
are not included yet.

{% include download tag="dev-v20190915.17" %}
