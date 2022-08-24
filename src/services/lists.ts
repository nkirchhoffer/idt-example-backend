import { List } from '../types/lists';
import ListRepository from '../repositories/lists';

async function create(name: string): Promise<List> {
  const existingLists: List[] = await ListRepository.findByName(name);
  
  if (existingLists.length > 0) {
    throw new Error(`A list with the same name already exists`);
  }

  const list: List = {
    name
  };

  return ListRepository.create(list);
}

async function get(id: string): Promise<List> {
  return ListRepository.get(id);
}

async function list(): Promise<List[]> {
  return await ListRepository.list();
}

export default {
  create,
  list,
  get
};