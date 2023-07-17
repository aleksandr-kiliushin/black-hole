import { IUserService } from '@api/Services/UserService/UserService';

import { UserRepository } from './UserRepository/UserRepository';

export interface IAppServices {
  userService: IUserService;
}

export interface IAppRepos {
  userRepo: UserRepository;
}
