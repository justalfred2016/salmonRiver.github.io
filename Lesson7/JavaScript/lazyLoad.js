let options = {
    threshold: "0.25",
    rootMargin: "0px 0px -300px 0px"

  }
  
  const observer = new IntersectionObserver(imageObserver, options);
  
  function imageObserver(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const img_src = img.dataset.src;
            img.src = img_src;
            observer.unobserve(img);
        }
    })
  }
  
  let imgs = document.querySelectorAll('main div img');
  
  imgs.forEach(img => {
    observer.observe(img);
  })