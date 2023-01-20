var page = new Page();

page.text = `
다행히 이해한 것 같다
`;

page.addChoice(new Choice('길을 물어본다', 10));

window.book.addPage(9, page);
