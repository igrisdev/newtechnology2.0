export const sendMessage = (message: string) => {
  window.open(
    `https://api.whatsapp.com/send?phone=+573143982673&text=${encodeURIComponent(
      message
    )}`
  )
}
