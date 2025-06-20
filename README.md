# SolSysView
Interactive visualization of the Solar System using babylon.js

SolSys View is a Solar System visualization program, as its name says, but it's also an astronomical calculator for events related to the Solar System, incorporating fairly accurate models of the movements, orientation an rotation of 35 objects, including all planets, Pluto and most major moons.

https://cienzorama.github.io/SolSysView/

## Version 0.550 [2025 06 03]

- Fixed (a lot of) problems with latest versions of babylon.js
- Solved error in camera orientation in from the planet view
- Added (a bit) more detail to satellite geometry
- Added a new skymap texture (working on option to select different textures)
- Other Minor optimizations

## Version 0.501 [2024 05 21]

- Added a small event list with 10 selected astronomical events
- Added a option to save a event (data will be lost on reset or reload)
- Added a option to restore the to initial state after to load a event
- Solved error in Moon bump texture
- Solved error in plan404 precession correction
- Solved error in transit calculation
- Other Minor optimizations

## Version 0.405 [2023 07 07]

- Added the ephemeris models plan404 and VSOP87 approximation
- Date limit increased from 1900-2100 to 1800-2200
- Compute visibility zones for transits and occultations
- Solved errors on precession of stars and constellations figures
- Added control for ambient light
- Minor optimization in over the body visualization
  
## Version 0.403 [2023 07 04]

- Move the position mark over the planet using mouse added
- Solved errors in bump textures
- Solved error in light time correction
- Solved error in Saturn ring texture
- Updated BABYLON.Mesh.* to BABYLON.MeshBuilder.*
- Minor optimization in shadow calculation and Moon position

## Some features:

- Near full scale of the Solar System, from ~20 km to 60 Astronomical Units.

- Timespan: 1800-2200.

- Accuracy: <30 arc seconds for planets and ~10 arc seconds for The Moon (views from Earth).

- Animations.

- Framerate: ~30 fps (20 fps in animation mode).

- View of or from any object; it's also possible to select the observation site by entering the longitude, latitude and height with respect to the first meridian, equator plane and zero level of each object.

- UTC time & date, with local date view (using the right time zone in options).

- Speed of light correction respect to Earth position.

- Interactive mode (only for select the main bodies from the external view).

- Earth and Moon eclipses and projection of the shadows of the moons on each planet, aproximated using babylon.js lighting system and detailed calculation of umbra and penumbra unsing other methods.

- +more...
