import View from "../View.js";

export default class Posts extends View {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
        this.state = {
            1: {
                id: 1,
                name: 'Nostrud in velit elit excepteur irure.',
                time: new Date('11/06/2025 15:40'),
                desc: 'Commodo tempor et do velit do minim laboris consectetur fugiat.'
            },
            2: {
                id: 2,
                name: 'Nostrud in velit elit excepteur irure.',
                time: new Date(),
                desc: 'Dolor adipisicing eiusmod dolore qui anim excepteur dolor eiusmod veniam ut laborum voluptate nostrud est anim sed sed commodo excepteur minim dolor consequat qui ut consectetur sed ut laboris tempor labore est.'
            },
            3: {
                id: 3,
                name: 'Nostrud in velit elit excepteur irure.',
                time: new Date(),
                desc: 'Aute excepteur nisi ullamco in ad adipisicing elit dolor irure in excepteur enim enim officia id est magna commodo sunt dolore ut ut voluptate eu minim proident cillum adipisicing mollit ut officia consequat in ut esse officia fugiat eu nisi ullamco dolore sed dolor sunt sit reprehenderit fugiat ex fugiat quis et mollit ex sed do dolor eiusmod occaecat eiusmod deserunt commodo non in elit cupidatat anim elit esse laborum magna culpa adipisicing esse non excepteur irure ex do exercitation ex sint et ut elit et labore dolor velit est id id in culpa aliquip magna est consectetur laboris culpa elit exercitation laborum fugiat ex nisi ut officia et ullamco irure non et ut in nostrud nostrud esse pariatur qui cupidatat id ex id culpa magna do sed sit amet velit est esse ut ex consectetur sit in magna mollit fugiat sint consectetur amet sint ea cupidatat quis incididunt non sed dolor ea anim officia ea sed velit consectetur anim duis sunt id in nostrud velit exercitation reprehenderit incididunt esse nostrud commodo dolore cillum amet cillum nulla aliqua labore enim dolore dolor eu magna.'
            },
            4: {
                id: 4,
                name: 'Nostrud in velit elit excepteur irure.',
                time: new Date('11/06/2005 15:40'),
                desc: 'Reprehenderit ullamco dolor aliqua irure sint sed consequat ut in eu magna magna veniam in in aliqua.'
            },
            5: {
                id: 5,
                name: 'Nostrud in velit elit excepteur irure.',
                time: new Date('11/06/2025 15:40'),
                desc: 'Reprehenderit ullamco dolor aliqua irure sint sed consequat ut in eu magna magna veniam in in aliqua.'
            }
        }
    }

    getList() {
        const postList = Object.values(this.state).map((post) => `
                <div class="post">
                    <a href="/posts/${post.id}" data-slink>
                        <h2 class="post_name">${post.name || 'Empty'} #${post.id}</h2>
                    </a>
                    <p class="post_desc">${post.desc || 'Empty'}</p>
                    <p class="post_time">${post.time.toLocaleString()}</p>
                </div>
            `).join("");

        return postList
    }

    async returnHtml() {
        return `
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>
            <div class="posts">
                ${this.getList()}
            </div>
        `;
    }
}