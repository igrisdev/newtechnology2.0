export const parseDataFrames = (data: any) => {
  const newData = Array.isArray(data) ? data : [data]

  return newData.map((frame) => ({
    id: frame.id,
    title: frame.fields.title,
    image: frame.fields.image[0].url,
  }))
}
