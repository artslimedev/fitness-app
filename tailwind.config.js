/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}', 
    './views/*.ejs', 
    './node_modules/tw-elements/dist/js/**/*.min.js'],
  theme: [
    {
        screens: {
          xs: '300px',
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1024',
          xxl: '1440px',
        },
    },
    // {
    //   colors: 
    //   // {
    //   //   transparent: 'transparent',
    //   //     orange: '#F05D23',
    //   //     green: '#8FBE23',
    //   //     lightgreen: '#E3EFC8',
    //   //     midnight: '#031D44',
    //   //     sky: '#9ED8DB',
    //   //     offwhite: '#E9FFF9',
    //   // }
    //   {
    //     'flamingo': {
    //       '50': '#fef7f4', 
    //       '100': '#feefe9', 
    //       '200': '#fbd7c8', 
    //       '300': '#f9bea7', 
    //       '400': '#f58e65', 
    //       '500': '#F05D23', 
    //       '600': '#d85420', 
    //       '700': '#b4461a', 
    //       '800': '#903815', 
    //       '900': '#762e11'
    //   },'atlantis': {
    //       '50': '#f9fcf4', 
    //       '100': '#f4f9e9', 
    //       '200': '#e3efc8', 
    //       '300': '#d2e5a7', 
    //       '400': '#b1d265', 
    //       '500': '#8FBE23', 
    //       '600': '#81ab20', 
    //       '700': '#6b8f1a', 
    //       '800': '#567215', 
    //       '900': '#465d11'
    //   },'tangaroa': {
    //       '50': '#f2f4f6', 
    //       '100': '#e6e8ec', 
    //       '200': '#c0c7d0', 
    //       '300': '#9aa5b4', 
    //       '400': '#4f617c', 
    //       '500': '#031D44', 
    //       '600': '#031a3d', 
    //       '700': '#021633', 
    //       '800': '#021129', 
    //       '900': '#010e21'
    //   },'morning-glory': {
    //       '50': '#fafdfd', 
    //       '100': '#f5fbfb', 
    //       '200': '#e7f5f6', 
    //       '300': '#d8eff1', 
    //       '400': '#bbe4e6', 
    //       '500': '#9ED8DB', 
    //       '600': '#8ec2c5', 
    //       '700': '#77a2a4', 
    //       '800': '#5f8283', 
    //       '900': '#4d6a6b'
    //   },'clear-day': {
    //       '50': '#feffff', 
    //       '100': '#fdfffe', 
    //       '200': '#fafffe', 
    //       '300': '#f6fffd', 
    //       '400': '#f0fffb', 
    //       '500': '#E9FFF9', 
    //       '600': '#d2e6e0', 
    //       '700': '#afbfbb', 
    //       '800': '#8c9995', 
    //       '900': '#727d7a'
    //   }
    //   }
    // },
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
          primary: "#3b82f6",
          
          secondary: "#f97316",
                    
          accent: "#37CDBE",
                    
          neutral: "#3D4451",
                    
          "base-100": "#F0F6FF",
                    
          info: "#3ABFF8",
                    
          success: "#36D399",
                    
          warning: "#FBBD23",
                    
          error: "#F87272",
        },
      },
      {
        bluegreentheme: {
        
          primary: "#f05d23",
          
          secondary: "#8fbe23",
                    
          accent: "#9ed8db",
                    
          neutral: "#031D44",
                    
          "base-100": "#e9fff9",
        },
      },
      "dark",
      "winter",
    ],
  },
  plugins: [require('daisyui'), require('tw-elements/dist/plugin')],
}