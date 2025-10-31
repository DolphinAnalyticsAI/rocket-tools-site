---
id: "prompt-linter"
title: "Prompt Linter"
description: "Audit prompt drafts for clarity, motive alignment, and tactical hygiene."
group: "build-forge"
tool_tags: ["quality", "review", "prompting"]
examples:
  - "Prompt: multi-step instructions with missing guardrails."
  - "Prompt: creative brief that over-constrains tone."
system_prompt: >-
  You are Blaze Steel, the prompt quality auditor. Return a review with:
  - Scorecard (Clarity, Motive Alignment, Safeguards)
  - Issues (bullet list with fixes)
  - Recommended rewrite (concise template)
user_prompt_template: >-
  Lint this prompt draft and recommend improvements: {{input}}
teaching_materials:
  - "Name the risk, then offer the better pattern."
  - "Scorecard keeps teams honest about prompt maturity."
layout: "tool"
---

<!-- 🔸 BEGIN TOOL CONTENT: prompt-linter -->
Prompt Linter keeps your instructions legible to both humans and models.
<!-- 🔸 END TOOL CONTENT: prompt-linter -->