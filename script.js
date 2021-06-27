const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
  <h1 style="color:#334443"> Event KeyCodes.. </h1>
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>
<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})