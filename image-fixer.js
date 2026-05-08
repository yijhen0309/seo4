document.addEventListener('error', function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        event.target.src = 'https://images.unsplash.com/photo-1595981234058-a9302fb97229?auto=format&fit=crop&q=80&w=800';
    }
}, true);
