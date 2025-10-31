import { Request, Response } from "express";
import * as studentService from "../services/studentService";

export const getStudents = async (_: Request, res: Response) => {
    const students = await studentService.getAllStudents();
    res.json(students);
};

export const createStudent = async (req: Request, res: Response) => {
    try {
        await studentService.addStudent(req.body);
        res.status(201).send("Student created");
    } catch (err) {
        console.error("❌ Error in POST /students:", err); //
        res.status(500).send("Error creating student");
    }
};
