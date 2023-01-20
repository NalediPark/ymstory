var page = new Page();

page.text = `
당신은 집으로 돌아갔다
당신은 집에서 다시 평범한 날들을 보낼것이다

트루앤딩2:집으로
`;

page.addChoice(new Choice('첫번째 선택지', 0));
page.addChoice(new Choice('두번째 선택지', 0));

window.book.addPage(26, page);
