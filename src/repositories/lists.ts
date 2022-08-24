import 'dotenv/config';
import { v4 as uuid } from 'uuid';
import { List } from "../types/lists";
import db from '../services/db';
const lists = db.getDB().get('lists'); 

async function list(): Promise<List[]> {
  return await lists.find({});
}

async function findByName(name: string): Promise<List[]> {
  return await lists.find({
    name
  });
}

async function get(id: string): Promise<List> {
  const res: List[] = await lists.find({
    '_id': id
  });

  if (res.length === 0) {
    throw new Error(`No list found with this ID`);
  }

  return res[0];
}

function create(list: List): List {
  list.created_at = new Date();
  lists.insert(list);

  return list;
}

export default {
  create,
  findByName,
  list,
  get
};