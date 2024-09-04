import { AuthPage } from '@refinedev/antd';
import { authCredentials } from '../../providers';
import Logo from '@/components/home/dashboard/Logo';

export const Login = () => {
  return (
    <AuthPage
      title={<Logo />}
      type="login"
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
