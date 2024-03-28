/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: "Poppins",
                PoppinsMedium: "Poppins Medium",
                PoppinsBold: "Poppins Bold",
                PoppinsSemiBold: "Poppins SemiBold",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                },
            },
            colors: {
                "Ultramarine-blue": "#3E51FF",
                "Blue-ryb": "#1B3CFF",
                "Patricks-blue": "#272F7B",
                Blue: "#0018F6",
                eerieBlack: "#1E1E1E",
            },
            backgroundImage: {
                "home-desktop": "url(../pictures/images/wallpaper.jpg)",
                "home-mobile": "url(../pictures/images/wallpaper-mobile.jpg)",
            },
            boxShadow: {
                "3xl": "0 4px 5.3px 0px rgba(0, 0, 0, 0.25)",
                "4xl": "0 4px 12.6px 0 rgba(0,0,0,0.25)",
                blog: "0 4px 8.1px 0 rgba(0,0,0,0.25)",
                "contactUs": "0 4px 33.2px 0 rgba(0,0,0,0.25)",
            },
            borderRadius: {
                medium: "0.625rem",
            },
        },
        screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
};
