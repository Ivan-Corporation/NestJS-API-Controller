import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user.entity';

// @Module({
//   imports: [
//   TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: 'drur',
//       database: 'komadb',
//       entities: [User],
//       synchronize: true,
//     }),
//     TypeOrmModule.forFeature([User])
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })


@Module({
  imports: [TypeOrmModule.forRoot()],
})
export class AppModule {}
