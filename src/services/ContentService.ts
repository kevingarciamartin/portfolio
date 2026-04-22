import { getWorkRepository } from "@/repositories/work";
import { type WorkItem } from "@/types/content";

const repo = getWorkRepository();

export const ContentService = {
  getWork: (slug: string): Promise<WorkItem | null> => repo.getBySlug(slug),
  getAllWork: (): Promise<WorkItem[]> => repo.list(),
};
