/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}', 
    './views/*.{html, ejs}', 
    './node_modules/tw-elements/dist/js/**/*.min.js'],
  theme: {
        screens: {
          xs: '480px',
          sm: '640px',
          md: '768px',
          lg: '976px',
          xl: '1024px',
        },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#3b82f6",
          
          "secondary": "#f97316",
                    
          "accent": "#37CDBE",
                    
          "neutral": "#3D4451",
                    
          "base-100": "#F0F6FF",
                    
          "info": "#3ABFF8",
                    
          "success": "#36D399",
                    
          "warning": "#FBBD23",
                    
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('tw-elements/dist/plugin')],
}
