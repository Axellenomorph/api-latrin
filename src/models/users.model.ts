import { User } from '@interfaces/users.interface';
import { v4 as uuidv4 } from 'uuid';

// password: password
const userModel: User[] = [
  { id: uuidv4(), email: 'example1@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC', faves: [] },
];

export default userModel;
