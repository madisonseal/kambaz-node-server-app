import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const assignments = await dao.findAssignmentsForCourse(req.params.courseId);
    res.json(assignments);
  });
  app.post("/api/courses/:courseId/assignments", async (req, res) => {
    const assignment = await dao.createAssignment({ ...req.body, course: req.params.courseId });
    res.json(assignment);
  });
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const assignment = await dao.updateAssignment(req.params.assignmentId, req.body);
    res.json(assignment);
  });
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    await dao.deleteAssignment(req.params.assignmentId);
    res.sendStatus(200);
  });
  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const assignments = await dao.findAssignmentsForCourse(req.params.courseId);
    res.json(assignments);
  });
  app.post("/api/courses/:courseId/assignments", async (req, res) => {
    const assignment = await dao.createAssignment({ ...req.body, course: req.params.courseId });
    res.json(assignment);
  });
  app.get("/api/assignments/:assignmentId", async (req, res) => {
    const assignment = await dao.findAssignmentById(req.params.assignmentId);
    res.json(assignment);
  });
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const assignment = await dao.updateAssignment(req.params.assignmentId, req.body);
    res.json(assignment);
  });
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
    await dao.deleteAssignment(req.params.assignmentId);
    res.sendStatus(200);
  });
}