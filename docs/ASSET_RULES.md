# JHONY & MAURA — ASSET RULES

## Absolute Rule

ONE SOURCE ASSET = ONE COMPLETE MEDIA OBJECT.

The source artwork is already designed.

Never reconstruct its internal composition with HTML/CSS.

Never:
- split artwork
- recreate panels
- recreate artwork typography
- crop important artwork
- stretch artwork
- redesign artwork

## Multiple Source Files

If an event contains multiple independent source image files:

Each file is an individual media item.

On desktop, related independent assets should be presented SIDE-BY-SIDE when appropriate, as one organized editorial composition.

Example:

[ IMAGE A ][ IMAGE B ]

NOT:

[ IMAGE A ]

[ IMAGE B ]

Do not leave unnecessary large gaps between related assets.

Align them intentionally and keep their visual scale coherent.

## Single Multi-Panel File

If ONE source image already contains multiple pages/panels:

Treat the COMPLETE FILE as ONE media object.

Do not split it.
Do not rebuild its panels with CSS Grid.
Do not recreate its internal layout.

## Native Aspect Ratio

Different assets may have different native proportions.

That is acceptable.

Standardize the OUTER PRESENTATION, not the artwork.

Prefer preserving the complete image with:
- width
- height: auto
- object-fit: contain
- object-position: center

when appropriate.

Do not use object-fit: cover if it removes meaningful artwork.

## 15 Anos

If 15 Anos has multiple independent source files:
- each file is a separate media item
- do NOT vertically stack them into a giant page composition
- organize them side-by-side on desktop when appropriate
- mobile may stack them when necessary

If 15 Anos has one tall source file:
- render it as ONE complete media object
- do not split it
- do not reconstruct it

## Casamentos

If the wedding source already contains multiple panels/pages inside one file:
- render the complete file as one image

If there are multiple independent files:
- compose those independent files together using the same external event-media system

## Corporativo

Use exactly the same event-media presentation system.

Different artwork is allowed.
Different component architecture is not.

## Event Media System

All event categories share the same OUTER presentation logic:
- frame
- alignment
- spacing
- visual treatment
- responsive behavior
- interaction

The artwork itself remains untouched.
