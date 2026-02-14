
# Translation & Language Persistence Fix for Category Pages

## Problem Summary
The 4 procedure category pages (Face, Body, Breast, Nose) have massive amounts of hardcoded English text that never passes through the translation system. Additionally, the selected language resets to English on page refresh or navigation.

## Issues Found

### 1. Language Persistence (Header)
The i18n system initializes with `lng: 'en'` and never saves the user's language choice to `localStorage`. On refresh, it always resets to English.

### 2. Face Category Page (Face.tsx) - Hardcoded English
- **Carousel**: All 16 procedure card names/descriptions are hardcoded English strings (e.g., "The K Face Lift", "Mini Facelift", "Ponytail Lift")
- **"How the Face Ages"** section: Title and all 3 subsections (Skin Changes, Fat & Ligaments, Facial Skeleton) hardcoded
- **"Customized Treatment Planning"** section: Title and 2 paragraphs hardcoded
- **"The Future of Face"** section: ~200 lines of hardcoded English including "What is Endochor?", F.A.C.E. philosophy grid, 4 technical subsections (Transblepharoplasty, Endoscopic Forehead, Double-Double, Ribbon Implant)

### 3. Body Category Page (Body.tsx) - Hardcoded English
- **Carousel**: 9 procedure names hardcoded (e.g., "Advanced Safe BBL", "Tummy Tuck", "Liposuction")
- **"How the Body Changes"** section: Title and 3 subsections hardcoded
- **"Customized Treatment Planning"**: Title and text hardcoded

### 4. Breast Category Page (Breast.tsx) - Hardcoded English
- **Carousel**: 12 procedure names/descriptions hardcoded
- **"The Philosophy of Breast Aesthetics"**: Title and text hardcoded
- **"Understanding Breast Anatomy & Aging"**: Title and 4 anatomy corner items hardcoded
- **"Customized Treatment Planning"**: Title and text hardcoded
- **"Breast Procedure Overview"**: Title and all 8 procedure descriptions hardcoded

### 5. Nose Category Page (Nose.tsx) - Hardcoded English
- **Carousel**: 2 procedure names and descriptions hardcoded
- **Signature badge**: Missing `signatureTechnique` key in nose namespace
- **"Nose Procedure Overview"**: Title and 2 procedure descriptions hardcoded

### 6. NoPageProcedureCard Component - Hardcoded English
- Receives hardcoded `title` prop
- "To learn more..." overlay text and "Contact Dr. Karaaltin" button are hardcoded

---

## Implementation Plan

### Step 1: Fix Language Persistence
- Modify `src/i18n/index.ts` to detect saved language from `localStorage` on init
- Modify `handleLanguageChange` in `Header.tsx` to save selected language to `localStorage`

### Step 2: Add Translation Keys to en.json
Add ~150+ new keys under `procedures.face`, `procedures.body`, `procedures.breast`, `procedures.nose` for:
- Carousel procedure names and descriptions
- "How the Face/Body Ages" sections
- "Customized Treatment Planning" sections
- "The Future of Face" / Endochor section
- "Breast Procedure Overview" section
- "Nose Procedure Overview" section
- NoPageProcedureCard overlay text

### Step 3: Update React Components to Use t()
Replace all hardcoded strings in:
- `Face.tsx` (~50+ strings)
- `Body.tsx` (~25+ strings)
- `Breast.tsx` (~40+ strings)
- `Nose.tsx` (~15+ strings)
- `NoPageProcedureCard.tsx` (title prop + overlay text)

### Step 4: Add Spanish Translations to es.json
Translate all new keys to Spanish (the language the user will audit).

### Step 5: Add Translations to tr.json, zh.json, ar.json
Batch-translate all new keys for Turkish, Chinese, and Arabic.

### Step 6: Fix Nose Signature Badge
Add `signatureTechnique` key to `procedures.nose` namespace in all 5 language files.

---

## Technical Details

### Language Persistence Implementation
```text
i18n/index.ts:
  - Read: const savedLang = localStorage.getItem('i18n-lang') || 'en'
  - Use savedLang as lng value

Header.tsx handleLanguageChange:
  - Add: localStorage.setItem('i18n-lang', lang.code)
```

### Translation Key Structure (new keys added to en.json)
```text
procedures.face.carousel.kFaceLift (name)
procedures.face.carousel.kFaceLiftDesc (hover description)
procedures.face.carousel.miniFacelift
... (16 procedures)
procedures.face.howFaceAges (section title)
procedures.face.skinChanges / skinChangesDesc
procedures.face.fatLigaments / fatLigamentsDesc
procedures.face.facialSkeleton / facialSkeletonDesc
procedures.face.customizedPlanning / customizedPlanningText1 / customizedPlanningText2
procedures.face.futureOfFace / whatIsEndochor / whatIsEndochorText
procedures.face.faceF / faceFDesc / faceA / faceADesc / faceC / faceCDesc / faceE / faceEDesc
procedures.face.transBrow / transBrowSubtitle / transBrowText / transBrowItems (array)
procedures.face.endoscopicBrow / endoscopicBrowText / endoscopicBrowItems
procedures.face.doubleDouble / doubleDoubleText / doubleDoubleItems
procedures.face.ribbonImplant / ribbonImplantText / ribbonImplantItems

procedures.body.carousel.advancedSafeBBL / tummyTuck / liposuction / etc.
procedures.body.howBodyChanges / weightFluctuation / skinLaxity / muscleChanges
procedures.body.customizedPlanning / customizedPlanningText1 / customizedPlanningText2

procedures.breast.carousel.* (12 procedure names)
procedures.breast.breastPhilosophy / breastPhilosophyText1 / breastPhilosophyText2
procedures.breast.anatomyTitle / skinSoftTissue / fatVolume / glandularTissue / chestWall (+ Desc)
procedures.breast.customizedPlanning / customizedPlanningText
procedures.breast.procedureOverview / fatGraftingTitle / fatGraftingText1 / etc. (8 procedures)

procedures.nose.signatureTechnique
procedures.nose.carousel.smartTemplate / smartTemplateDesc / rhinoplasty / rhinoplastyDesc
procedures.nose.procedureOverview / primaryTitle / primaryDesc / smartTemplateTitle / smartTemplateDesc

common.noPageOverlayText / noPageContactButton
```

### NoPageProcedureCard Changes
The component will accept an i18n key instead of a raw title string, or will accept both and use `t()` when available. The overlay text ("To learn more...") and button ("Contact Dr. Karaaltin") will also use translation keys.

### Files Modified (8 total)
1. `src/i18n/index.ts` - language persistence
2. `src/components/Header.tsx` - save language to localStorage
3. `src/components/procedures/NoPageProcedureCard.tsx` - i18n support
4. `src/pages/procedures/Face.tsx` - replace hardcoded text with t()
5. `src/pages/procedures/Body.tsx` - replace hardcoded text with t()
6. `src/pages/procedures/Breast.tsx` - replace hardcoded text with t()
7. `src/pages/procedures/Nose.tsx` - replace hardcoded text with t()
8. `src/i18n/locales/en.json` - add ~150 new keys
9. `src/i18n/locales/es.json` - add ~150 Spanish translations
10. `src/i18n/locales/tr.json` - add ~150 Turkish translations
11. `src/i18n/locales/zh.json` - add ~150 Chinese translations
12. `src/i18n/locales/ar.json` - add ~150 Arabic translations
