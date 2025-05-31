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
    document.body.classList.add("transition-colors", "duration-500");

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
      className={`max-w-6xl mx-auto my-8 rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-colors duration-500 ${
        isAdmin ? "bg-purple-100" : isTeacher ? "bg-blue-100" : "bg-white"
      }`}
    >
      {/* Left Image Slider - Fixed height for all images */}
      <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
        <h3 className="text-3xl font-bold text-center mb-6 text-cyan-700">
          Login:
        </h3>

        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <button
            onClick={handleStudentClick}
            className={`flex flex-col items-center justify-center w-20 h-20 border-2 rounded-full transition-all duration-300 ${
              currentImage === 0
                ? "bg-cyan-700 text-white"
                : "border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white"
            }`}
          >
            <FontAwesomeIcon icon={faUserGraduate} className="text-xl" />
            <span className="text-sm mt-1">Student</span>
          </button>
          <button
            onClick={handleTeacherClick}
            className={`flex flex-col items-center justify-center w-20 h-20 border-2 rounded-full transition-all duration-300 ${
              currentImage === 2
                ? "bg-cyan-700 text-white"
                : "border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white"
            }`}
          >
            <FontAwesomeIcon icon={faChalkboardUser} className="text-xl" />
            <span className="text-sm mt-1">Teacher</span>
          </button>
          <button
            onClick={handleAdminClick}
            className={`flex flex-col items-center justify-center w-20 h-20 border-2 rounded-full transition-all duration-300 ${
              currentImage === 1
                ? "bg-cyan-700 text-white"
                : "border-cyan-700 text-cyan-700 hover:bg-cyan-700 hover:text-white"
            }`}
          >
            <FontAwesomeIcon icon={faUser} className="text-xl" />
            <span className="text-sm mt-1">Admin</span>
          </button>
        </div>

        <form className="space-y-6 max-w-sm mx-auto w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              required
              className="peer w-full border-b-2 border-gray-400 focus:border-cyan-400 outline-none py-2 bg-transparent placeholder-transparent"
            />
            <label className="absolute left-0 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400">
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              required
              className="peer w-full border-b-2 border-gray-400 focus:border-cyan-400 outline-none py-2 bg-transparent placeholder-transparent"
            />
            <label className="absolute left-0 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-cyan-400">
              Password
            </label>
          </div>

          <button
            type="submit"
            className={`w-full py-2 rounded text-white font-semibold transition-colors duration-300 ${
              isAdmin
                ? "bg-purple-700 hover:bg-purple-800"
                : isTeacher
                ? "bg-blue-700 hover:bg-blue-800"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            Sign In
          </button>

          <div className="text-center text-sm text-cyan-700 cursor-pointer hover:underline">
            Forgot Password?
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;