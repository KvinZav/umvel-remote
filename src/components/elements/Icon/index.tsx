import { FC } from 'react';
import {
  Delete,
  Send,
  Search,
  Devices,
  Insights,
  SupportAgent,
  RocketLaunchOutlined,
  LockOutlined,
  GroupOutlined,
} from '@mui/icons-material';
import { IconProps } from '@type/components/Icons.type';

const Icon: FC<IconProps> = ({ name, size = 16, ...props }) => {
  const style = {
    sx: {
      fontSize: size,
    },
    ...props,
  };

  const Icons = {
    Delete: <Delete {...style} />,
    Send: <Send {...style} />,
    Search: <Search {...style} />,
    People: <GroupOutlined {...style} />,
    Rocket: <RocketLaunchOutlined {...style} />,
    Devices: <Devices {...style} />,
    Lock: <LockOutlined {...style} />,
    Support: <SupportAgent {...style} />,
    Insights: <Insights {...style} />,
  };

  return Icons[name];
};
export default Icon;
