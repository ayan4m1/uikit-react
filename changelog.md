## 3.0.20

- The `classnames` package is now imported in an ESNext-compatible manner.
- Updated React, Storybook, TypeScript, and UIKit dependencies
- Updated toolchain/dev dependencies
- Refactored Jest configuration to a separate file
- Remove spurious versioned directories/files
- Remove unused `.storybook/utils.js`

## 3.0.14

### className and style props

All components now support className and style props.

### Grid improvements

Grid now supports the options prop for all uikit component options.

### Link improvements

Link href prop is no longer required which should fix toggleOptions.
