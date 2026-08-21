# Wissahickon Park Mobility & Visitor Access Analysis

An interactive Web GIS application analyzing park access, trailhead activity, trail network coverage, and visitor mobility patterns across Philadelphia Parks & Recreation (PPR) properties in the Wissahickon Valley — built as a methodology proof-of-concept combining physical infrastructure data with anonymized Location-Based Services (LBS) movement data.

**Tools:** QGIS · Python (Pandas) · qgis2web (Leaflet) · Esri World Topographic basemap

---

## Interactive Maps

### 1. Analytical Approach
Shows corridor adherence — how closely LBS pings track to the mapped trail network — and the multi-distance buffer methodology used to validate ping positioning against park boundaries and trails.

**[🌐 Open Fullscreen →](https://evanklarsen.github.io/Projects/wissahickon_mobility/wissahickon_webmap_approach.html)**

<iframe src="https://evanklarsen.github.io/Projects/wissahickon_mobility/wissahickon_webmap_approach.html" width="100%" height="600px" style="border:1px solid #ccc; border-radius: 8px;"></iframe>

---

### 2. Derived Insights
Shows trail traffic volume, visitor stay-points (dwell time), and device home-origin catchment layers derived from the approach methodology above.

**[🌐 Open Fullscreen →](https://evanklarsen.github.io/Projects/wissahickon_mobility/wissahickon_webmap_insights.html)**

<iframe src="https://evanklarsen.github.io/Projects/wissahickon_mobility/wissahickon_webmap_insights.html" width="100%" height="600px" style="border:1px solid #ccc; border-radius: 8px;"></iframe>

---

## Project Overview

This project analyzes park usage patterns and physical accessibility for the Wissahickon Valley park system by synthesizing physical park infrastructure data (trails, boundaries, structures) with anonymized LBS movement pings and visitor home-origin data. It addresses three questions:

1. How big and varied is the trail network?
2. Which park entry points and facilities get the most activity?
3. How far are visitors traveling to reach the park?

---

## Empirical Findings & Spatial Analysis

### Trail Network Breakdown

The mapped system covers **48.38 miles** of trail across 390 connected segments (average segment length: 0.12 miles). Nearly half the network consists of minor connector paths rather than the named main trails.

| Trail Name | Total Length (mi) | Share of System |
|---|---|---|
| Minor Trails & Connectors | 21.38 | 44.2% |
| Yellow Trail | 8.24 | 17.0% |
| Orange Trail | 5.53 | 11.4% |
| Forbidden Drive | 5.32 | 11.0% |
| White Trail | 4.53 | 9.4% |
| Lavender Trail | 1.43 | 3.0% |

### Top Trailhead Activity Hotspots

Based on LBS ping density, visitor congregation clusters around parking access, historic landmarks, and rest areas:

| Facility | Total Pings | Unique Devices | What's There |
|---|---|---|---|
| Thomas Mill Road Comfort Station | 125 | 6 | Restroom & covered bridge access |
| Harpers Meadow Shelter | 38 | 2 | Open field & picnic area |
| Guard Box (Blue Stone Bridge) | 35 | 2 | Major trail intersection & bridge |
| Valley Green Inn | 24 | 1 | Central restaurant & parking hub |
| Rex Avenue Shelter | 22 | 2 | Trailhead near popular climbing spots |

### Visitor Catchment & Travel Distance

Device home-origin analysis shows the Wissahickon functions primarily as a **suburban and regional destination**, not a neighborhood walk-in park.

- **Mean travel distance:** 7.37 miles
- **Median travel distance:** 7.26 miles
- **Range:** 1.7 – 12.6 miles

| Distance | Market Type | Device Share |
|---|---|---|
| 5–10 mi | Suburban | 74.0% |
| 2–5 mi | Community | 12.0% |
| 10–25 mi | Regional | 12.0% |
| < 2 mi | Immediate Local | 2.0% |

---

## Technical Pipeline

- **Desktop GIS:** QGIS 3.x — network segmentation, spatial filtering, vector symbology
- **Spatial analysis:** PyQGIS & Pandas — LBS ping aggregation, corridor-adherence buffering, travel-catchment metrics
- **Export engine:** `qgis2web` plugin → native Leaflet.js implementation
- **Basemap:** Esri World Topographic Map
- **Front-end customizations:** custom fill opacity, persistent event-driven popups, auto-collapsing mobile layer control tree
- **Hosting:** GitHub Pages

---

## Relevance to Enterprise-Scale Work

This Wissahickon analysis was built as a standalone proof of methodology — testing whether mobile LBS data, combined with open park infrastructure data, can reliably surface trail usage and catchment patterns without field-based visitor counts. The same pipeline (corridor-adherence buffering → hotspot aggregation → catchment analysis) is designed to scale to multi-site, multi-provider deployments, with geographic resolution and comparison baselines adapted per site.

---

*Part of a broader portfolio of applied environmental & urban GIS work. See [evanklarsen.github.io](https://evanklarsen.github.io) for additional projects, including the Philadelphia Environmental Justice and Climate Risk Index.*
