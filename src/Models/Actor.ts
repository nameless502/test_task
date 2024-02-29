import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Actor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 1023,
    })
    name: string;
}
