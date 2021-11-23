function main(t, id) {
    var state = zimoli.createState(id);
    var page = createVboxWithState(state);
    page.innerHTML = news;
    var items = data.from(t.actionId);
    render(page, {
        list,
        item,
        items
    });
    return page;
}