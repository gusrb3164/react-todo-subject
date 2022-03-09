export default function getIconColor(label?: number): string {
  switch(label) {
    case 1:
      return "#F7C978";
    case 2:
      return "#F68B7D";
    case 3:
      return "#A6C0FE";
    default:
      return "#000000";
  }
}