import sharp from 'sharp'
import { readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'

const INPUT = 'src/assets/BooksCover'  // tes originaux
const OUTPUT = 'src/assets/BooksCover'    // images optimisées utilisées par le site
const MAX_WIDTH = 900

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(fullPath)
      continue
    }
    if (!/\.(jpe?g|png)$/i.test(entry.name)) continue

    const relative = path.relative(INPUT, fullPath)
    const outPath = path.join(OUTPUT, relative).replace(/\.(jpe?g|png)$/i, '.webp')
    await mkdir(path.dirname(outPath), { recursive: true })

    await sharp(fullPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outPath)
    console.log('✔', outPath)
  }
}

await walk(INPUT)