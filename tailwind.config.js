/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#4F24FF',
        'secondary':'#FF6F1D',
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      fontFamily: {
        yekanBakhRegular: "yekanBakh-Regular",
        yekanBakhBold: "yekanBakh-bold",
        AstoniaRegular: "Astonia-Regular",
        AstoniaBold: "Astonia-Bold",
      },
      maxWidth:{
        'content':'1280px',
      },
    }
},
}

