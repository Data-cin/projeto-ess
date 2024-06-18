const Platform = require('../models/platform');
const movies = require('../db/db');

exports.createPlatform = (req, res) => {
  try {
    const { filme_id, nome, url, image } = req.body;
    const newPlatform = new Platform(filme_id, nome, url, image);

    // Find the movie by filme_id
    const movie = movies.find(m => m.filme_id === filme_id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    // Add the new platform to the movie's platforms array
    movie.plataformas.push(newPlatform);
    res.status(201).json(newPlatform);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.deletePlatform = (req, res) => {
  try {
    const { filme_id, nome } = req.body;

    // Find the movie by filme_id
    const movie = movies.find(m => m.filme_id === filme_id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    // Find the platform by nome
    const index = movie.plataformas.findIndex(platform => platform.nome === nome);
    if (index === -1) {
      return res.status(404).json({ error: 'Platform not found' });
    }

    // Remove the platform from the movie's platforms array
    movie.plataformas.splice(index, 1);

    res.status(200).json({ message: 'Platform deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

exports.getPlatforms = (req, res) => {
    try {
        const { filme_id } = req.body;
    
        // Find the movie by filme_id
        const movie = movies.find(m => m.filme_id === filme_id);
        if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
        }
    
        // Get the movie's platforms
        const platforms = movie.plataformas;
    
        res.status(200).json(platforms);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    
}