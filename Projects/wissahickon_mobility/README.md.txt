# Wissahickon Park Mobility & Visitor Access Analysis

An interactive Web GIS application visualizing park access, trailhead activity levels, trail network coverage, and visitor mobility patterns across Philadelphia Parks & Recreation (PPR) properties in the Wissahickon Valley.

[🌐 Open Fullscreen Map](https://evanklarsen.github.io/Projects/wissahickon_mobility/wissahickon_webmap_approach.html)

---

## Interactive Map

<iframe src="https://evanklarsen.github.io/Projects/wissahickon_mobility/wissahickon_webmap_approach.html" width="100%" height="600px" style="border:1px solid #ccc; border-radius: 8px;"></iframe>

---

## Project Overview

This project analyzes park usage patterns and physical accessibility for the Wissahickon Valley park system by synthesizing physical park infrastructure data with anonymized Location-Based Services (LBS) movement pings and visitor home origin data.

---

## Empirical Findings & Spatial Analysis

### 1. Trail Network Breakdown
The mapped system covers **48.38 miles** of total trails across 390 network segments (average segment length of 0.12 miles).

| Trail Name | Total Length (Miles) |
| --- | --- |
| Minor Trail / Connectors | 21.38 |
| Yellow Trail | 8.24 |
| Orange Trail | 5.53 |
| Forbidden Drive | 5.32 |
| White Trail | 4.53 |
| Lavender Trail | 1.43 |

### 2. Top Trailhead Activity Hotspots
Based on synthetic LBS ping density, primary visitor congregation and access points center on major park infrastructure hubs:

| Facility Name | Total Pings | Unique Devices |
| --- | --- | --- |
| Thomas Mill Road Comfort Station | 125.0 | 6.0 |
| Harpers Meadow Shelter | 38.0 | 2.0 |
| Guard Box (Blue Stone Bridge) | 35.0 | 2.0 |
| Valley Green Inn | 24.0 | 1.0 |
| Rex Avenue Shelter | 22.0 | 2.0 |

### 3. Visitor Catchment & Travel Distance
Analysis of visitor device home origins indicates that the Wissahickon functions primarily as a **suburban and regional recreational destination**:
* **Mean Travel Distance:** 7.37 miles *(Median: 7.26 miles | Range: 1.70 – 12.59 miles)*

| Distance Category | Device Count | Market Share |
| --- | --- | --- |
| 5–10 mi (Suburban) | 74 | 74.0% |
| 2–5 mi (Community) | 12 | 12.0% |
| 10–25 mi (Regional) | 12 | 12.0% |
| < 2 mi (Local) | 2 | 2.0% |

---

## Tools & Technical Pipeline

* **Desktop GIS:** QGIS 3.x (Attribute network processing, spatial filtering, vector symbology)
* **Spatial Data Analysis:** PyQGIS & Pandas (LBS ping aggregation, travel catchment metrics)
* **Export Engine:** `qgis2web` plugin (Leaflet JS implementation)
* **Basemap Integration:** Esri World Topographic Map (`ArcGIS/rest/services/World_Topo_Map`)
* **Front-End Customizations:** Custom fill opacity (`0.5`), persistent event-driven popups, and a auto-collapsing mobile layer control tree.
* **Hosting:** GitHub Pages