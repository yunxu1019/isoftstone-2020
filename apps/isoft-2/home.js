put('/hot', news);
put('/max', news);
put('/top', news);
put('/new', news);

var tags = `
News-Reader /hot top-most
`.split(",").map(function (tag, cx) {
    var [name, path, actionId] = tag.trim().split(/\s+/);
    return { name, path, actionId, index: cx };
});
function main() {
    var page = createElement(div);
    page.initialStyle = 'transform:scale(.9);opacity:0;';
    page.innerHTML = home;
    render(page, {
        tags,
        titlebar,
        btn: button,
        currentPage: 0,
        view(t, page) {
            page.go(t.index);
        },
        slider(elem) {
            var pages = slider(elem, (index, ratio) => {
                if (ratio === 1) {
                    this.currentPage = index;
                    state({
                        page: index
                    });
                }
                var t = tags[index];
                if (!t) return;
                return t.news ? t.news : t.news = news(t);
            });
            pages.go(state().page || 0);
            return pages;
        }
    });
    return page;
}