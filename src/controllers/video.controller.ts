import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Video } from '../models/video';

export const addVideo = async (req: Request, res: Response) => {
  console.log("Método addVideo chamado");
  console.log("Dados recebidos:", req.body);

  const { description, link } = req.body;
  const videoRepository = getRepository(Video);
  
  try {
    const newVideo = new Video(description, link);
    await videoRepository.save(newVideo);
    
    console.log("Dados inseridos com sucesso");
    res.status(201).json(newVideo);
  } catch (error) {
    console.log("Erro na inserção dos dados:", error);
    res.status(500).json({ message: "Erro ao adicionar vídeo" });
  }
};

export const getVideos = async (_req: Request, res: Response) => {
  console.log('Método getVideos chamado');
  
  const videoRepository = getRepository(Video);
  const videos = await videoRepository.find();

  res.status(200).json(videos);
};
