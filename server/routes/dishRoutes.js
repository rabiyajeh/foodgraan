import express from 'express';
import multer from 'multer';
import {
  getAllDishes,
  addDish,
  updateDish,
  deleteDish
} from '../controllers/dishController.js';

const router = express.Router();

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Routes
router.get('/', getAllDishes);
router.post('/', upload.single('image'), addDish);
router.put('/:id', upload.single('image'), updateDish);
router.delete('/:id', deleteDish);

export default router;
