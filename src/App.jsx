import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'

function App() {
	const [students, setStudents] = useState([
		{ id: 1, name: 'Ayesh', score: 78 },
		{ id: 2, name: 'BUCKY', score: 45 },
		{ id: 3, name: 'LOGAN', score: 32 },
	])

	const handleAddStudent = (name, score) => {
		const trimmedName = name.trim()
		if (!trimmedName) return

		const numericScore = Number(score)
		if (Number.isNaN(numericScore)) return
		if (numericScore < 0 || numericScore > 100) return

		const newStudent = {
			id: crypto.randomUUID(),
			name: trimmedName,
			score: numericScore,
		}

		setStudents((prev) => [...prev, newStudent])
	}

	const handleUpdateScore = (studentId, newScore) => {
		const numericScore = Number(newScore)
		if (Number.isNaN(numericScore)) return
		if (numericScore < 0 || numericScore > 100) return

		setStudents((prev) =>
			prev.map((student) =>
				student.id === studentId
					? { ...student, score: numericScore }
					: student
			)
		)
	}

	const handleDeleteStudent = (studentId) => {
		setStudents((prev) =>
			prev.filter((student) => student.id !== studentId)
		)
	}

	return (
		<div className="app">
			<div className="scoreboard-card">
				<Header />

				<AddStudentForm onAddStudent={handleAddStudent} />

				<StudentTable
					students={students}
					onUpdateScore={handleUpdateScore}
					onDeleteStudent={handleDeleteStudent}
				/>

				<p className="footer-note">Keep Learning, Keep Growing!</p>
			</div>
		</div>
	)
}

export default App