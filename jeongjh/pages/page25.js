var page = new Page();

page.text = `
그렇게 당신은 모두와 이 곳에서
함꺼 일상을 보낼 것이다

트루앤딩1:모두와 함께
`;

page.addChoice(new Choice('첫번째 선택지', 0));
page.addChoice(new Choice('두번째 선택지', 0));

window.book.addPage(25, page);
