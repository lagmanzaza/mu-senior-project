import { ISqlBuilder, sqlBuilder } from '../../src/shared/services/sql-builder';

const columns = [
  'userId',
  'role',
  'username',
  'password',
  'fullname',
  'birthDate',
  'profileImg',
  'gender',
  'phone',
  'createAt',
  'updateAt',
];
describe('sql builder ', () => {
  test('not implement', () => {
    expect(true).toEqual(true);
  });
  // test('construct with complete contructor factor', () => {
  //   const sqlBuilderData: ISqlBuilder = {
  //     modelName: 'users',
  //     primaryKeyName: 'userId',
  //     columns,
  //   };
  //   const queryResult = new sqlBuilder(sqlBuilderData);
  //   const sqlQuery = queryResult.getById('test').toSQL().sql;

  //   const listColumns = sqlBuilderData.columns.join(',');

  //   const expectedSql = `select ${listColumns} from users`;
  //   expect(expectedSql).toEqual(sqlQuery);
  // });
  // test('contruct with only model name', () => {
  //   const sqlBuilderData: ISqlBuilder = {
  //     modelName: 'users',
  //     primaryKeyName: 'userId',
  //     columns: [],
  //   };

  //   const queryResult = new sqlBuilder(sqlBuilderData);
  //   const sqlQuery = queryResult.getById('test').toSQL().sql;
  //   const expectedSql = `select * from "users" where \"userId\" = ?`;
  //   expect(expectedSql).toEqual(sqlQuery);
  // });
});
