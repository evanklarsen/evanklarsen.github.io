# Wissahickon Mobility & Environmental Justice Web Map

An interactive Web GIS application visualizing Environmental Justice (EJ) indices, climate vulnerability, and mobility access across Philadelphia census tracts. Designed to support park planning, environmental equity analysis, and public access evaluation.

[🌐 Open Fullscreen Map](https://evanklarsen.github.io/Projects/wissahickon_mobility/wissahickon_webmap_approach.html)

---

## Interactive Map

<iframe src="https://evanklarsen.github.io/Projects/wissahickon_mobility/wissahickon_webmap_approach.html" width="100%" height="600px" style="border:1px solid #ccc; border-radius: 8px;"></iframe>

---

## Project Overview

This project synthesizes spatial demographic indicators with environmental stress metrics across Philadelphia census tracts. By anchoring the data on a topographic base, the map allows planners, park personnel, and community members to evaluate climate risk, health vulnerability, and social equity relative to public green spaces and terrain.

### Key Data Domains Evaluated
* **EJ & Climate Risk Index:** Integrated overall risk score.
* **Environmental Burden Index:** Pollution, industrial proximity, and environmental hazard exposure.
* **Health Vulnerability Index:** Pre-existing health conditions and healthcare accessibility metrics.
* **Social Vulnerability Index:** Socioeconomic status, household composition, and demographic factors.
* **Climate Exposure Index:** Extreme heat, flood risk, and environmental hazards.

---

## Tools & Technologies

* **Desktop GIS:** QGIS (Data processing, symbology, and thematic classification)
* **Export Framework:** `qgis2web` plugin (Leaflet export)
* **Mapping Library:** Leaflet.js
* **Basemap Service:** Esri World Topographic Map (`ArcGIS/rest/services/World_Topo_Map`)
* **Customization:** HTML5, CSS3, JavaScript (vanilla)
* **Hosting:** GitHub Pages

---

## Custom Technical Enhancements

To transform the standard QGIS web export into a functional, user-friendly tool, several front-end customizations were made:

1. **Topographic Basemap Integration:** Replaced default OSM tiles with Esri's World Topo Map to display terrain contours, park boundaries, and natural features crucial for park mobility planning.
2. **Layer Opacity Tuning:** Adjusted thematic layer fill opacity (`fillOpacity: 0.5`) to allow underlying streets, park labels, and topographic terrain to remain visible through colored polygons.
3. **Pinned Attribute Popups:** Modified event listeners to disable `mouseout` popup closures. Users can click any tract to lock open a scrollable, full-metric pop-up window without losing context when moving the cursor.
4. **Mobile-Responsive Layer Tree:** Configured layer control grouping (`L.control.layers.tree`) with dynamic collapsing (`collapsed: true`) to prevent interface clutter on mobile devices.