var page = new Page();

page.text = `
학교 가기에는 조금 이릅니다.
그리고 조금 배고픕니다.
저기 앞에 분식집이 있네요!
`;

page.addChoice(new Choice('먹고 가기', 5));
page.addChoice(new Choice('계속 가기', 11));

window.book.addPage(2, page);
