var loadeditems = [];
function main(elem) {
    watch(elem, 'newsid', function (newsid) {
        if (!newsid) return;
        var index = loadeditems.map(a => a.id).indexOf(elem.newsid);
        elem.innerHTML = item;
        if (index >= 0) {
            var res = loadeditems[index];
        } else {
            res = data.from("story", { id: elem.newsid });
            res.id = elem.newsid;
            loadeditems.push(res);
            if (loadeditems.length > 10000) loadeditems.shift();
        }
        render(elem, {
            a: button,
            time(t) {
                if (!+t) return '';
                return filterTime(t);
            },

            open() {
                if (this.item.url) {
                    window.open(this.item.url);
                }
            },
            item: res,
        });
    })
    return elem;
}