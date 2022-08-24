import { Request, Response } from 'express';

import { List } from '../types/lists';
import ListService from '../services/lists';

async function list(req: Request, res: Response): Promise<Response> {
  const lists: List[] = await ListService.list();

  return res.status(200).json(lists);
}

async function create(req: Request, res: Response): Promise<Response> {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      status: 400,
      message: `Please specify a name for the list you want to create`
    })
  }

  if (name.length < 3) {
    return res.status(400).json({
      status: 400,
      message: `Please specify a name longer than 3 characters`
    });
  }

  try {
    const list: List = await ListService.create(name);
    return res.status(200).json(list);
  } catch(e: any) {
    return res.status(400).json({
      status: 400,
      message: e.message
    });
  }

}

async function get(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      error: 400,
      message: `Please specify a list ID`
    });
  }

  try {
    const list: List = await ListService.get(id);
    return res.status(200).json(list);
  } catch (e: any) {
    return res.status(400).json({
      status: 400,
      message: e.message
    });
  }

}

export default {
  list,
  create,
  get
};