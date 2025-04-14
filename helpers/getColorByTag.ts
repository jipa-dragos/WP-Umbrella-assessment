
// Let's define color constants for each tag
const colorMap = {
  BLUE: "#3B82F6",
  RED: "#EF4444",
  YELLOW: "#F59E0B",
  GREY: "#6B7280"
};

export const getColorByTag = (tag: string | null | undefined): string => {
  // Handle null AND undefined cases
  if (tag === null || tag === undefined) {
    return colorMap.GREY;
  }

  // Convert to lowercase for case-insensitive matching
  const normalizedTag = tag.toLowerCase();

  switch (normalizedTag) {
    case "blue":
      return colorMap.BLUE;
    case "red":
      return colorMap.RED;
    case "yellow":
      return colorMap.YELLOW;
    default:
      return colorMap.GREY;
      // We modified the default case to return GREY instead of BLUE
  }
};
