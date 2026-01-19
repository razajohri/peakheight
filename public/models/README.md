# 3D Models Directory

Place your 3D model files here (.glb or .gltf format recommended).

## How to Use:

1. **Download or create a 3D model** in GLTF or GLB format
2. **Place the file** in this `public/models/` directory
3. **Update the component** in `app/page.tsx`:
   ```tsx
   <HeightGrowthHero modelPath="/models/your-model.glb" />
   ```

## Where to Get Free 3D Models:

- **Sketchfab** (https://sketchfab.com) - Search for "human character" or "person"
- **Poly Haven** (https://polyhaven.com/models)
- **TurboSquid** (https://www.turbosquid.com) - Free models available
- **Mixamo** (https://www.mixamo.com) - Animated human characters from Adobe
- **CGTrader** (https://www.cgtrader.com/free-3d-models) - Free section available

## Recommended Model Specifications:

- **Format**: GLB (preferred) or GLTF
- **File Size**: Under 5MB for best performance
- **Textures**: Include textures or use materials
- **Scale**: Models should be properly scaled (1 unit = 1 meter is standard)

## Example:

```tsx
// In app/page.tsx
<HeightGrowthHero modelPath="/models/growing-person.glb" />
```

