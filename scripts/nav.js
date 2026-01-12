function has_game_started() {
    return false;
}

const nav_button = [
    { label: 'HOME', link: '/' },
    { label: 'ABOUT', link: '/about.html' },
    { label: 'TESTIOMONAL', link: '/testiomonal.html' },
    has_game_started() ?
        { label: 'GAME', link: '/game.html' }
        : { label: 'ADOPT', link: '/adopt.html' }
];

const nav_container = document.getElementById('main-nav');
nav_container.innerHTML = '';


function is_active(page_name){
    let url = window.location.href;
    let found = url.search(page_name.toLowerCase());

    if(found > 0){
        return true;
    } else{
        return false;
    }
}

nav_button.forEach(item => {
    const a = document.createElement('a');
    a.textContent = item.label;
    a.href = item.link;

    a.classList.add('nav-link');
    if(is_active(item.label)){
        a.classList.add("active")
    }
        // ${is_this_active(button.label) ? 'active' : ''}
        // " href="${button.link}'>${button.label}</a>';

    nav_container.appendChild(a);
});

