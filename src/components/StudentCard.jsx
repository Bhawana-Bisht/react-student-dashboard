import "../css/StudentCard.css";

function StudentCard({name,grade,attendance,course}){

const status =
attendance>=85
? "Excellent"
: attendance>=75
? "Good"
: "Needs Improvement";

return(

<div className="student-card">

<h3>{name}</h3>

<p><strong>Grade:</strong> {grade}</p>

<p><strong>Attendance:</strong> {attendance}%</p>

<p><strong>Status:</strong> {status}</p>
<p><strong>Course:</strong> {course}</p>

<div className="progress">

<div
className="progress-bar"
style={{width:`${attendance}%`}}
></div>

</div>

</div>

);

}

export default StudentCard;