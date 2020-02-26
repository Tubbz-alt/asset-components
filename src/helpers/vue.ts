/**
 * src/helpers/vue.ts
 * Some helpful Vue code that gets used in multiple places.
 */

export const VUE_FASTLY_MODIFICATION_PROPS = {
  blur: {
    type: Number,
    default: undefined,
    validator: (v: number) => (v >= 1 && v <= 1000)
  },

  brightness: {
    type: Number,
    default: undefined,
    validator: (v: number) => (v >= -100 && v <= 100)
  },

  contrast: {
    type: Number,
    default: undefined,
    validator: (v: number) => (v >= -100 && v <= 100)
  },

  fit: {
    type: String,
    default: undefined,
    validator: (v: string) => ['bounds', 'cover', 'crop'].includes(v)
  },

  format: {
    type: String,
    default: undefined,
    validator: (v: string) => ['png', 'jpg', 'pjpg', 'webp'].includes(v)
  },

  height: {
    type: Number,
    default: undefined,
    validator: (v: number) => (v >= 1 && v <= 8192)
  },

  quality: {
    type: Number,
    default: undefined,
    validator: (v: number) => (v >= 1 && v <= 100)
  },

  saturation: {
    type: Number,
    default: undefined,
    validator: (v: number) => (v >= -100 && v <= 100)
  },

  width: {
    type: Number,
    default: undefined,
    validator: (v: number) => (v >= 1 && v <= 8192)
  }
}