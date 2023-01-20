var page = new Page();

page.text = `
처음보는 과일이 떨어져있다. 배고픈데 먹어볼까 ?
`;

page.addChoice(new Choice('먹는다', 4));
page.addChoice(new Choice('안먹는다', 5));

window.book.addPage(2, page);
