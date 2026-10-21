# Academic Website PhD Application Audit & To-Do List

This streamlined checklist reflects your preferences and compares your website with your updated CV (`main.tex`), tailored for PhD program admissions in TCS, ML, and Applied Mathematics.

---

## Priority 1: Critical Profile & Flagship Research Updates

- [x] **Fix Typos in BU Profile Text**
  - Corrected `"Artifical Intelligence"` -> `"Artificial Intelligence"` in `_config.yml` and `_pages/about.md`.

- [x] **Add Missing Flagship Publication (Shannon Capacity)**
  - Created `_publications/2026-07-shannon.md`, `_publications/shannon.bib`, and downloaded `_publications/shannon-paper.pdf`.

- [ ] **Add Explicit PhD Research Interests & Prospective Advisor Hook**
  - **File**: `_pages/about.md`
  - **Action**: Add a concise **"Research Interests & PhD Plans"** section on the homepage highlighting:
    - Target areas: Computational Combinatorics, Combinatorial Optimization, Graph Theory, Extremal Combinatorics, AI/RL for Mathematical Discovery.
    - Application timeline note (e.g., *"Applying to PhD programs in Computer Science / Applied Math for Fall 202X"*).
    - Past advisors/collaborators (Prof. Daniel Reichman, Prof. Gábor Sárközy, Prof. Jugal Kalita, Prof. Elke Rundensteiner).

---

## Priority 2: Research Depth & Key Signals

- [ ] **Flesh Out or Consolidate Projects (Eliminate "Coming Soon" Stubs)**
  - **Files**: `_projects/24a-isp.md`, `_projects/24b-iqp.md`, `_projects/25summer-reu.md`, `_projects/26ay-isp.md`, `_projects/26ay-mqp.md`
  - **Action**: Either write 1–2 paragraphs for key projects (MQP Snake-in-the-Box, Graph Counterexamples REU, MInDS Depression Screening) with links to code and reports, or remove empty stub files so visitors aren't led to dead-end "Coming Soon" pages. Add an entry for the Shannon Capacity project.

- [ ] **Feature Honors, Awards & Leadership on Homepage**
  - **File**: `_pages/about.md`
  - **Action**: Add an **Honors & Leadership** section to highlight strong academic distinctions:
    - Meritorious Senior Award (WPI Mathematical Sciences, May 2026)
    - Honorable Mention, Provost's Award for Best MQP in Computer Science (May 2026)
    - CRA Travel Grant (IEEE MIT URTC, Oct 2024)
    - Pi Mu Epsilon President (revitalized chapter, founded WPI Undergraduate Mathematics Symposium)
    - Upsilon Pi Epsilon Events Coordinator

---

## Priority 3: Site Hygiene & Maintenance

- [ ] **Clean Up Boilerplate Template Files**
  - Delete dummy template blog post `_posts/2012-08-14-blog-post-1.md` and `_drafts/post-draft.md`.
  - Delete old template talk files in `_talks/` (`2012-03-01-talk-1.md`, etc.).
- [ ] **Keep PDF CV Synchronized**
  - Whenever `main.tex` is updated, ensure the compiled PDF is copied to `files/CV.pdf`.
