---
author: Thomas Schöps
comments: true
date: 2012-01-07 13:52:15+00:00
layout: post
slug: colors-and-sketching
title: Colors and Sketching
wordpress_id: 51
categories:
- Development
- Mapper
---

Here comes another small update about some of Mapper's current features. The first one for today is **color definition** for map objects:

[![](/assets/2012/color_definition-300x228.png)](/assets/2012/color_definition.png)

Yes, that's not too exciting, but necessary. Editing in this table works inline like in a spreadsheet program, colors can be defined by specifying CMYK or RGB values. Colors higher in the list will be drawn on top of the lower colors.

One thing that probably would be useful is some sort of color management which could be used to make the on-screen colors appear exactly as they are printed later. But I have no experience with this, neither in implementing it nor in even just using it, so I don't know how hard that would be. Maybe I will look into it later, but for now it is more important that map drawing works at all.

The second feature for today is **drawing on templates**:

[![](/assets/2012/draw_on_template-261x300.jpg)](/assets/2012/draw_on_template.jpg)

It allows to paint directly on raster images loaded as templates, so in mobile use the program can be used like a drawing board. Of course it will also be possible to draw map objects directly, but sketching like this has some potential benefits:



	
  * While having more objects on the map will degrade performance, this does not happen when sketching on a template. This could be important for the use on mobile devices.

	
  * Erasing drawn lines or parts of them is intuitively possible by painting over them in white, the "eraser color". Map objects would first have to be selected, cut into pieces, and then the correct piece deleted.


The setup for the sketching is still a bit more cumbersome than necessary though. At the moment, if you do not want to destroy your base map images when painting and want to be able to erase what you have drawn, you have to create a separate transparent image template, load that on top of the base maps and use it for drawing. For the future, an idea is to offer a separate "Sketch" template type which would be a sketching canvas that grows automatically to cover the area which is painted on.

Currently, I am working to implement the first map symbol type, **point symbols**, and an editor to define such symbols. This is a lot of work and it seems that for every item on my "to do"-list that is accomplished, two new items come to mind. At least it is already possible to create the simplest of the point objects. More about it will come with the next update.
