import React, { useEffect, useState } from 'react'

const Timer = () => {
	const date = new Date()
	const hour = date.getHours()
	const mintue = date.getMinutes()
	const second = date.getSeconds()
	const ampm = hour > 11 ? 'pm' : 'am'
	const [seconds, setSeconds] = useState(0)

	function makeMeTwoDigits(n) {
		return (n < 10 ? '0' : '') + n
	}

	useEffect(() => {
		setTimeout(() => {
			setSeconds(second)
		}, 1000)
	}, [second])

	return (
		<div>{`${makeMeTwoDigits(hour)}:${makeMeTwoDigits(
			mintue
		)}:${makeMeTwoDigits(seconds)}:${ampm}`}</div>
	)
}

export default Timer
