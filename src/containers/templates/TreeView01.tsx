import { FC } from 'react';

import {TreeView01} from 'components/templates/TreeView01';
import orgCodes from 'data/org-codes';

const EnhancedHome: FC = () => <TreeView01 orgCodes={orgCodes} />;

export default EnhancedHome;
