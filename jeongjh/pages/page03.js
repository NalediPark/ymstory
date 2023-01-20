var page = new Page();

page.text = `
문을 발견했다

나갈까?
`;

page.addChoice(new Choice('나간다', 4));
page.addChoice(new Choice('좀 더 살펴본다', 32));

window.book.addPage(3, page);
