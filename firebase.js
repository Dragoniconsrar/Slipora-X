<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAed9McQJenhGasFEQ8VRk_P3YCAiYYLLA",
    authDomain: "stepx-694fa.firebaseapp.com",
    projectId: "stepx-694fa",
    storageBucket: "stepx-694fa.firebasestorage.app",
    messagingSenderId: "157698046224",
    appId: "1:157698046224:web:e9be82744db04d4095cd95",
    measurementId: "G-71P4XY0Y1K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
