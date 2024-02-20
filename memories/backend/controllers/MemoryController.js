const Memory = require("../models/Memory");
const fs = require("fs");

const removeOldImage = (memory) => {
  fs.unlink(`public/${memory.src}`, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Imagem excluida do servido");
    }
  });
};
const createMemory = async (req, res) => {
  try {
    const { title, description } = req.body;
    const src = `images/${req.file.filename}`;

    if (!title || !description) {
      return res
        .status(400)
        .json({ msg: "Por favor, preenche todos os campos" });
    }

    const newMemory = new Memory({
      title,
      src,
      description,
    });
    await newMemory.save();
    res.json({ msg: "Memória criada com sucesso!", newMemory });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Ocorreu um erro!");
  }
};

const getMemories = async (req, res) => {
  try {
    const memories = await Memory.find();
    res.json(memories);
  } catch (error) {
    res.status(500).send("Ocorreu um erro!");
  }
};

const getMemory = async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);
    if (!memory) {
      return res.status(404).json({ msg: "A memória não existe!" });
    }
    res.json(memory);
  } catch (error) {
    res.status(500).send("Ocorreu um erro!");
  }
};

const deleteMemory = async (req, res) => {
  try {
    const memory = await Memory.findByIdAndDelete(req.params.id);
    if (!memory) {
      return res.status(404).json({ msg: "A memória não existe!" });
    }
    removeOldImage(memory);
    res.json({ msg: "Memória deletada com sucesso!" });
  } catch (error) {
    res.status(500).send("Ocorreu um erro!");
  }
};

const updateMemory = async (req, res) => {
  try {
    const { title, description } = req.body;
    let src = null;

    // se o usuário desejar atualizar a imagem
    if (req.file) {
      src = `images/${req.file.filename}`;
    }

    const memory = await Memory.findById(req.params.id);
    if (!memory) {
      return res.status(404).json({ msg: "A memória não existe!" });
    }

    if (src) {
      removeOldImage(memory);
    }

    const updateData = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (src) updateData.src = src; // Correção aqui

    const updatedMemory = await Memory.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    res.json({ updatedMemory, msg: "Memória atualizada com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Ocorreu um erro durante a atualização da memória.");
  }
};

const toggleFavorite = async (req, res) => {};

module.exports = {
  createMemory,
  getMemories,
  getMemory,
  deleteMemory,
  updateMemory,
};
