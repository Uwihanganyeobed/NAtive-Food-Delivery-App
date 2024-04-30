const palette = [
  // orange
  {
    text: "#f97316",
    bgColor: (opacity) => `rgba(251, 146, 60, ${opacity})`,
  },
  // dark gray
  {
    text: "#334155",
    bgColor: (opacity) => `rgba(30, 41, 59, ${opacity})`,
  },
  // purple
  {
    text: "#7c3aed",
    bgColor: (opacity) => `rgba(124, 58, 237, ${opacity})`, // Adjusted to accept opacity as argument
  },
  // green
  {
    text: "#009950",
    bgColor: (opacity) => `rgba(0, 179, 89, ${opacity})`,
  },
  // teal
  {
    text: "#14b8a6",
    bgColor: (opacity) => `rgba(20, 184, 166, ${opacity})`,
  },
  // red
  {
    text: "#dc2626",
    bgColor: (opacity) => `rgba(220, 38, 38, ${opacity})`,
  },
];

// Export the color palette

export const themeColors = palette[1]; // Exporting the dark gray color as the theme color
