import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { User, getMembers } from 'domains/github';
import { userSlice, UserState } from 'features/user';

type ReturnValue = {
  users: User[];
  isLoading: boolean;
};

const useGetMembers = (orgCode: string): ReturnValue => {
  const [isLoading, setIsLoading] = useState(false);
  const users = useSelector<UserState, User[]>((state) => state.users); // (1)
  const dispatch = useDispatch();

  useEffect(() => {
    let isUnmounted = false;
    const { membersGotten } = userSlice.actions;

    const load = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const users2 = await getMembers(orgCode); // eslint-disable-line no-shadow

        if (!isUnmounted) {
          // user.tsのmembersGottenで新たに取得したメンバ郡でStoreのStateを更新している
          // 結果、(1)のusersが更新される
          // dispatch(membersGotten({ users2 }));
          dispatch(membersGotten({ users2, orgCode }));
        }
      } catch (err) {
        throw new Error(`organization '${orgCode}' not exists`);
      } finally {
        setIsLoading(false);
      }
    };

    void load();

    return () => {
      isUnmounted = true;
    };
  }, [orgCode, dispatch]);

  return { users, isLoading }; // (1)
};

export default useGetMembers;
