import type { CollectionEntry } from "astro:content";

export type WritingListEntry = CollectionEntry<"writing">;

export interface WritingListProps {
  entries: WritingListEntry[];
}
