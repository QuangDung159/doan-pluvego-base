module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem'
            }
        },
        animation: {
            bounce: 'bounce 0.3s infinite',
            spin: 'spin 1s linear infinite'
        },
        extend: {
            fontFamily: {
                't_rubik': ['"Rubik"', 'sans-serif']
            },
            height: {
                t_max_table: '550px',
                t_menu: '70px',
                t_footer: '300px',
                t_h70: '70px',
                t_menu_mobile: '48px'
            },
            minHeight: {
                t_body: 'calc(100vh - 70px)',
                t_content: 'calc(100vh - 70px - 20em)',
                t_m_content: 'calc(100vh - 70px - 10em)',
                t_footer: '400px'
            },
            colors: {
                t_black: '#343434',
                t_lightgray: '#F6F6F6',
                t_gray: '#818181',
                t_graywhite: '#F6F6F6',
                t_green: '#7DE0A0',
                t_blue_light: '#B5DBFF',
                t_blue: '#554EF8',
                t_blue_dark: '#2271b1',
                t_bluegreen: '#554EF8',
                t_teal: "#008000",
                t_red: "#d63638",
                t_white: '#FFFFFF',
            }
        }
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
  