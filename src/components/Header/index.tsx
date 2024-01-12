import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="py-6 flex justify-between items-center">
      <Link to="/">
        <div className="text-xl font-bold">
          Work<span className="text-blue-500">wiz</span>
        </div>
      </Link>
      <div>Language</div>
    </div>
  );
};

export default Header;
