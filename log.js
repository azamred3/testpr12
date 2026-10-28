// ============================================================
// عودة للعقار — صفحة الدخول
// ============================================================

/* ============================================================
   إخفاء شاشة التحميل
   ============================================================ */
function dismissLoader() {
    const loader = document.getElementById('loader');
    const auth = document.getElementById('auth');
    loader.classList.add('hidden');
    auth.classList.add('ready');
    document.body.classList.add('loaded');
}

window.addEventListener('load', () => {
    setTimeout(dismissLoader, 2400);
});

// احتياطي: إذا تأخر حدث load
setTimeout(() => {
    if (!document.body.classList.contains('loaded')) dismissLoader();
}, 4000);

/* ============================================================
   تبديل التبويبات
   ============================================================ */
const tabs = document.querySelectorAll('.auth-tab');
const forms = document.querySelectorAll('.auth-form');

function switchTab(name) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    forms.forEach(f => f.classList.toggle('active', f.id === name + '-form'));
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
});

document.querySelectorAll('[data-switch]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab(link.dataset.switch);
    });
});

/* ============================================================
   إظهار/إخفاء كلمة المرور
   ============================================================ */
document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.parentElement.querySelector('input');
        const icon = btn.querySelector('i');
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});

/* ============================================================
   إرسال النماذج — تحقق أساسي
   ============================================================ */
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input[type="email"], input[type="password"]');
    for (const input of inputs) {
        if (!input.value.trim()) {
            showToast('يرجى تعبئة جميع الحقول', true);
            input.focus();
            return;
        }
    }
    showToast('تم تسجيل الدخول بنجاح!');
    setTimeout(() => { window.location.href = 'index.html'; }, 1200);
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const required = form.querySelectorAll('input[required]');
    let ok = true;

    required.forEach(input => {
        if (input.type === 'checkbox') {
            if (!input.checked) ok = false;
        } else if (!input.value.trim()) {
            ok = false;
        }
    });

    const pw = form.querySelectorAll('input[type="password"]');
    if (pw[0].value !== pw[1].value) {
        showToast('كلمتا المرور غير متطابقتين', true);
        return;
    }

    if (!ok) {
        showToast('يرجى تعبئة جميع الحقول', true);
        return;
    }

    showToast('تم إنشاء الحساب بنجاح!');
    setTimeout(() => { window.location.href = 'index.html'; }, 1200);
});

/* ============================================================
   Toast
   ============================================================ */
let toastTimer;
function showToast(msg, isError = false) {
    const toast = document.getElementById('toast');
    const text = document.getElementById('toast-text');
    const icon = toast.querySelector('i');

    text.textContent = msg;
    toast.classList.toggle('error', isError);
    icon.className = isError ? 'fas fa-exclamation-circle' : 'fas fa-check-circle';

    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}