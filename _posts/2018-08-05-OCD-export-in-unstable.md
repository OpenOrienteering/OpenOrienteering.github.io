---
author: Kai Pastor
date: 2018-08-05 16:00:00+02:00
layout: post
title: New OCD format support in unstable builds
categories:
- Mapper
- Releases
---

The stable releases of Mapper support reading of OCD files from version 6 to
version 12, and writing version 8 files. There are lots of shortcomings,
for example the loss of georeferencing information.

Now a rewritten OCD export feature has reached our 'unstable' builds. It
supports writing OCD format version 8 to 12. The new code removes some of the
past limitations. It is accompanied by corresponding changes to the OCD import
feature. Areas of improvement are:
- map georeferencing (at least with version 9 and newer)
- complex line symbols (no longer split on export)
- area symbols with border (no longer split on export to version 9 and newer)

The OCD import may now also open version 2018 files. However, this is really
experimental, as documentation for this format is not available ATM.

You may test this new code by downloading and running the unstable packages for
Windows or Linux. We remind you that the new code is likely to have some bugs.
Please take care (i.e. backups) of your map files when working with the unstable
packages. If you find issues, please report them, so that they get fixed before
release 0.9.

- [Windows packages: *OpenOrienteering-Mapper-unstable-...*](https://download.opensuse.org/repositories/home:/dg0yt/Windows/)
  (Installer (.exe) and ZIP archive (.zip) for x64 and x86
- [Linux packages](https://software.opensuse.org/download.html?project=home%3Adg0yt&package=openorienteering-mapper-unstable)
- [Changes ahead of the stable branch](https://github.com/OpenOrienteering/mapper/compare/master...dev)
- [Known issues in unstable](https://github.com/OpenOrienteering/mapper/issues?q=is:open label:"known issuesunstable")
- [OCD export/import project dashboard](https://github.com/OpenOrienteering/mapper/projects/3)

