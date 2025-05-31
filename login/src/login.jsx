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
    const bodyClasses = isAdmin ? "bg-purple-800" : isTeacher ? "bg-blue-300" : "bg-rose-50";
    document.body.className = `${bodyClasses} m-0 p-0 overflow-hidden transition-colors duration-500 ease-in-out cursor-pointer`;
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
    <div className={`min-h-screen flex items-center justify-center p-4 ${isAdmin ? "bg-purple-800" : isTeacher ? "bg-blue-300" : "bg-rose-50"}`}>
      {/* Login Container */}
      <div className={`relative w-full max-w-4xl h-[40rem] bg-white rounded-3xl shadow-xl transition-colors duration-300 ${
        isAdmin ? "bg-blue-50" : isTeacher ? "bg-blue-50" : "bg-white"
      }`}>
        {/* Login Options */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
          <h3 className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-xl font-semibold text-cyan-700">Login:</h3>
          
          <div className="flex space-x-8">
            <button 
              onClick={handleStudentClick}
              className={`w-20 h-20 flex items-center justify-center text-cyan-400 text-xl rounded-full border-2 border-cyan-700 transition-all duration-200 ${
                !isAdmin && !isTeacher ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"
              }`}
            >
              <FontAwesomeIcon icon={faUserGraduate} />
            </button>
            
            <button 
              onClick={handleTeacherClick}
              className={`w-20 h-20 flex items-center justify-center text-cyan-400 text-xl rounded-full border-2 border-cyan-700 transition-all duration-200 ${
                isTeacher ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"
              }`}
            >
              <FontAwesomeIcon icon={faChalkboardUser} />
            </button>
            
            <button 
              onClick={handleAdminClick}
              className={`w-20 h-20 flex items-center justify-center text-cyan-400 text-xl rounded-full border-2 border-cyan-700 transition-all duration-200 ${
                isAdmin ? "bg-cyan-700 text-white" : "hover:bg-cyan-700 hover:text-white"
              }`}
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
          
          <div className="absolute top-10 left-0 right-0 flex justify-between px-4">
            <span className="text-cyan-700 text-lg">Student</span>
            <span className="text-cyan-700 text-lg">Teacher</span>
            <span className="text-cyan-700 text-lg">Admin</span>
          </div>
        </div>

        {/* Image Slider */}
        <div className="absolute top-4 left-4 w-[30rem] h-[38rem] rounded-3xl overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out w-full h-full"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {images.map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={["Student Login", "Admin Login", "Teacher Login"][index]}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Login Form */}
        <div className="absolute top-[18rem] right-4 w-[30rem] h-[10rem] flex justify-center items-center">
          <form className="w-full max-w-xs space-y-6">
            <div className="relative pt-5">
              <input 
                type="text" 
                id="name"
                className="block w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer py-2 px-0 text-gray-900 text-sm"
                placeholder=" "
                required
              />
              <label 
                htmlFor="name" 
                className="absolute text-gray-500 text-sm duration-300 transform -translate-y-6 scale-75 top-1 z-10 origin-[0] peer-focus:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
              >
                Name
              </label>
            </div>
            
            <div className="relative pt-5">
              <input 
                type="password" 
                id="password"
                className="block w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-500 peer py-2 px-0 text-gray-900 text-sm"
                placeholder=" "
                required
              />
              <label 
                htmlFor="password" 
                className="absolute text-gray-500 text-sm duration-300 transform -translate-y-6 scale-75 top-1 z-10 origin-[0] peer-focus:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
              >
                Password
              </label>
            </div>
            
            <button 
              type="submit" 
              className={`w-full py-2 px-4 rounded-md text-white font-medium transition-all duration-200 ${
                isAdmin ? "bg-purple-700 hover:bg-purple-800" : 
                isTeacher ? "bg-blue-600 hover:bg-blue-700" : 
                "bg-orange-500 hover:bg-orange-600"
              }`}
            >
              Sign In
              <FontAwesomeIcon icon="arrow-right-to-bracket" className="ml-2" />
            </button>
            
            <p className="text-sm text-gray-600 text-center hover:text-blue-600 cursor-pointer transition">
              Forgot Password?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;