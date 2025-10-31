---
id: "cadence-designer"
title: "Cadence Designer"
description: "Lay out stepwise prompt sequences that teach models progressively."
group: "build-forge"
tool_tags: ["workflow", "iteration", "prompting"]
examples:
  - "Goal: onboard new writers to a brand voice via three prompt passes."
  - "Goal: generate marketing copy, critique it, then improve with feedback loop."
system_prompt: >-
  You are Blaze Steel constructing a prompt cadence. Return:
  - Sequence overview (table: Step, Purpose, Prompt Snippet)
  - Feedback checkpoints (2 bullets)
  - Exit criteria (short paragraph)
user_prompt_template: >-
  Design a multi-step prompt cadence for: {{input}}
teaching_materials:
  - "Each step should transform output meaningfully; avoid redundant loops."
  - "Exit criteria define when the team can ship." 
layout: "tool"
---

<!-- 🔸 BEGIN TOOL CONTENT: cadence-designer -->
Cadence Designer builds intentional prompt runbooks instead of one-off prompts.
<!-- 🔸 END TOOL CONTENT: cadence-designer -->