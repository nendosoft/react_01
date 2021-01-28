import { FC } from 'react';
import { useParams } from 'react-router';

import usemembersGotten from 'hooks/use-get-members';
// import Members from 'components/templates/Members';
import {DataTable, Demo} from 'components/templates/Demo';

// const EnhancedMembers: FC<{ orgCode?: string }> = ({ orgCode }) => {
const EnhancedMembers: FC = () => {  
  const { orgCode = '' } = useParams() as { orgCode: string; };

  if (orgCode) {
    const { users, isLoading } = usemembersGotten(orgCode);
    return <Demo {...{ orgCode, users, isLoading }} />;
    // return <Demo {orgCode, users, isLoading } />;
    // return <DataTable />;
  } else {
    // return <DataTable />;
    return <Demo orgCode={'zero'} users={[]} isLoading={false}  />;
  }


  // return <Members {...{ orgCode, users, isLoading }} />;
  // return <Demo {...{ orgCode, users, isLoading }} />;
};

export default EnhancedMembers;
