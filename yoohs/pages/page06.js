var page = new Page();

page.text = `
당신은 전설의 금메달리스트가 되었습니다!
`;

page.addChoice(new Choice('처음으로', 0));
page.addChoice(new Choice('2탄 시작하기', 8));

window.book.addPage(6, page);
