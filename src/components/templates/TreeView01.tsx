// import React from 'react';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { User, getMembers } from 'domains/github';
import { userSlice, UserState } from 'features/user';

import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { fade, makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import { TransitionProps } from '@material-ui/core/transitions';
// import Demo from "containers/templates/Demo";
import { Demo } from "components/templates/Demo";
import { Link } from 'react-router-dom';
import usemembersGotten from 'hooks/use-get-members';

function MinusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props: SvgIconProps) {
  return (
    <SvgIcon className="close" fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      {/* <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" /> */}
      <path d="M17.237,3.056H2.93c-0.694,0-1.263,0.568-1.263,1.263v8.837c0,0.694,0.568,1.263,1.263,1.263h4.629v0.879c-0.015,0.086-0.183,0.306-0.273,0.423c-0.223,0.293-0.455,0.592-0.293,0.92c0.07,0.139,0.226,0.303,0.577,0.303h4.819c0.208,0,0.696,0,0.862-0.379c0.162-0.37-0.124-0.682-0.374-0.955c-0.089-0.097-0.231-0.252-0.268-0.328v-0.862h4.629c0.694,0,1.263-0.568,1.263-1.263V4.319C18.5,3.625,17.932,3.056,17.237,3.056 M8.053,16.102C8.232,15.862,8.4,15.597,8.4,15.309v-0.89h3.366v0.89c0,0.303,0.211,0.562,0.419,0.793H8.053z M17.658,13.156c0,0.228-0.193,0.421-0.421,0.421H2.93c-0.228,0-0.421-0.193-0.421-0.421v-1.263h15.149V13.156z M17.658,11.052H2.509V4.319c0-0.228,0.193-0.421,0.421-0.421h14.308c0.228,0,0.421,0.193,0.421,0.421V11.052z"></path>
    </SvgIcon>
  );
}

function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const StyledTreeItem = withStyles((theme: Theme) =>
  createStyles({
    iconContainer: {
      '& .close': {
        opacity: 0.3,
      },
    },
    group: {
      marginLeft: 7,
      paddingLeft: 18,
      borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
    },
  }),
)((props: TreeItemProps) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

const useStyles = makeStyles(
  createStyles({
    root: {
      height: 600,
      // maxHeight: '60%',
      flexGrow: 1,
      maxWidth: 380,
      borderRight: '1px solid gray',
      // scrollBehavior: 'auto'
    },
  }),
);

// const useClick = (orgCode: string) => {
//   console.log(orgCode);
// }

// const TreeView01: React.FC = () => {
// export default function CustomizedTreeView() {
// export const TreeView01: React.FC<{ orgCodes: string[] }> = ({ orgCodes = [] }) => (  
export const TreeView01: FC<{ orgCodes?: string[] }> = ({ orgCodes = [] }) => {
  const [orgCode, setOrgCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const users = useSelector<UserState, User[]>((state) => state.users); // (1)
  const dispatch = useDispatch();

  useEffect(() => {
    let isUnmounted = false;
    const { membersGotten, membersClear } = userSlice.actions;

    const load = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const users2 = await getMembers(orgCode); // eslint-disable-line no-shadow

        if (!isUnmounted) {
          // user.tsのmembersGottenで新たに取得したメンバ郡でStoreのStateを更新している
          // 結果、(1)のusersが更新される
          dispatch(membersGotten({ users2 }));
        }
      } catch (err) {
        // throw new Error(`organization '${orgCode}' not exists`);
        dispatch(membersClear());
      } finally {
        setIsLoading(false);
      }
    };

    void load();

    return () => {
      isUnmounted = true;
    };
  }, [orgCode, dispatch]);

  const classes = useStyles();

  return (
    <table style={{ width: '100%' }}>
      <tbody>
        <tr>
          <td style={{ width: '20%' }}>
            <TreeView
              className={classes.root}
              defaultExpanded={['1']}
              defaultCollapseIcon={<MinusSquare />}
              defaultExpandIcon={<PlusSquare />}
              defaultEndIcon={<CloseSquare />}
            >
              <StyledTreeItem nodeId="1" label="Root" onLabelClick={() => setOrgCode("") }>
                <StyledTreeItem nodeId="2" label="Hello" onClick={() => <CloseSquare /> } onLabelClick={() => setOrgCode("") } />
                <StyledTreeItem nodeId="3" label="会社">
                  {orgCodes.map((orgCode, index) => (
                    <StyledTreeItem key={index} nodeId={orgCode} label={orgCode} onClick={() => setOrgCode(orgCode) } />
                    // <StyledTreeItem key={index} nodeId={orgCode} label={orgCode} />
                  ))}
                </StyledTreeItem>
              </StyledTreeItem>
            </TreeView>
          </td>
          <td style={{ width: '80%', position: 'relative', top: -28 }}>
          <Demo {...{ orgCode, users, isLoading }} />
          </td>
        </tr>
      </tbody>
    </table>
  );
  // }
};


// export default TreeView01;