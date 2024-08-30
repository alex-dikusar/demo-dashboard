import { DashboardOutlined, ProjectOutlined, ShopOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
  {
    name: 'dashboard',
    list: '/',
    meta: {
      label: 'Dashboard',
      icon: <DashboardOutlined />
    }
  },
  {
    name: 'jobs',
    list: '/jobs',
    show: '/jobs/:id',
    create: '/jobs/new',
    edit: '/jobs/edit/:id',
    meta: {
      label: 'Jobs',
      icon: <ShopOutlined />
    }
  }
]