import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from 'typeorm';

import { Actor } from './Actor.js';

@Entity()
export class Film {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 254,
        unique: true,
    })
    name: string;

    @ManyToMany(() => Actor)
    @JoinTable()
    actors: (typeof Actor)[];
}
