import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faUser, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import logBackground from "./assets/image/login.png";
import adminlogBackground from "./assets/image/admin.png";
import teacherBackground from "./assets/image/teacher.png";

function Login() {
  const [currentImage, setCurrentImage] = useState(0); // Default to Student Image
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const images = [logBackground, adminlogBackground, teacherBackground];

  useEffect(() => {
    if (isAdmin) {
      document.body.className = "bg-purple-800 transition-colors duration-500 overflow-hidden cursor-pointer";
    } else if (isTeacher) {
      document.body.className = "bg-blue-200 transition-colors duration-500 overflow-hidden cursor-pointer";
    } else {
      document.body.className = "bg-rose-200 transition-colors duration-500 overflow-hidden cursor-pointer";
    }
  }, [isAdmin, isTeacher]);

  const handleStudentClick = () => {
    setCurrentImage(0);
    setIsAdmin(false);
    setIsTeacher(false);
  };

  const handleAdminClick = () => {
    setCurrentImage(2);
    setIsAdmin(true);
    setIsTeacher(false);
  };

  const handleTeacherClick = () => {
    setCurrentImage(1);
    setIsTeacher(true);
    setIsAdmin(false);
  };

  return (
    <div
      className={`w-[55rem] h-[40rem] bg-white rounded-3xl mx-auto mt-8 relative transition-colors duration-300 ${
        isAdmin || isTeacher ? "bg-blue-50" : ""
      }`}
    >
      <div className="absolute mt-28 ml-[41rem] text-cyan-700">
        <h3 className="text-xl font-semibold">Login:</h3>
      </div>

      <button
        className="absolute mt-40 ml-[35rem] w-20 h-20 text-cyan-500 border-2 border-cyan-700 rounded-full flex justify-center items-center text-lg hover:text-white hover:bg-cyan-700 transition"
        onClick={handleStudentClick}
      >
        <FontAwesomeIcon icon={faUserGraduate} />
        <span className="absolute mt-24 text-cyan-700 text-sm">Student</span>
      </button>

      <button
        className="absolute mt-40 ml-[47rem] w-20 h-20 text-cyan-500 border-2 border-cyan-700 rounded-full flex justify-center items-center text-lg hover:text-white hover:bg-cyan-700 transition"
        onClick={handleAdminClick}
      >
        <FontAwesomeIcon icon={faUser} />
        <span className="absolute mt-24 text-cyan-700 text-sm">Admin</span>
      </button>

      <button
        className="absolute mt-40 ml-[41rem] w-20 h-20 text-cyan-500 border-2 border-cyan-700 rounded-full flex justify-center items-center text-lg hover:text-white hover:bg-cyan-700 transition"
        onClick={handleTeacherClick}
      >
        <FontAwesomeIcon icon={faChalkboardUser} />
        <span className="absolute mt-24 text-cyan-700 text-sm">Teacher</span>
      </button>

      <div className="w-[30rem] h-[38rem] absolute mt-4 ml-4 rounded-3xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 w-[30rem] h-[38rem]"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          <img src={images[0]} alt="Student Login" className="w-full h-full object-cover" />
          <img src={images[2]} alt="Teacher Login" className="w-full h-full object-cover" />
          <img src={images[1]} alt="Admin Login" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="w-[30rem] h-40 absolute flex justify-center items-center ml-[28rem] mt-72">
        <form className="w-full max-w-xs">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full border-b-2 border-gray-400 text-lg text-black py-2 bg-transparent placeholder-transparent focus:outline-none focus:border-b-4 focus:border-gradient-to-r from-blue-700 to-cyan-400"
            />
            <label className="absolute left-0 top-0 text-gray-400 text-sm transition-all pointer-events-none">
              Name
            </label>
          </div>

          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full border-b-2 border-gray-400 text-lg text-black py-2 bg-transparent placeholder-transparent focus:outline-none focus:border-b-4 focus:border-gradient-to-r from-blue-700 to-cyan-400"
            />
            <label className="absolute left-0 top-0 text-gray-400 text-sm transition-all pointer-events-none">
              Password
            </label>
          </div>

          <button
            type="submit"
            className={`px-5 py-2 rounded-md text-white ${
              isAdmin ? "bg-purple-700" : isTeacher ? "bg-blue-700" : "bg-orange-500"
            } hover:opacity-90 transition`}
            id="userLogin"
          >
            Sign In
          </button>

          <div className="mt-4 text-sm text-cyan-700 cursor-pointer hover:underline">
            Forgot Password?
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;