export default function getIconColor(label?: string): string {
  switch(label) {
    case 'Need':
      return "#F7C978";
    case 'Want':
      return "#F68B7D";
    case 'Routine':
      return "#A6C0FE";
    default:
      return "#000000";
  }
}