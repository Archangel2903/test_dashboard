import '../scss/main.scss';
import 'intersection-observer';
import $ from 'jquery';

$(window).on('load', function () {
    let b = $('body');
    let pw = $('.preload-wrapper');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        b.addClass('ios');
    } else {
        b.addClass('web');
    }

    pw.fadeOut(300);
});

document.addEventListener('DOMContentLoaded', function () {
    // Lazy load observer
    const imagesAll = document.querySelectorAll('img[data-src]');
    let imgObserve = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio >= 0 && entry.target.hasAttribute('data-src')) {
                let current = entry.target;
                let source = current.getAttribute('data-src');

                current.setAttribute('src', source);
                current.removeAttribute('data-src');
            }
        });
    });
    if (imagesAll.length > 0) {
        imagesAll.forEach(function (image) {
            imgObserve.observe(image);
        });
    }

    // Menu button
    const sidebar = document.querySelector('.sidebar');
    const button = document.querySelector('.hamburger-menu');

    button.addEventListener('click', function (e) {
        e.target.classList.toggle('active');
        sidebar.classList.toggle('open');
        document.body.classList.toggle('overflow-hidden');
    });
});

