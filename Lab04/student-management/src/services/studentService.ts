import { poolPromise } from "../database/db";
import { Student } from "../models/studentModel";

export const getAllStudents = async (): Promise<Student[]> => {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM Students");
    return result.recordset;
};

export const addStudent = async (student: Student): Promise<void> => {
    const pool = await poolPromise;
    await pool
        .request()
        .input("name", student.name)
        .input("age", student.age)
        .input("email", student.email)
        .query(
            "INSERT INTO Students (name, age, email) VALUES (@name, @age, @email)"
        );
};
