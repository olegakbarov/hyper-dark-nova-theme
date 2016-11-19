const { uiGroups, ansiGroups } = require('nova-colors');

module.exports.decorateConfig = config => Object.assign({}, config, {
  cursorColor: uiGroups.userCurrentState,
  foregroundColor: uiGroups.foreground,
  backgroundColor: uiGroups.backgroundShade,
  borderColor: uiGroups.backgroundShade,
  colors: {
    black: ansiGroups.normal.black,
    red: ansiGroups.normal.red,
    green: ansiGroups.normal.green,
    yellow: ansiGroups.normal.yellow,
    blue: ansiGroups.normal.blue,
    magenta: ansiGroups.normal.magenta,
    cyan: ansiGroups.normal.cyan,
    white: ansiGroups.normal.white,
    lightBlack: ansiGroups.bright.black,
    lightRed: ansiGroups.bright.red,
    lightGreen: ansiGroups.bright.green,
    lightYellow: ansiGroups.bright.yellow,
    lightBlue: ansiGroups.bright.blue,
    lightMagenta: ansiGroups.bright.magenta,
    lightCyan: ansiGroups.bright.cyan,
    lightWhite: ansiGroups.bright.white,
  },
  termCSS: `
    ${config.termCSS},
    .cursor-node {
      opacity: 0.8 !important;
    }
  `,
  css: `
    ${config.css},
    .tab_first {
      margin-left: 0 !important;
    }
    .tab_tab {
      background-color: ${uiGroups.gray1} !important;
    }
    .tab_tab.tab_active {
      background-color: ${uiGroups.backgroundShade} !important;
      border: none !important;
    }
    .tab_tab.tab_active::before {
      border: none !important;
    }
    .tab_text {
      border: none !important;
      color: ${uiGroups.gray3} !important;
    }
    .tabs_title,
    .tab_textActive {
      color: ${uiGroups.userCurrentState} !important;
    }
    .tabs_title,
    .tab_textInner {
      font-size: 14px !important;
      font-weight: bold !important;
    }
    .splitpane_divider {
      background: ${uiGroups.gray2} !important;
      border-color: ${uiGroups.backgroundShade} !important;
    }
  `,
})