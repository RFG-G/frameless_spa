import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";

import { router } from './router.js';

const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/posts/:id", view: PostView }
];

const goTo = (url) => {
    history.pushState(null, null, url);
    router(routes);
};

window.addEventListener("popstate", () => router(routes));

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-slink]")) {
            if (e.target.dataset.slink) {
                window.open(e.target.dataset.slink)
            } else {
                e.preventDefault();
                goTo(e.target.href || '/');
            }
        }
    });
    router(routes);
});
