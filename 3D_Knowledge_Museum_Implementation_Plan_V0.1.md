# Implementation Plan: 3D Knowledge Museum — V0.1 → Production Path

## 0. Approved Direction

Xây dựng một **web/app bảo tàng tri thức 3D song ngữ VN/EN**, tham chiếu tinh thần trải nghiệm của:

- https://leon-made-this.work/museum/en/
- https://github.com/s010s/prehistoric-animal-museum

Nhưng **không clone nguyên xi** UI, branding, nội dung hoặc asset có bản quyền.

Mục tiêu vòng đầu tiên là tạo một **prototype tương tác hoàn chỉnh** với đúng **1 exhibit: Triceratops**, chạy được thật bằng trình duyệt và xuất thành:

```text
prototype.html
```

Prototype phải đủ để kiểm chứng:

- UX của 3D exhibit
- tương tác model
- VN/EN
- audio narration
- guide / scientific content
- source + attribution
- responsive mobile / desktop
- fallback khi model hoặc WebGL lỗi
- cấu trúc data có thể tái sử dụng cho exhibit tiếp theo

Nguyên tắc chính:

> One exhibit at 100% completeness is better than twenty exhibits at 20%.

---

# 1. Main Success Criteria

Gate 01 chỉ PASS khi người dùng có thể mở prototype và thực hiện toàn bộ chuỗi sau:

```text
Open prototype
↓
See exhibit
↓
Rotate / Zoom / Reset model
↓
Switch VI / EN
↓
Read short content
↓
View quick facts
↓
Play narration
↓
Open Guide
↓
Read scientific information
↓
See sources
↓
See model credit + license
↓
Use on desktop and mobile
```

Không được coi wireframe, screenshot, mockup hoặc HTML tĩnh là hoàn thành.

---

# 2. Planning Assumptions

1. V0.1 là prototype UX + technical proof-of-concept, chưa phải production app.
2. V0.1 ưu tiên `HTML + CSS + Vanilla JS + Three.js` để giảm dependency.
3. Không dùng backend, database, login, CMS hoặc API runtime trong Gate 01.
4. Nội dung song ngữ lưu local trong JavaScript object / JSON-like structure.
5. Narration V0.1 dùng `SpeechSynthesis` nếu chưa có MP3 thật.
6. Model ưu tiên GLB có license rõ ràng.
7. Nếu chưa có model đủ tốt, prototype vẫn phải hoạt động bằng fallback/procedural object.
8. UI phải original, chỉ học pattern từ website tham chiếu.
9. Production architecture chỉ quyết định sau khi prototype thật được review.
10. Mọi asset về sau phải có `source + author + license + source URL`.

---

# 3. Strategy

Triển khai theo nguyên tắc giảm rủi ro sớm:

```text
REFERENCE ANALYSIS
        ↓
CONTENT + DATA MODEL
        ↓
3D VIEWER CORE
        ↓
SINGLE COMPLETE EXHIBIT
        ↓
LOCAL HTML PROTOTYPE
        ↓
UX / TECH QA
        ↓
PATCH LOOP
        ↓
FREEZE EXHIBIT ENGINE V0.1
        ↓
ADD MORE EXHIBITS
        ↓
PRODUCTION APP
```

Không triển khai nhiều exhibit cho đến khi một exhibit đầu tiên chạy ổn định.

---

# 4. Scope Split

| Bucket | Items |
|---|---|
| **MVP / Now** | 1 Triceratops exhibit, Three.js viewer, rotate/zoom/reset, VN/EN, quick facts, Guide drawer, narration, sources, credits, fallback, responsive, local HTML |
| **Next** | camera presets, compare-size, pre-rendered MP3, real optimized GLB, exhibit selector, prefetch adjacent exhibit |
| **Later** | timeline, fossil map, taxonomy, multiple collections, architecture/science museum modules, PWA |
| **Out of Scope V0.1** | login, CMS, database, AI chatbot, VR, AR, gamification, points, multiplayer, admin dashboard, payment, analytics |

---

# 5. Technology Decision — Gate 01

## Core

```text
HTML5
CSS3
Vanilla JavaScript
Three.js
GLTFLoader
OrbitControls
```

## Optional CDN dependencies

- Three.js
- GLTFLoader
- OrbitControls
- Web font CDN if needed

## Explicitly avoid in V0.1

```text
Next.js
React app architecture
Backend
Database
Auth
Complex build tooling
```

Reason: Gate 01 phải review nhanh bằng sản phẩm thật, không phải review framework.

---

# 6. Deliverable Structure — Gate 01

Preferred:

```text
/3d-knowledge-museum-v01/
│
├── prototype.html
├── README.md
│
└── assets/
    ├── models/
    │   └── triceratops.glb
    │
    ├── previews/
    │   └── triceratops.webp
    │
    └── audio/
        ├── triceratops-vi.mp3   # optional V0.1
        └── triceratops-en.mp3   # optional V0.1
```

Nếu có thể nhúng hết vào một file mà vẫn maintainable:

```text
prototype.html
```

được ưu tiên cho vòng review đầu tiên.

---

# 7. Data Architecture

Không hard-code content rải rác trong DOM.

Tạo một exhibit object duy nhất:

```js
const exhibit = {
  id: "triceratops",

  model: {
    url: "./assets/models/triceratops.glb",
    preview: "./assets/previews/triceratops.webp",
    scale: 1,
    rotation: [0, 0, 0]
  },

  credits: {
    title: "Triceratops",
    author: "",
    source: "",
    license: "",
    sourceUrl: ""
  },

  content: {
    vi: {
      name: "Triceratops",
      subtitle: "Người khổng lồ ba sừng của cuối Kỷ Phấn Trắng",
      intro: "...",
      observation: "...",
      facts: {
        period: "Cuối Kỷ Phấn Trắng",
        diet: "Thực vật",
        length: "Khoảng 8–9 m",
        mass: "Khoảng 6–10 tấn",
        location: "Phía tây Bắc Mỹ"
      },
      guide: {...},
      narration: "..."
    },

    en: {
      name: "Triceratops",
      subtitle: "The three-horned giant of the Late Cretaceous",
      intro: "...",
      observation: "...",
      facts: {
        period: "Late Cretaceous",
        diet: "Herbivore",
        length: "Approx. 8–9 m",
        mass: "Approx. 6–10 tonnes",
        location: "Western North America"
      },
      guide: {...},
      narration: "..."
    }
  },

  sources: []
};
```

Mục tiêu kiến trúc:

```text
replace exhibit data
+
replace GLB
=
new exhibit
```

---

# 8. UI State Model

Các state bắt buộc:

```text
BOOT
↓
LOADING_3D
├── SUCCESS → READY
└── FAIL → FALLBACK

READY
├── LANGUAGE_VI
├── LANGUAGE_EN
├── GUIDE_CLOSED
├── GUIDE_OPEN
├── AUDIO_IDLE
├── AUDIO_PLAYING
└── SIZE_COMPARE_ON/OFF
```

Không để lỗi 3D làm mất content.

---

# 9. Milestone 1 — Reference + Content Lock

## Goal

Chốt phạm vi, interaction pattern và content structure trước khi code.

## Tasks

- phân tích reference site
- xác định layout hierarchy
- xác định interaction hierarchy
- xác định mobile behavior
- xác định fallback behavior
- xác định VN/EN copy structure
- xác định attribution structure

## Output

```text
00_reference_notes.md
01_content_schema.md
```

## Definition of Done

- V0.1 chỉ có 1 exhibit
- không có feature creep
- toàn bộ text chính có VN/EN
- content schema đủ để render UI

## Checkpoint

Có thể mô tả đầy đủ trải nghiệm đầu-cuối trước khi code.

---

# 10. Milestone 2 — Asset Selection + License Gate

## Goal

Có model/preview hợp lệ hoặc fallback rõ ràng.

## Source Priority

```text
1. Smithsonian Open Access / CC0
2. Sketchfab downloadable Creative Commons
3. Other clearly licensed repositories
4. Commercial licensed asset if necessary later
```

## Required Asset Metadata

```text
asset name
author
source
license
source URL
modification note
```

## Reject asset if

- không rõ license
- source page mất
- không được phép derivative khi cần chỉnh
- asset quá nặng và không tối ưu được

## Output

```text
asset_registry.md
assets/models/triceratops.glb
assets/previews/triceratops.webp
```

## Definition of Done

Có model usable hoặc fallback model được xác định rõ.

---

# 11. Milestone 3 — Build the 3D Viewer Core

## Goal

Model hiển thị và tương tác ổn định.

## Tasks

### Renderer

- initialize WebGLRenderer
- set capped pixel ratio
- responsive resize
- transparent/neutral background decision
- color management

### Camera

- PerspectiveCamera
- initial framing
- near/far clipping
- reset target

### Lighting

- Hemisphere/Ambient light
- key Directional light
- optional fill/rim
- soft shadow only if stable

### Controls

- OrbitControls
- damping
- rotate
- zoom
- reasonable min/max distance
- pan disabled unless necessary

### Ground / Context

- subtle shadow plane
- no decorative 3D environment in V0.1

## Output

Working interactive viewer.

## Definition of Done

- mouse rotate works
- wheel zoom works
- touch rotate works
- pinch zoom works
- resize works
- camera reset works
- object remains framed

---

# 12. Milestone 4 — Model Loader + Fallback

## Goal

Không có trường hợp blank screen.

## Tasks

- GLTFLoader integration
- progress feedback
- normalization of model center
- model scale adjustment
- bounding box framing
- error callback
- retry action
- static preview fallback
- procedural placeholder fallback if needed

## Required Flow

```text
Try GLB
↓
Success → display GLB
↓ fail
Try preview image
↓ fail
Display procedural fallback
```

## Definition of Done

Model failure không phá trải nghiệm.

---

# 13. Milestone 5 — UI Shell

## Goal

Tạo cảm giác museum/editorial, không phải dashboard.

## Desktop hierarchy

```text
Header
├── Museum identity
├── Guide
└── VI / EN

Main
├── Exhibit title
├── Subtitle / intro
├── 3D viewer
├── interaction hint
├── Listen
├── Reset
└── Quick facts
```

## Mobile hierarchy

```text
Header
↓
Title
↓
3D viewer
↓
interaction controls
↓
Intro
↓
Quick facts
↓
Narration
↓
Guide
```

## Visual Direction

```text
quiet
museum-like
editorial
scientific
premium
warm
minimal
```

Avoid:

```text
neon
SaaS dashboard
game HUD
glassmorphism-heavy UI
cartoon styling
```

## Definition of Done

- 3D remains visual hero
- UI not overcrowded
- desktop and mobile both intentional

---

# 14. Milestone 6 — Bilingual Engine

## Goal

Switch VN/EN instantly without reload.

## Tasks

- centralized translation object
- centralized content per exhibit
- language state
- `localStorage` preference
- HTML `lang` attribute update
- buttons / facts / guide / narration update together

## Definition of Done

Không còn UI text quan trọng bị hard-code riêng lẻ.

---

# 15. Milestone 7 — Guide Layer

## Goal

Progressive disclosure: content sâu không cạnh tranh với 3D.

## Recommended interaction

```text
Side drawer desktop
Bottom/full-height sheet mobile
```

## Guide Sections

```text
01 Overview
02 Anatomy
03 Horns & Frill
04 Fossil Evidence
05 What Scientists Know
06 What Is Still Uncertain
07 Scientific Sources
08 3D Model Credits
```

## Required Behaviors

- independent scroll
- close button
- ESC closes desktop
- focus handling
- overlay click optional
- 3D state remains intact after closing

## Definition of Done

Guide mở/đóng không reset model hoặc reload page.

---

# 16. Milestone 8 — Narration

## Goal

Có trải nghiệm nghe ở cả VN và EN.

## V0.1

Use:

```text
window.speechSynthesis
```

Language:

```text
vi-VN
en-US / en-GB
```

## Controls

```text
Play
Stop
Replay
```

Không autoplay.

## Later replacement

```text
SpeechSynthesis
↓
Pre-rendered MP3
```

Audio interface phải được viết để thay backend audio mà không sửa UI.

---

# 17. Milestone 9 — Compare Size

## Goal

Tạo một tương tác giáo dục đơn giản.

## Behavior

Toggle:

```text
Compare size
```

Display human silhouette:

```text
1.7 m
```

Scale relation có thể approximate ở V0.1 nhưng phải ghi rõ illustrative.

## Definition of Done

Toggle on/off không ảnh hưởng camera controls.

---

# 18. Milestone 10 — Camera Presets

Priority order:

```text
P0 — Reset
P1 — Full Body
P1 — Head
P2 — Side
```

Nếu preset gây instability:

```text
Keep Reset + Full Body only.
```

Transition nên easing, không jump quá gắt.

---

# 19. Milestone 11 — Accessibility

Required:

- semantic buttons
- keyboard access
- visible focus
- ESC close Guide
- ARIA labels where needed
- sufficient contrast
- content usable without 3D
- `prefers-reduced-motion`
- no autoplay audio

Definition of Done:

Có thể đọc và điều khiển phần lớn experience bằng keyboard.

---

# 20. Milestone 12 — Responsive QA

Test sizes:

```text
1920 × 1080
1366 × 768
768 × 1024
375 × 812
```

Check:

- model framing
- no clipping
- no horizontal overflow
- touch-friendly controls
- drawer usability
- quick facts readability
- viewer vs page scrolling behavior

---

# 21. Milestone 13 — Performance Pass

## Browser performance goals

- stable model interaction
- capped pixel ratio
- no unnecessary post-processing
- no heavy particles
- lazy load noncritical UI where relevant
- reduce animation in hidden tab if practical

## Model budget target

Preferred V1 target:

```text
3–8 MB GLB
```

Acceptable early prototype:

```text
< 12 MB
```

Texture target:

```text
1K mobile
2K desktop
```

Production later:

```text
KTX2 / Basis
Meshopt / Draco where appropriate
```

---

# 22. Milestone 14 — Local Prototype Gate

## Mandatory Artifact

```text
prototype.html
```

## How to run

### First attempt

Open directly in browser.

### If browser blocks GLB due to `file://`

Run a simple local static server.

Examples:

```bash
python -m http.server 8000
```

or use VS Code Live Server.

Then open:

```text
http://localhost:8000/prototype.html
```

Do not require administrator rights.

---

# 23. Gate 01 Acceptance Criteria

Prototype PASS only when all P0 items below work.

| Priority | Requirement | Pass Condition |
|---|---|---|
| P0 | HTML loads | no fatal JS error |
| P0 | 3D viewer | model/fallback visible |
| P0 | Rotate | mouse/touch works |
| P0 | Zoom | wheel/pinch works |
| P0 | Reset | returns useful framing |
| P0 | VI/EN | all core content switches |
| P0 | Guide | opens, scrolls, closes |
| P0 | Audio | narration works or graceful fallback |
| P0 | Mobile | usable at 375×812 |
| P0 | Failure mode | content remains available |
| P0 | Credits | author/source/license visible |
| P0 | Sources | scientific source section exists |
| P1 | Compare size | works without breaking controls |
| P1 | Camera preset | smooth enough |
| P1 | Reduced motion | respected |

---

# 24. Antigravity Execution Runbook

## Step A — Input

Give Antigravity:

1. this implementation plan
2. the Master Build Prompt
3. reference website URL
4. reference GitHub URL

## Step B — Build

Antigravity must create actual files.

It must NOT stop at:

- explanation
- architecture recommendation
- code snippets only
- mockup

Mandatory physical output:

```text
prototype.html
README.md
```

## Step C — Local Preview

Antigravity should launch or instruct local preview and fix obvious runtime issues.

## Step D — Self QA

Before delivery:

- inspect console
- test 4 target breakpoints
- test language switch
- test Guide
- test audio
- test fallback path

## Step E — Deliver Folder

Return the entire project folder for independent audit.

---

# 25. Review Loop After Antigravity Build

```text
ANTI BUILD V0.1
        ↓
OPEN REAL PROTOTYPE
        ↓
UI/UX REVIEW
        ↓
3D / PERFORMANCE REVIEW
        ↓
MOBILE REVIEW
        ↓
CONTENT / VN-EN REVIEW
        ↓
LICENSE REVIEW
        ↓
BUG LIST
        ↓
PATCH PROMPT V0.2
        ↓
ANTI PATCH
        ↓
REGRESSION TEST
```

Không approve bằng screenshot.

Phải review trên file chạy thật.

---

# 26. Critic / QA Checklist

## UX

- 3D có thực sự là hero không?
- người dùng có biết cách tương tác mà không cần hướng dẫn dài không?
- Guide có quá nặng không?
- mobile có đúng thứ tự ưu tiên không?

## Visual

- có cảm giác museum/editorial không?
- có bị giống SaaS dashboard không?
- typography có hỗ trợ Vietnamese tốt không?
- khoảng trắng có đủ không?

## Technical

- có console errors không?
- OrbitControls có conflict với page scroll không?
- model có bị cắt bởi near/far plane không?
- resize có làm mất framing không?
- fallback có thật sự chạy không?

## Content

- VN/EN có tương đương về nghĩa không?
- scientific uncertainty có được tách khỏi fact không?
- source có bị bịa không?

## Asset

- model có source không?
- license có đúng không?
- attribution có hiển thị không?

---

# 27. Freeze Criteria — Exhibit Engine V0.1

Chỉ freeze engine khi:

- một exhibit hoàn chỉnh chạy ổn
- thay content không cần sửa renderer
- thay model chủ yếu chỉ đổi config
- VN/EN dùng chung architecture
- fallback đã kiểm chứng
- mobile đã kiểm chứng
- Guide và narration không coupling cứng với Triceratops

Sau đó refactor thành engine có thể tái sử dụng.

---

# 28. V0.2 — Convert Prototype to Reusable Exhibit Engine

Sau Gate 01:

Refactor:

```text
prototype.html
↓
viewer engine
content engine
language engine
exhibit config
asset registry
```

Suggested structure:

```text
src/
├── viewer/
│   ├── renderer.js
│   ├── camera.js
│   ├── controls.js
│   ├── loader.js
│   └── fallback.js
│
├── content/
│   └── exhibits.js
│
├── i18n/
│   └── translations.js
│
├── ui/
│   ├── guide.js
│   ├── facts.js
│   ├── audio.js
│   └── language.js
│
└── app.js
```

Gate 01 không cần bắt đầu bằng cấu trúc này; chỉ refactor sau khi interaction đã được duyệt.

---

# 29. V0.3 — Add Second Exhibit as Architecture Test

Chỉ thêm exhibit thứ hai để kiểm tra engine reuse.

Recommended:

```text
Stegosaurus
```

PASS nếu:

- thêm bằng data/config
- không duplicate viewer code
- không duplicate i18n engine
- không duplicate Guide component logic

---

# 30. Production Architecture Decision Gate

Sau khi 2 exhibit chạy được mới quyết định production stack.

Candidates:

```text
Option A
Vite + React + TypeScript + Three.js

Option B
Next.js + TypeScript + Three.js
```

Decision criteria:

- SEO needs
- number of exhibits
- routing complexity
- static generation
- content workflow
- hosting strategy
- analytics/privacy requirements

Không mặc định chuyển sang Next.js nếu không cần.

---

# 31. Production Asset Pipeline

```text
SOURCE MODEL
↓
LICENSE CHECK
↓
Blender cleanup
↓
Scale + orientation
↓
Material cleanup
↓
Animation cleanup
↓
Export GLB
↓
glTF optimization
↓
Texture compression
↓
Generate preview
↓
Browser QA
↓
Asset Registry
```

Asset registry should eventually include:

```text
id
filename
author
source
license
source_url
modified
modification_notes
file_size
triangle_count
texture_resolution
```

---

# 32. Production Content Pipeline

```text
Scientific source
↓
Fact extraction
↓
Uncertainty classification
↓
EN master content
↓
VN localization
↓
Child layer
↓
Adult/Teacher layer
↓
Narration script
↓
Source validation
↓
Publish
```

Do not translate blindly from one language to another when scientific nuance changes.

---

# 33. Future Museum Platform Architecture

Long-term engine:

```text
                 3D KNOWLEDGE MUSEUM ENGINE
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   PREHISTORY         ARCHITECTURE         SCIENCE
        │                  │                  │
 Dinosaurs          Heritage           Human body
 Fossils            Buildings          Cells
 Evolution          Structures         Machines
```

A common exhibit schema should support different domains.

---

# 34. Major Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Model license unclear | legal risk | reject asset without verifiable source/license |
| GLB too heavy | poor mobile UX | optimize geometry/textures; set asset budget |
| local `file://` blocks GLB | prototype appears broken | local static server + fallback |
| Three.js viewer dominates development | UI/content delayed | freeze minimal viewer requirements early |
| mobile gesture conflict | poor usability | test viewer scroll/touch behavior early |
| VN text breaks layout | visual regression | Vietnamese-first QA at all breakpoints |
| SpeechSynthesis voice quality varies | inconsistent audio | treat as temporary; replace with MP3 later |
| Guide becomes too dense | cognitive overload | progressive disclosure + concise sections |
| reference site over-influences design | derivative product | preserve pattern, redesign visual system |
| premature production architecture | wasted effort | production stack only after Gate 01/02 |

---

# 35. Definition of Done — Project V0.1

V0.1 is complete when:

1. `prototype.html` exists.
2. It runs locally.
3. A 3D exhibit or robust fallback is visible.
4. Rotate / zoom / reset works.
5. VN/EN works without reload.
6. Quick facts render correctly.
7. Guide opens and closes correctly.
8. Narration works or degrades gracefully.
9. Sources are visible.
10. Credits/license are visible.
11. Mobile layout passes 375×812.
12. No critical console errors.
13. 3D failure does not remove content.
14. Exhibit data is separate enough from viewer logic to reuse later.
15. The real running prototype has been reviewed before further expansion.

---

# 36. First Action

Give Antigravity these two files/instructions together:

```text
01_3D_Knowledge_Museum_Implementation_Plan_V0.1.md
02_Antigravity_Master_Build_Prompt_V0.1.md
```

Then instruct:

> Read the implementation plan first. Execute Gate 01 only. Build the actual working local prototype and return the complete project folder. Do not stop at planning, explanation, screenshots, or code snippets. The mandatory acceptance artifact is `prototype.html`.

---

# 37. Expected Review Handoff

After Antigravity finishes, provide the complete output folder for review.

Next review sequence:

```text
Prototype V0.1
↓
Independent audit
↓
Issue classification
  P0 Critical
  P1 Important
  P2 Polish
↓
Patch Prompt V0.2
↓
Regression test
↓
Freeze Exhibit Engine
```

---

# 38. Final Rule

The project must always move through a complete runnable loop:

```text
SPEC
↓
BUILD
↓
RUN
↓
INTERACT
↓
REVIEW
↓
PATCH
↓
VERIFY
```

No future phase should be approved based only on documentation or screenshots when an interactive prototype can be tested directly.
