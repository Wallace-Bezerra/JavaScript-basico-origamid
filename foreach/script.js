const links = document.querySelectorAll("nav a");


function mostrarHref(item) {
    const href = item.href
    if (document.location.href === href) {
        item.style.backgroundColor = "black";
        item.style.color = "white";
    }

}

links.forEach(mostrarHref)