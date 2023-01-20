var page = new Page();

page.text = `
수박이냐!
사과냐!
그것이 문제로다!

작가:이도현
`;
page.addChoice(new Choice('사과', 2));
page.addChoice(new Choice('수박', 1));

window.book.addPage(0, page);
