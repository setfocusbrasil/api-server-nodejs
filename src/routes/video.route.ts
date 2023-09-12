// routes/video.route.ts

import { Router } from 'express';
import * as videoController from '../controllers/video.controller';

const router = Router();

router.post('/', videoController.addVideo);
router.get('/', videoController.getVideos);

export default router;
