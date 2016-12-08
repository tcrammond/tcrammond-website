function pusheen () {
  var css = '.pusheen{position: absolute;transform: translate(0);top: 0;left: 0;animation: cat 5s step-end infinite running;transform-origin: 50%;}'
  var style = document.createElement('style')
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css))

  var cat = document.createElement('img')
  cat.src = 'http://vignette2.wikia.nocookie.net/glee/images/3/37/Pusheen.png/revision/20120814044316'
  cat.setAttribute('class', 'pusheen')

  document.head.appendChild(style)
  document.body.append(cat)
}
