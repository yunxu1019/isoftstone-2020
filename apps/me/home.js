
function main() {
    var page = createVboxWithState(state);
    page.innerHTML = home;
    on("scroll")(page, function (event) {
        var { scrollTop } = this;
        var image = this.querySelector(".bg");
        image.style.top = fromOffset(scrollTop);
        // console.log(image, scrollTop)
    });
    render(page, {
        list,
        time(t) {
            if (t instanceof Array) return t.map(this.time).join(',');
            return filterTime(t);
        },

        item: job,
        items: experience
    });
    return page;
}