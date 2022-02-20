export default function QueryModify(key, value, title = '', preserve_hash = false) {
    if (window.history.pushState) {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname
            + '?' + searchParams.toString();
        if(preserve_hash) newurl = newurl + window.location.hash;
        let oldTitle = document.title;
        if(title !== '') {
            window.history.replaceState({path: newurl}, title, newurl);
            if(document.title !== title) { // fallback if above doesn't work
                document.title = title;
            }
        } else { // in case browsers ever clear titles set with empty string
            window.history.replaceState({path: newurl}, oldTitle, newurl);
        }
    }
}