import spacing from './spacing';

export const mobile = {
    viewport: 360,
    breakpoint: 600,
    columns: 4,
    gutter: spacing.md,
    margin: spacing.md,
};
export const tabletPortrait = {
    viewport: 600,
    breakpoint: 840,
    columns: 8,
    gutter: spacing.md,
    margin: spacing.md,
};
export const tabletLandscape = {
    viewport: 1080,
    breakpoint: 1080,
    columns: 12,
    gutter: spacing.lg,
    margin: spacing.lg,
};
export const desktop = {
    viewport: 1284,
    breakpoint: 1284,
    columns: 12,
    gutter: spacing.lg,
    margin: spacing.lg,
};

export default {
    mobile,
    tabletPortrait,
    tabletLandscape,
    desktop,
};
