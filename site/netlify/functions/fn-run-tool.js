// 🔸 BEGIN SERVERLESS FUNCTION: fn-run-tool.js
// Purpose: Receive HTMX POST payloads, call the OpenAI-compatible endpoint, and return formatted HTML.
// Sections: CONFIG • HELPERS • HANDLER • OPENAI CALL • RESPONSE BUILDERS

// 🔸 CONFIG
const MODEL = "gpt-4-turbo";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_URL = "https://api.openai.com/v1/chat/completions";
const MAX_INPUT_LENGTH = 4000;

// 🔸 HELPERS
function response(statusCode, body, headers = { "content-type": "text/html; charset=utf-8" }) {
  return { statusCode, headers, body };
}

function parseEvent(event) {
  const contentType = event.headers["content-type"] || event.headers["Content-Type"] || "";
  if (contentType.includes("application/json")) {
    try {
      return JSON.parse(event.body || "{}");
    } catch (error) {
      return {};
    }
  }
  const params = new URLSearchParams(event.body || "");
  const parsed = {};
  for (const [key, value] of params.entries()) {
    parsed[key] = value;
  }
  return parsed;
}

function sanitizeInput(input = "") {
  return input.toString().trim();
}

function escapeHTML(value = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderHTML({ toolId, promptOutput, userPrompt }) {
  return `
    <article class="space-y-4">
      <header class="border-l-2 border-[color:var(--color-accent)] pl-3">
        <p class="text-xs uppercase tracking-[0.3em] text-[color:var(--text-dim)]">${escapeHTML(toolId || "tool-run")}</p>
        <p class="text-sm text-[color:var(--text-soft)]">${escapeHTML(userPrompt || "")}</p>
      </header>
      <pre class="rounded-[var(--radius-sm)] bg-[color:var(--color-base-2)]/70 p-4 text-left text-[color:var(--text-soft)] whitespace-pre-wrap">${escapeHTML(promptOutput)}</pre>
    </article>
  `;
}

function renderError(message) {
  return `
    <article class="space-y-3">
      <div class="alert alert-error">
        <span>${escapeHTML(message)}</span>
      </div>
      <button type="button" class="btn btn-outline" onclick="window.location.reload()">Retry</button>
    </article>
  `;
}

// 🔸 HANDLER
exports.handler = async function handler(event) {
  if (event.httpMethod !== "POST") {
    return response(405, renderError("Only POST is supported."));
  }

  if (!OPENAI_API_KEY) {
    return response(500, renderError("Server missing OPENAI_API_KEY. Contact support."));
  }

  const payload = parseEvent(event);
  const systemPrompt = sanitizeInput(payload.system_prompt);
  const userPromptTemplate = sanitizeInput(payload.user_prompt_template);
  const userInput = sanitizeInput(payload.user_input);
  const toolId = sanitizeInput(payload.toolId);

  if (!userInput) {
    return response(400, renderError("Input required. Describe what you need before running the tool."));
  }

  if (userInput.length > MAX_INPUT_LENGTH) {
    return response(400, renderError("Input is too long. Please simplify and try again."));
  }

  if (!systemPrompt || !userPromptTemplate) {
    return response(400, renderError("Tool prompts missing. Refresh the page and try again."));
  }

  const hydratedUserPrompt = userPromptTemplate.replace("{{input}}", userInput);

  try {
    const openAiResult = await callOpenAI({ systemPrompt, hydratedUserPrompt });
    const body = renderHTML({ toolId, promptOutput: openAiResult, userPrompt: userInput });
    return response(200, body);
  } catch (error) {
    console.error("fn-run-tool error", error);
    return response(500, renderError("The AI service hit a snag. Try again in a moment."));
  }
};

// 🔸 OPENAI CALL
async function callOpenAI({ systemPrompt, hydratedUserPrompt }) {
  const requestPayload = {
    model: MODEL,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: hydratedUserPrompt }
    ],
    temperature: 0.5
  };

  const response = await fetch(OPENAI_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify(requestPayload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API error: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content?.trim();
  if (!text) {
    throw new Error("No content returned by OpenAI.");
  }
  return text;
}
// 🔸 END SERVERLESS FUNCTION: fn-run-tool.js