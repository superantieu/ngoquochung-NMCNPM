import React, { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable, { Student } from "./components/StudentTable";

const API_BASE = "http://localhost:3000/students";

const App: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);

    const loadStudents = async () => {
        try {
            const res = await fetch(API_BASE);

            const data = await res.json();

            setStudents(data);
        } catch {
            setStudents([
                { name: "Nguyễn Văn C", age: 20, email: "a@example.com" },
                { name: "Trần Thị D", age: 22, email: "b@example.com" },
            ]);
        }
    };

    const addStudent = async (student: Student) => {
        try {
            await fetch(API_BASE, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student),
            });
            alert("✅ Thêm sinh viên thành công!");
            loadStudents();
        } catch {
            alert("❌ Không thể thêm sinh viên (backend chưa chạy?)");
        }
    };

    useEffect(() => {
        loadStudents();
    }, []);

    return (
        <div className="container">
            <h1>📚 Quản lý sinh viên</h1>
            <StudentForm onAdd={addStudent} />
            <hr />
            <StudentTable students={students} />
        </div>
    );
};

export default App;
