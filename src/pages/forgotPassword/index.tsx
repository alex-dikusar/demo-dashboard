import Logo from '@/components/home/dashboard/Logo';
import { AuthPage } from '@refinedev/antd';

export const ForgotPassword = () => {
  return <AuthPage title={<Logo />} type="forgotPassword" />;
};
