import { ContentService } from "@/services/ContentService";
import { type WorkItem } from "@/types/content";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import WorkItemPage from "./page";

// Mock ContentService
vi.mock("@/services/ContentService", () => ({
  ContentService: {
    getWork: vi.fn(),
  },
}));

describe("WorkItemPage", () => {
  it("renders a list in the description", async () => {
    const mockWorkItem: WorkItem = {
      id: "1",
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
      stackString: "React, TypeScript",
      mainMedia: null,
      primaryLink: { href: "https://example.com", text: "Visit site" },
      metadata: { title: "Test Project" },
    };

    vi.mocked(ContentService.getWork).mockResolvedValue(mockWorkItem);

    // Since WorkItemPage is an async component, we call it directly
    const Page = await WorkItemPage({ params: Promise.resolve({ slug: "test-project" }) });
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

  it("renders the GitHub link when provided", async () => {
    const mockWorkItem: WorkItem = {
      id: "2",
      title: "GitHub Project",
      slug: "github-project",
      description: [],
      stack: [],
      stackString: "",
      mainMedia: null,
      primaryLink: { href: "https://example.com", text: "Visit site" },
      githubUrl: "https://github.com/user/repo",
      metadata: { title: "GitHub Project" },
    };

    vi.mocked(ContentService.getWork).mockResolvedValue(mockWorkItem);

    const Page = await WorkItemPage({ params: Promise.resolve({ slug: "github-project" }) });
    render(Page);

    expect(screen.getByText("Repo")).toBeInTheDocument();
    const githubLabels = screen.getAllByText("GitHub");
    expect(githubLabels[0]).toBeInTheDocument();
    const githubLink = githubLabels[0].closest("a");
    expect(githubLink).toHaveAttribute("href", "https://github.com/user/repo");
  });
});
