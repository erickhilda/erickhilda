---
title: DRAFT - Bringing Your Fantasy Map to Life
meta:
  - name: description
    content: How I created a custom interactive fantasy map using simple web tools
date: 
duration: 5
image: "/images/posts/CotC_Orsterra_World_Map.webp"
---

[[toc]]

I love playing RPGs, especially games like Genshin Impact and Octopath Traveler. While exploring these vast fantasy worlds, I always find myself relying on maps to track locations or mark important places.

Genshin Impact has amazing community-driven map tools with every treasure chest and quest marker perfectly documented. But when I started playing Octopath Traveler, I couldn't find similar tools with on par functionality for Octopath Traveler. I needed something to help me navigate the world and remember important locations, and importantly no login needed. That's when I decided to try build my own.

## Researching A Way To Create My Own Map

Coming from some experience with data visualization and mapping, I initially thought creating a fantasy map would be incredibly complex. But after some research I learn that map is somekind of a lot image piece patch up together. They take one large image and slice it into a grid of smaller square images called "tiles." Your browser loads only the tiles you're currently viewing, making everything fast and smooth.

Initially found this [discussion](https://gis.stackexchange.com/questions/285483/how-can-i-convert-an-image-into-map-tiles-for-leafletjs), in those discussion they mention some methods to create my own custom style map by creating a tiles. After some more browsing the internet i stumble on this [article on Leaflet.js maps](https://techtrail.net/creating-an-interactive-map-with-leaflet-js/) and an [example](https://github.com/manianiac/fantasy-leaflet-map) that used a Python tool called [gdal2tiles](https://github.com/commenthol/gdal2tiles-leaflet) which also mention on the discussion. Based on this I decide to try using gdal2tiles and Leaflet.js, since this sound like the simplest way to create a map tiles. without any additional or complex tools and processing.

Now I just need a high-resolution image of the Octopath Traveler World and run the gdal2tiles command.

## Map Tiles

Using the gdal2tiles tool, I converted my image into web-friendly tiles:

```bash
# Install the tool
pip install gdal2tiles-leaflet

# Convert your fantasy map to tiles
gdal2tiles.py -p raster -z 0-4 -w none fantasy-map.png tiles/
```

This creates a folder structure like this:

```
tiles/
├── 0/
│   └── 0/
│       └── 0.png
├── 1/
│   ├── 0/
│   │   ├── 0.png
│   │   └── 1.png
│   └── 1/
│       ├── 0.png
│       └── 1.png
├── 2/
│   ├── 0/
│   │   ├── 0.png
│   │   ├── 1.png
│   │   └── 2.png
│   └── [more folders...]
└── 4/
    └── [hundreds of tile files...]
```

Like I said before, map is actually a pieces of image stitch together to create a complete display of the original image. In this gdal2tiles generated folder, each folder represents a zoom level:

- **Level 0**: The entire map in one 256x256 pixel tile
- **Level 1**: The map split into 4 tiles (2x2 grid)
- **Level 2**: 16 tiles (4x4 grid)
- **Level 3**: 64 tiles (8x8 grid)
- **Level 4**: 256 tiles (16x16 grid)

When you zoom and pan around, the map loads only the tiles you're currently viewing.

## Create the Web Map

With my tiles ready, I created a simple HTML page using Leaflet.js:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <style>
        #map { height: 100vh; width: 100vw; }
    </style>
</head>
<body>
    <div id="map"></div>
    
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script>
        // Create the map
        const map = L.map('map', {
            crs: L.CRS.Simple, // Important for fantasy maps!
            center: [-100, 143],
            zoom: 3,
            maxZoom: 4,
            minZoom: 1
        });
        
        // Add your custom tiles
        L.tileLayer('tiles/{z}/{x}/{y}.png', {
            noWrap: true
        }).addTo(map);
    </script>
</body>
</html>
```

The key insight is using [L.CRS.Simple](https://leafletjs.com/examples/crs-simple/crs-simple.html) instead of the default coordinate system. This tells Leaflet to treat your map as a simple image rather than a geographic projection. Also you should consider the zoom level configuration, in my case my tiles was generated to 4 at max. Which mean my map currently support zoom level only from 0 to 4.

And that is all, my map is ready. This approach work for me since the application that I want to create is simple and doesn't need many complex functionality of a map.

You could access the full codebase of my custom map in this [repository](https://github.com/erickhilda/8path-map).