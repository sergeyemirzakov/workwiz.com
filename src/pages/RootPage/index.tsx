import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const RootPage = () => {
  return (
    <div className="font-inter container px-4">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootPage;
