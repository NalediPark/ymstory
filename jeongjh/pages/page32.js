var page = new Page();

page.text = `
쪽지가 있다
`;

page.addChoice(new Choice('읽는다', 33));

window.book.addPage(32, page);
