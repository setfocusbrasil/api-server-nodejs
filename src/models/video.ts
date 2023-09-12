import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  link: string;


  constructor(description: string, link: string) {
    this.description = description;
    this.link = link;
  }
}
