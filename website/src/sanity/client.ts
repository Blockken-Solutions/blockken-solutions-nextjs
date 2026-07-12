import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2026-07-02",
  useCdn: true,
});

export const fetchOptions = {
  next: {
    revalidate: 60,
  },
} as const;
