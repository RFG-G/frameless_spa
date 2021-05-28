import View from "../View.js";

export default class Dashboard extends View {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
        this.state = {
            username: 'User123'
        }
    }


    async returnHtml() {
        return `
            <h1>Hello, ${this.state.username}</h1>
            <p>
                Very important info
            </p>
        `;
    }
}