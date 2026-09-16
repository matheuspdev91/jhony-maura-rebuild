# JHONY & MAURA — PERFORMANCE RULES

## Goal

Target smooth 60 FPS during normal and fast scrolling.

## Architecture

Keep CSS and JavaScript small.

Use the smallest implementation that achieves the visual result.

Prefer:
- CSS animations
- transforms
- opacity
- native browser behavior
- IntersectionObserver for simple reveal behavior

Use JavaScript only when CSS/native behavior cannot reasonably solve the requirement.

## Prohibited Complexity

Do NOT introduce:
- GSAP
- heavy animation libraries
- giant animation engines
- scroll-jacking
- multiple independent animation loops
- dozens of scroll listeners
- repeated DOM queries inside animation loops
- layout thrashing
- unnecessary will-change
- excessive filters/blur
- duplicated CSS
- override chains
- compatibility/legacy layers
- unnecessary !important rules

## CSS

The Foundation already handles the design system.

Custom style.css must contain only genuinely page-specific presentation.

Do not recreate Foundation.

Do not create a second design system.

Do not create thousands of lines of CSS.

Avoid one-off rules when a shared existing Foundation rule can solve the problem.

## JavaScript

Keep script.js compact.

For the music marquee, prefer CSS animation.

For Experience autoplay, use a simple lightweight timer/state mechanism if necessary.

For parallax, use the simplest efficient implementation possible.

Do not build a complex scroll-progress engine.

## Responsive

Preserve performance on desktop, tablet and mobile.

Reduce motion complexity on smaller screens where necessary.

Respect prefers-reduced-motion.

## Quality Principle

CODE SIMPLICITY + VISUAL QUALITY.

Do not sacrifice visual quality unnecessarily, but never add complexity without a clear visual or functional reason.
