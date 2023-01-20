var page = new Page();

page.text = `
흠.. 무슨 방법으로 구조를 요청해야 할까 ?
`;

page.addChoice(new Choice('불 피우기', 6 ));
page.addChoice(new Choice('휴대폰 찾기', 7));

window.book.addPage(3, page);
