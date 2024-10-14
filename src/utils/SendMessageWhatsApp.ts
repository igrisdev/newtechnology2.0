export const sendMessage = (message: string) => {
  window.open(
    `https://api.whatsapp.com/send?phone=+573178784022&text=${encodeURIComponent(
      message
    )}`
  )
}
