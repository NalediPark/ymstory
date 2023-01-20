var page = new Page();

page.text = `
1시간 이상을 했습니까?아님 1시간 이하를 했습니까?
`;

page.addChoice(new Choice('1시간이상', 5));
page.addChoice(new Choice('1시간이하', 4));

window.book.addPage(2, page);
