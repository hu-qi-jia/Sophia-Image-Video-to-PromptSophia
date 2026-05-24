import {
  TARGET_MODELS,
  type DetectedImageInfo,
  type TargetModelId
} from "../types";

function targetModelLabel(targetModel: TargetModelId): string {
  return TARGET_MODELS.find((model) => model.id === targetModel)?.label ?? targetModel;
}

function inferImageAspectRatio(imageInfo?: DetectedImageInfo): string {
  if (!imageInfo?.imageWidth || !imageInfo.imageHeight) {
    return "the source image's aspect ratio";
  }
  const ratio = imageInfo.imageWidth / imageInfo.imageHeight;
  if (ratio > 1.7) return "16:9";
  if (ratio < 0.8) return "9:16";
  return "1:1 or 4:5";
}

// ── Structured analysis schema ──────────────────────────────────────

export const GEMINI_IMAGE_RESPONSE_SCHEMA = {
  type: "object",
  properties: {
    image_archetype: { type: "object" },
    subjects: { type: "array" },
    composition: { type: "object" },
    lighting_and_color: { type: "object" },
    imperfections: { type: "object" },
    shortPrompt: { type: "string" },
    detailedPrompt: { type: "string" },
    negativePrompt: { type: "string" }
  },
  required: [
    "image_archetype", "subjects", "composition",
    "lighting_and_color", "imperfections", "shortPrompt", "detailedPrompt", "negativePrompt"
  ]
} as const;

// ── Instruction builder ────────────────────────────────────────────

export function buildGeminiImageInstruction(
  targetModel: TargetModelId,
  imageInfo?: DetectedImageInfo
): string {
  const modelLabel = targetModelLabel(targetModel);

  return `You are a professional visual reverse-engineering system. Analyze the image and output structured JSON for accurate image recreation.

## Core Rules
- Detect the IMAGE DOMAIN first: photo, CGI render, illustration, UI, poster, product shot, meme, scan, screenshot, concept art, etc.
- Focus only on visually dominant elements (max 3-6 subjects)
- Use observable physical descriptions only — avoid emotion, symbolism, storytelling, quality judgments
- Describe geometry, materials, surfaces, lighting behavior, spatial hierarchy, and camera properties
- Prioritize reconstruction fidelity over interpretation
- Ignore insignificant background clutter unless compositionally important
- Record visible defects, compression, motion blur, chromatic aberration, noise, or distortion if present

## Modules

### image_archetype
{ image_domain, visual_medium, style_category, scene_context }

### subjects (3-6 max)
Each:
{ name, category, physical_attributes, material, surface_texture, primary_colors, position, scale, orientation, interaction }

### composition
{ aspect_ratio, framing, camera_angle, focal_behavior, perspective_depth, layer_structure, negative_space, visual_focus }

### lighting_and_color
{ light_sources, light_quality, contrast_level, color_temperature, dominant_palette[], accent_palette[], reflections, shadow_behavior }

### imperfections
{ grain_or_noise, blur, compression_artifacts, distortions }

## Prompt Generation
- shortPrompt: one-line visual summary
- detailedPrompt:
  image domain → primary subjects → composition → spatial structure → materials/surfaces → lighting → color system → optical qualities → imperfections
- Use dense visual language optimized for image generation
- No markdown, explanations, opinions, or model parameters
- negativePrompt: visual traits, styles, objects, lighting, rendering artifacts, or compositions inconsistent with the image identity

## Output
Return valid JSON only.

{
  "image_archetype": {
    "image_domain": "...",
    "visual_medium": "...",
    "style_category": "...",
    "scene_context": "..."
  },
  "subjects": [
    {
      "name": "...",
      "category": "...",
      "physical_attributes": "...",
      "material": "...",
      "surface_texture": "...",
      "primary_colors": "...",
      "position": "...",
      "scale": "...",
      "orientation": "...",
      "interaction": "..."
    }
  ],
  "composition": {
    "aspect_ratio": "...",
    "framing": "...",
    "camera_angle": "...",
    "focal_behavior": "...",
    "perspective_depth": "...",
    "layer_structure": "...",
    "negative_space": "...",
    "visual_focus": "..."
  },
  "lighting_and_color": {
    "light_sources": "...",
    "light_quality": "...",
    "contrast_level": "...",
    "color_temperature": "...",
    "dominant_palette": ["..."],
    "accent_palette": ["..."],
    "reflections": "...",
    "shadow_behavior": "..."
  },
  "imperfections": {
    "grain_or_noise": "...",
    "blur": "...",
    "compression_artifacts": "...",
    "distortions": "..."
  },
  "shortPrompt": "...",
  "detailedPrompt": "...",
  "negativePrompt": "..."
}`;
}
