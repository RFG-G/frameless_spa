import { pathToRegex, getParams } from './utils.js';

export const router = async (routes) => {
    const potentialMatches = routes.map(route => ({
            result: location.pathname.match(pathToRegex(route.path)),
            route
    }));

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null) || {
            route: routes[0],
            result: [location.pathname]
    };

    const newView = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await newView.returnHtml();
};
