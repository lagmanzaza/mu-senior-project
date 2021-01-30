import { ISqlBuilder, sqlBuilder } from '../../src/shared/services/sql-builder';

const columns = [
  'userId',
  'role',
  'username',
  'password',
  'fullname',
  'birthDate',
  'profileImage',
  'gender',
  'phone',
  'createAt',
  'updateAt',
];
describe('sql builder ', () => {
  test('construct with complete contructor factor', () => {
    const sqlBuilderData: ISqlBuilder = {
      modelName: 'users',
      primaryKeyName: 'userId',
      columns,
    };
    const queryResult = new sqlBuilder(sqlBuilderData);
    const sqlQuery = queryResult.getById('test').toSQL().sql;

    const expectedSql = `select ${sqlBuilderData.columns.join(',')} from users`;
    expect(expectedSql).toEqual(sqlQuery);
  });
  test('contruct with only model name', () => {
    const sqlBuilderData: ISqlBuilder = {
      modelName: 'users',
      primaryKeyName: 'userId',
      columns,
    };

    const queryResult = new sqlBuilder(sqlBuilderData);
    const sqlQuery = queryResult.getById('test').toSQL().sql;
    const expectedSql = `select * from "users"`;
    expect(expectedSql).toEqual(sqlQuery);
  });
});
