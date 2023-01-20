var page = new Page();

page.text = `
그냥이름이 연구원인 사람이었다!
`;

page.addChoice(new Choice('다음으로', 6));

window.book.addPage(19, page);
