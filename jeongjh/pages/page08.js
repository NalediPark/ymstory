var page = new Page();

page.text = `
당신은 슬라임을 설득시키려 한다
`;

page.addChoice(new Choice('(이러쿵저러쿵)', 9));

window.book.addPage(8, page);
