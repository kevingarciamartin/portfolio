import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import WorkItemPage from "./page";
import { getWorkBySlug, type WorkItem } from "@/sanity/queries";

// Mock getWorkBySlug
vi.mock("@/sanity/queries", () => ({
  getWorkBySlug: vi.fn(),
}));

describe("WorkItemPage", () => {
  it("renders a list in the description", async () => {
    const mockWorkItem: WorkItem = {
      _id: "1",
      title: "Test Project",
      slug: "test-project",
      description: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "This is a paragraph.",
            },
          ],
        },
        {
          _type: "block",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "Bullet item 1",
            },
          ],
        },
        {
          _type: "block",
          listItem: "bullet",
          children: [
            {
              _type: "span",
              text: "Bullet item 2",
            },
          ],
        },
      ],
      stack: ["React", "TypeScript"],
      link: { href: "https://example.com", text: "Visit site" },
    };

    vi.mocked(getWorkBySlug).mockResolvedValue(mockWorkItem);

    // Since WorkItemPage is an async component, we call it directly
    const Page = await WorkItemPage({ params: { slug: "test-project" } });
    render(Page);

    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("This is a paragraph.")).toBeInTheDocument();
    
    // Check if list items are rendered
    expect(screen.getByText("Bullet item 1")).toBeInTheDocument();
    expect(screen.getByText("Bullet item 2")).toBeInTheDocument();

    // Verify they are within a <ul> and <li>
    const listItem1 = screen.getByText("Bullet item 1").closest("li");
    expect(listItem1).toBeInTheDocument();
    expect(listItem1?.parentElement?.tagName).toBe("UL");
  });
});
