let currentImage = 0;
let isAdmin = false;
let isTeacher = false;
const images = [
  "assets/image/login.png",
  "assets/image/admin.png",
  "assets/image/teacher.png"
];

function updateBackground() {
  if (isAdmin) {
    document.body.style.backgroundColor = "#7209b7";
  } else if (isTeacher) {
    document.body.style.backgroundColor = "#a0c4ff";
  } else {
    document.body.style.backgroundColor = "#ffe5d9";
  }
}

function handleStudentClick() {
  currentImage = 0;
  isAdmin = false;
  isTeacher = false;
  updateBackground();
  updateImageSlider();
}

function handleAdminClick() {
  currentImage = 1;
  isAdmin = true;
  isTeacher = false;
  updateBackground();
  updateImageSlider();
}

function handleTeacherClick() {
  currentImage = 2;
  isTeacher = true;
  isAdmin = false;
  updateBackground();
  updateImageSlider();
}

function updateImageSlider() {
  const slider = document.getElementById("img-slider");
  slider.style.transform = `translateX(-${currentImage * 100}%)`;
}