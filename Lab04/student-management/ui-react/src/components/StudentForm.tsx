import React, { useState } from "react";

interface Props {
    onAdd: (student: { name: string; age: number; email: string }) => void;
}

const StudentForm: React.FC<Props> = ({ onAdd }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState<number>(0);
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !age || !email)
            return alert("Vui lòng nhập đầy đủ thông tin!");
        onAdd({ name, age, email });
        setName("");
        setAge(0);
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
                type="text"
                placeholder="Tên sinh viên"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Tuổi"
                value={age || ""}
                onChange={(e) => setAge(Number(e.target.value))}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Thêm sinh viên</button>
        </form>
    );
};

export default StudentForm;
