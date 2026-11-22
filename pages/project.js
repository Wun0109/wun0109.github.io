document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-copy]');
  if (!b) return;
  var code = b.parentElement.querySelector('code');
  if (!code || !navigator.clipboard) return;
  navigator.clipboard.writeText(code.textContent).then(function () {
    var t = b.textContent;
    b.textContent = '已複製';
    setTimeout(function () { b.textContent = t; }, 1500);
  });
});
