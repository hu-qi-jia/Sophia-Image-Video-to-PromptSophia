# Sophia Prompt Fields Reference

> Generated from `src/lib/parsers/imageResponse.ts` STYLE_TAGS / CONTENT_TAG_PREFIXES
> Source of truth: `src/lib/prompts/image.ts` (generic) and `src/lib/prompts/imageCategoryPrompts.ts` (per-category)
> Style Weight Priority: T0 Core Style DNA > T1 Visual Language Layer > T2 Replaceable Content > T3 Weak Constraints

---

## STYLE MODULE (精确控制，高复现权重)

These fields carry the highest reproduction weight. Describe with maximum precision.

### [AESTHETIC HOOK]
Unified single-sentence visual signature capturing core era, medium, color science, and lighting quality. Primary style anchor to prevent token dilution.
- Formula: [Medium/Camera Type] + [Era/Aesthetic Name] + [Dominant Lighting Quality] + [Key Color Grading/Film Stock Signature]

### [STYLE & TEXTURE]
- Art style reference (e.g. "Denis Villeneuve Dune aesthetic", "1970s Kodachrome")
- Medium texture (canvas weave, CRT scanlines, VHS noise, polaroid border, etc.)
- If imitating a specific medium/device, name it explicitly and describe characteristic artifacts

### [STYLE]
- Alternative tag name used by some category templates (same purpose as STYLE & TEXTURE)

### [ATMOSPHERE]
- Emotional tone: 2-3 precise adjectives (solemn/playful/eerie/intimate/confrontational)
- Conceptual tension: opposing forces creating meaning (sacred vs profane, vulnerability vs armor)
- Psychological space: viewer position (intruder/confidant/distant observer/being watched)
- Temporal quality: timeless/frozen-era/futuristic/nostalgic/archival/contemporary/mythic
- Sensory texture beyond visual: suggests cold metal, feels humid, evokes silence
- Narrative implication: one-line vibe summary

### [COLOR]
- Overall color temperature: warm (golden/amber), cool (blue/teal), neutral, mixed
- Color grading / look signature:
  - Cinematic teal-orange, desaturated cinematic, high-contrast B&W, soft faded B&W
  - Vintage/warm faded, cold clinical, pop/vibrant, monochromatic tint, duotone, cross-processed
- Dominant palette: 3-5 main colors occupying most frame area
- Accent colors: 1-3 colors used sparingly but importantly
- Highlight/shadow color tendency
- Exposure: underexposed/normal/overexposed, highlight recovery state, shadow lift state, uneven exposure notes
- Contrast level: low (flat)/medium (natural)/high (punchy)/extreme (hard-clipped), local vs global contrast, tonal range
- Saturation level: desaturated/muted/natural/vivid/oversaturated
- Color distribution: solid fields vs gradients, where high-saturation sits

### [LIGHTING]
- Main light source: direction (compass/clock position), type, quality (hard/soft), intensity
- Fill/ambient light: presence, direction, color temperature relative to key light
- Shadow specifics: shape, direction, length, softness, contact point, compositional role
- DOF / Sharpness distribution: focus plane, fall-off speed, bokeh quality, selective focus
- Special effects: glow, flare, halation, bloom, god-rays, rim-lighting, backlight silhouette

### [FRAME]
- Lens angle, focal length feel, shot size (low angle 15° upward, telephoto, medium close-up)
- Subject approach/entry angle and asymmetry
- Lens distortion & optical character (none/barrel/pincushion/mustache/CA)
- Frame origin: OPTICAL LENS (fisheye/endoscope) vs COMPOSITIONAL CROP (porthole/mirror/window)
- Specialized device aesthetic (security cam, dashcam, webcam, pinhole, scanner, thermal)
- Image quality tier: pristine/crisp OR intentionally degraded

### [PROMPT TAGS]
Standardized tags for SD/MJ compatibility, comma-separated, 3-6 per category:
- **Medium**: photograph, digital art, oil painting, watercolor, 3D render, concept art, etc.
- **Artist style**: 1-3 artists whose style matches (e.g. "by greg rutkowski")
- **Quality boosters**: 2-4 (masterpiece, best quality, highly detailed, 8k, sharp focus, etc.)
- **Platform**: 1-2 if relevant (artstation, behance, pixiv, 500px, etc.)

### [NEGATIVE PROMPT]
Comma-separated negative terms. Always include universal: watermark, signature, text, logo, cropped, worst quality, low quality.

Type-specific terms:
- Photographs: plastic skin, airbrushed, CGI appearance, oversaturated
- Portraits: extra fingers, bad hands, deformed hands, bad anatomy, cross-eyed
- Landscapes: HDR glow, artificial, plastic trees
- Anime: bad anatomy, extra limbs, lowres, blurry
- Product: distorted product, wrong proportions, inaccurate color

### [VISUAL HIERARCHY]
Defines how visual attention is distributed across the frame.
- Main focal priority: primary attention anchor (eyes/silhouette/hand/accessory/light source), dominance strength, foreground vs background priority
- Attention flow: eye movement path (diagonal/radial/center-weighted/layered), visual rhythm from repeated shapes/colors
- Visual weight distribution: percentage emphasis by region, dense vs sparse areas, subject isolation vs environmental integration
- Information density: minimal/balanced/cluttered, micro-detail layering, empty-space strategy

### [MATERIAL RESPONSE]
How materials react to light and image processing. Supplements material descriptions in [SUBJECT] and [STYLE & TEXTURE].
- Skin behavior: matte/glossy/powdery/oily, subsurface scattering intensity, specular highlight softness
- Fabric behavior: velvet absorption, nylon reflectivity, cotton diffusion, denim texture sharpness
- Metal/plastic response: brushed aluminum reflections, glossy plastic bloom, CRT glass reflections, chrome edge highlights
- Cross-material interaction: color bleeding between surfaces, halation contamination, bloom interaction with reflective objects

### [ERA SIGNALS]
Period-specific visual language. Supplements [ATMOSPHERE] temporal quality with concrete era markers.
- Technology markers: CRT monitors, CCD clipping, disposable flash artifacts, webcam compression, VHS scanlines, smartphone HDR sharpening
- Fashion markers: low-rise jeans, rhinestone accessories, 2000s kawaii graphics, vintage sportswear, cyber-Y2K styling
- Internet-era aesthetics: Tumblr soft grunge, MySpace flash aesthetic, early Instagram fade, Douyin beauty-filter artifacts
- Cultural framing: Japanese magazine scan aesthetic, Korean ulzzang styling, MTV commercial framing, 2000s mall photography

### [IMAGE PHYSICS]
Imperfections and limitations of real image systems. Supplements [IMPERFECTIONS] and [FRAME] with sensor/pipeline-level analysis.
- Sensor behavior: clipped highlights, crushed blacks, shadow noise, limited dynamic range
- Compression artifacts: JPEG ringing, chroma smearing, banding gradients, upscaling artifacts
- Optical flaws: chromatic aberration, corner softness, motion smear, rolling shutter skew
- Processing pipeline artifacts: smartphone oversharpening, AI skin smoothing, HDR ghosting, denoiser watercolor textures

### [OPTICAL DEPTH]
Lens depth rendering and spatial separation. Supplements [LIGHTING] DOF and [FRAME] lens character.
- Focus structure: single-plane focus, deep focus, layered focus zones, split-depth focus
- Depth falloff: smooth gradual blur, aggressive subject isolation, cinematic focus decay, flat documentary sharpness
- Bokeh behavior: circular/oval/cat-eye, busy vs creamy background, edge highlight bloom, soap-bubble artifacts
- Spatial compression: telephoto flattening, wide-angle depth exaggeration, natural perspective, miniature tilt-shift feel
- Lens breathing & transition: focus breathing visibility, sharp-to-soft transition quality, background separation realism

### [STYLE EXCLUSIONS]
Visual directions the generation must AVOID. Prevents diffusion model from drifting toward default aesthetic biases.
- Output as comma-separated "avoid X" phrases, 2-4 items
- Examples: avoid cinematic realism, avoid luxury editorial polish, avoid modern iPhone HDR look, avoid hyper-clean studio lighting, avoid fantasy illustration styling, avoid ultra-sharp AI skin texture, avoid symmetrical commercial framing, avoid overprocessed Instagram aesthetics

### [FILTER & PROCESSING]
Post-processing chain and filter effects applied to the image. Distinguishes intentional editing from [IMAGE PHYSICS] sensor artifacts.
- Specific Emulation / Color Science: VSCO presets, Lightroom custom curves, film stock emulation (Kodak Portra 160, Fujifilm Classic Chrome, Polaroid 600, Technicolor)
- Tone curve: lifted blacks (matte), S-curve contrast, flat low-contrast, film toe/shoulder rolloff, inverted highlights
- Split toning: shadow tint (teal/green/blue) + highlight tint (amber/orange/warm), or uniform cast
- Vignette: natural optical, heavy post-crop, gradient edge darkening, none
- Grain overlay: fine film grain, heavy digital noise, dust/scratch overlay, clean
- Glow/bloom: soft global bloom, halation around highlights, lens flare overlay, dreamy diffusion, none
- Sharpening: over-sharpened halos, clarity/structure boost, soft dreamy diffusion, standard
- Local adjustments: sky separately graded, skin tone isolated, selective color, graduated filter, none

---

## CONTENT MODULE (方向描述，留自由度)

These fields describe the general direction and key constraints only. Do NOT micro-specify every detail.

### [SUBJECT] / [SUBJECT 1] / [SUBJECT 2] ...
- Core identity: species, character name, object type
- Age appearance (humans): approximate age range, visible aging markers
- Body type / physique (humans): muscular/athletic, slim/petite, average, etc.
- Appearance: shape, size, coverage, visible parts
- Hair (if visible): style, length, color, texture, volume, movement state
- Material & texture: base material, micro-structure, wear & aging, light interaction
- Hand & finger pose (if meaningful): which hand, finger positions, what holding/touching
- Expression & Demeanor (if face visible): eye behavior, mouth geometry, micro-expressions, overall demeanor
- Clothing & accessories: garment type, fit, coverage, construction details, accessories
- Pose & action: pose, gesture, body orientation
- Scale reference and inter-subject relationships

### [SPATIAL LAYERS]
- Depth layers (foreground/midground/background) with contents and visual treatment
- Occlusion: who occludes what
- Contact state: how elements touch
- Overlap ordering: front-to-back stacking
- Alignment and intersubject spatial dynamics

### [ENVIRONMENT]
- Sky: clear/overcast/stormy/gradient/haze
- Ground/surface: material, texture, wear, reflections
- Weather/atmosphere: fog/mist/rain/snow/dust
- Indoor/outdoor: outdoor / indoor room / studio backdrop
- Ancillary elements: poles, wires, fences, signs, architectural details
- Time of day / season

### [IMPERFECTIONS]
- Categorize artifacts found (resolution, noise, color/tone, dynamic range, physical)
- State severity of each
- If source's aesthetic IS its imperfection (lo-fi/vintage/damaged), describe as POSITIVE style element
- For pristine images: state "no visible artifacts"

### [CONSTRAINTS]
- Explicit prohibitions for the generator, comma-separated
- Rendering constraints: "no cinematic grading", "no fantasy stylization", etc.
- Anti-idealization constraints (portraits): "do not beautify, do not enlarge eyes, do not smooth skin", etc.
