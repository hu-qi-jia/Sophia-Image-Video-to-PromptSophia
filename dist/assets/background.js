// src/lib/clients/apiShared.ts
function parseDataUrl(dataUrl) {
  const match = dataUrl.match(/^data:(.+?);base64,(.+)$/);
  if (!match) {
    throw new Error("\u4E0D\u652F\u6301\u7684\u5E27\u683C\u5F0F\u3002");
  }
  return { mimeType: match[1], data: match[2] };
}
function readApiError(payload) {
  if (payload && typeof payload === "object") {
    const obj = payload;
    if (obj.error && typeof obj.error === "object") {
      const err = obj.error;
      if (typeof err.message === "string") return err.message;
    }
    if (typeof obj.message === "string") return obj.message;
  }
  return null;
}

// src/lib/types.ts
var TARGET_MODELS = [
  { id: "seedance-2.0", label: "Seedance 2.0" },
  { id: "generic-ai-video", label: "\u5176\u4ED6" }
];
var DEFAULT_TARGET_MODEL = "seedance-2.0";
var GEMINI_ANALYSIS_MODEL = "gemini-2.5-flash";
var DEFAULT_FRAME_SAMPLING_MODE = "standard";
var DEFAULT_PROMPT_FORMAT = "json";

// src/lib/prompts/image.ts
function targetModelLabel(targetModel) {
  return TARGET_MODELS.find((model) => model.id === targetModel)?.label ?? targetModel;
}
function inferImageAspectRatio(imageInfo) {
  if (!imageInfo?.imageWidth || !imageInfo.imageHeight) {
    return "the source image's aspect ratio";
  }
  const w = imageInfo.imageWidth;
  const h = imageInfo.imageHeight;
  const ratio = w / h;
  if (ratio > 2.2) return "21:9";
  if (ratio > 1.65) return "16:9";
  if (ratio > 1.4) return "3:2";
  if (ratio > 1.15) return "4:3";
  if (ratio > 0.9) return "1:1";
  if (ratio > 0.7) return "4:5";
  if (ratio > 0.55) return "2:3";
  if (ratio > 0.42) return "9:16";
  return "9:21 or taller";
}
function buildGeminiImageInstruction(targetModel, imageInfo) {
  const modelLabel = targetModelLabel(targetModel);
  return `You are a professional image-to-prompt reverse-engineering system. Your job is not to caption the image. Your job is to extract the visual controls needed to recreate it as faithfully as possible with an image generator.
Target generator: ${modelLabel}. Expected aspect ratio: ${inferImageAspectRatio(imageInfo)}.

## Language Requirement
**Your entire output must be written in English only.** Every description, every constraint, every detail \u2014 all text content must be English. Do NOT use Chinese or any other language for any part of the output content. Everything: English only.

## Prime Directive
- Build the prompt around reproduction fidelity, not generic description.
- First identify what would visibly break the recreation if it changed: viewpoint, crop, subject scale, body coverage, pose topology, expression/gaze, body orientation, set dressing, identity cues, logos/text, material behavior, lighting, atmosphere, shadow layout, background simplicity, optical distortion, and quality/degradation aesthetic.
- **Geometric topology is critical**: for any subject with complex structure (organic openings, mechanical joints, layered surfaces), describe the exact geometric form of edges and boundaries\u2014not just "circular" or "open", but whether the edge is petal-like, segmented, ribbed, flared, folded, spiraled, or lobed.
- **Internal structural layering**: if a subject has visible internal depth (mouth interior, mechanical cavity, hollow object), describe nested layers from outermost to innermost.
- Prefer precise observable detail over style praise. Avoid vague words like beautiful, cool, realistic, masterpiece, high quality, detailed.
- Do not invent unseen objects, front-facing faces, emotions, brands, or story context. If something is hidden, say it is hidden.
- Do not beautify, complete, recenter, enlarge, simplify, or make the image more cinematic than the source.
- Never add watermarks, AI labels, signatures, corner icons, captions, decorative marks, or UI overlays.

## Analysis Strategy

### Analysis Order
1. Image domain: photo, CGI render, illustration, anime, game art, UI, poster, product shot, meme, scan, screenshot, concept art, brand campaign, etc.
2. Capture device & quality tier: identify lens character, distortion, resolution, degradation mode \u2014 these set constraints for ALL subsequent analysis.
3. Main subjects: describe only dominant subjects, usually 1-3 and max 6.
4. Expression and orientation: lock gaze direction, eyelids, mouth, ears, head turn, body angle, and visible anatomy.
5. Pose and geometry: describe body/object topology, body coverage, hand/finger pose, and support contact before decorative details.
6. Set dressing and background props: lock pillows, fabrics, jewelry strands, repeated ornaments, furniture, walls, surfaces, and background layer order.
7. Materials and surface behavior: describe how each surface reacts to light at micro-detail level.
8. Composition and camera: aspect ratio, crop, subject scale, viewpoint, motion direction, shadows, depth of field distribution.
9. Lighting and color: source direction, contrast, highlight shape, palette, color temperature, color grading signature.
10. Atmospheric signature: mood, conceptual tension, psychological space, era, emotional temperature.
11. Defects and artifacts: blur, grain, compression, scan marks, noise, occlusion \u2014 AND whether they are intentional style elements.
12. Anti-drift controls: state what the generator must not normalize, complete, polish, enlarge, move, upgrade, or clean up.

### Domain-Specific Weights
Not all modules matter equally for every image type. Prioritize accordingly:
- Portrait/character: subjects (face/hair/body/ expression) > composition > lighting > atmosphere > material detail > imperfections
- Landscape/scenery: composition > lighting > atmosphere > imperfections > subjects > environment
- Product shot: subjects (construction + material micro-detail) > lighting > composition > imperfections > environment
- Anime/illustration: subjects (pose, silhouette) > composition > lighting > atmosphere > imperfections
- Abstract/graphic: composition > lighting > atmosphere > subjects > imperfections
- Meme/screenshot: subjects > composition > imperfections (degradation IS the style) > lighting > atmosphere
- Lo-fi/surveillance/candid: capture device character > imperfections > subjects > atmosphere > composition (quality IS the identity)
- Fashion/editorial: subjects (expression + clothing + material) > atmosphere (conceptual tension) > lighting > composition > color grading
Adjust the detail depth of each module section in your output based on these weights.

## Structural Fidelity Rules

### A. Subject Geometry & Topology
- For any opening, cavity, or boundary on a subject, describe its **edge geometry** precisely: smooth/round? petal-like with lobes (how many)? segmented into ridges? ribbed with parallel lines? flared outward like a trumpet? folded inward like a flower bud? spiraled? jagged/toothed?
- Describe the **outer boundary shape separately from the inner opening**: do not conflate outer and inner geometry.
- For layered or nested structures, describe each visible layer from outside to inside: Layer 1 \u2192 Layer 2 \u2192 Layer 3 \u2192 Core. State what distinguishes each layer (texture, color, pattern, material change).
- For mechanical objects, describe joint connections, panel seams, and how parts attach: hinged, bolted, fused, sliding, interlocking, overlapping.
- For organic surfaces with patterns, describe the **pattern topology**: concentric rings, radial spokes, grid/mesh, branching veins, scales, spots in formation, stripes directionality.

### B. Spatial Composition
- Lock the **subject's approach angle to camera** precisely: directly facing, angled 30\xB0 left, entering from upper-left quadrant, tilted 15\xB0 downward, viewed from below at 45\xB0, etc.
- If the main subject is visibly off-center or asymmetrically positioned, state the exact offset with frame percentages.
- Preserve **intentional asymmetry**: if one side carries more visual weight than the other, describe which side and why.
- Do not symmetrize an intentionally asymmetrical composition.
- **Scale reference**: for subjects used as size comparison, lock exact frame percentage and size ratios. Emphasize smallness explicitly when scale reference is the function.
- **Inter-subject relationship** (critical when multiple subjects coexist):
  - Fusion/Merging: physically integrated, boundaries blur (cat face in building facade)
  - Emergence/Protrusion: emerging FROM within another structure (head through fabric tear)
  - Framing/Containment: one subject frames another (buildings framing figure)
  - Juxtaposition/Contrast: side-by-side for conceptual contrast (tiny human vs giant object)
  - Layered Overlap: front-back depth ordering with occlusion (person behind fence bars)
  - Mirror/Reflection: reflection with surface description and distortion
  - Pattern/Repetition: same subject repeated in rhythm (grid of faces, row of windows)
  - Describe directionality, shared boundaries, pixel competition zones. If surreal effect depends on specific relationship, state it as absolute constraint.

### C. Material & Surface Realism
The #1 cause of generated images looking "too simple" or "AI-smooth" is insufficient micro-detail description. For EVERY material surface, describe at the granularity visible in the source.

**Wear & aging state**: pristine/new, lightly used, well-worn with patina, or heavily degraded? Describe scratches, scuff marks, faded areas, chipped coating, rust/oxidation, water stains, oil residue, dust accumulation, frayed edges, dents, sun discoloration.

**Material-specific micro-structure** (choose what applies):
- Fabric/textile: weave pattern visibility, fiber texture, wrinkle/fold behavior, pile height, seam construction, fabric weight implied by drape, translucency
- Wood/grain: grain direction/flow, growth ring visibility, pore structure, figure patterns, surface finish, edge details
- Leather/skin-like: grain texture, crease patterns, wear state, stitching detail
- Metal: surface treatment (polished/brushed/hammered/anodized), machining marks, corrosion state, edge quality
- Skin (human/animal): pore visibility, subsurface scattering glow, vascularity, texture variation across face zones, blemish markers (freckles/moles/scars), skin quality (dewy/matte/oily/dry/taut/aged)
- Paper/cardboard: fiber texture, surface tooth, curl/wave, edge quality, print quality, aging
- Glass/transparent: refraction distortion, surface reflections (what gets reflected), cleanliness state, edge light behavior
- Plastic/rubber/synthetic: mold parting line, gate mark, gloss level, stress whitening, UV degradation, molded texture

**Detail Density Rule**: When source shows high detail density (50+ individual rhinestones, visible wood grain threads, visible facial pores), count approximately and state density explicitly. NEVER collapse detailed texture into a single word like "textured" or "detailed".

**Color Micro-Variation**: Gradient shifts within single object, subsurface color transmission, iridescence, weathering-based discoloration, contamination colors.

**Edge Quality**: sharp/machined, worn/rounded, torn/ragged, soft/organic, highlight-rimmed, shadow-cast.

**Light-Material Interaction Specificity**:
- Instead of "shiny" \u2192 "specular highlights appear as small tight white dots indicating polished surface"
- Instead of "matte" \u2192 "diffuse reflection shows surface grain texture, no concentrated specular points"
- Instead of "glossy" \u2192 "broad soft specular highlights with visible surface undulation reflected"
- Instead of "translucent" \u2192 "light passes through with visible internal scattering"

### D. Capture Device & Optical Character
Many images derive their identity from the specific optical characteristics of the capture device. A circular frame from a peephole is fundamentally different from a circular crop of a normal photo.

**Distortion Type Identification**:
- None/rectilinear: straight lines stay straight
- Barrel/fisheye: edges curve OUTWARD, center magnified, entire frame bulges (peephole, door viewer). Straight lines become curved arcs.
- Pincushion: edges curve INWARD
- Mustache/wavy: mixed distortion (cheap wide-angle converters)
- Chromatic aberration: color fringing at high-contrast edges

If distortion present, describe: strength (mild/moderate/extreme), affected areas, how it warps subject, whether distorted edge forms image boundary.

**Frame-Origin Distinction (CRITICAL)**:
| Frame type | Creates it | Visual signature |
|-----------|----------|----------------|
| Optical/lens frame | Lens aperture limits FOV + introduces distortion | Vignetting at edge, distortion extends to edge, warped subject near boundary |
| Compositional/crop frame | Normal photo cropped to circle, OR physical object framing scene | Clean sharp circular boundary, NO distortion even at edges |

You MUST identify which applies. Peephole \u2192 "viewed THROUGH peephole lens with barrel distortion". Porthole \u2192 "framed by porthole opening with NO lens distortion".

**Specialized Device Aesthetics** (identify if applicable):
- Security/peephole: barrel distortion + greenish tint + low-res + compression + voyeuristic angle
- Dashcam: mild distortion + dashboard edge + windshield reflections possible
- Webcam: frontal flat light + fish-eye wide + compressed quality + head-and-shoulders
- Endoscope: extreme fisheye + dark tunnel edges + clinical lighting
- Pinhole: extremely soft focus + vignette edges + low contrast + dreamy ethereal
- Toy plastic camera: light leaks + heavy vignetting + shifted colors + soft focus
- Scanner: spine shadow + page curvature + even lighting + moir\xE9 on prints
- Thermal/NV: green/false-color palette + glowing heat sources + grainy + low-res

### E. Quality & Degradation Aesthetic
Not every image aims for pristine quality. Many deliberately use degradation as their primary aesthetic. If the source looks "bad" in a specific way, that badness IS the style.

**Degradation Mode Checklist**:
- Resolution: crisp / soft-low-res / out-of-focus (distinguish intentional DOF from missed focus) / motion blur (direction matters)
- Noise: clean / film grain (fine/medium/coarse) / digital noise (worse in shadows) / JPEG compression blocks+ringing / scan texture
- Color/tone: full natural / monochrome (state tint: neutral B&W / warm sepia / cool blue / **greenish security-cam**) / color cast / faded / posterized
- Dynamic range: crushed blacks / blown highlights / low contrast flat / hard-clipped high contrast
- Physical artifacts: light leak / vignette strength / dust-scratches / water damage / creases-folds / tape marks

**Anti-Police Directive**: When source is intentionally degraded, you MUST preserve that quality. Do NOT upgrade:
- Grainy surveillance \u2192 stays grainy, NOT crisp cinematic
- Green-tinted peephole \u2192 keeps green tint, NOT neutral B&W
- JPEG-compressed meme \u2192 retains artifacts, NOT clean render
- Faded Polaroid \u2192 stays faded, NOT sharpened
- Blurry webcam \u2192 stays blurry, NOT debrured portrait
- Scratched old photo \u2192 shows imperfections, they ARE the identity

The ONLY acceptable reason to describe higher quality than source is explicit user request for upscaling/restoration.

## Output Format
Use [TAG] format. Natural language paragraphs, not JSON or bullet points. Skip irrelevant modules. Each [TAG] on its own line followed by content.

### Required Modules

[FRAME]
- Lens angle, focal length feel, shot size: concrete terms (low angle 15\xB0 upward, telephoto compression, medium close-up).
- Subject approach/entry angle to camera and asymmetry (which side carries more visual weight).
- **Lens distortion & optical character**: distortion type (none/barrel/pincushion/mustache/CA), strength, affected areas, subject warp effect.
- **Frame origin**: OPTICAL LENS frame (peephole/fisheye/endoscope/dome \u2014 has distortion) vs COMPOSITIONAL CROP FRAME (porthole/mirror/window \u2014 no distortion). State explicitly.
- Specialized device aesthetic if applicable (security cam, dashcam, webcam, pinhole, toy camera, scanner, thermal/NV).
- **Image quality tier**: pristine/crisp OR intentionally degraded (grainy film, low-res digital, compressed, lo-fi surveillance, etc.). Do NOT upgrade degraded source to clean quality.

[SUBJECT 1: name]
Describe the primary subject. Include only what applies:

- Core identity: species, character name/franchise, object type
- **Age appearance** (for humans/characters): approximate age range (child ~3-10, teen ~13-19, young adult ~20-35, middle-aged ~35-55, senior ~55+). Visible aging markers: skin texture (smooth/youthful / fine lines / deep wrinkles / loose/aged), graying hair, age spots, posture stiffness.
- **Body type / physique** (for humans/characters): muscular/athletic, slim/petite, average/build, overweight/heavy-set, gaunt/emaciated. Describe visible musculature definition if relevant (defined abs, broad shoulders, slender neck, etc.). Body proportions relative to standard (long torso, short limbs, etc.) if notably non-standard.
- Appearance: shape, size, coverage, visible parts, crop state
- Geometric topology: edge geometry of openings/cavities/boundaries. Outer boundary separate from inner opening.
- Internal layering: nested layers outermost\u2192innermost if visible internal depth exists.
- **Hair** (if visible on head): style (slicked back, messy/spiky, ponytail/bun, curly/wavy, shaved/buzzed, bald, dreadlocks, braided, bob, pixie, long flowing, etc.), length (buzzed/cropped, ear-length, shoulder-length, past shoulders, waist-length, etc.), color (and whether natural or dyed \u2014 roots visible?), texture (straight/wavy/curly/coarse/fine/silky/frizzy), volume (flat/thin, voluminous/full, styled product visible \u2014 hairspray/gel/wax sheen), movement state (static/wind-blown/in-motion), hairline (receding/M-shape/widow's peak/rounded/low).
- **Material & texture** (micro-detail level per Section C rules): base material, micro-structure, wear & aging, light interaction, color within surface, edge quality, detail density note.
- **Hand & finger pose** (if hands are visible and meaningful \u2014 skip for hands-in-pockets, hidden behind back, or minor background elements):
  - Which hand(s) visible, which fingers, which parts (full hand / fingertips only / knuckles only / palm visible)
  - Finger positions precisely: index finger extended/curled, thumb position relative to fingers, finger spread (wide/narrow/clenched), knuckle visibility and bend angles
  - Hand shape tension: relaxed open, gentle curve, firm grip, delicate pinch, flat palm, fist/clenched, claw-like
  - What the hand is doing/holding/touching (if anything): holding cigarette between index and middle, cupping own face, resting on chin, gripping an object, making a gesture
  - Nail state (if visible at this resolution): natural, manicured/polished (color?), bitten/short, long, painted
  - Skin detail on hands: veins visible, knuckle wrinkles, joint lines, age spots, ring tan line, jewelry on fingers
- Pose & action: pose, action, gesture, body orientation, approach angle to camera
- **Expression & Demeanor** (only when face is visible and meaningful; skip for back-facing figures, silhouettes, helmets, masks, non-character subjects):
  - Eye behavior: gaze direction, eyelid state, pupil visibility/catchlight, eye shape tension, eyebrow position
  - Mouth & lip geometry: lip shape, lip tension, teeth visibility
  - Facial muscle tension: engaged muscles, nasolabial fold depth, chin position
  - Micro-expression cues: nostril flare, eye-corner twitch, asymmetric mouth pull, skin flush, sweat/sheen, tear track, visible vein/tendon
  - Overall readable demeanor: 2-3 precise words (NOT generic emotion labels \u2014 use "exhausted defiance" not "sad")
  - Head posture contribution: how head angle amplifies or contradicts facial expression; note contradictions
  - Skin & surface indicators: flush/pallor, shine/oil, pore visibility, freckles/moles/scars, makeup state
  - For animals: ear angle, whisker direction, muzzle tension, eye/pupil, fur state, tail position
- **Clothing & accessories** (structured):
  - Garment type and category (t-shirt/blouse/jacket/coat/dress/uniform/armor/costume/underwear/etc.)
  - Fit: tight/form-fitting, relaxed/loose, oversized/baggy, tailored/fitted
  - Coverage: what body parts are covered vs exposed, neckline depth, sleeve length, hemline position
  - Volume/stiffness: flowing/draped, structured/rigid, puffy/quilted, clingy/stretch
  - Visible construction: seams (topstitched/overlock/French/flat-felled), cuffs (cuffed/rolled/raw), collar stand, waistband, closures (buttons/zippers/laces/ties/buckles), pockets (visible/flap/patch), pleats or gathers
  - Wrinkle/fold pattern: crisp pressed folds, soft draped wrinkles, bunched/compressed, stretch-tension lines across fabric
  - Transparency: opaque, sheer/translucent (what shows through), mesh, cutouts
  - Accessories: jewelry (type, placement, size, material), hats/headwear, eyeglasses, bags, belts, scarves, watches, piercings, tattoos visible on skin
  - Logos/text/symbols on clothing: preserve exact location, color, size, orientation, material attachment method
- Scale reference: if serves as scale reference, state exact frame percentage and size ratio
- Inter-subject relationship: relationship mode (Fusion/Emergence/Framing/Juxtaposition/Overlap/Mirror/Repetition), directionality, shared boundaries

[SUBJECT 2: name] (if applicable)
Same structure as SUBJECT 1. Add more subjects if needed (max 6 total).

[SPATIAL LAYERS]
Depth layers (foreground, midground, background) with contents and visual treatment (sharp/blurred/obscured).

Spatial interaction metadata:
- **Occlusion**: who occludes what, what remains visible of occluded element
- **Contact state**: how elements touch \u2014 full contact/partial edge contact/suspended above surface
- **Overlap ordering**: front-to-back stacking sequence
- **Alignment**: spatial reference each element follows
- **Intersubject spatial dynamics**: how subjects share/divide frame space with percentages

Do not repeat same element across layers unless spanning multiple zones. Focus on relationships, not re-describing appearance.

[LIGHTING]
- Main light source: direction (specific compass or clock position), type (sunlight/overcast/studio/neon/screen-reflection/candle/fire), quality (hard-edged shadows vs soft-diffused), intensity (bright key light vs dim ambient fill)
- Fill/ambient light: presence, direction, color temperature relative to key light
- Shadow specifics: shape, direction, length, softness (hard-edge penumbra vs soft gradient), contact point, whether shadow is a major graphic compositional element
- **DOF / Sharpness distribution** (critical for realism): describe what distance plane is in sharpest focus, how quickly focus falls off toward foreground and background (rapid drop-off = thin DOF / gradual = thick DOF), bokeh quality if out-of-focus areas have distinctive character (creamy smooth / busy nervous / hexagonal aperture shape / swirly), any selective focus (eyes sharp but ears soft, or foreground object sharp with blurred background figure)
- Special effects: glow, flare, halation, bloom, god-rays/volumetric, rim-lighting, backlight silhouette, colored gels, practical light sources visible in frame

[COLOR]
- Overall color temperature: warm (golden/amber/orange), cool (blue/teal/cyan), neutral, mixed
- **Color grading / look signature** (the overall visual "look" beyond basic temperature):
  - Cinematic teal-orange (shadows teal, highlights warm orange)
  - Desaturated cinematic (muted all-around, low saturation, film-like)
  - High-contrast B&W (pure blacks and whites, minimal gray midtones)
  - Soft faded B&W (gentle tonal range, creamy midtones)
  - Vintage/warm faded (yellow-brown overall cast, reduced contrast)
  - Cold clinical (blue-green dominant, sterile feel)
  - Pop/vibrant (high saturation, bold complementary colors)
  - Monochromatic tint (near-single-hue palette with slight variations)
  - Duotone (two-color scheme, e.g. black + sepia, blue + cyan)
  - Cross-processed (unnatural color shifts from chemical processing mimicry)
- Dominant palette: list 3-5 main colors occupying most frame area
- Accent colors: list 1-3 colors used sparingly but importantly
- Highlight/shadow color tendency: what color do bright areas lean toward, what color do shadows lean toward
- Contrast level: low/medium/high/extreme with crushed blacks or blown highlights
- Saturation level: desaturated/muted/natural/vivid/oversaturated
- Color distribution: which areas are solid color fields, which carry gradients, where high-saturation sits

### Optional Modules (output only if relevant)

[ENVIRONMENT]
Skip for studio backdrop, pure void, solid color, or when environment contributes nothing.
- Sky: clear/overcast/stormy/gradient/haze/no sky \u2014 cloud types if visible
- Ground/surface: material, texture, wear, reflections
- Weather/atmosphere: fog/mist/rain/snow/dust/smog/crisp air
- Indoor/outdoor: outdoor / indoor room / studio backdrop / mixed transition
- Ancillary elements: poles, wires, fences, signs, lampposts, architectural details, drainpipes, antennas, chimneys
- Time of day / season: daylight/golden hour/twilight/night/shadow indicators/seasonal cues

[ATMOSPHERE]
Skip only for purely technical images (product on white, diagrams, UI screenshots). Nearly always relevant for portraits, scenes, artwork, photographs with intent.
- Emotional tone: 2-3 precise adjectives (solemn/playful/eerie/intimate/confrontational/vulnerable/defiant/nostalgic/cold/warm/detached/seductive/innocent/menacing/dreamlike/clinical/romantic)
- Conceptual tension: opposing forces creating meaning \u2014 sacred vs profane, vulnerability vs armor, innocence vs threat, organic vs geometric, domestic vs cosmic. Critical for surreal/conceptual/fashion/symbolic images.
- Psychological space: viewer position \u2014 intruder/confidant/distant observer/being watched/trapped/liberated? Subject invites or rejects proximity?
- Temporal quality: timeless/frozen-era/futuristic/nostalgic/archival/contemporary/mythic
- Sensory texture beyond visual: suggests cold metal, feels humid, evokes silence, implies sound
- Narrative implication: one-line vibe summary \u2014 "a prayer dressed as rebellion"

[STYLE & TEXTURE]
Describe the visual style reference AND medium texture. Reference Realism Fidelity Rules (Section C) for material-specific texture guidance.
- Style reference: "Denis Villeneuve Dune aesthetic", "1970s Kodachrome film grain", "clean digital CGI", "Wes Anderson symmetrical pastel", "brutalist concrete photography", "Japanese anime cel-shaded", "oil painting impasto texture", "pencil sketch cross-hatching", "screen-printed poster graphic", "surveillance camera lo-fi", etc.
- Medium texture: the physical (or simulated physical) quality of the image surface \u2014 smooth glossy photo paper, coarse canvas weave, newsprint dot pattern, CRT screen scanlines, VHS tape tracking noise, wet plate collodion, polaroid instant film border, Instagram square crop aesthetic, etc.
- If the image imitates a specific medium or device, name it explicitly and describe its characteristic artifacts.

[IMPERFECTIONS]
Using Degradation Mode Checklist (Section E):
- Resolution/Sharpness: crisp / soft-low-res / out-of-focus / motion blur (direction?)
- Noise/Grain: clean / film grain (fine/medium/coarse) / digital noise / JPEG artifacts / scan texture
- Color/Tone issues: monochrome tint type / color cast / faded / posterized
- Dynamic range: crushed blacks / blown highlights / flat low contrast / hard-clipped high contrast
- Physical artifacts: light leaks / vignette / dust-scratches / water damage / creases / tape marks
**CRITICAL**: If source's aesthetic IS its imperfection (lo-fi/surveillance/vintage/damaged), describe as POSITIVE style elements to preserve. Generator must reproduce them. Skip only for genuinely pristine studio-quality images with zero visible artifacts.

[CONSTRAINTS]
Explicit prohibitions for the generator. Start with most critical. Comma-separated phrases. Examples: "do not add visible face, do not complete cropped body, do not add sky where source shows none, do not upgrade rough texture to clean render, do not remove barrel distortion, do not convert green tint to neutral B&W, do not symmetrize asymmetric composition, do not fuse separate subjects or separate fused subjects".

## Output Rules
- **ALL output must be in English only.**
- Natural language paragraphs, not bullet points or JSON.
- Use [TAG] format exactly: each tag on its own line, followed by content.
- Concrete and specific: "low angle 15\xB0 upward" not "slightly angled".
- Use "like X" or "resembling X" for complex textures.
- Use negation to prevent errors: "no visible face", "no sky", "no vegetation".
- Include approximate frame percentages when useful.
- Skip modules that do not apply. Do not invent content to fill sections.
- The output should be a single continuous text with [TAG] sections, ready to use as an image generation prompt.`;
}

// src/lib/parsers/jsonRepair.ts
function extractJsonSubstring(rawText) {
  const start = rawText.indexOf("{");
  if (start === -1) return null;
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < rawText.length; index += 1) {
    const char = rawText[index];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }
    if (char === '"') {
      inString = true;
      continue;
    }
    if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0) return rawText.slice(start, index + 1);
    }
  }
  return null;
}
function repairTruncatedJson(text) {
  const start = text.indexOf("{");
  if (start === -1) return null;
  const stack = [];
  let inString = false;
  let escaped = false;
  for (let i = start; i < text.length; i++) {
    const ch = text[i];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }
    if (ch === '"') {
      inString = true;
      continue;
    }
    if (ch === "{" || ch === "[") {
      stack.push(ch === "{" ? "}" : "]");
    } else if (ch === "}" || ch === "]") {
      if (stack.length > 0 && stack[stack.length - 1] === ch) {
        stack.pop();
      }
    }
  }
  let repaired = text;
  if (inString) {
    repaired += '"';
  }
  while (stack.length > 0) {
    repaired += stack.pop();
  }
  try {
    const extracted = extractJsonSubstring(repaired);
    if (extracted) {
      JSON.parse(extracted);
      return extracted;
    }
  } catch {
  }
  return null;
}
function parseGeminiJson(rawText) {
  const trimmed = rawText.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const jsonSubstring = extractJsonSubstring(trimmed);
    if (!jsonSubstring) {
      const repaired = repairTruncatedJson(trimmed);
      if (repaired) {
        try {
          return JSON.parse(repaired);
        } catch {
        }
      }
      const preview = rawText.slice(0, 300);
      const tail = rawText.slice(-200);
      throw new Error(
        `\u6A21\u578B\u8FD4\u56DEJSON\u88AB\u622A\u65AD\u6216\u4E0D\u5B8C\u6574\u3002(E1) \u957F\u5EA6:${rawText.length} \u5F00\u5934:${preview}... \u7ED3\u5C3E:...${tail}`
      );
    }
    try {
      return JSON.parse(jsonSubstring);
    } catch {
      throw new Error(
        `\u6A21\u578B\u8FD4\u56DE\u4E86\u65E0\u6548JSON\u3002(E2) \u622A\u53D6\u5185\u5BB9: ${jsonSubstring.slice(0, 200)}`
      );
    }
  }
}

// src/lib/parsers/imageResponse.ts
function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function safeTrim(value) {
  return String(value ?? "").trim();
}
var SECTION_REGEX = /\[([^\]]+)\]\s*\n([\s\S]*?)(?=\[[^\]]+\]\s*\n|$)/g;
function parseSectionedText(rawText) {
  const sections = {};
  let match;
  SECTION_REGEX.lastIndex = 0;
  while ((match = SECTION_REGEX.exec(rawText)) !== null) {
    const tag = match[1].trim();
    const content = match[2].trim();
    if (content.length > 0) {
      sections[tag] = content;
    }
  }
  return sections;
}
function extractShortPromptFromSections(sections) {
  const mainSubject = Object.keys(sections).find((k) => k.startsWith("SUBJECT 1"))?.split(":")[1]?.trim() || "";
  const framework = sections["FRAME"] || "";
  const firstSentence = framework.split(/[.。]/)[0] || "";
  return `${firstSentence} ${mainSubject}`.trim() || "Image analysis";
}
function extractNegativePromptFromSections(sections) {
  return sections["CONSTRAINTS"] ?? "";
}
function parseImageResponse(rawText) {
  const sections = parseSectionedText(rawText);
  if (Object.keys(sections).length === 0) {
    throw new Error("\u65E0\u6CD5\u89E3\u6790\u56FE\u7247\u5206\u6790\u7ED3\u679C\uFF0C\u8BF7\u91CD\u8BD5\u3002(E5)");
  }
  return {
    rawText,
    sections,
    shortPrompt: extractShortPromptFromSections(sections),
    detailedPrompt: rawText,
    negativePrompt: extractNegativePromptFromSections(sections)
  };
}
function normalizeStringArray(value) {
  return Array.isArray(value) ? value.map((item) => safeTrim(item)).filter(Boolean) : [];
}
function normalizeStructuredImageResponse(response) {
  const stringModules = [
    "image_archetype",
    "composition",
    "set_dressing",
    "atmospheric_signature",
    "imperfections"
  ];
  for (const key of stringModules) {
    const source = response[key];
    const target = {};
    if (source && typeof source === "object" && !Array.isArray(source)) {
      for (const [k, v] of Object.entries(source)) {
        target[k] = safeTrim(v);
      }
    }
    response[key] = target;
  }
  const atm = response.atmospheric_signature;
  if (Object.keys(atm).length === 0) {
    response.atmospheric_signature = {
      mood_temperature: "neutral",
      ambience: "standard"
    };
  }
  if (response.lighting_and_color && typeof response.lighting_and_color === "object" && !Array.isArray(response.lighting_and_color)) {
    const lc = {};
    for (const [k, v] of Object.entries(response.lighting_and_color)) {
      lc[k] = Array.isArray(v) ? v.map((item) => safeTrim(item)) : safeTrim(v);
    }
    response.lighting_and_color = lc;
  }
  response.subjects = Array.isArray(response.subjects) ? response.subjects.map((subject) => {
    const normalized = {};
    for (const [k, v] of Object.entries(subject)) {
      normalized[k] = safeTrim(v);
    }
    return normalized;
  }) : [];
  const anchors = response.recreation_anchors;
  const mustPreserve = normalizeStringArray(anchors?.must_preserve);
  const highRiskErrors = normalizeStringArray(anchors?.high_risk_errors);
  response.recreation_anchors = {
    must_preserve: mustPreserve.length > 0 ? mustPreserve : ["subject identity", "viewpoint", "crop"],
    high_risk_errors: highRiskErrors.length > 0 ? highRiskErrors : ["wrong pose", "wrong crop"],
    priority_order: safeTrim(anchors?.priority_order) || "viewpoint and composition matter most",
    prompt_frontload: safeTrim(anchors?.prompt_frontload) || safeTrim(response.shortPrompt)
  };
  response.shortPrompt = safeTrim(response.shortPrompt);
  response.detailedPrompt = safeTrim(response.detailedPrompt);
  response.negativePrompt = safeTrim(response.negativePrompt);
  if (!isNonEmptyString(response.shortPrompt) && !isNonEmptyString(response.detailedPrompt)) {
    throw new Error("\u6A21\u578B\u8FD4\u56DE\u4E86\u65E0\u6548\u7684\u54CD\u5E94\u683C\u5F0F\uFF0C\u8BF7\u91CD\u8BD5\u3002(E3)");
  }
  return response;
}
function normalizeLegacyImageResponse(response) {
  const keywords = Array.isArray(response.analysis?.keywords) ? response.analysis.keywords.filter(isNonEmptyString).map((k) => k.trim()).filter(Boolean) : [];
  const normalized = {
    analysis: {
      subject: response.analysis?.subject?.trim?.() ?? "",
      scene: response.analysis?.scene?.trim?.() ?? "",
      composition: response.analysis?.composition?.trim?.() ?? "",
      style: response.analysis?.style?.trim?.() ?? "",
      lighting: response.analysis?.lighting?.trim?.() ?? "",
      colorPalette: response.analysis?.colorPalette?.trim?.() ?? "",
      mood: response.analysis?.mood?.trim?.() ?? "",
      details: response.analysis?.details?.trim?.() ?? "",
      medium: response.analysis?.medium?.trim?.() ?? "",
      keywords
    },
    shortPrompt: response.shortPrompt?.trim?.() ?? "",
    detailedPrompt: response.detailedPrompt?.trim?.() ?? "",
    imagePrompt: response.imagePrompt?.trim?.() ?? ""
  };
  const a = normalized.analysis;
  if (!isNonEmptyString(a.subject) || !isNonEmptyString(a.scene) || !isNonEmptyString(normalized.imagePrompt)) {
    throw new Error("\u6A21\u578B\u8FD4\u56DE\u4E86\u65E0\u6548\u7684\u54CD\u5E94\u683C\u5F0F\uFF0C\u8BF7\u91CD\u8BD5\u3002(E4)");
  }
  return normalized;
}
function parseGeminiImageResponse(rawText) {
  if (rawText.includes("[") && rawText.includes("]")) {
    try {
      const result = parseImageResponse(rawText);
      return {
        imageSummary: result.shortPrompt,
        generatedPrompt: result.detailedPrompt,
        rawResult: result.rawText,
        promptResult: result
      };
    } catch {
    }
  }
  let parsed = parseGeminiJson(rawText);
  if (parsed && typeof parsed === "object" && !("image_archetype" in parsed) && !("global_overview" in parsed) && "analysis" in parsed) {
    const inner = parsed.analysis;
    if (inner && typeof inner === "object" && !Array.isArray(inner) && ("image_archetype" in inner || "global_overview" in inner)) {
      parsed = {
        ...inner,
        shortPrompt: parsed.shortPrompt ?? inner.shortPrompt,
        detailedPrompt: parsed.detailedPrompt ?? inner.detailedPrompt,
        negativePrompt: parsed.negativePrompt ?? inner.negativePrompt
      };
    }
  }
  if (parsed && typeof parsed === "object" && "image_archetype" in parsed) {
    const promptResult2 = normalizeStructuredImageResponse(
      parsed
    );
    return {
      imageSummary: promptResult2.shortPrompt,
      generatedPrompt: JSON.stringify(promptResult2, null, 2),
      rawResult: JSON.stringify(promptResult2, null, 2),
      promptResult: promptResult2
    };
  }
  if (parsed && typeof parsed === "object" && "global_overview" in parsed) {
    const old = parsed;
    const promptResult2 = normalizeStructuredImageResponse({
      image_archetype: old.global_overview ?? {},
      recreation_anchors: {},
      subjects: Array.isArray(old.all_subjects_and_objects) ? old.all_subjects_and_objects : [],
      composition: old.composition_and_camera ?? {},
      set_dressing: {},
      lighting_and_color: old.light_and_color ?? {},
      atmospheric_signature: {},
      imperfections: old.details_and_imperfections ?? {},
      shortPrompt: String(old.shortPrompt ?? ""),
      detailedPrompt: String(old.detailedPrompt ?? ""),
      negativePrompt: String(old.negativePrompt ?? "")
    });
    return {
      imageSummary: promptResult2.shortPrompt,
      generatedPrompt: JSON.stringify(promptResult2, null, 2),
      rawResult: JSON.stringify(promptResult2, null, 2),
      promptResult: promptResult2
    };
  }
  if (parsed && typeof parsed === "object" && "negativePrompt" in parsed) {
    const legacy = parsed;
    const promptResult2 = normalizeStructuredImageResponse({
      image_archetype: legacy.analysis ?? {},
      recreation_anchors: {},
      subjects: [],
      composition: {},
      set_dressing: {},
      lighting_and_color: {},
      atmospheric_signature: {},
      imperfections: {},
      shortPrompt: String(legacy.shortPrompt ?? ""),
      detailedPrompt: String(legacy.detailedPrompt ?? ""),
      negativePrompt: String(legacy.negativePrompt ?? "")
    });
    return {
      imageSummary: promptResult2.shortPrompt,
      generatedPrompt: JSON.stringify(promptResult2, null, 2),
      rawResult: JSON.stringify(promptResult2, null, 2),
      promptResult: promptResult2
    };
  }
  const promptResult = normalizeLegacyImageResponse(
    parsed
  );
  return {
    imageSummary: promptResult.shortPrompt,
    generatedPrompt: JSON.stringify(promptResult, null, 2),
    rawResult: JSON.stringify(promptResult, null, 2),
    promptResult
  };
}

// src/lib/media/dimensions.ts
function scaleDimensions(width, height, maxSide) {
  const longestEdge = Math.max(width, height);
  if (longestEdge <= maxSide) {
    return { width, height };
  }
  const ratio = maxSide / longestEdge;
  return {
    width: Math.max(1, Math.round(width * ratio)),
    height: Math.max(1, Math.round(height * ratio))
  };
}

// src/lib/media/imageUtils.ts
async function createImageElement(sourceUrl) {
  const image = new Image();
  image.src = sourceUrl;
  await new Promise((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = () => reject(new Error("\u65E0\u6CD5\u52A0\u8F7D\u56FE\u7247\u3002"));
  });
  return image;
}
async function resizeImageDataUrl(dataUrl, maxSide = 1536, quality = 0.7) {
  const img = await createImageElement(dataUrl);
  const { width, height } = scaleDimensions(
    img.naturalWidth,
    img.naturalHeight,
    maxSide
  );
  if (width === img.naturalWidth && height === img.naturalHeight) {
    return dataUrl;
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return dataUrl;
  }
  ctx.drawImage(img, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", quality);
}
function base64FromBytes(bytes) {
  const chunkSize = 32768;
  let binary = "";
  for (let index = 0; index < bytes.length; index += chunkSize) {
    const slice = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode(...slice);
  }
  return btoa(binary);
}
async function fetchImageAsDataUrl(imageUrl) {
  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error("\u65E0\u6CD5\u52A0\u8F7D\u6B64\u56FE\u7247\u8FDB\u884C\u5206\u6790\u3002");
  }
  const blob = await response.blob();
  const mimeType = blob.type || "image/jpeg";
  const arrayBuffer = await blob.arrayBuffer();
  const base64 = base64FromBytes(new Uint8Array(arrayBuffer));
  return `data:${mimeType};base64,${base64}`;
}

// src/lib/clients/openaiClient.ts
function dataUrlToBase64(dataUrl) {
  const { mimeType, data } = parseDataUrl(dataUrl);
  return { mimeType, base64: data };
}
function readOpenAIError(payload) {
  if (payload && typeof payload === "object") {
    const obj = payload;
    if (obj.error && typeof obj.error === "object") {
      const err = obj.error;
      if (typeof err.message === "string") return err.message;
    }
    if (typeof obj.message === "string") return obj.message;
  }
  return null;
}
async function analyzeImageStream({
  apiKey,
  baseUrl,
  modelName,
  targetModel,
  imageDataUrl,
  imageInfo,
  signal,
  onProgress
}) {
  const endpoint = `${baseUrl}/chat/completions`;
  const instruction = buildGeminiImageInstruction(targetModel, imageInfo);
  const compressedDataUrl = await resizeImageDataUrl(imageDataUrl);
  const { mimeType, base64 } = dataUrlToBase64(compressedDataUrl);
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: modelName,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: instruction },
            {
              type: "image_url",
              image_url: {
                url: `data:${mimeType};base64,${base64}`
              }
            }
          ]
        }
      ],
      temperature: 0.4,
      top_p: 0.9,
      max_tokens: 32768,
      stream: true
    }),
    signal
  });
  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `API \u8BF7\u6C42\u5931\u8D25 (${response.status}): ${errorText.slice(0, 300)}`
    );
  }
  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error("\u5F53\u524D API \u7AEF\u70B9\u4E0D\u652F\u6301\u6D41\u5F0F\u54CD\u5E94\uFF0C\u8BF7\u5728\u8BBE\u7F6E\u4E2D\u68C0\u67E5\u63A5\u53E3\u5730\u5740\u3002");
  }
  const decoder = new TextDecoder();
  let fullContent = "";
  let buffer = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (signal?.aborted) {
        reader.releaseLock();
        throw new DOMException("Aborted", "AbortError");
      }
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith("data: ")) continue;
        const data = trimmed.slice(6);
        if (data === "[DONE]") continue;
        try {
          const chunk = JSON.parse(data);
          const apiError = readOpenAIError(chunk);
          if (apiError) {
            throw new Error(apiError);
          }
          const delta = chunk?.choices?.[0]?.delta?.content;
          if (typeof delta === "string") {
            fullContent += delta;
            onProgress?.(fullContent);
          }
        } catch (e) {
          if (e instanceof SyntaxError) continue;
          throw e;
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
  if (!fullContent.trim()) {
    throw new Error("\u6A21\u578B\u672A\u8FD4\u56DE\u6709\u6548\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5\u3002");
  }
  return parseGeminiImageResponse(fullContent);
}

// src/lib/clients/geminiClient.ts
function dataUrlToInlinePart(dataUrl) {
  const { mimeType, data } = parseDataUrl(dataUrl);
  return { mimeType, data };
}
function inferMimeTypeFromUrl(imageUrl) {
  const pathname = new URL(imageUrl).pathname.toLowerCase();
  if (pathname.endsWith(".png")) {
    return "image/png";
  }
  if (pathname.endsWith(".webp")) {
    return "image/webp";
  }
  if (pathname.endsWith(".gif")) {
    return "image/gif";
  }
  return "image/jpeg";
}
function readGeminiError(payload) {
  if (payload && typeof payload === "object" && "error" in payload && payload.error && typeof payload.error === "object" && "message" in payload.error && typeof payload.error.message === "string") {
    return payload.error.message;
  }
  return readApiError(payload);
}
function readGeminiText(payload) {
  if (payload && typeof payload === "object" && "candidates" in payload && Array.isArray(payload.candidates)) {
    const textParts = payload.candidates.flatMap((candidate) => {
      if (!candidate || typeof candidate !== "object" || !("content" in candidate) || !candidate.content || typeof candidate.content !== "object" || !("parts" in candidate.content) || !Array.isArray(candidate.content.parts)) {
        return [];
      }
      return candidate.content.parts.flatMap((part) => {
        if (part && typeof part === "object" && "text" in part && typeof part.text === "string") {
          return [part.text];
        }
        return [];
      });
    }).join("\n").trim();
    if (textParts) {
      return textParts;
    }
  }
  throw new Error("Gemini \u672A\u8FD4\u56DE\u6709\u6548\u7684\u63D0\u793A\u8BCD\uFF0C\u8BF7\u91CD\u8BD5\u3002");
}
async function analyzeImageWithGemini({
  apiKey,
  targetModel,
  imageUrl,
  imageDataUrl,
  imageInfo
}) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_ANALYSIS_MODEL}:generateContent`;
  const instruction = buildGeminiImageInstruction(targetModel, imageInfo);
  const imagePart = imageUrl ? {
    file_data: {
      mime_type: inferMimeTypeFromUrl(imageUrl),
      file_uri: imageUrl
    }
  } : imageDataUrl ? {
    inline_data: dataUrlToInlinePart(imageDataUrl)
  } : null;
  if (!imagePart) {
    throw new Error("\u672A\u63D0\u4F9B\u7528\u4E8E\u5206\u6790\u7684\u56FE\u7247\u6570\u636E\u3002");
  }
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": apiKey
    },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: instruction }, imagePart]
        }
      ],
      generationConfig: {
        temperature: 0.4,
        topP: 0.9
      }
    })
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(
      readGeminiError(payload) ?? "Gemini API \u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684 API \u5BC6\u94A5\u3001\u914D\u989D\u6216\u7F51\u7EDC\u8FDE\u63A5\u3002"
    );
  }
  const text = readGeminiText(payload);
  return parseGeminiImageResponse(text);
}

// src/lib/clients/aiClient.ts
async function analyzeImageStream2({
  apiKey,
  baseUrl,
  modelName,
  providerType,
  targetModel,
  imageDataUrl,
  imageInfo,
  signal,
  onProgress
}) {
  if (providerType === "gemini") {
    const result = await analyzeImageWithGemini({ apiKey, targetModel, imageDataUrl, imageInfo });
    if (onProgress) onProgress(result.generatedPrompt);
    return result;
  }
  return analyzeImageStream({ apiKey, baseUrl, modelName, targetModel, imageDataUrl, imageInfo, signal, onProgress });
}

// src/lib/storage.ts
var SETTINGS_KEY = "video2prompt:settings";
var ANALYSIS_KEY_PREFIX = "video2prompt:analysis:";
var defaultSettings = {
  models: [],
  activeModelId: "",
  targetModel: DEFAULT_TARGET_MODEL,
  frameSamplingMode: DEFAULT_FRAME_SAMPLING_MODE,
  promptFormat: DEFAULT_PROMPT_FORMAT
};
function normalizeTargetModel(value) {
  if (TARGET_MODELS.some((model) => model.id === value)) {
    return value;
  }
  if (value === "happyhorse-1.0") {
    return "generic-ai-video";
  }
  return DEFAULT_TARGET_MODEL;
}
function normalizePromptFormat(value) {
  if (value === "json") {
    return value;
  }
  return DEFAULT_PROMPT_FORMAT;
}
function normalizeFrameSamplingMode(value) {
  if (value === "fast" || value === "standard" || value === "detailed") {
    return value;
  }
  return DEFAULT_FRAME_SAMPLING_MODE;
}
function createAnalysisState(tabId, phase, statusText, targetModel, extras = {}) {
  return {
    tabId,
    phase,
    statusText,
    targetModel,
    updatedAt: Date.now(),
    ...extras
  };
}
async function getSettings() {
  const stored = await chrome.storage.local.get(SETTINGS_KEY);
  const raw = stored[SETTINGS_KEY];
  if (!raw) {
    return { ...defaultSettings };
  }
  const rawModels = raw.models;
  const hasModels = Array.isArray(rawModels) && rawModels.length > 0;
  const models = hasModels ? rawModels : migrateLegacyModel(raw);
  return {
    models,
    activeModelId: raw.activeModelId ?? (models.length > 0 ? models[0].id : ""),
    targetModel: normalizeTargetModel(raw.targetModel),
    frameSamplingMode: normalizeFrameSamplingMode(raw.frameSamplingMode),
    promptFormat: normalizePromptFormat(raw.promptFormat)
  };
}
function migrateLegacyModel(raw) {
  const legacyApiKey = raw.apiKey || raw.openaiApiKey || raw.geminiApiKey || "";
  const legacyBaseUrl = raw.baseUrl || raw.openaiBaseUrl || "";
  const legacyModelName = raw.modelName || "";
  if (!legacyApiKey && !legacyBaseUrl && !legacyModelName) {
    return [];
  }
  return [{
    id: crypto.randomUUID(),
    name: "\u9ED8\u8BA4\u6A21\u578B",
    providerType: "openai",
    apiKey: legacyApiKey,
    baseUrl: legacyBaseUrl || "https://api.openai.com/v1",
    modelName: legacyModelName
  }];
}
function getActiveModel(settings) {
  if (!settings.activeModelId || settings.models.length === 0) return null;
  return settings.models.find((m) => m.id === settings.activeModelId) ?? null;
}
function analysisStorageKey(tabId) {
  return `${ANALYSIS_KEY_PREFIX}${tabId}`;
}
async function getAnalysisState(tabId) {
  const key = analysisStorageKey(tabId);
  const stored = await chrome.storage.local.get(key);
  return stored[key] ?? null;
}
async function saveAnalysisState(state) {
  if (state.tabId == null) {
    return;
  }
  await chrome.storage.local.set({
    [analysisStorageKey(state.tabId)]: state
  });
}
async function clearAnalysisState(tabId) {
  await chrome.storage.local.remove(analysisStorageKey(tabId));
}

// src/background/background.ts
var CONTEXT_MENU_ID = "analyze-image-to-prompt";
async function configureSidePanelBehavior() {
  await chrome.sidePanel.setPanelBehavior({
    openPanelOnActionClick: true
  });
}
async function createContextMenu() {
  await chrome.contextMenus.removeAll();
  chrome.contextMenus.create({
    id: CONTEXT_MENU_ID,
    title: "\u5206\u6790\u56FE\u7247\u751F\u6210\u63D0\u793A\u8BCD",
    contexts: ["image"]
  });
}
function toSerializableState(state) {
  return {
    ...state,
    updatedAt: Date.now()
  };
}
async function publishState(state) {
  const serializableState = toSerializableState(state);
  await saveAnalysisState(serializableState);
  try {
    await chrome.runtime.sendMessage({
      type: "VIDEO2PROMPT_ANALYSIS_STATE_UPDATED",
      state: serializableState
    });
  } catch {
  }
}
async function setState(tabId, phase, statusText, targetModel, extras = {}) {
  const state = createAnalysisState(tabId, phase, statusText, targetModel, extras);
  await publishState(state);
  return state;
}
async function getActiveTab() {
  const tabs = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  return tabs[0] ?? null;
}
function openSidePanelForTab(tabId) {
  chrome.sidePanel.open({ tabId }).catch((error) => {
    console.error("PromptLab failed to open side panel.", error);
  });
}
function buildWebImageInfo(imageUrl, tab) {
  return {
    found: true,
    src: imageUrl,
    pageTitle: tab?.title,
    pageUrl: tab?.url
  };
}
async function startWebImageAnalysis({
  tabId,
  imageUrl
}) {
  const activeTab = tabId ? await chrome.tabs.get(tabId).catch(() => null) : await getActiveTab();
  const resolvedTabId = activeTab?.id ?? null;
  const settings = await getSettings();
  const targetModel = settings.targetModel ?? DEFAULT_TARGET_MODEL;
  if (!resolvedTabId) {
    const state = createAnalysisState(
      null,
      "error",
      "\u627E\u4E0D\u5230\u53EF\u5206\u6790\u7684\u6D3B\u52A8\u6807\u7B7E\u9875\u3002",
      targetModel,
      { errorMessage: "\u627E\u4E0D\u5230\u53EF\u5206\u6790\u7684\u6D3B\u52A8\u6807\u7B7E\u9875\u3002" }
    );
    await publishState(state);
    return { ok: false, state };
  }
  const activeModel = getActiveModel(settings);
  const hasConfig = activeModel !== null && activeModel.apiKey.trim().length > 0 && activeModel.modelName.trim().length > 0 && (activeModel.providerType === "gemini" || activeModel.baseUrl.trim().length > 0);
  if (!hasConfig) {
    const state = await setState(
      resolvedTabId,
      "error",
      "\u9700\u8981\u5B8C\u6210\u6A21\u578B\u914D\u7F6E\u3002\u8BF7\u5148\u5728\u8BBE\u7F6E\u4E2D\u586B\u5199 API \u5BC6\u94A5\u3001\u57FA\u7840 URL \u548C\u6A21\u578B\u540D\u79F0\u3002",
      targetModel,
      {
        errorMessage: "\u9700\u8981\u5B8C\u6210\u6A21\u578B\u914D\u7F6E\u3002\u8BF7\u5148\u5728\u8BBE\u7F6E\u4E2D\u586B\u5199 API \u5BC6\u94A5\u3001\u57FA\u7840 URL \u548C\u6A21\u578B\u540D\u79F0\u3002"
      }
    );
    try {
      await chrome.runtime.sendMessage({
        type: "VIDEO2PROMPT_FOCUS_API_KEY"
      });
    } catch {
    }
    return { ok: false, state };
  }
  if (!imageUrl) {
    const state = await setState(
      resolvedTabId,
      "error",
      "\u672A\u627E\u5230\u56FE\u7247\u3002\u8BF7\u76F4\u63A5\u53F3\u952E\u70B9\u51FB\u6807\u51C6\u7F51\u9875\u56FE\u7247\u540E\u91CD\u8BD5\u3002",
      targetModel,
      {
        errorMessage: "\u672A\u627E\u5230\u56FE\u7247\u3002\u8BF7\u76F4\u63A5\u53F3\u952E\u70B9\u51FB\u6807\u51C6\u7F51\u9875\u56FE\u7247\u540E\u91CD\u8BD5\u3002"
      }
    );
    return { ok: false, state };
  }
  const imageInfo = buildWebImageInfo(imageUrl, activeTab ?? void 0);
  await setState(resolvedTabId, "detecting", "\u6B63\u5728\u51C6\u5907\u56FE\u7247...", targetModel, {
    mediaType: "image",
    sourceType: "web",
    imageInfo,
    previewFrameUrl: imageUrl
  });
  try {
    const baseState = await setState(resolvedTabId, "analyzing", "\u6B63\u5728\u5206\u6790...", targetModel, {
      mediaType: "image",
      sourceType: "web",
      imageInfo,
      previewFrameUrl: imageUrl
    });
    const imageDataUrl = await fetchImageAsDataUrl(imageUrl);
    let lastProgressLen = 0;
    const result = await analyzeImageStream2({
      apiKey: activeModel.apiKey,
      baseUrl: activeModel.baseUrl,
      modelName: activeModel.modelName,
      providerType: activeModel.providerType,
      targetModel,
      imageDataUrl,
      imageInfo,
      onProgress: (text) => {
        if (text.length - lastProgressLen < 20) return;
        lastProgressLen = text.length;
        void publishState({
          ...baseState,
          streamProgress: text.slice(-600),
          updatedAt: Date.now()
        });
      }
    });
    const state = await setState(
      resolvedTabId,
      "generated",
      "\u63D0\u793A\u8BCD\u5DF2\u751F\u6210\u3002",
      targetModel,
      {
        mediaType: "image",
        sourceType: "web",
        imageInfo,
        previewFrameUrl: imageUrl,
        imageSummary: result.imageSummary,
        generatedPrompt: result.generatedPrompt,
        rawResult: result.rawResult,
        promptResult: result.promptResult
      }
    );
    return { ok: true, state };
  } catch (error) {
    const message = error instanceof Error ? error.message : "\u65E0\u6CD5\u52A0\u8F7D\u6B64\u56FE\u7247\u8FDB\u884C\u5206\u6790\u3002";
    const state = await setState(resolvedTabId, "error", message, targetModel, {
      mediaType: "image",
      sourceType: "web",
      imageInfo,
      previewFrameUrl: imageUrl,
      errorMessage: message
    });
    return { ok: false, state };
  }
}
chrome.runtime.onInstalled.addListener(() => {
  void (async () => {
    await configureSidePanelBehavior();
    await chrome.sidePanel.setOptions({
      path: "sidepanel.html",
      enabled: true
    });
    await createContextMenu();
  })();
});
chrome.runtime.onStartup.addListener(() => {
  void (async () => {
    await configureSidePanelBehavior();
    await chrome.sidePanel.setOptions({
      path: "sidepanel.html",
      enabled: true
    });
  })();
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== CONTEXT_MENU_ID || !tab?.id) {
    return;
  }
  openSidePanelForTab(tab.id);
  void startWebImageAnalysis({
    tabId: tab.id,
    imageUrl: info.srcUrl
  });
});
chrome.action.onClicked.addListener((tab) => {
  if (!tab.id) {
    return;
  }
  openSidePanelForTab(tab.id);
});
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "VIDEO2PROMPT_START_ANALYSIS") {
    void startWebImageAnalysis({
      tabId: message.tabId,
      imageUrl: message.imageUrl
    }).then(sendResponse);
    return true;
  }
  if (message.type === "VIDEO2PROMPT_GET_PANEL_CONTEXT") {
    void (async () => {
      const activeTab = await getActiveTab();
      const activeTabId = activeTab?.id ?? null;
      const state = activeTabId ? await getAnalysisState(activeTabId) : null;
      sendResponse({
        activeTabId,
        state
      });
    })();
    return true;
  }
  if (message.type === "VIDEO2PROMPT_CLEAR_ACTIVE_ANALYSIS") {
    void (async () => {
      const activeTab = await getActiveTab();
      const resolvedTabId = message.tabId ?? activeTab?.id ?? null;
      if (!resolvedTabId) {
        sendResponse({ ok: false });
        return;
      }
      await clearAnalysisState(resolvedTabId);
      sendResponse({ ok: true });
    })();
    return true;
  }
  return false;
});
