# Kingston Avenue of Honour — Self-Drive Virtual Tour

A web-based commemorative experience for the **former Shire of Creswick Avenue of Honour at Kingston**. After the first introduction, the project uses the name **Kingston Avenue of Honour** to make it easier for visitors to recognise and search for the Avenue.

This project was developed as part of the **ITECH3208 Project 1** work and has been updated through **Sprint 3**.

---

## Project Overview

The Kingston Avenue of Honour Self-Drive Virtual Tour allows visitors to explore the Avenue through a website-based experience. The project includes a home page, 360° virtual tour, tree map, profiles, about page, and resources page.

The goal of the project is to support community storytelling by helping visitors understand the historical importance of the Avenue and the people commemorated by the trees.

---

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Double-click `index.html`.
4. The website will open in a web browser.

This version is prepared to work without needing a local server.

---

## Website Pages

| File | Purpose |
|---|---|
| `index.html` | Home page introducing the Avenue and project |
| `virtual-tour.html` | 360° self-drive virtual tour with 5 stops |
| `tree-map.html` | Interactive map of commemorative trees |
| `profiles.html` | Profiles of people commemorated by the Avenue |
| `about.html` | Background information about the Avenue |
| `resources.html` | Further resources and useful links |

---

## Supporting Files

| File / Folder | Purpose |
|---|---|
| `script.js` | Shared website and tree/profile data |
| `stop2-data.js` | Panorama data for Stop 2 |
| `stop3-data.js` | Panorama data for Stop 3 |
| `img/` | Website icons, interface images, and Stop 4/5 panorama images |
| `tiles/` | 360° panorama image tiles |
| `vendor/` | Third-party libraries used by the virtual tour |

---

## Sprint 1 Updates

Sprint 1 focused on creating the first working version of the website and setting up the main structure of the project.

Completed Sprint 1 work included:

- Created the main website structure.
- Added the home page for the Avenue of Honour project.
- Added basic navigation across the website.
- Created the first version of the 360° virtual tour page.
- Added early tour stops to demonstrate the virtual tour concept.
- Added basic pages such as:
  - Home
  - Virtual Tour
  - Tree Map
  - Profiles
  - About
  - Resources
- Added initial styling and layout for the website.
- Added basic tree/profile data structure.
- Added early map and profile content placeholders.
- Prepared the project for GitHub repository use.

Sprint 1 created the foundation of the project and proved that the website and virtual tour concept could work.

---

## Sprint 2 Updates

Sprint 2 focused on improving the virtual tour, applying client feedback, and making the website more complete and presentation-ready.

Completed Sprint 2 work included:

- Added **Stop 4** and **Stop 5** to the existing 360° virtual tour.
- Updated the virtual tour to include **5 total stops**.
- Renamed the tour stops to make the self-drive route clearer:
  1. Avenue Entrance
  2. Avenue Midway Point
  3. Avenue Heart
  4. Avenue Southern Section
  5. Avenue Final Stop
- Removed the separate Google Street View page and related navigation links.
- Updated the website colour scheme based on client feedback:
  - Autumn orange
  - Autumn yellow/gold
  - Autumn red
  - Natural greens
- Updated the project wording to correctly introduce the Avenue as the **former Shire of Creswick Avenue of Honour at Kingston**.
- Used **Kingston Avenue of Honour** throughout the rest of the website for visitor clarity.
- Improved the home page overlay so the **1918 Year of Planting** information is clearer.
- Added clickable tree hotspots in the virtual tour.
- Added a **Nearby Trees** card for each stop.
- Added a **Start Tour / How to Use** popup for first-time users.
- Improved mobile-friendly controls with larger buttons.
- Removed the audio section to keep the tour simple and focused.
- Improved the tour route visibility on the virtual tour page.
- Updated the project structure and files for GitHub submission.

Sprint 2 improved the project from a basic prototype into a clearer self-drive virtual tour experience.

---

## Virtual Tour Stops

| Stop | Name | Description |
|---|---|---|
| Stop 1 | Avenue Entrance | Starting point of the self-drive tour |
| Stop 2 | Avenue Midway Point | Midway section of the Avenue route |
| Stop 3 | Avenue Heart | Central heritage section of the Avenue |
| Stop 4 | Avenue Southern Section | Later section of the self-drive route |
| Stop 5 | Avenue Final Stop | Final stop of the virtual tour experience |

---

## Client Feedback Changes

The website has been updated based on client feedback from Kingston Friends of the Avenue. The main changes include:

- Correct wording for the Avenue name.
- Autumn and green colour scheme across the full website.
- Clearer home page information.
- Removal of external Street View focus.
- Stronger focus on the custom self-drive virtual tour experience.

---

## Technologies Used

- HTML
- CSS
- JavaScript
- Marzipano virtual tour library
- Responsive web design

---

## Project Team

Developed by the ITECH3208 Project 1 team for the Kingston Avenue of Honour virtual tour project.

---


## Sprint 3 Updates

Sprint 3 focused on improving the interaction between the 360° virtual tour and the commemorative trees along the Kingston Avenue of Honour.

Completed Sprint 3 work included:

- Added numbered interactive hotspots directly inside the 360° panoramas.
- Positioned tree hotspots on the corresponding trees using panorama pitch and yaw coordinates.
- Connected each numbered hotspot to the existing tree and profile data.
- Enabled visitors to click a numbered tree hotspot to open the commemorated person's detail card.
- Reused the shared `TREES` dataset to avoid duplicate profile information.
- Improved hotspot visibility using the existing autumn gold, orange, red and green colour scheme.
- Preserved the existing five-stop self-drive virtual tour.
- Maintained the Nearby Trees panel as an additional way to access tree information.
- Improved hotspot interaction so selecting a tree does not interfere with panorama navigation.
- Added support for manual hotspot positioning through `TREE_HOTSPOT_OVERRIDES`.
- Used developer mode (`?dev`) to assist with accurate pitch and yaw positioning of tree markers.

Sprint 3 improves the connection between the physical trees visible in the Avenue panoramas and the historical information associated with each commemorated person.

## Current Status

Sprint 3 is complete. The project now includes numbered interactive tree hotspots positioned within the 360° panoramas. Visitors can select a tree marker to view the associated commemorative profile while continuing to explore the existing five-stop self-drive virtual tour.