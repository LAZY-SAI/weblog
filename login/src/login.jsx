import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faUser, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import logBackground from "./assets/image/login.png";
import adminlogBackground from "./assets/image/admin.png";
import teacherBackground from "./assets/image/teacher.png";

function Login() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const images = [logBackground, adminlogBackground, teacherBackground];

  useEffect(() => {
    if (isAdmin) {
      document.body.style.backgroundColor = "#7209b7";
    } else if (isTeacher) {
      document.body.style.backgroundColor = "#a0c4ff";
    } else {
      document.body.style.backgroundColor = "#ffe5d9";
    }
  }, [isAdmin, isTeacher]);

  const handleStudentClick = () => {
    setCurrentImage(0);
    setIsAdmin(false);
    setIsTeacher(false);
  };

  const handleAdminClick = () => {
    setCurrentImage(1);
    setIsAdmin(true);
    setIsTeacher(false);
  };

  const handleTeacherClick = () => {
    setCurrentImage(2);
    setIsTeacher(true);
    setIsAdmin(false);
  };

  return (
    <div
      className={`mx-auto mt-10 max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row ${
        isAdmin ? "bg-indigo-50" : isTeacher ? "bg-blue-50" : ""
      }`}
    >
      {/* Left image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <div
          className="h-full w-full transition-transform duration-500"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          <img
            src={images[currentImage]}
            alt="Login Visual"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Right form section */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          Login
        </h3>

        <div className="flex justify-center gap-4 mb-6">
          <button
            className="flex flex-col items-center gap-1 text-cyan-600 border-2 border-cyan-700 rounded-full w-16 h-16 hover:bg-cyan-700 hover:text-white transition"
            onClick={handleStudentClick}
          >
            <FontAwesomeIcon icon={faUserGraduate} />
            <span className="text-xs">Student</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 text-cyan-600 border-2 border-cyan-700 rounded-full w-16 h-16 hover:bg-cyan-700 hover:text-white transition"
            onClick={handleTeacherClick}
          >
            <FontAwesomeIcon icon={faChalkboardUser} />
            <span className="text-xs">Teacher</span>
          </button>
          <button
            className="flex flex-col items-center gap-1 text-cyan-600 border-2 border-cyan-700 rounded-full w-16 h-16 hover:bg-cyan-700 hover:text-white transition"
            onClick={handleAdminClick}
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="text-xs">Admin</span>
          </button>
        </div>

        <form className="space-y-4 max-w-sm mx-auto w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              required
              className="peer w-full border-b-2 border-gray-400 bg-transparent py-2 px-1 focus:outline-none focus:border-blue-400"
            />
            <label className="absolute left-1 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-400">
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              required
              className="peer w-full border-b-2 border-gray-400 bg-transparent py-2 px-1 focus:outline-none focus:border-blue-400"
            />
            <label className="absolute left-1 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-400">
              Password
            </label>
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded bg-orange-500 text-white hover:bg-orange-600 transition ${
              isAdmin ? "bg-purple-700 hover:bg-purple-800" : ""
            } ${isTeacher ? "bg-blue-700 hover:bg-blue-800" : ""}`}
          >
            Sign In
          </button>
          <span className="text-sm text-center block text-blue-500 hover:underline cursor-pointer">
            Forgot Password?
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;