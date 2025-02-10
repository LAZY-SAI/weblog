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
    <div className={`login-Container ${isAdmin ? "admin-bg" : ""} ${isTeacher ? "teacher-bg" : ""}`}>
      <div className="logoption">
        <h3>Login:</h3>

        <button className="std" onClick={handleStudentClick}>
          <FontAwesomeIcon icon={faUserGraduate} />
          <span>Student</span>
        </button>
        <button className="teacheropt" onClick={handleTeacherClick}>
          <FontAwesomeIcon icon={faChalkboardUser} />
          <span>Teacher</span>
        </button>
        <button className="adminopt" onClick={handleAdminClick}>
          <FontAwesomeIcon icon={faUser} />
          <span>Admin</span>
        </button>
    </div>
        <div className="img-container">
          <div className="img-slider" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
            <img src={images[0]} alt="Student Login" />
            <img src={images[1]} alt="Admin Login" />
            <img src={images[2]} alt="Teacher Login" />
          </div>
        </div>

        <div className="box">
          <form>
            <div className="form__group field">
              <input type="text" className="form__field" placeholder="Name" required />
              <label htmlFor="name" className="form__label">
                Name
              </label>
            </div>
            <div className="form__group field">
              <input type="password" className="form__field" placeholder="Password" required />
              <label htmlFor="password" className="form__label">
                Password
              </label>
            </div>
            <button type="submit" className="submit" id="userLogin">
              Sign In
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </button>
            <span className="forgot">Forgot Password?</span>
          </form>
        </div>
      </div>
  
  );
}

export default Login;