var page = new Page();

page.text = `
그렇다면 얼마나 더 하실 것 인가요?
`;

page.addChoice(new Choice('1시간 이상 ',8));
page.addChoice(new Choice('1시간 이하', 8));

window.book.addPage(7, page);
