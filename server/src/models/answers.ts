import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "responses",
})

export class Responses extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Q1!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Q2!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Q3!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Q4!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Q5!: string;
}