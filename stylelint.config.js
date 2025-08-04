/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  overrides: [
    {
      files: ["*.js", "*.ts", "*.jsx", "*.tsx", "*.css", "*.scss"],
      customSyntax: "postcss-lit",
    },
  ],
};
