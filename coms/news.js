function main(t) {
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