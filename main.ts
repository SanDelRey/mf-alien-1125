import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const MAX = 200
const line =
  "Four stars. The locals keep their skeletons on the inside, which seems inefficient, but they invented bread and dogs, so I understand the smugness."

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "."
if (line.length === 0 || line.length > MAX) throw new Error(`review must be 1..${MAX} characters`)
mkdirSync(out, { recursive: true })
writeFileSync(join(out, "entry.txt"), line + "\n", "utf8")
