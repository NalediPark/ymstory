var page = new Page();

page.text = `
당신은 일어났습니다.
하지만 너무 졸립니다.
어떻게 할까요?
`;

page.addChoice(new Choice('학교 가기', 2));
page.addChoice(new Choice('계속 자기', 8));

window.book.addPage(1, page);
