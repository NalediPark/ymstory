var page = new Page();

page.text = `
당신은 그 남자에게 이 세계 를 배우고
이곳의 관리자가 되었다

히든앤딩:관리자
`;

page.addChoice(new Choice('첫번째 선택지', 0));
page.addChoice(new Choice('두번째 선택지', 0));

window.book.addPage(41, page);
