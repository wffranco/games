/// <reference path="../.astro/types.d.ts" />

type ClassObject = Record<string, boolean>;
type ClassList = string | ClassObject | (string | ClassObject | ClassList)[];
