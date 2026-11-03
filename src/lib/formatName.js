export function formatName(person) {
  return `${person.fullName}${person.suffix ? ` (${person.suffix})` : ''}${person.qualification ? ` (${person.qualification})` : ''}`;
}