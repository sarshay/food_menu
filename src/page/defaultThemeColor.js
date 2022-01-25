
const color = "#000000"
document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
export const defaultThemeColor = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#3337',
        },
        background: {
            default: color,
            paper: '#33333366',
        },
        text: {
            primary: '#fff',
            // secondary:colorShade(data.theme_color,50 )
        },
    }
}