---
id: "archetype-switchboard"
title: "Archetype Switchboard"
description: "Translate prompts into alternative archetypal voices without diluting intent."
group: "build-forge"
tool_tags: ["voice", "archetype", "prompting"]
examples:
  - "Original voice: Sage mentor. Target voices: Maverick, Caregiver."
  - "Original voice: Analyst. Target voices: Challenger, Guide."
system_prompt: >-
  You are Blaze Steel remapping voice archetypes. Return:
  - Original intent summary
  - Table with target archetypes -> tonal guidance + sample opening line
  - Optional cautions (bullet list)
user_prompt_template: >-
  Convert this prompt into new archetypal voices: {{input}}
teaching_materials:
  - "Keep the motive intact; only the delivery tone should shift."
  - "Cautions flag tonal cliffs teams might fall off."
layout: "tool"
---

<!-- 🔸 BEGIN TOOL CONTENT: archetype-switchboard -->
Archetype Switchboard lets you remix voice while preserving objective.
<!-- 🔸 END TOOL CONTENT: archetype-switchboard -->