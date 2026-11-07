(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('navlinks');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
  }
  var links = window.PROJECT_LINKS || {};
  document.querySelectorAll('[data-code]').forEach(function (el) {
    var url = links[el.getAttribute('data-code')];
    if (url) {
      var a = el.querySelector('a');
      a.href = url;
      el.hidden = false;
    }
  });
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
