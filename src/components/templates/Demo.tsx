import * as React from 'react';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';

import { FC } from 'react';
import { Helmet } from 'react-helmet';
// import capitalize from 'lodash/capitalize';
// import { Divider } from 'semantic-ui-react';

import { User } from 'domains/github';
import Spinner from 'components/molecules/Spinner';
// import HomeButton from 'components/molecules/HomeButton';
// import MemberList from 'components/organisms/MemberList';

export type Props = {
  orgCode: string;
  users: User[];
  isLoading?: boolean;
};

const columns: ColDef[] = [
  { field: 'id', headerName: 'ID', width: 140 },
  { field: 'login', headerName: 'login', width: 130 },
  { field: 'htmlUrl', headerName: 'htmlUrl', width: 280 },
  { field: 'nodeId', headerName: 'nodeId', width: 280 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  {
    field: 'id and loginId',
    headerName: 'id and loginId',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 160,
    valueGetter: (params: ValueGetterParams) =>
      `${params.getValue('id') || ''} ${params.getValue('login') || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

// export default function DataTable() {
export const DataTable: FC = () => {
  return (
    <div style={{ height: 540 }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection disableColumnMenu />
    </div>
  );
};

export const Demo: FC<Props> = ({
  orgCode = 'UnknownCompany',
  users = [],
  isLoading = false,
}) => {
  // const title = `${capitalize(orgCode)} の開発メンバー`;

  return (
    <>
    <div style={{ height: 440 }}>
      <DataGrid rows={users} columns={columns} pageSize={5} checkboxSelection disableColumnMenu />
    </div>
      {/* <Helmet>
        <title>{title}</title>
      </Helmet> */}
        {/* <h1>{orgCode}</h1> */}
      {/* {isLoading ? <Spinner /> : <MemberList users={users} />}
      <Divider hidden />
      <HomeButton /> */}
    </>
  );
};

// export default Demo;