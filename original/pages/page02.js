var page = new Page();

page.text = `
2페이지
이곳에 내용을 넣어주세요.
이곳에 내용을 넣어주세요.
`;

page.addChoice(new Choice('첫번째 선택지', 4));
page.addChoice(new Choice('두번째 선택지', 5));

window.book.addPage(2, page);
