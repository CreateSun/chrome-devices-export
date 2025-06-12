const zod = require("zod");

module.exports = {
  uaSchema: zod.object({
    title: zod.string(),
    type: zod.string(),
    "user-agent": zod.string(),
    capabilities: zod.array(zod.string()),
    screen: zod.object({
      "device-pixel-ratio": zod.number(),
      vertical: zod.object({
        width: zod.number(),
        height: zod.number(),
      }),
    }),
    modes: zod.array(
      zod.object({
        title: zod.string(),
        orientation: zod.string(),
        insets: zod.object({
          left: zod.number(),
          top: zod.number(),
          right: zod.number(),
          bottom: zod.number(),
        }),
      })
    ),
    "show-by-default": zod.boolean(),
    "dual-screen": zod.boolean(),
    "foldable-screen": zod.boolean(),
    show: zod.string(),
    "user-agent-metadata": zod.object({
      brands: zod.array(
        zod.object({
          brand: zod.string(),
          version: zod.string(),
        })
      ),
      fullVersionList: zod.array(
        zod.object({
          brand: zod.string(),
          version: zod.string(),
        })
      ),
      fullVersion: zod.string(),
      platform: zod.string(),
      platformVersion: zod.string(),
      architecture: zod.string(),
      model: zod.string(),
      mobile: zod.boolean(),
    }),
  }),
};
