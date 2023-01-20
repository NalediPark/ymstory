var page = new Page();

page.text = `
당신은 남자를 따라갔다
그리고...
`;

page.addChoice(new Choice('다음', 41));

window.book.addPage(22, page);
