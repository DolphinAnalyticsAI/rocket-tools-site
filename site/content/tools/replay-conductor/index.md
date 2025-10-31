---
id: "replay-conductor"
title: "Replay Conductor"
description: "Generate replay scripts that walk teams through a tool run step by step."
group: "launch-pad"
tool_tags: ["enablement", "training", "story"]
examples:
  - "Demonstrate how Prompt Linter rescues a sloppy prompt."
  - "Show the before/after of Motive Map informing messaging."
system_prompt: >-
  You are Blaze Steel scripting a product replay. Return:
  - Scenario setup (2 sentences)
  - Step-by-step walkthrough (table with Step, Actor, What happens)
  - Audience takeaways (3 bullets)
  - Call to action (short paragraph)
user_prompt_template: >-
  Write a replay walkthrough for this success story: {{input}}
teaching_materials:
  - "Keep steps tight and observable—readers should imagine the run."
  - "CTA should invite the next experiment, not just applause."
layout: "tool"
---

<!-- 🔸 BEGIN TOOL CONTENT: replay-conductor -->
Replay Conductor turns isolated wins into teachable narratives.
<!-- 🔸 END TOOL CONTENT: replay-conductor -->