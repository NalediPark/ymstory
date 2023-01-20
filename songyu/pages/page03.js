var page = new Page();

page.text = `
추운데 수영을 할까 그냥 모래에 있을까?
`;

page.addChoice(new Choice('모래에 있는다 ', 6));
page.addChoice(new Choice('수영을 한다', 7));

window.book.addPage(3, page);
