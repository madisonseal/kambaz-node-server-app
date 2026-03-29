import AssignmentsDao from "./dao.js";
export default function AssignmentRoutes(app, db) {
  const dao = AssignmentsDao(db);
  app.get("/api/courses/:courseId/assignments", (req, res) => {
    res.json(dao.findAssignmentsForCourse(req.params.courseId));
  });
  app.post("/api/courses/:courseId/assignments", (req, res) => {
    res.json(dao.createAssignment({ ...req.body, course: req.params.courseId }));
  });
  app.put("/api/assignments/:assignmentId", (req, res) => {
    res.json(dao.updateAssignment(req.params.assignmentId, req.body));
  });
  app.delete("/api/assignments/:assignmentId", (req, res) => {
    dao.deleteAssignment(req.params.assignmentId);
    res.sendStatus(200);
  });
}