import View from "../View.js";

export default class PostView extends View {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Viewing Post");
    }

    async returnHtml() {
        return `
            <button onclick="window.history.back()" style="border: none; background: none; font-size: 25px; cursor: pointer;">
                &larr;
            </button>
            <h1>Post #${this.postId}</h1>
            <p>Will be done in the future...</p>
        `;
    }
}
