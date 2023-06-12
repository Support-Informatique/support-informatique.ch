export const onEnter = (e: React.KeyboardEvent<HTMLButtonElement>) => {
	if (e.key === 'Enter') {
		e.currentTarget.click()
		e.preventDefault()
	}
}