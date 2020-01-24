
function main() {
    var page = createVboxWithState(state);
    page.innerHTML = home;
    render(page, {
        list,
        item: job,
        items: experience
    });
    return page;
}