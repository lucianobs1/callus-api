import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddManagerForeignKeyInTableClients1644281352600
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'clients',
      new TableForeignKey({
        name: 'FKManagerClients',
        referencedTableName: 'managers',
        referencedColumnNames: ['id'],
        columnNames: ['manager_id'],
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('managers', 'FKManagerClients');
  }
}
