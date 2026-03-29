import { type SchemaTypeDefinition } from "sanity";
import { workType } from "./work";
import { technologyType } from "./technology";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [workType, technologyType],
};
