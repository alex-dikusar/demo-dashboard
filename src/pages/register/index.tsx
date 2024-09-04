import Logo from '@/components/home/dashboard/Logo';
import { AuthPage } from '@refinedev/antd';

export const Register = () => {
  return <AuthPage title={<Logo />} type="register" />;
};
