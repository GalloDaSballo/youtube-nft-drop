import {createMuiTheme} from '@material-ui/core/styles';
import colors from './colors';
import fonts from './fonts';
import queries from './queries';
import shadows from './shadows';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.purple1,
        },
        secondary: {
            main: colors.purple2,
        },
        success: {
            main: colors.greenChipText,
        },
        error: {
            main: colors.red,
        },
        warning: {
            main: colors.yellowChipText,
        },
        background: {
            default: colors.purple7,
        },
        text: {
            primary: colors.black,
            secondary: colors.purple1,
            disabled: colors.purple5,
            hint: colors.black3,
        },
        ...colors,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: queries.mobile.breakpoint,
            md: queries.tabletPortrait.breakpoint,
            lg: queries.tabletLandscape.breakpoint,
            xl: queries.desktop.breakpoint,
        },
    },
    // typography: {
    //     fontFamily: ['Roboto', 'sans-serif'].join(','),
    //     htmlFontSize: 15,
    //     fontSize: 15,
    //     fontWeightLight: 300,
    //     fontWeightRegular: 400,
    //     fontWeightMedium: 500,
    //     fontWeightBold: 600,
    //     ...fonts,
    // },
    overrides: {
        MuiInputBase: {
            input: {
                padding: "10px 0 7px",

            }
        },
        MuiIcon: {
            root: {
                fontSize: "1em",
            }
        },
        MuiList: {
            padding: {
                paddingTop: "0",
                paddingBottom: "0",
            }
        },

    //     MuiButton: {
    //         root: {
    //             fontWeight: 600,
    //         },
    //         contained: {
    //             boxShadow: shadows.s1,
    //             '&:hover': {
    //                 boxShadow: shadows.s1,
    //             },
    //         },
    //         outlined: {
    //             boxShadow: shadows.s1,
    //             '&:hover': {
    //                 boxShadow: shadows.s1,
    //             },
    //         },
    //         outlinedPrimary: {
    //             border: `1px solid rgba(0, 100, 220, 1)`,
    //         },
    //     },
        MuiSelect: {
            select: {
                '&:focus': {
                    backgroundColor: 'white',
                },
            },
        },
    //     MuiRadio: {
    //         root: {
    //             color: colors.greyBg,
    //         },
    //         colorSecondary: {
    //             '&.Mui-checked': {
    //                 color: colors.blueChipBg,
    //             },
    //         },
    //     },
    },
});

export default theme;
