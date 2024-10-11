export const generateListOfDescription = (description: string): string[] => {
  const listDescription = description
    ?.split('\n')
    .map((item) => item.slice(2).trim())
    .slice(0, -1)

  return listDescription
}
