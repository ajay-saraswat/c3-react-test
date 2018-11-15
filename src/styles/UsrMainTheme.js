import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 767,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: '#428bca',
            dark: '#30497b',
            contrastText: '#fff',
            light: '#929292',
        },
        secondary: {
            main: '#fff',
            contrastText: '#428bca',
        },
        error: {
            main: '#e61610',
            dark: '#b70f0a',
        },
        text: {
            primary: '#606060',
            secondary: '#9e9e9e',
            disabled: '#c0c0c0',
            hint: '#7a7a7a',
        },
        divider: '#d6d6d6',
        action: {
            active: '#428bca',
            hover: '#30497b',
            selected: '#428bca',
            disabled: '#d6d6d6',
        },
    },
    typography: {
        fontFamily: 'sans-serif',
        headline: {
            fontSize: '1.86rem', // 26px
            fontWeight: 600, // semi-bold
            color: '#7a7a7a',
        },
        title: {
            fontSize: '1.43rem', // 20px
            fontWeight: 600,
            color: '#7a7a7a',
        },
        subheading: {
            color: '#929292',
        },
        button: {
            fontSize: '1.29rem', // 18px
            fontWeight: 400,
        },
    },
    buttonRoot: {
        borderRadius: 7,
        height: 42,
    },
    smallButtonRoot: {
        height: 25,
        minHeight: 25,
        padding: '0 5px',
    },
});

export default theme;
