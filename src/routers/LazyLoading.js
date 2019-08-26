import MyLoadable from '../components/Common/MyLoadable';

export const LoginPage = MyLoadable({
  loader: () => import('../components/Pages/LoginPage')
});

export const DashboardPage = MyLoadable({
  loader: () => import('../components/Pages/DashboardPage')
});

export const AddContactPage = MyLoadable({
  loader: () => import('../components/Pages/AddContactPage')
});

export const EditContactPage = MyLoadable({
  loader: () => import('../components/Pages/EditContactPage')
});

export const ContactDetailPage = MyLoadable({
  loader: () => import('../components/Pages/ContactDetailPage')
});

export const NotFoundPage = MyLoadable({
  loader: () => import('../components/Pages/NotFoundPage')
});
