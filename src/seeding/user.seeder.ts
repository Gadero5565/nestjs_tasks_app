import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRole } from 'src/auth/user.entity';

@Injectable()
export class UserSeeder implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    await this.seedAdmin();
  }

  private async seedAdmin() {
    const adminExists = await this.userRepository.findOne({ where: { role: UserRole.ADMIN } });
    if (!adminExists) {
      const admin = this.userRepository.create({
        username: 'admin',
        email: 'admin@example.com',
        password: 'admin123',
        role: UserRole.ADMIN,
      });
      await this.userRepository.save(admin);
      console.log('Admin user created');
    }
  }
}