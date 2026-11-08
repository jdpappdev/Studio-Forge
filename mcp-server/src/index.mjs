import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import * as z from "zod/v4";
import { guidance } from "../../knowledge/catalog.mjs";

const server = new McpServer({ name: "studio-forge", version: "0.1.0" });

server.registerTool(
  "search_design_guidance",
  {
    description:
      "Search Studio Forge's curated, source-attributed guidance for frontend design, UI/UX, accessibility, motion, React implementation, and review.",
    inputSchema: z.object({
      query: z.string().min(1).max(240),
      domain: z
        .enum([
          "design",
          "ui-ux",
          "design-system",
          "motion",
          "accessibility",
          "responsive-design",
          "react",
          "review",
          "implementation",
        ])
        .optional(),
      limit: z.number().int().min(1).max(10).default(5),
    }),
  },
  async ({ query, domain, limit }) => {
    const terms = query.toLowerCase().split(/[^a-z0-9-]+/).filter(Boolean);
    const matches = guidance
      .filter((item) => !domain || item.domain === domain)
      .map((item) => {
        const title = item.title.toLowerCase();
        const text = item.text.toLowerCase();
        const tags = item.tags.join(" ").toLowerCase();
        const score = terms.reduce(
          (total, term) =>
            total +
            (title.includes(term) ? 4 : 0) +
            (tags.includes(term) ? 3 : 0) +
            (text.includes(term) ? 1 : 0),
          0,
        );
        return { item, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, limit)
      .map(({ item }) => item);

    const text = matches.length
      ? matches
          .map(
            (item) =>
              `## ${item.title}\nDomain: ${item.domain}\n${item.text}\nSources: ${item.sources.join(", ")}`,
          )
          .join("\n\n")
      : "No matching guidance found. Try a broader query or omit the domain filter.";

    return { content: [{ type: "text", text }] };
  },
);

server.registerTool(
  "get_design_workflow",
  {
    description:
      "Return a concise Studio Forge workflow for designing, implementing, reviewing, or animating a user interface.",
    inputSchema: z.object({
      task: z.enum(["design", "implement", "review", "motion"]),
    }),
  },
  async ({ task }) => {
    const workflows = {
      design: [
        "Identify the audience, product domain, user goal, available content, and constraints.",
        "Choose a specific visual direction and name familiar defaults to challenge.",
        "Define hierarchy, tokens, composition, content structure, and imagery before implementation.",
        "Render and review the result at desktop and narrow widths when a browser is available.",
      ],
      implement: [
        "Inspect the current stack, design system, and component primitives.",
        "Build semantic, accessible controls and preserve existing behavior.",
        "Keep responsive wrapping, focus, error, empty, loading, and reduced-motion states in scope.",
        "Verify key interaction paths in the rendered interface when possible.",
      ],
      review: [
        "Review purpose and hierarchy first, then task flow, accessibility, responsive behavior, and performance.",
        "Rank findings by impact and cite concrete files and lines or rendered screen states.",
        "Separate observed defects from items that need browser verification.",
        "Keep the report focused on the highest-impact corrections.",
      ],
      motion: [
        "Decide whether motion is useful and name its purpose before choosing an effect.",
        "Match intensity and duration to interaction frequency and platform conventions.",
        "Use the simplest existing tool and keep interruption behavior correct.",
        "Ship reduced-motion and keyboard/touch behavior with the same change.",
      ],
    };
    return {
      content: [{ type: "text", text: workflows[task].map((step, i) => `${i + 1}. ${step}`).join("\n") }],
    };
  },
);

await server.connect(new StdioServerTransport());
