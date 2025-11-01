import React from "react";

export interface Student {
    id?: string;
    name: string;
    age: number;
    email: string;
}

interface Props {
    students: Student[];
}

const StudentTable: React.FC<Props> = ({ students }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {students.length === 0 ? (
                    <tr>
                        <td colSpan={3}>Chưa có dữ liệu</td>
                    </tr>
                ) : (
                    students.map((s) => (
                        <tr key={s.id || s.email}>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.email}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default StudentTable;
