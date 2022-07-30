module.exports = {
  "arrowParens": "avoid",
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "semi": true,
  "useTabs": false,
  "parser": "typescript",
  "jsxBracketSameLine": false,
  "overrides": [
    {
      "files": "*.jsx?",
      "options": { "parser": "babel" }
    },
    {
      "files": "*.scss",
      "options": { "parser": "scss" }
    },
    {
      "files": "*.json",
      "options": { "parser": "json" }
    },
    {
      "files": "*.md",
      "options": { "parser": "markdown" }
    }
  ]
}
