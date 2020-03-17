const tagColors = [
  "#E5A49C", "#F6C886", "#FBE7AA", "#99E2B5", "#A6E5E7", "#A5A1E1", "#D8A4E2",
  "#D34F3E", "#F0933E", "#F7CF5F", "#5CC96F", "#65CFCF", "#597CE2", "#B64DC8",
]

const colors = {
  ...tagColors,
  'dark': '#2C2B3A',
  'anno': '#4D4C5F'
}
console.log(colors);

module.exports = {
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [],
}
