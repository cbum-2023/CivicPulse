const express = require("express");
const upload = require("../middleware/upload"); // for handling image uploads
const router = express.Router();
const { authMiddleware, requireRole } = require("../middleware/authMiddleware");
const {
  getUserProfile,
  createReport,
  getMyReports,
  updateReport,
  deleteReport,
} = require("../controllers/userController");

router.get("/profile", authMiddleware, requireRole("user"), getUserProfile);

router.post(
  "/report",
  authMiddleware,
  requireRole("user"),
  upload.single("image"),
  createReport
);

router.get("/my-reports", authMiddleware, requireRole("user"), getMyReports);
router.put("/report/:id", authMiddleware, requireRole("user"), updateReport);
router.delete("/report/:id", authMiddleware, requireRole("user"), deleteReport);

module.exports = router;