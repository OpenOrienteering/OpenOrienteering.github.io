---
author: Thomas Schöps
comments: true
date: 2012-01-21 00:21:38+00:00
layout: post
slug: progress-on-the-symbol-types
title: Progress on the symbol types
wordpress_id: 57
categories:
- Development
- Mapper
---

Recently, I've made some good progress on the symbol types, so it's again time to present the newest features here. The current status is that all planned symbol types except lines are now more or less finished, this means points, areas, texts and 'combined' symbols. It does not mean that it is possible to draw objects with these symbol types on the map yet - the drawing tools will be another big piece of work - but it is now possible to define the various symbols having these symbol types, so it is almost possible to start building the IS(S)OM symbol sets.

Because a picture says more than a thousand words, here is a screenshot of the area symbol editor:

[![](/assets/2012/area_symbol_definition-300x161.png)](/assets/2012/area_symbol_definition.png)

It shows a test symbol with black background and various fill patterns consisting of line symbols and rows of point symbols. The upper left part of the window contains the general symbol settings, in the lower left part the area settings can be adjusted. The preview in the middle shows the area symbol at the top and all point symbols which appear in its fill patterns at the bottom. These point symbols can be edited with the point symbol editor on the right.

Next is the text symbol settings window:

[![](/assets/2012/text_symbol_definition-300x180.png)](/assets/2012/text_symbol_definition.png)

I couldn't resist ;-)
Apart from that, the settings contain the standard font settings one would expect.

The last ones are the combined symbols:

[![](/assets/2012/combined_symbol_definition-300x242.png)](/assets/2012/combined_symbol_definition.png)

This symbol type allows to combine two or more line or area symbols into a new one. For example, with this a building outline and a building area filling could be combined into a single 'building' symbol which makes it more convenient to use.

And finally, there is now also a symbol browser where the defined symbols can be selected:

[![](/assets/2012/symbol_browser.png)](/assets/2012/symbol_browser.png)

The tooltip shows the symbol number, its name in bold and after F1 has been pressed the symbol description is blended in at the bottom. In contrast to OCAD, the symbol icons used here are not separate raster images, instead they are generated directly from the symbol properties which makes them scalable and removes some effort from defining symbols. If it should turn out that this leads to too indistinguishable icons, some settings for them could be introduced.

That's it for now. My plan for the next developments looks like this: first, I want to finish the line symbols and some basic drawing tools, so objects can be placed on the map. Then, I want to create a first preview build of the program for Windows which makes it easier for you to try it out and give feedback. Let's see how long this will take. Bezier curves in combination with dashed lines having dashed border lines whose dashes need to be synchronized on both sides could be really painful ;-)
