var page = new Page();

page.text = `
슬라임이 길을 알려주었다

왼쪽으로 가자
`;

page.addChoice(new Choice('왼쪽으로', 12));

window.book.addPage(10, page);
