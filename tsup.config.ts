import { defineConfig } from 'tsup'
import * as preset from 'tsup-preset-solid'

const presetOptions: preset.PresetOptions = {
  entries: [
    {
      entry: 'src/index.ts',
      dev_entry: true,
    },
    {
      entry: 'src/api/index.ts',
      name: 'api',
    },
  ],
  drop_console: false,
  cjs: false,
}

export default defineConfig((config) => {
  const watching = !!config.watch
  const parsedData = preset.parsePresetOptions(presetOptions, watching)
  return preset.generateTsupOptions(parsedData)
})
