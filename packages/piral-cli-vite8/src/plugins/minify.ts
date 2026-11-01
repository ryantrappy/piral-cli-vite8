import type { Plugin } from 'vite';

/**
 * Vite does not minify whitespace in lib mode with the ES format, since such
 * output is expected to be bundled again. Pilets are served as-is, so the
 * whitespace is removed whenever minification is enabled.
 */
const plugin: Plugin = {
  name: 'minify-whitespace',
  outputOptions(options) {
    if (options.minify && typeof options.minify === 'object') {
      return {
        ...options,
        minify: {
          ...options.minify,
          codegen: true,
        },
      };
    }

    return null;
  },
};

export default plugin;
