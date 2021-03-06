import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("users")
export class User {
@PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;
  
  @Column()
  user_password: number;
}
