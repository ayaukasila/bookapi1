const express = require("express");
const Book = require("../models/Book");
const router = express.Router();


router.get("/:id", async (req, res) => {
    try {
        const books = await Book.findById(req.params.id);
    if (!books) return res.status(404).json({ error: "Книга не найдена" });
     res.json(book); }
    catch (error) {
        res.status(500).json({ error: "Ошибка сервера" });
    }
});

router.post("/", async (req, res) => {
    const { title, author, year, genre } = req.body;

    if (!title || !author) {
        return res.status(400).json({ error: "Название и автор обязательны" });
    }

    try {
        const newBook = new Book({ title, author, year, genre });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: "Не удалось добавить книгу" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ error: "Книга не найдена" });
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: "Ошибка обновления книги" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ error: "Книга не найдена" });
        res.json({ message: "Книга удалена" });
    } catch (error) {
        res.status(500).json({ error: "Ошибка удаления книги" });
    }
});

module.exports = router;
