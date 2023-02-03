import { hash } from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';
import { v4 as uuidv4 } from 'uuid';

class UserService {
  public users = userModel;

  public async findAllUser(): Promise<User[]> {
    const users: User[] = this.users;
    return users;
  }

  public async findUserById(userId: string): Promise<User> {
    const findUser: User = this.users.find(user => user.id === userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User = this.users.find(user => user.email === userData.email);
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: User = { id: uuidv4(), ...userData, password: hashedPassword, faves: [] };
    this.users = [...this.users, createUserData];

    return createUserData;
  }

  public async updateUser(userId: string, userData: CreateUserDto): Promise<User[]> {
    if (isEmpty(userData)) throw new HttpException(400, 'userData is empty');

    const findUser: User = this.users.find(user => user.id === userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const hashedPassword = await hash(userData.password, 10);
    const updateUserData: User[] = this.users.map((user: User) => {
      if (user.id === findUser.id) user = { id: userId, ...userData, password: hashedPassword, faves: user.faves };
      return user;
    });

    return updateUserData;
  }

  public async deleteUser(userId: string): Promise<User[]> {
    const findUser: User = this.users.find(user => user.id === userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const deleteUserData: User[] = this.users.filter(user => user.id !== findUser.id);
    return deleteUserData;
  }
}

export default UserService;
