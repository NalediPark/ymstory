var page = new Page();

page.text = `
남자아이:안녕 미르!
미르:안녕!
`;

page.addChoice(new Choice('넘어가기', 2));

window.book.addPage(1, page);
