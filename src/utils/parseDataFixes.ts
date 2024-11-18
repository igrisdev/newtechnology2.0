export const parseDataFixes = (data: any) => {
  const newData = Array.isArray(data) ? data : [data]

  return newData.map((fixes) => ({
    id: fixes.id,
    title: fixes.fields.title,
    image: fixes.fields.image
  }))
}
