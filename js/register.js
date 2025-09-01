// register.js (محدّث)
import { app } from "./firebase-config.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const auth = getAuth(app);
const db = getFirestore(app);

const form = document.getElementById("registerForm");
const msg = document.getElementById("regMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.textContent = "جاري إنشاء الحساب...";

  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  const phone = document.getElementById("regPhone").value.trim();

  try {
    // إنشاء في Auth
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const user = cred.user;

    // تعيين displayName في Auth
    await updateProfile(user, { displayName: name });

    // حفظ وثيقة المستخدم في Firestore مع role = "user"
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      email: user.email,
      phone: phone || null,
    
      role: "user", // <--- مهم
      notifications: {
        email: true,
        sms: true,
        promos: false,
        orderStatus: true
      },
      registerDate: new Date().toISOString(),
    }, { merge: true });

    msg.textContent = "تم إنشاء الحساب بنجاح. سيتم تحويلك لصفحة البروفايل...";
    setTimeout(() => window.location.href = "../pages/ProfilePage.html", 800);

  } catch (err) {
    console.error(err);
    // رسائل أوضح للمستخدم
    if (err.code === "auth/email-already-in-use") {
      msg.textContent = "هذا البريد مسجل بالفعل. جرّب تسجيل الدخول.";
    } else if (err.code === "auth/weak-password") {
      msg.textContent = "كلمة المرور ضعيفة. استخدم 6 أحرف أو أكثر.";
    } else {
      msg.textContent = "حصل خطأ: " + (err.message || err);
    }
  }
});
