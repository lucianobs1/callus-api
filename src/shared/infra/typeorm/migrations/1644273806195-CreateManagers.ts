import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateManagers1644273806195 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'managers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'cellphone',
            type: 'varchar'
          },
          {
            name: 'telephone',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'lives_here',
            type: 'boolean'
          },
          {
            name: 'is_janitor',
            type: 'boolean'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('managers');
  }
}
