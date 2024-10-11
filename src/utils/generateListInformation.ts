export const generateListOfInformation = (info: string): string[] => {
  const listDescription = info
    ?.split('\n')
    .map((item) => item.slice(2).trim())
    .slice(0, -1)

  return listDescription
}
