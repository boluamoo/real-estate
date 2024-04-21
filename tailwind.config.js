//  @type {import('tailwindcss').Config}
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        residenceGradient:
          'linear-gradient(180deg, rgba(225, 225, 225, 0) 0%, rgba(136, 160, 255, 0.46) 217.91%)',
      }),
      boxShadow: {
        residenceShadow: '0px 72px 49px -51px rgba(136, 160, 255,0.21)',
        buttonShadow: '0px 0px 5px 1px rgba(0, 0, 0, 0.25)',
        contactShadow: '0px 23px 21px -8px rgba(136, 160, 255, 0.25)',
      },
      backgroundColor: {
        buttonBackground: '#eeeeff',
      },
    },
  },
  plugins: [],
}
