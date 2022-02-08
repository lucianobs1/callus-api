import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class RemoveColumnEmployeeId1644278292176 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('clients', 'employee_id');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'clients',
      new TableColumn({
        name: 'employee_id',
        type: 'uuid'
      })
    );
  }
}
