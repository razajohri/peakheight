# 3D Height Growth Model

This component creates an animated 3D character that demonstrates height growth visually.

## Features

- Animated 3D character with growing height
- Smooth animation loop showing before/after growth
- Interactive controls (rotate, zoom)
- Stylized design with colored body parts
- Particle effects for visual appeal

## Usage

```tsx
import { HeightGrowthHero } from "@/components/3d/HeightGrowthModel";

// In your component
<HeightGrowthHero />
```

## Dependencies

- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers and utilities
- `three` - Core Three.js library

## Customization

The model can be customized by:
- Adjusting the `height` prop (default animates between 0.8 and 1.2)
- Changing colors in the mesh materials
- Modifying animation speed
- Adding/removing body parts

