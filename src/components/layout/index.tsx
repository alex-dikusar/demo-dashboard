import { ThemedLayoutV2 } from '@refinedev/antd';
import Header from './header';
import Logo from '../home/dashboard/Logo';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2 Header={Header} Title={titleProps => <Logo />}>
      {children}
    </ThemedLayoutV2>
  );
};

export default Layout;
