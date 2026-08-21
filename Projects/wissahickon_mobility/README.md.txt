# Wissahickon Park Mobility & Visitor Access Analysis

An interactive Web GIS application visualizing park access, trailhead activity levels, trail network coverage, and mobility patterns across Philadelphia Parks & Recreation (PPR) properties in the Wissahickon Valley.

[🌐 Open Fullscreen Map](https://evanklarsen.github.io/Projects/wissahickon_mobility/wissahickon_webmap_approach.html)

---

## Interactive Map

<iframe src="https://evanklarsen.github.io/Projects/wissahickon_mobility/wissahickon_webmap_approach.html" width="100%" height="600px" style="border:1px solid #ccc; border-radius: 8px;"></iframe>

---

## Project Overview

This project analyzes park usage patterns and accessibility for the Wissahickon Valley park system by combining physical park infrastructure data with anonymized Location-Based Services (LBS) movement pings.

### Core Analytical Components
* **Trail Network Infrastructure:** Surface classifications, pedestrian/bike restrictions, and segment lengths across primary trails (Forbidden Drive, Orange, Yellow, White trails).
* **Trailhead Activity Hotspots:** Density of synthetic LBS pings and unique device counts at key access points and park facility structures.
* **Visitor Catchment & Origins:** Distance traveled (`dist_miles`) from device home block groups to evaluate neighborhood park catchment zones and regional draw.
* **Hydrographic & Environmental Context:** Watershed boundaries, creek alignments, and terrain contours supporting park planning and trail maintenance.

---

## Tools & Technologies

* **Desktop GIS:** QGIS (Data processing, network attribute joining, spatial filtering)
* **Spatial Analysis:** PyQGIS & Pandas (Trailhead ping aggregation, travel distance calculations)
* **Export Framework:** `qgis2web` plugin (Leaflet export)
* **Basemap Service:** Esri World Topographic Map (`ArcGIS/rest/services/World_Topo_Map`)
* **Customization:** HTML5, CSS3, JavaScript (vanilla)
* **Hosting:** GitHub Pages