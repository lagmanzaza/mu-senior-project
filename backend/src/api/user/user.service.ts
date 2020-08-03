import { Injectable } from '@nestjs/common';
import db from '../../knex';
import * as argon from 'argon2';

// interface
import { CreateUser, IUser } from './user.interface';

@Injectable()
export class UserService {
  private readonly serviceName = 'users';
  async create(data: CreateUser): Promise<IUser> {
    const hashPassword = await argon.hash(data.password);
    const result = await db
      .insert({ ...data, password: hashPassword })
      .into('users')
      .returning('*');

    return {
      message: 'created',
      ...result[0],
    };
  }

  async update(id: number, data: CreateUser): Promise<IUser> {
    const hashPassword = await argon.hash(data.password);
    const result = await db('users')
      .update({ ...data, password: hashPassword, updateAt: new Date() })
      .where('userId', '=', id)
      .returning('*');

    const isNotUpdated = result.length === 0;
    if (isNotUpdated) {
      throw {
        service: this.serviceName,
        message: 'user id not found',
      };
    }

    return {
      message: 'updated',
      ...result[0],
    };
  }
}
