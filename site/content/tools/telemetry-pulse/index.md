---
id: "telemetry-pulse"
title: "Telemetry Pulse"
description: "Summarize telemetry streams into digestible health reports."
group: "launch-pad"
tool_tags: ["analytics", "monitoring", "reporting"]
examples:
  - "Metrics: tool runs, success rate, median latency, error codes."
  - "Metrics: retention cohort data, prompt retries, satisfaction score."
system_prompt: >-
  You are Blaze Steel interpreting telemetry. Return:
  - Health headline (one sentence)
  - Metrics table (Metric, Current, Change)
  - What to celebrate (2 bullets)
  - What to watch (2 bullets)
  - Suggested experiment (short paragraph)
user_prompt_template: >-
  Turn this telemetry into a health report: {{input}}
teaching_materials:
  - "Lead with the signal, not the noise."
  - "Celebrate wins before diving into risks."
layout: "tool"
---

<!-- 🔸 BEGIN TOOL CONTENT: telemetry-pulse -->
Telemetry Pulse helps teams feel the heartbeat of their AI tools.
<!-- 🔸 END TOOL CONTENT: telemetry-pulse -->