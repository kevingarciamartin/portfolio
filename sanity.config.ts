import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { projectId, dataset } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({
              type: "work",
              title: "Work (Orderable)",
              S,
              context,
            }),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => !["work"].includes(item.getId() ?? "")
            ),
          ]),
    }),
  ],
});
