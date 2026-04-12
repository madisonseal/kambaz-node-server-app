import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const findAssignmentsForCourse = (courseId) =>
  model.find({ course: courseId });

  export const createAssignment = (assignment) =>
  model.create({ ...assignment, _id: uuidv4() });

export const findAssignmentById = (assignmentId) =>
  model.findById(assignmentId);

export const updateAssignment = (assignmentId, updates) =>
  model.findByIdAndUpdate(assignmentId, { $set: updates }, { new: true });

export const deleteAssignment = (assignmentId) =>
  model.findByIdAndDelete(assignmentId);