
const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        // console.log(entries)
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                // const src = img.dataset.src || img.getAttribute('src');

                img.setAttribute('src', src);
                img.classList.add('fade');
                img.classList.add('visible');

                observer.disconnect();
            }
        });
    });

    io.observe(target)
};

setTimeout(() => {
    window.LazyTargets = document.querySelectorAll('img[data-src]');
    window.LazyTargets.forEach(lazyLoad);
}, 2000);
