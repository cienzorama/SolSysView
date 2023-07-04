# SolSysView
Interactive visualization of the Solar System using babylon.js

SolSys View is a Solar System visualization program, as its name says, but it's also an astronomical calculator for events related to the Solar System, incorporating fairly accurate models of the movements, orientation an rotation of 35 objects, including all planets, Pluto and most major moons.

## Version 0.403 [2023 07 04]

- Move the position mark over the planet using mouse added
- Solved errors in bump textures
- Solved error in light time correction
- Solved error in Saturn ring texture
- Updated BABYLON.Mesh.* to BABYLON.MeshBuilder.*
- Minor optimization in shadow calculation and Moon position

## Some features:

- Near full scale of the Solar System, from ~20 km to 60 Astronomical Units.

- Timespan: 1900-2100.

- Accuracy: <30 arc seconds for planets and ~10 arc seconds for The Moon (views from Earth).

- Animations.

- Framerate: ~30 fps (20 fps in animation mode).

- View of or from any object; it's also possible to select the observation site by entering the longitude, latitude and height with respect to the first meridian, equator plane and zero level of each object.

- UTC time & date, with local date view (using the right time zone in options).

- Speed of light correction respect to Earth position.

- Interactive mode (only for select the main bodies from the external view).

- Earth and Moon eclipses and projection of the shadows of the moons on each planet, aproximated using babylon.js lighting system and detailed calculation of umbra and penumbra unsing other methods.

- +more...
