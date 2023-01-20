var page = new Page();

page.text = `
흠.. 이제 어떤 방식으로 구조를 요청하지 ?
`;

page.addChoice(new Choice('뗏목 만들기', 10));
page.addChoice(new Choice('SOS 쓰기', 11));

window.book.addPage(8, page);
