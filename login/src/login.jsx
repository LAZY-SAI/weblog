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
      document.body.className = "bg-purple-800";
    } else if (isTeacher) {
      document.body.className = "bg-blue-300";
    } else {
      document.body.className = "bg-rose-50";
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
    <div className={`min-h-screen flex flex-col md:flex-row items-center justify-center p-4 transition-colors duration-300 ${isAdmin ? "bg-purple-800" : isTeacher ? "bg-blue-300" : "bg-rose-50"}`}>
      {/* Login Options */}
      <div className="w-full md:w-1/4 mb-8 md:mb-0 md:mr-8 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Login:</h3>
        
        <div className="space-y-4">
          <button 
            onClick={handleStudentClick}
            className={`w-full flex items-center justify-start p-3 rounded-lg transition-all ${!isAdmin && !isTeacher ? "bg-rose-100 text-rose-800" : "bg-gray-100 hover:bg-gray-200"}`}
          >
            <FontAwesomeIcon icon={faUserGraduate} className="mr-3" />
            <span>Student</span>
          </button>
          
          <button 
            onClick={handleTeacherClick}
            className={`w-full flex items-center justify-start p-3 rounded-lg transition-all ${isTeacher ? "bg-blue-100 text-blue-800" : "bg-gray-100 hover:bg-gray-200"}`}
          >
            <FontAwesomeIcon icon={faChalkboardUser} className="mr-3" />
            <span>Teacher</span>
          </button>
          
          <button 
            onClick={handleAdminClick}
            className={`w-full flex items-center justify-start p-3 rounded-lg transition-all ${isAdmin ? "bg-purple-100 text-purple-800" : "bg-gray-100 hover:bg-gray-200"}`}
          >
            <FontAwesomeIcon icon={faUser} className="mr-3" />
            <span>Admin</span>
          </button>
        </div>
      </div>

      {/* Image Slider */}
      <div className="w-full md:w-2/5 mb-8 md:mb-0 overflow-hidden rounded-lg shadow-xl">
        <div className="relative w-full h-64 md:h-96">
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
      </div>

      {/* Login Form */}
      <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg">
        <form className="space-y-6">
          <div className="relative">
            <input 
              type="text" 
              id="name"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" "
              required
            />
            <label 
              htmlFor="name" 
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Name
            </label>
          </div>
          
          <div className="relative">
            <input 
              type="password" 
              id="password"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
              placeholder=" "
              required
            />
            <label 
              htmlFor="password" 
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Password
            </label>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition flex items-center justify-center"
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
  );
}

export default Login;