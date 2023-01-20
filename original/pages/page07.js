var page = new Page();

page.text = `
이곳에 내용을 넣어주세요.
이곳에 내용을 넣어주세요.
이곳에 내용을 넣어주세요.
`;

page.addChoice(new Choice('첫번째 선택지', 0));
page.addChoice(new Choice('두번째 선택지', 0));

window.book.addPage(7, page);
