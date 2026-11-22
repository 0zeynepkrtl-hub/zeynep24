// =========================================================
// DURUM (STATE) YÖNETİMİ
// =========================================================
const state = {
  currentSectionIndex: -1, // -1: Ana Menü, -2: Favoriler
  visitedSections: new Set(),
  collectedHearts: 0,
  favorites: [],
  unlockedLocks: new Set(),
  secretUnlocked: false,
  lastMoodMessages: {}, // Aynı mesajın arka arkaya çıkmasını önler
  recentWheelTasks: [], // Son çıkan çark görevlerini geçici dışlar
  wheelRotation: 0,
  isSpinning: false,
  currentModalText: ""
};

// LocalStorage'dan varsa önceki ilerleme/favorileri yükle
function loadSavedState() {
  try {
    const saved = JSON.parse(localStorage.getItem("nihat_3yil_state") || "{}");
    if (Array.isArray(saved.visitedSections)) {
      state.visitedSections = new Set(saved.visitedSections);
    }
    if (typeof saved.collectedHearts === "number") {
      state.collectedHearts = saved.collectedHearts;
    }
    if (Array.isArray(saved.favorites)) {
      state.favorites = saved.favorites;
    }
    if (Array.isArray(saved.unlockedLocks)) {
      state.unlockedLocks = new Set(saved.unlockedLocks);
    }
  } catch (e) {
    console.warn("Kayıt okunamadı:", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(
      "nihat_3yil_state",
      JSON.stringify({
        visitedSections: Array.from(state.visitedSections),
        collectedHearts: state.collectedHearts,
        favorites: state.favorites,
        unlockedLocks: Array.from(state.unlockedLocks)
      })
    );
  } catch (e) {
    console.warn("Kayıt yazılamadı:", e);
  }
}

// =========================================================
// DOM REFERANSLARI
// =========================================================
const entryScreen = document.getElementById("entry-screen");
const mainMenuScreen = document.getElementById("main-menu-screen");
const sectionViewScreen = document.getElementById("section-view-screen");
const topBar = document.getElementById("top-bar");
const ambientLayer = document.getElementById("ambient-layer");
const burstLayer = document.getElementById("burst-layer");

// =========================================================
// ARKA PLAN SÜZÜLEN KALPLER & PARILTILAR
// =========================================================
const AMBIENT_EMOJIS = ["❤️", "💗", "💜", "🧡", "💖", "✨", "⭐", "💕"];

function spawnAmbientParticle() {
  const el = document.createElement("span");
  el.className = "floating-particle";
  el.textContent = AMBIENT_EMOJIS[Math.floor(Math.random() * AMBIENT_EMOJIS.length)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = 0.8 + Math.random() * 1.1 + "rem";
  const duration = 7 + Math.random() * 7;
  el.style.animationDuration = duration + "s";
  ambientLayer.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

setInterval(spawnAmbientParticle, 750);

// =========================================================
// KALP PATLAMA ANİMASYONU (Her Tıklamada Çalışır)
// =========================================================
function triggerHeartBurst(x, y, emojis = ["❤️", "💗", "💜", "🧡", "💙", "🤍", "✨"], count = 22) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "burst-particle";
    p.textContent = emojis[i % emojis.length];
    p.style.left = x + "px";
    p.style.top = y + "px";

    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
    const distance = 70 + Math.random() * 150;
    const tx = Math.cos(angle) * distance + "px";
    const ty = Math.sin(angle) * distance + "px";
    const rot = (Math.random() - 0.5) * 360 + "deg";

    p.style.setProperty("--tx", tx);
    p.style.setProperty("--ty", ty);
    p.style.setProperty("--rot", rot);
    burstLayer.appendChild(p);
    setTimeout(() => p.remove(), 1150);
  }
}

function addHeartPoint(x, y, emojis) {
  state.collectedHearts += 1;
  updateStatsUI();
  saveState();
  if (typeof x === "number" && typeof y === "number") {
    triggerHeartBurst(x, y, emojis, 18);
  }
}

// =========================================================
// MÜZİK KONTROLÜ (Kullanıcı İsteğiyle Başlar)
// =========================================================
const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const musicText = document.getElementById("music-text");
const musicIcon = document.getElementById("music-icon");
let isPlayingMusic = false;

musicToggle.addEventListener("click", () => {
  if (!bgMusic.querySelector("source") && !bgMusic.src) {
    showToast("🎵 Müzik çaları aktif! Kendi MP3 dosyanı index.html içine ekleyebilirsin.");
    isPlayingMusic = !isPlayingMusic;
    musicText.textContent = isPlayingMusic ? "Müzik Açık" : "Müzik Aç";
    musicIcon.textContent = isPlayingMusic ? "🎶" : "🎵";
    return;
  }
  if (isPlayingMusic) {
    bgMusic.pause();
    isPlayingMusic = false;
    musicText.textContent = "Müzik Aç";
    musicIcon.textContent = "🎵";
  } else {
    bgMusic.play().catch(() => {});
    isPlayingMusic = true;
    musicText.textContent = "Müziği Durdur";
    musicIcon.textContent = "🎶";
  }
});

// =========================================================
// 3. ÖZEL GİRİŞ EKRANI GEÇİŞİ
// =========================================================
const enterWorldBtn = document.getElementById("enter-world-btn");
const entryHeartWrapper = document.getElementById("entry-heart-wrapper");

enterWorldBtn.addEventListener("click", (e) => {
  entryHeartWrapper.classList.add("zoom-in");
  const rect = enterWorldBtn.getBoundingClientRect();
  triggerHeartBurst(
    rect.left + rect.width / 2,
    rect.top + rect.height / 2,
    ["❤️", "💗", "💜", "🧡", "💖", "✨", "⭐"],
    36
  );

  setTimeout(() => {
    entryScreen.classList.remove("active");
    entryScreen.classList.add("hidden");
    topBar.classList.remove("hidden");
    openMainMenu();
  }, 750);
});

// =========================================================
// 14-E: 3 YILLIK ROMANTİK SAYAÇ & 14-A: GÜNÜN MESAJI
// =========================================================
function startAnniversaryCounter() {
  const start = new Date(RELATIONSHIP_START_DATE).getTime();

  function tick() {
    const now = Date.now();
    const diff = Math.max(0, now - start);
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const years = Math.floor(days / 365);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    document.getElementById("cnt-years").textContent = years;
    document.getElementById("cnt-days").textContent = days;
    document.getElementById("cnt-hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("cnt-mins").textContent = String(mins).padStart(2, "0");
    document.getElementById("cnt-secs").textContent = String(secs).padStart(2, "0");
  }

  tick();
  setInterval(tick, 1000);
}

function renderDailyMessage() {
  const dayOfYear = Math.floor(Date.now() / 86400000);
  const msg = DAILY_MESSAGES[dayOfYear % DAILY_MESSAGES.length];
  document.getElementById("daily-message-text").textContent = `"${msg}"`;
}

// =========================================================
// İSTATİSTİKLER & İLERLEME GÖSTERGESİ
// =========================================================
function updateStatsUI() {
  document.getElementById("progress-text").textContent = `${state.visitedSections.size}/${SITE_SECTIONS.length}`;
  document.getElementById("heart-collection-count").textContent = state.collectedHearts;
  document.getElementById("fav-count").textContent = state.favorites.length;
}

// =========================================================
// 4. ANA MENÜ VE HIZLI GEÇİŞ MENÜSÜ OLUŞTURMA
// =========================================================
function buildMenus() {
  const newGrid = document.getElementById("new-sections-grid");
  const existingGrid = document.getElementById("existing-sections-grid");
  const quickList = document.getElementById("quick-jump-list");

  newGrid.innerHTML = "";
  existingGrid.innerHTML = "";
  quickList.innerHTML = "";

  SITE_SECTIONS.forEach((sec, index) => {
    // Ana Menü Kartı
    const card = document.createElement("div");
    card.className = "menu-card";
    card.style.background = sec.cardGradient;
    card.innerHTML = `
      <div class="menu-card-top">
        <span class="menu-card-icon">${sec.icon}</span>
        <span class="menu-card-badge">${sec.group === "new" ? "Yeni Sürpriz" : "Özel Bölüm"}</span>
      </div>
      <div>
        <h4>${sec.title}</h4>
        <p>${sec.shortDesc}</p>
      </div>
    `;
    card.addEventListener("click", (e) => {
      triggerHeartBurst(e.clientX, e.clientY, ["❤️", "💗", "✨"], 14);
      openSection(index);
    });

    if (sec.group === "new") {
      newGrid.appendChild(card);
    } else {
      existingGrid.appendChild(card);
    }

    // Hızlı Geçiş Listesi Elemanı
    const qBtn = document.createElement("button");
    qBtn.className = "quick-jump-item";
    qBtn.textContent = `${sec.icon} ${sec.title}`;
    qBtn.addEventListener("click", () => {
      document.getElementById("quick-jump-drawer").classList.add("hidden");
      openSection(index);
    });
    quickList.appendChild(qBtn);
  });
}

function openMainMenu() {
  state.currentSectionIndex = -1;
  document.body.className = "theme-menu";
  sectionViewScreen.classList.add("hidden");
  mainMenuScreen.classList.remove("hidden");
  document.getElementById("current-section-badge").textContent = "Ana Menü ❤️";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================================================
// BÖLÜM EKRANI YÖNETİMİ
// =========================================================
function openSection(index) {
  if (index < 0 || index >= SITE_SECTIONS.length) {
    openMainMenu();
    return;
  }

  state.currentSectionIndex = index;
  const sec = SITE_SECTIONS[index];

  // Keşfedilen bölüm ilerlemesi
  if (!state.visitedSections.has(sec.id)) {
    state.visitedSections.add(sec.id);
    state.collectedHearts += 3;
    saveState();
  }
  updateStatsUI();

  // Tema değiştir
  document.body.className = sec.theme;
  mainMenuScreen.classList.add("hidden");
  sectionViewScreen.classList.remove("hidden");

  // Üst bilgi & ilerleme çubuğu
  document.getElementById("current-section-badge").textContent = sec.title;
  document.getElementById("section-step-indicator").textContent = `Bölüm ${index + 1} / ${SITE_SECTIONS.length}`;
  document.getElementById("section-progress-fill").style.width = `${((index + 1) / SITE_SECTIONS.length) * 100}%`;
  document.getElementById("section-view-title").textContent = sec.title;
  document.getElementById("section-view-desc").textContent = sec.shortDesc;

  // Önceki / Sonraki buton durumları
  const prevBtns = [document.getElementById("prev-page-btn"), document.getElementById("prev-page-btn-bottom")];
  const nextBtns = [document.getElementById("next-page-btn"), document.getElementById("next-page-btn-bottom")];

  prevBtns.forEach((b) => (b.disabled = index === 0));
  nextBtns.forEach((b) => (b.disabled = index === SITE_SECTIONS.length - 1));

  const container = document.getElementById("section-dynamic-content");
  container.innerHTML = "";

  // Bölüm tipine göre içeriği çiz
  switch (sec.type) {
    case "hearts-grid":
      renderHeartsGridSection(sec, container);
      break;
    case "staged-hearts":
      renderStagedHeartsSection(sec, container);
      break;
    case "quiz":
      renderQuizSection(sec, container);
      break;
    case "locks":
      renderLocksSection(sec, container);
      break;
    case "secret-door":
      renderSecretDoorSection(sec, container);
      break;
    case "mood-messages":
      renderMoodMessagesSection(sec, container);
      break;
    case "infinite-hearts":
      renderInfiniteHeartsSection(sec, container);
      break;
    case "wheel":
      renderWheelSection(sec, container);
      break;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================================================
// 5 & 6. RENKLİ KALP KUTUCUKLARI RENDER
// =========================================================
const HEART_ICONS_CYCLE = ["❤️", "💗", "💜", "🧡", "💖", "💕", "💙"];

function renderHeartsGridSection(sec, container) {
  let globalCounter = 0;

  sec.subCategories.forEach((sub) => {
    const block = document.createElement("div");
    block.className = "sub-category-block";

    if (sec.subCategories.length > 1 || sub.title) {
      const h3 = document.createElement("h3");
      h3.className = "sub-category-title";
      h3.textContent = sub.title;
      block.appendChild(h3);
    }

    const grid = document.createElement("div");
    grid.className = "hearts-grid";

    sub.items.forEach((sentence, idx) => {
      globalCounter++;
      const displayNum = sec.subCategories.length > 1 ? idx + 1 : globalCounter;
      const btn = document.createElement("button");
      btn.className = `heart-box-btn hc-${globalCounter % 7}`;
      btn.innerHTML = `
        <span class="hb-icon">${HEART_ICONS_CYCLE[globalCounter % HEART_ICONS_CYCLE.length]}</span>
        <span class="hb-num">#${displayNum}</span>
      `;
      btn.addEventListener("click", (e) => {
        const burstColors =
          sec.id === "tesekkur" ? ["❤️", "💗", "💖", "💕"] : ["❤️", "💗", "💜", "🧡", "✨"];
        addHeartPoint(e.clientX, e.clientY, burstColors);
        openMessageModal({
          badge: `${sub.title} • #${displayNum}`,
          text: sentence
        });
      });
      grid.appendChild(btn);
    });

    block.appendChild(grid);
    container.appendChild(block);
  });
}

// =========================================================
// BÖLÜM 8: ÇOK AŞAMALI İTİRAF KARTLARI
// =========================================================
function renderStagedHeartsSection(sec, container) {
  const grid = document.createElement("div");
  grid.className = "hearts-grid";

  sec.cards.forEach((stages, idx) => {
    const btn = document.createElement("button");
    btn.className = `heart-box-btn hc-${idx % 7}`;
    btn.innerHTML = `
      <span class="hb-icon">💝</span>
      <span class="hb-num">#${idx + 1}</span>
    `;
    btn.addEventListener("click", (e) => {
      addHeartPoint(e.clientX, e.clientY, ["💜", "💗", "❤️", "✨"]);
      openStagedModal(`Katmanlı İtiraf #${idx + 1}`, stages);
    });
    grid.appendChild(btn);
  });

  container.appendChild(grid);
}

// =========================================================
// 7. BENİ NE KADAR TANIYORSUN? – 20 SORULUK TEST
// =========================================================
function renderQuizSection(sec, container) {
  let currentQ = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let answeredCurrent = false;

  const wrapper = document.createElement("div");
  wrapper.className = "quiz-container";
  container.appendChild(wrapper);

  function renderQuestion() {
    answeredCurrent = false;
    const total = sec.questions.length;
    const qObj = sec.questions[currentQ];

    wrapper.innerHTML = `
      <div class="quiz-progress-header">
        <span>Soru ${currentQ + 1} / ${total}</span>
        <span>Doğru: ${correctCount} | Yanlış: ${wrongCount}</span>
      </div>
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width: ${((currentQ + 1) / total) * 100}%"></div>
      </div>
      <h3 class="quiz-question-text">${currentQ + 1}. ${qObj.q}</h3>
      <div class="quiz-options-list" id="quiz-options"></div>
      <div id="quiz-feedback" class="quiz-feedback hidden"></div>
      <div class="quiz-next-wrap">
        <button id="quiz-next-btn" class="primary-glow-btn small-btn hidden">
          ${currentQ === total - 1 ? "Sonucu Gör ❤️" : "Sonraki Soru ➡️"}
        </button>
      </div>
    `;

    const optsBox = wrapper.querySelector("#quiz-options");
    const feedbackBox = wrapper.querySelector("#quiz-feedback");
    const nextBtn = wrapper.querySelector("#quiz-next-btn");

    qObj.options.forEach((opt) => {
      const optBtn = document.createElement("button");
      optBtn.className = "quiz-option-btn";
      optBtn.textContent = opt;

      optBtn.addEventListener("click", (e) => {
        if (answeredCurrent) return;
        answeredCurrent = true;

        const allBtns = optsBox.querySelectorAll(".quiz-option-btn");
        allBtns.forEach((b) => (b.disabled = true));

        // 6. soru gibi henüz cevabı belirlenmemiş soru kontrolü
        if (qObj.answer === null) {
          optBtn.classList.add("correct");
          correctCount++;
          addHeartPoint(e.clientX, e.clientY, ["💗", "💜", "❤️", "🧡"]);
          feedbackBox.textContent = "Bu sorunun cevabı sürpriz olarak kaydedildi! 💗";
          feedbackBox.classList.remove("hidden");
          nextBtn.classList.remove("hidden");
          return;
        }

        if (opt === qObj.answer) {
          optBtn.classList.add("correct");
          correctCount++;
          addHeartPoint(e.clientX, e.clientY, ["💗", "💜", "❤️", "🧡"], 26);
          feedbackBox.textContent = "Harikasın nihoşum! Doğru bildin! ❤️💗💜🧡";
        } else {
          optBtn.classList.add("wrong");
          wrongCount++;
          triggerHeartBurst(e.clientX, e.clientY, ["😠", "😤", "💢", "😡"], 18);
          // Doğru şıkkı sadece soru çözüldükten sonra işaretle
          allBtns.forEach((b) => {
            if (b.textContent === qObj.answer) b.classList.add("correct");
          });
          feedbackBox.textContent = `Yanlış cevap bebişim! 😤 Doğrusu: "${qObj.answer}"`;
        }

        feedbackBox.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
      });

      optsBox.appendChild(optBtn);
    });

    nextBtn.addEventListener("click", () => {
      if (currentQ < total - 1) {
        currentQ++;
        renderQuestion();
      } else {
        renderResult();
      }
    });
  }

  function renderResult() {
    const total = sec.questions.length;
    const percent = Math.round((correctCount / total) * 100);
    let resultTitle = "";

    if (percent >= 80) {
      resultTitle = "VAY BE NİHATIMMM, BENİ GERÇEKTEN TANIYORSUN! ❤️";
    } else if (percent >= 50) {
      resultTitle = "Fena değilsin nihoşum, ama beni tanımaya devam etmelisin! 💗";
    } else {
      resultTitle = "BİRAZ DAHA ÇALIŞMAN GEREKİYOR BEBİŞİM! 😘";
    }

    wrapper.innerHTML = `
      <div class="quiz-result-card">
        <div style="font-size: 3rem; margin-bottom: 10px;">🏆❤️</div>
        <h3 class="romantic-heading">${resultTitle}</h3>
        <div class="quiz-stats-grid">
          <div class="quiz-stat-box"><strong>${correctCount}</strong><span>Doğru</span></div>
          <div class="quiz-stat-box"><strong>${wrongCount}</strong><span>Yanlış</span></div>
          <div class="quiz-stat-box"><strong>%${percent}</strong><span>Başarı</span></div>
        </div>
        <button id="restart-quiz-btn" class="primary-glow-btn small-btn">Testi Tekrar Çöz 🔄</button>
      </div>
    `;

    wrapper.querySelector("#restart-quiz-btn").addEventListener("click", () => {
      currentQ = 0;
      correctCount = 0;
      wrongCount = 0;
      renderQuestion();
    });
  }

  renderQuestion();
}

// =========================================================
// 8. BİR SONRAKİ SÜRPRİZ – KİLİTLİ GELECEK MESAJLARI 🔐
// =========================================================
function renderLocksSection(sec, container) {
  const grid = document.createElement("div");
  grid.className = "locks-grid";

  sec.locks.forEach((msg, idx) => {
    const isUnlocked = state.unlockedLocks.has(idx);
    const card = document.createElement("div");
    card.className = `lock-card ${isUnlocked ? "unlocked" : ""}`;
    card.innerHTML = `
      <span class="lock-icon">${isUnlocked ? "🔓" : "🔐"}</span>
      <span class="lock-label">Kilit #${idx + 1}</span>
    `;

    card.addEventListener("click", (e) => {
      card.classList.add("unlocking");
      setTimeout(() => {
        card.classList.remove("unlocking");
        card.classList.add("unlocked");
        card.querySelector(".lock-icon").textContent = "🔓";
        state.unlockedLocks.add(idx);
        addHeartPoint(e.clientX, e.clientY, ["✨", "💙", "💜", "❤️"]);
        openMessageModal({
          badge: `Gelecek Kilidi #${idx + 1} 🔓`,
          text: msg
        });
      }, 280);
    });

    grid.appendChild(card);
  });

  container.appendChild(grid);
}

// =========================================================
// 9. GİZLİ KAPI – ŞİFREYLE AÇILAN ÖZEL SAYFA 💜
// =========================================================
function normalizeTurkishPassword(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c");
}

function renderSecretDoorSection(sec, container) {
  if (state.secretUnlocked) {
    showSecretCelebration(container);
    return;
  }

  const gate = document.createElement("div");
  gate.className = "secret-gate-card";
  gate.innerHTML = `
    <div style="font-size: 3.2rem; margin-bottom: 10px;">🔮💜</div>
    <h3 class="romantic-heading">Bu Kapı Sadece Sana Özel</h3>
    <p style="color: rgba(255,255,255,0.88); font-size: 0.94rem;">
      Sana en çok söylediğim o özel tatlı hitabı şifre olarak yaz bakalım...
    </p>
    <input type="text" id="secret-password-input" class="secret-input" placeholder="Şifreyi buraya yaz..." autocomplete="off" />
    <button id="secret-unlock-btn" class="primary-glow-btn small-btn">Kapıyı Aç 💜</button>
    <div id="secret-error" class="secret-error-msg hidden"></div>
  `;

  container.appendChild(gate);

  const input = gate.querySelector("#secret-password-input");
  const btn = gate.querySelector("#secret-unlock-btn");
  const err = gate.querySelector("#secret-error");

  function checkPassword(e) {
    const cleaned = normalizeTurkishPassword(input.value);
    if (cleaned === "nihosum") {
      state.secretUnlocked = true;
      document.body.className = "theme-gizli-unlocked";
      const rect = btn.getBoundingClientRect();
      addHeartPoint(
        rect.left + rect.width / 2,
        rect.top,
        ["💗", "💜", "❤️", "✨", "⭐", "💖"],
        40
      );
      showSecretCelebration(container);
    } else {
      err.textContent = "Hımm... Bu şifre doğru değil aşkım! İpucu: Sana en sevdiğim seslenişim 😘";
      err.classList.remove("hidden");
      input.classList.add("wrong");
      setTimeout(() => input.classList.remove("wrong"), 450);
    }
  }

  btn.addEventListener("click", checkPassword);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkPassword(e);
  });
}

function showSecretCelebration(container) {
  document.body.className = "theme-gizli-unlocked";
  container.innerHTML = `
    <div class="secret-unlocked-banner">
      <div style="font-size: 2.5rem; margin-bottom: 14px;">✨ 💖 ⭐ 💜 ✨</div>
      <div class="rainbow-celebration-text">
        SENNN BENİM NİHOŞUMSUN NİHATIMMMM NERDENNN BİLDİNNNNN! 💗💜❤️
      </div>
      <p style="margin-top: 18px; font-size: 1.05rem; color: #fff;">
        Üç yılımızın en tatlı sırrını da çözdün. İyi ki benim nihoşumsun, iyi ki varsın! ❤️
      </p>
      <button id="more-secret-sparkles" class="primary-glow-btn small-btn" style="margin-top: 20px;">
        Kutlamayı Patlat ✨💗
      </button>
    </div>
  `;

  container.querySelector("#more-secret-sparkles").addEventListener("click", (e) => {
    triggerHeartBurst(e.clientX, e.clientY, ["💗", "💜", "❤️", "✨", "⭐"], 35);
  });
}

// =========================================================
// 10. DUYGULARINA GÖRE AÇABİLECEĞİ MESAJLAR 🫂
// =========================================================
function renderMoodMessagesSection(sec, container) {
  const doorsGrid = document.createElement("div");
  doorsGrid.className = "mood-doors-grid";

  const displayBox = document.createElement("div");
  displayBox.className = "mood-message-display hidden";

  let activeCat = null;

  function pickNonRepeatingMessage(cat) {
    const list = cat.messages;
    if (list.length === 1) return list[0];
    const last = state.lastMoodMessages[cat.id];
    let chosen = list[Math.floor(Math.random() * list.length)];
    let guard = 0;
    while (chosen === last && guard < 15) {
      chosen = list[Math.floor(Math.random() * list.length)];
      guard++;
    }
    state.lastMoodMessages[cat.id] = chosen;
    return chosen;
  }

  function showCategoryMessage(cat, e) {
    activeCat = cat;
    const msg = pickNonRepeatingMessage(cat);
    if (e) addHeartPoint(e.clientX, e.clientY, ["💗", "💜", "❤️", "✨"]);

    displayBox.classList.remove("hidden");
    displayBox.innerHTML = `
      <span class="modal-badge">${cat.icon} ${cat.name}</span>
      <p class="mood-message-text">"${msg}"</p>
      <div class="mood-actions">
        <button id="new-mood-msg-btn" class="primary-glow-btn small-btn">Yeni Mesaj ✨</button>
        <button id="fav-mood-msg-btn" class="action-chip-btn">🤍 Favorilere Ekle</button>
        <button id="copy-mood-msg-btn" class="action-chip-btn">📋 Kopyala</button>
      </div>
    `;

    displayBox.querySelector("#new-mood-msg-btn").addEventListener("click", (ev) => {
      showCategoryMessage(activeCat, ev);
    });
    displayBox.querySelector("#fav-mood-msg-btn").addEventListener("click", () => {
      toggleFavorite(msg);
    });
    displayBox.querySelector("#copy-mood-msg-btn").addEventListener("click", () => {
      copyText(msg);
    });
  }

  sec.categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "mood-door-btn";
    btn.innerHTML = `
      <span class="mood-door-icon">${cat.icon}</span>
      <strong>${cat.name}</strong>
    `;
    btn.addEventListener("click", (e) => {
      doorsGrid.querySelectorAll(".mood-door-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      showCategoryMessage(cat, e);
    });
    doorsGrid.appendChild(btn);
  });

  container.appendChild(doorsGrid);
  container.appendChild(displayBox);
}

// =========================================================
// 11. SONSUZ KALPLER ❤️
// =========================================================
function renderInfiniteHeartsSection(sec, container) {
  let tapCount = 0;
  const stage = document.createElement("div");
  stage.className = "infinite-hearts-stage";
  stage.innerHTML = `
    <p style="font-size: 1.05rem; color: #fff;">
      Ortadaki kalbe her dokunduğunda sevgimiz gibi rengârenk kalpler etrafa saçılsın!
    </p>
    <button id="infinite-big-heart" class="infinite-heart-btn" aria-label="Büyük Kalp">❤️</button>
    <div class="stat-pill" style="font-size: 0.95rem;">
      Bu sayfada patlatılan kalp dokunuşu: <strong id="inf-tap-count">0</strong>
    </div>
  `;
  container.appendChild(stage);

  const bigHeart = stage.querySelector("#infinite-big-heart");
  const countEl = stage.querySelector("#inf-tap-count");

  bigHeart.addEventListener("click", (e) => {
    tapCount++;
    countEl.textContent = tapCount;
    bigHeart.classList.remove("pop");
    void bigHeart.offsetWidth; // Animasyonu her tıklamada sıfırlar
    bigHeart.classList.add("pop");

    const rect = bigHeart.getBoundingClientRect();
    const cx = e.clientX || rect.left + rect.width / 2;
    const cy = e.clientY || rect.top + rect.height / 2;
    addHeartPoint(cx, cy, ["💗", "❤️", "🧡", "💜", "💙", "🤍"], 30);
  });
}

// =========================================================
// 12. ŞANS ÇARKI – RASTGELE ROMANTİK GÖREVLER 🎡
// =========================================================
function renderWheelSection(sec, container) {
  const wrap = document.createElement("div");
  wrap.className = "wheel-section-wrap";
  wrap.innerHTML = `
    <div class="wheel-outer">
      <div class="wheel-pointer">🔻</div>
      <canvas id="romantic-wheel-canvas" class="wheel-canvas" width="400" height="400"></canvas>
      <button id="spin-wheel-btn" class="wheel-spin-center-btn">ÇEVİR ❤️</button>
    </div>
    <div id="wheel-result-box" class="wheel-result-card hidden"></div>
  `;
  container.appendChild(wrap);

  const canvas = wrap.querySelector("#romantic-wheel-canvas");
  const ctx = canvas.getContext("2d");
  const spinBtn = wrap.querySelector("#spin-wheel-btn");
  const resultBox = wrap.querySelector("#wheel-result-box");

  const tasks = sec.tasks;
  const sliceCount = tasks.length;
  const sliceAngle = (2 * Math.PI) / sliceCount;
  const colors = [
    "#d91e48", "#ff3e7f", "#7b2cbf", "#ff7b00", "#2563eb",
    "#9d4edd", "#6b0f2b", "#ec4899", "#f59e0b", "#4f46e5",
    "#be185d", "#ea580c", "#6d28d9"
  ];

  // Çarkı çiz
  function drawWheel() {
    const cx = 200;
    const cy = 200;
    const radius = 195;
    ctx.clearRect(0, 0, 400, 400);

    for (let i = 0; i < sliceCount; i++) {
      const start = i * sliceAngle - Math.PI / 2;
      const end = start + sliceAngle;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, start, end);
      ctx.closePath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(255,255,255,0.6)";
      ctx.stroke();

      // Dilim numarası
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(start + sliceAngle / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#fff";
      ctx.font = "bold 16px Poppins, sans-serif";
      ctx.fillText(`#${i + 1}`, radius - 22, 6);
      ctx.restore();
    }
  }

  drawWheel();

  function spinWheel() {
    if (state.isSpinning) return;
    state.isSpinning = true;
    spinBtn.disabled = true;

    // Son seçilen görevleri geçici olarak dışla
    let candidates = tasks.map((_, idx) => idx).filter((idx) => !state.recentWheelTasks.includes(idx));
    if (candidates.length === 0) {
      state.recentWheelTasks = [];
      candidates = tasks.map((_, idx) => idx);
    }
    const chosenIndex = candidates[Math.floor(Math.random() * candidates.length)];
    state.recentWheelTasks.push(chosenIndex);
    if (state.recentWheelTasks.length > 4) state.recentWheelTasks.shift();

    const degPerSlice = 360 / sliceCount;
    const targetSliceCenter = chosenIndex * degPerSlice + degPerSlice / 2;
    const extraSpins = 5 * 360;
    const currentMod = state.wheelRotation % 360;
    const targetAngle = state.wheelRotation - currentMod + extraSpins + (360 - targetSliceCenter);

    state.wheelRotation = targetAngle;
    canvas.style.transform = `rotate(${state.wheelRotation}deg)`;

    setTimeout(() => {
      state.isSpinning = false;
      spinBtn.disabled = false;
      const rect = canvas.getBoundingClientRect();
      addHeartPoint(rect.left + rect.width / 2, rect.top + rect.height / 2, ["❤️", "💗", "✨", "🎡"], 28);

      const chosenTask = tasks[chosenIndex];
      resultBox.classList.remove("hidden");
      resultBox.innerHTML = `
        <span class="modal-badge">🎡 Görev #${chosenIndex + 1}</span>
        <h3 class="romantic-heading" style="margin-top: 10px;">${chosenTask}</h3>
        <div class="modal-actions" style="margin-top: 16px;">
          <button id="spin-again-btn" class="primary-glow-btn small-btn">Tekrar Çevir 🔄</button>
          <button id="copy-wheel-btn" class="action-chip-btn">📋 Kopyala</button>
        </div>
      `;
      resultBox.querySelector("#spin-again-btn").addEventListener("click", spinWheel);
      resultBox.querySelector("#copy-wheel-btn").addEventListener("click", () => copyText(chosenTask));
    }, 4300);
  }

  spinBtn.addEventListener("click", spinWheel);
}

// =========================================================
// MODAL (AÇILAN MESAJ KARTI) & ÇOK AŞAMALI KART YÖNETİMİ
// =========================================================
const messageModal = document.getElementById("message-modal");
const modalBadge = document.getElementById("modal-badge");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalStageControls = document.getElementById("modal-stage-controls");
const nextStageBtn = document.getElementById("next-stage-btn");
const modalFavBtn = document.getElementById("modal-fav-btn");
const modalCopyBtn = document.getElementById("modal-copy-btn");
const modalCloseBtn = document.getElementById("modal-close-btn");

function openMessageModal({ badge, title = "", text }) {
  state.currentModalText = text;
  modalBadge.textContent = badge;
  if (title) {
    modalTitle.textContent = title;
    modalTitle.classList.remove("hidden");
  } else {
    modalTitle.classList.add("hidden");
  }
  modalBody.textContent = text;
  modalStageControls.classList.add("hidden");
  updateModalFavButton();
  messageModal.classList.remove("hidden");
}

function openStagedModal(title, stages) {
  let step = 0;
  function renderStep() {
    const combinedText = stages.slice(0, step + 1).join("\n\n");
    state.currentModalText = combinedText;
    modalBadge.textContent = `Aşama ${step + 1} / ${stages.length}`;
    modalTitle.textContent = title;
    modalTitle.classList.remove("hidden");
    modalBody.textContent = combinedText;
    updateModalFavButton();

    if (step < stages.length - 1) {
      modalStageControls.classList.remove("hidden");
    } else {
      modalStageControls.classList.add("hidden");
    }
  }

  nextStageBtn.onclick = (e) => {
    step++;
    addHeartPoint(e.clientX, e.clientY, ["💜", "💗", "✨"]);
    renderStep();
  };

  renderStep();
  messageModal.classList.remove("hidden");
}

modalCloseBtn.addEventListener("click", () => {
  messageModal.classList.add("hidden");
});
messageModal.addEventListener("click", (e) => {
  if (e.target === messageModal) messageModal.classList.add("hidden");
});

// =========================================================
// 14-F: FAVORİ MESAJLAR & 14-G: KOPYALAMA
// =========================================================
function updateModalFavButton() {
  const exists = state.favorites.includes(state.currentModalText);
  modalFavBtn.textContent = exists ? "❤️ Favorilerde" : "🤍 Favorilere Ekle";
}

function toggleFavorite(text) {
  const idx = state.favorites.indexOf(text);
  if (idx === -1) {
    state.favorites.push(text);
    showToast("Favorilere eklendi! ❤️");
  } else {
    state.favorites.splice(idx, 1);
    showToast("Favorilerden çıkarıldı.");
  }
  updateStatsUI();
  saveState();
}

modalFavBtn.addEventListener("click", () => {
  toggleFavorite(state.currentModalText);
  updateModalFavButton();
});

function copyText(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast("Mesaj kopyalandı! 📋❤️"));
  } else {
    showToast("Mesaj seçildi! ❤️");
  }
}

modalCopyBtn.addEventListener("click", () => {
  copyText(state.currentModalText);
});

function openFavoritesView() {
  state.currentSectionIndex = -2;
  document.body.className = "theme-menu";
  mainMenuScreen.classList.add("hidden");
  sectionViewScreen.classList.remove("hidden");

  document.getElementById("current-section-badge").textContent = "Favori Mesajlarım ⭐";
  document.getElementById("section-step-indicator").textContent = "Kayıtlı Favoriler";
  document.getElementById("section-progress-fill").style.width = "100%";
  document.getElementById("section-view-title").textContent = "⭐ Favori Mesajların";
  document.getElementById("section-view-desc").textContent = "Kalbine dokunan ve favorilere eklediğin özel notlar.";

  const container = document.getElementById("section-dynamic-content");
  container.innerHTML = "";

  if (state.favorites.length === 0) {
    container.innerHTML = `
      <div class="section-header-card">
        <p>Henüz favori mesaj eklemedin nihoşum. Herhangi bir kalp mesajını açıp "Favorilere Ekle" butonuna basabilirsin! ❤️</p>
      </div>
    `;
    return;
  }

  const grid = document.createElement("div");
  grid.className = "hearts-grid";

  state.favorites.forEach((favText, i) => {
    const btn = document.createElement("button");
    btn.className = `heart-box-btn hc-${i % 7}`;
    btn.innerHTML = `
      <span class="hb-icon">⭐</span>
      <span class="hb-num">#${i + 1}</span>
    `;
    btn.addEventListener("click", (e) => {
      triggerHeartBurst(e.clientX, e.clientY, ["⭐", "❤️", "💗"], 16);
      openMessageModal({
        badge: `Favori #${i + 1} ⭐`,
        text: favText
      });
    });
    grid.appendChild(btn);
  });

  container.appendChild(grid);
}

// =========================================================
// 14-D: KÖŞEDEKİ GİZLİ KALP SÜRPRİZİ
// =========================================================
document.getElementById("secret-corner-heart").addEventListener("click", (e) => {
  addHeartPoint(e.clientX, e.clientY, ["✨", "❤️", "💖", "💜"], 32);
  openMessageModal({
    badge: "✨ Gizli Köşe Sürprizi",
    title: "Beni Buldun Nihoşum! ❤️",
    text: "Sayfanın köşesine sakladığım bu küçük kalbi bile fark ettin... Tıpkı hayatımdaki en küçük detayları bile fark edip güzelleştirdiğin gibi. Seni çok seviyorum, 3. yılımız kutlu olsun! ❤️"
  });
});

// =========================================================
// TOAST & GENEL NAVİGASYON EVENTLERİ
// =========================================================
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById("toast-notification");
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add("hidden"), 2400);
}

document.getElementById("nav-home-btn").addEventListener("click", openMainMenu);
document.getElementById("back-to-menu-btn").addEventListener("click", openMainMenu);
document.getElementById("back-to-menu-btn-bottom").addEventListener("click", openMainMenu);

document.getElementById("prev-page-btn").addEventListener("click", () => {
  if (state.currentSectionIndex > 0) openSection(state.currentSectionIndex - 1);
});
document.getElementById("prev-page-btn-bottom").addEventListener("click", () => {
  if (state.currentSectionIndex > 0) openSection(state.currentSectionIndex - 1);
});

document.getElementById("next-page-btn").addEventListener("click", () => {
  if (state.currentSectionIndex >= 0 && state.currentSectionIndex < SITE_SECTIONS.length - 1) {
    openSection(state.currentSectionIndex + 1);
  }
});
document.getElementById("next-page-btn-bottom").addEventListener("click", () => {
  if (state.currentSectionIndex >= 0 && state.currentSectionIndex < SITE_SECTIONS.length - 1) {
    openSection(state.currentSectionIndex + 1);
  }
});

document.getElementById("quick-jump-toggle").addEventListener("click", () => {
  document.getElementById("quick-jump-drawer").classList.toggle("hidden");
});
document.getElementById("close-quick-jump").addEventListener("click", () => {
  document.getElementById("quick-jump-drawer").classList.add("hidden");
});
document.getElementById("nav-favorites-btn").addEventListener("click", openFavoritesView);

// Başlangıç Kurulumu
loadSavedState();
buildMenus();
startAnniversaryCounter();
renderDailyMessage();
updateStatsUI();