var page = new Page();

page.text = `
1페이지
이곳에 내용을 넣어주세요.
이곳에 내용을 넣어주세요.
`;

page.addChoice(new Choice('첫번째 선택지', 2));
page.addChoice(new Choice('두번째 선택지', 3));

window.book.addPage(1, page);
