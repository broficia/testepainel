// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
function toggleMenu() {
  const links = document.getElementById('navLinks');
  if (links) links.classList.toggle('open');
}

// ===== COOKIES =====
window.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookieBanner');
  if (banner && localStorage.getItem('cookiesAccepted')) banner.style.display = 'none';
});
function acceptCookies() {
  localStorage.setItem('cookiesAccepted', '1');
  const b = document.getElementById('cookieBanner');
  if (b) b.style.display = 'none';
}
function rejectCookies() {
  const b = document.getElementById('cookieBanner');
  if (b) b.style.display = 'none';
}
function manageCookies() {
  localStorage.removeItem('cookiesAccepted');
  const b = document.getElementById('cookieBanner');
  if (b) b.style.display = 'flex';
}

// ===== EXTERNAL LINK MODAL =====
let pendingUrl = '';
function openExternal(url) {
  pendingUrl = url;
  const m = document.getElementById('externalModal');
  if (m) m.style.display = 'flex';
}
function closeModal() {
  pendingUrl = '';
  const m = document.getElementById('externalModal');
  if (m) m.style.display = 'none';
}
function continueExternal() {
  if (pendingUrl) window.open(pendingUrl, '_blank');
  closeModal();
}

// ===== GALLERY TABS =====
function switchTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.gallery-content').forEach(c => c.classList.add('hidden'));
  event.target.classList.add('active');
  const el = document.getElementById(tab + 'Tab');
  if (el) el.classList.remove('hidden');
}

// ===== NEWS FILTER =====
function filterNews(type, btn) {
  document.querySelectorAll('.news-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.news-item').forEach(item => {
    if (type === 'all' || item.dataset.type === type) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

// ===== VIDEO PLAY =====
function playVideo(el, title) {
  const thumb = el.querySelector('.video-thumb');
  if (thumb) {
    thumb.innerHTML = `<div style="padding:20px;text-align:center;color:#fff"><p style="font-size:1rem;font-weight:700">▶ Reproduzindo: ${title}</p><p style="font-size:0.8rem;opacity:0.6;margin-top:8px">Vídeo disponível no app oficial</p></div>`;
  }
}

// ===== FAQ ACCORDION =====
function toggleFaq(el) {
  el.closest('.faq-item').classList.toggle('open');
}

// ===== SUPPORT TABS =====
function showSupportSection(id) {
  document.querySelectorAll('.support-section').forEach(s => s.style.display = 'none');
  document.querySelectorAll('.support-nav-btn').forEach(b => b.classList.remove('active'));
  const sec = document.getElementById(id);
  if (sec) sec.style.display = 'block';
  event.target.classList.add('active');
  sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== PAGINATION =====
function goToPage(n) {
  document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}
