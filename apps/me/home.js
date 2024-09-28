var getTime = function (a, desc) {
    if (a instanceof Array) return getTime(desc ? a[a.length - 1] : a[0]);
    if (!a) return NaN;
    a = a.split('~')[0];
    return new Date(a);
};
function main() {
    var page = document.createElement('div');
    page.innerHTML = home;

    on("scroll")(page, function (event) {
        var { scrollTop } = this;
        var image = this.querySelector(".bg");
        image.style.top = fromOffset(scrollTop);
        // console.log(image, scrollTop)
    });
    var scope = {
        padding,
        lattice,
        ignore: true,
        follow: true,
        hr: true,
        a: button,
        time(t) {
            if (t instanceof Array) return t.map(this.time, this).join(',');
            return filterTime(t);
        },
        sort() {
            var desc = +this.desc;
            this.items.sort((a, b) => {
                if (desc) {
                    a = getTime(a.time, true);
                    b = getTime(b.time, true);
                    return b - a;
                }
                a = getTime(a.time, false);
                b = getTime(b.time, false);
                return a - b;
            });
        },
        refresh() {
            var items = experience.slice();
            if (this.ignore) {
                items = items.filter(a => !a.ignore);
            }
            if (this.hr) {
                items = items.filter(a => a.hr);
            }
            else {
                items = items.filter(a => a.hr !== 2);
            }
            this.schools = items.filter(a => a.study);
            this.items = items;
        },
        desc: 1,
        checker,
        item: job,
        experience,
        items: experience
    };
    scope.refresh();
    render(page, scope);
    return page;
}