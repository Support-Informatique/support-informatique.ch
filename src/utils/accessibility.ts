export const onEnter = (e: React.KeyboardEvent<HTMLButtonElement>) => {
  if (e.key === 'Enter') {
    e.currentTarget.click()
    e.preventDefault()
  }
}

export const navigateToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
