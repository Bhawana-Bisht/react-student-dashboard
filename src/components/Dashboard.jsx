import React, { useState } from "react";
import StudentCard from "./StudentCard";
import Stats from "./Stats";
import "../css/Dashboard.css";

function Dashboard() {

  const [showFiltered, setShowFiltered] = useState(false);

  const students = [
    { name: "Jay bhatt", grade: "A", attendance: 92 ,course:"MCA"},
    { name: "Boby ", grade: "B", attendance: 67,course:"MCA" },
    { name: " Leela", grade: "A+", attendance: 89 ,course:"MCA"},
    { name: "Danish", grade: "C", attendance: 74 ,course:"MCA"},
    { name: "Bhawana", grade: "B+", attendance: 81 ,course:"MCA"},
    {name: "Jiya", grade: "B+", attendance: 80 ,course:"MCA"},
    {name: "Riya", grade: "A", attendance: 95 ,course:"MCA"},
    {name: "Sana", grade: "C", attendance: 70 ,course:"MCA"},
    {name: "Tina", grade: "B", attendance: 78 ,course:"MCA"},
    {name: "Vikram", grade: "A-", attendance: 88 ,course:"MCA"}
  ];

  const filtered = students.filter(student => student.attendance > 75);

  const display = showFiltered ? filtered : students;

  return (

    <div className="dashboard">

      <h2 className="dashboard-title">
        Student Management Dashboard
      </h2>

      <Stats />

      <button
        className="filter-btn"
        onClick={() => setShowFiltered(!showFiltered)}
      >
        {showFiltered
          ? "Show All Students"
          : "Attendance Above 75%"}
      </button>

      <div className="students-grid">

        {display.map((student,index)=>(

          <StudentCard
            key={index}
            name={student.name}
            grade={student.grade}
            course={student.course}
            attendance={student.attendance}
          />

        ))}

      </div>

    </div>

  );

}

export default Dashboard;