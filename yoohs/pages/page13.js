var page = new Page();

page.text = `
집에서 더 재밌게 놀았다!
`;

page.addChoice(new Choice('처음으로', 0));
page.addChoice(new Choice('1탄 시작하기', 1));

window.book.addPage(13, page);
