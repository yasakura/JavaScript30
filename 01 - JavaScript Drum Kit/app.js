var key = document.querySelectorAll('div[data-key]')
for (var index = 0, len = key.length; index < len; index++) {
  key[index].addEventListener('transitionend', function (event) {
    if (event.propertyName !== 'transform') return
    event.target.classList.remove('playing')
  }, false)
}

window.addEventListener('keydown', function (event) {
  var num = event.keyCode
  var key = document.querySelector('div[data-key="' + num + '"]')
  var audio = document.querySelector('audio[data-key="' + num + '"]')

  if (!key) return

  key.classList.add('playing')
  audio.currentTime = 0
  audio.play()
}, false)
