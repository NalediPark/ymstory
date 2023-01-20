var page = new Page();

page.text = `
놀다가 청소때문에 더 늦었다.
`;

page.addChoice(new Choice('처음으로', 0));
page.addChoice(new Choice('1탄 시작하기', 1));

window.book.addPage(14, page);
