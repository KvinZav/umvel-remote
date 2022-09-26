import { FC } from 'react';
import { 
    Delete,
    Send,
    Search,
    People,
    Rocket,
    Devices,
    Lock,
    Support,
    Insights
} from '@mui/icons-material';
import { IconProps } from '@type/components/Icons.type';

const Icon:FC<IconProps> = ({name,size=16,...props}) => {
    const style={
        sx:{
            fontSize:size, 
        },
        ...props
    }

    const Icons ={
        Delete: <Delete {...style}/>,
        Send: <Send {...style}/>,
        Search: <Search {...style}/>,
        People: <People {...style}/>,
        Rocket: <Rocket {...style}/>,
        Devices: <Devices {...style}/>,
        Lock: <Lock {...style}/>,
        Support: <Support {...style}/>,
        Insights: <Insights {...style}/>, 
    }

    return Icons[name]
}
export default Icon