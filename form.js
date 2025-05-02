
function showStep2() {
  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'block';
}

document.getElementById("step2").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    from: document.getElementById('from').value,
    to: document.getElementById('to').value,
    cargo: document.getElementById('cargo').value,
    weight: document.getElementById('weight').value,
    volume: document.getElementById('volume').value,
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value
  };
  const text = `📦 Новый расчет:\nОткуда: ${data.from}\nКуда: ${data.to}\nГруз: ${data.cargo}\nВес: ${data.weight} кг\nОбъем: ${data.volume}\nИмя: ${data.name}\nТелефон: ${data.phone}\nEmail: ${data.email}`;
  fetch("https://api.telegram.org/bot8059255191:AAFdzM4JMrTblKZq0e0zylGUPuKLwzwBbVo/sendMessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: "7895116490", text: text })
  }).then(res => res.ok ? alert("✅ Заявка отправлена!") : alert("❌ Ошибка"));
});

document.getElementById("tg-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name2").value;
  const phone = document.getElementById("phone2").value;
  const message = document.getElementById("message").value;
  const text = `📨 Новая заявка с сайта Albatross Cargo:\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}\n💬 Сообщение: ${message}`;
  fetch("https://api.telegram-message.vercel.app/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: "8059255191:AAFaAtp3Hlu8F2XEh1EHfCFtopyv4h_l88Y",
      chatId: "7895116490",
      text: text
    })
  }).then(response => {
    document.getElementById("form-status").innerText = response.ok
      ? "✅ Сообщение отправлено!"
      : "❌ Ошибка при отправке.";
  }).catch(() => {
    document.getElementById("form-status").innerText = "❌ Ошибка соединения.";
  });
});
