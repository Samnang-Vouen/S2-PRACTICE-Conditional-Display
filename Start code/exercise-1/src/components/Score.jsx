const getScore = (score) => {
    return score < 50 ? "warning":"";
};

function Score({courseName, result}){
    const scores = result.map((student) => student.score);
    const average = scores.reduce((acc, score) => acc + score, 0) / scores.length;
    const max = Math.max(...scores);
    const min = Math.min(...scores);
    return (
        <section className="scores">
            <h1>{courseName}</h1>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((student, index) => (
                        <tr key={index}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td className={getScore(student.score)}>{student.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="static-panel">
                <div id="title">AVERAGE</div>
                <div id="title">MIN</div>
                <div id="title">MAX</div>
                <div id="value">{average.toFixed(2)}</div>
                <div id="value">{min}</div>
                <div id="value">{max}</div>
            </div>
        </section>
    );
}
export default Score;