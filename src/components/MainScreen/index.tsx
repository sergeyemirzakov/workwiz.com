import { useNavigate } from 'react-router-dom';
import image from 'assets/main-screen-img.jpg';

const MainScreen = () => {
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate('/resume');
  };

  return (
    <div
      className="flex justify-between items-center
    bg-gradient-to-b from-white to-slate-100 h-[400px]
    relative
    before:content-'' before:absolute before:bg-gradient-to-b from-white before:h-[100%] before:w-[4000px] before:left-[-2000px] before:z-[-1]"
    >
      <div className="max-w-[500px]">
        <div className="mb-2">
          <div className="font-semibold text-[18px] text-blue-500 mb-2">
            It is simple and quickly!
          </div>
          <h1 className="font-bold text-5xl mb-8">
            Craft your personal <br />
            <span className="text-blue-500">resume</span> right now
          </h1>
          <p className="text-slate-600">
            A well-crafted CV (Curriculum Vitae) can significantly enhance your chances of
            landing a job by presenting your qualifications, skills, and experiences in a
            compelling manner.
          </p>
        </div>
        <button
          onClick={onNavigateHandler}
          className="inline mt-5 text-lg font-semibold rounded-lg bg-blue-500 py-3 px-6 text-white hover:bg-indigo-600"
        >
          Get Started 🚀
        </button>
      </div>
      <div className="w-[550px]">
        <img className="rounded-xl" src={image} alt="" />
      </div>
    </div>
  );
};

export default MainScreen;
