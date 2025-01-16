function loadHTML(selector, url) {
  const element = document.querySelector(selector);
  if (element) {
    fetch(url)
      .then(res => res.text())
      .then(data => {
        element.innerHTML = data;
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const scriptElement = doc.querySelector('script');
        if (scriptElement) {
          eval(scriptElement.textContent);
        }
      });
  }
}

loadHTML('.nav', '/Navigation/navheader.html');
loadHTML('.footer', '/Navigation/footer.html');
