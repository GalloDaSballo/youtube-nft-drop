import colors from './colors';
import fonts from './fonts';
import queries from './queries';
import spacing from './spacing';
import shadows from './shadows';
import {media, typo} from './styled-helpers';

export default {
    colors: {
        primary: colors.purple1,
        text: colors.black,
        background: colors.purple7,
        secondary: colors.purple5,
        tertiary: colors.yellowChipText,
        quaternary: colors.greenChipText,
        ...colors,
    },
    // base
    fonts,
    queries,
    spacing,
    shadows,

    // helpers
    media,
    typo,
};
