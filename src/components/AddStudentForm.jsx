import { useState } from 'react'

function AddStudentForm({ onAddStudent }) {
	const [name, setName] = useState('')
	const [score, setScore] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()

		if (!name.trim() || score === '') return

		const numericScore = Number(score)
		if (Number.isNaN(numericScore)) return
		if (numericScore < 0 || numericScore > 100) return

		onAddStudent(name, numericScore)

		setName('')
		setScore('')
	}

	return (
		<form className="add-student-form" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Student name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<input
				type="number"
				placeholder="Score"
				min="0"
				max="100"
				value={score}
				onChange={(e) => setScore(e.target.value)}
			/>

			<button type="submit">Add Student</button>
		</form>
	)
}

export default AddStudentForm