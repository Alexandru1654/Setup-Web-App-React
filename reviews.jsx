const express = require('express');
const Review = require('../models/Review');

const router = express.Router();

router.post('/add', async (req, res) => {
    const { movieId, author, rating, review } = req.body;

    try {
        const newReview = new Review({
            movieId,
            author,
            rating,
            review
        });

        await newReview.save();
        res.status(201).json({ message: 'Recensione aggiunta con successo' });
    } catch (error) {
        res.status(400).json({ message: 'Errore nel salvataggio della recensione', error });
    }
});

router.get('/:movieId', async (req, res) => {
    try {
        const reviews = await Review.find({ movieId: req.params.movieId });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ message: 'Errore nel recuperare le recensioni', error });
    }
});

module.exports = router;

