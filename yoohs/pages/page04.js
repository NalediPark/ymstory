var page = new Page();

page.text = `
전쟁으로 인해 사망...
`;

page.addChoice(new Choice('처음으로', 0));
page.addChoice(new Choice('2탄 시작하기', 8));

window.book.addPage(4, page);
