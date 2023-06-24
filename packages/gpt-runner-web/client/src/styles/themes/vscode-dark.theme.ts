export const vscodeDarkTheme = {
  '--background': '#1e1e1e',
  '--contrast-active-border': '#f38518',
  '--contrast-border': '#6fc3df',
  '--focus-border': '#007fd4',
  '--foreground': '#cccccc',
  '--scrollbar-slider-background': '#79797966',
  '--scrollbar-slider-hover-background': '#646464b3',
  '--scrollbar-slider-active-background': '#bfbfbf66',
  '--badge-background': '#4d4d4d',
  '--badge-foreground': '#ffffff',
  '--button-border': 'transparent',
  '--button-icon-background': 'transparent',
  '--button-icon-hover-background': 'rgba(90, 93, 94, 0.31)',
  '--button-primary-background': '#0e639c',
  '--button-primary-foreground': '#ffffff',
  '--button-primary-hover-background': '#1177bb',
  '--button-secondary-background': '#3a3d41',
  '--button-secondary-foreground': '#ffffff',
  '--button-secondary-hover-background': '#45494e',
  '--checkbox-background': '#3c3c3c',
  '--checkbox-border': '#3c3c3c',
  '--checkbox-foreground': '#f0f0f0',
  '--list-active-selection-background': '#094771',
  '--list-active-selection-foreground': '#ffffff',
  '--list-hover-background': '#2a2d2e',
  '--divider-background': '#454545',
  '--dropdown-background': '#3c3c3c',
  '--dropdown-border': '#3c3c3c',
  '--dropdown-foreground': '#f0f0f0',
  '--input-background': '#3c3c3c',
  '--input-foreground': '#cccccc',
  '--input-placeholder-foreground': '#cccccc',
  '--link-active-foreground': '#3794ff',
  '--link-foreground': '#3794ff',
  '--progress-background': '#0e70c0',
  '--panel-tab-active-border': '#e7e7e7',
  '--panel-tab-active-foreground': '#e7e7e7',
  '--panel-tab-foreground': '#e7e7e799',
  '--panel-view-background': '#1e1e1e',
  '--panel-view-border': '#80808059',
} as const

export type Theme = Partial<Record<keyof typeof vscodeDarkTheme, string>>