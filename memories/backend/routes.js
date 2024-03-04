const express = require("express");
const router = express.Router();

const upload = require("./helpers/upload");
const {
  createMemory,
  getMemories,
  getMemory,
  deleteMemory,
  updateMemory,
  toggleFavorite,
  addComment,
} = require("./controllers/MemoryController");

router.post(
  "/",
  upload.single("image"),
  (req, res, next) => {
    const image = req.file;
    if (!image) {
      return res.status(400).json({ msg: "Por favor, insira uma imagem" });
    }
    next();
  },
  (req, res) => createMemory(req, res)
);

router.get("/", (req, res) => getMemories(req, res));
router.get("/:id", (req, res) => getMemory(req, res));

router.delete("/:id", (req, res) => deleteMemory(req, res));

router.patch("/:id", upload.single("Image"), (req, res) =>
  updateMemory(req, res)
);

router.patch("/favorite/:id", (req, res) => toggleFavorite(req, res));
router.patch("/:id/comment", (req, res) => addComment(req, res));

module.exports = router;
