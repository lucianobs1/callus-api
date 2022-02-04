import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCalls1643988395285 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'calls',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'user_id',
            type: 'uuid'
          },
          {
            name: 'client_id',
            type: 'uuid'
          },
          {
            name: 'technician_id',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'client_name',
            type: 'varchar'
          },
          {
            name: 'description',
            type: 'varchar'
          },
          {
            name: 'is_open',
            type: 'boolean',
            default: true
          },
          {
            name: 'is_pending',
            type: 'boolean',
            default: false
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
    await queryRunner.dropTable('calls');
  }
}
