const Course = ({course}) =>{

    const excercise = course.parts.map(ex => ex.exercises)
    const sum = excercise.reduce((s,curr) => s + curr, 0)

    return(
        <div>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map(part => <li key = {part.id}>{part.name} - {part.exercises}</li>)}
            </ul>
            <p>total of {sum} excercise</p>
        </div>
    )

}
export default Course