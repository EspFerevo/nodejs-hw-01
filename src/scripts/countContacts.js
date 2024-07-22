import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const parseData = JSON.parse(data);
    const totalContacts = parseData.length;
    return totalContacts;
  } catch (error) {
    console.error('Error reading or parsing the file:', error);
    return 0;
  }
};

(async () => {
  console.log(await countContacts());
});
