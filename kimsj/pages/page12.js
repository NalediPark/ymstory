var page = new Page();

page.text = `
공부한다.
아싸! 시험 100점!! 1000원을 받았다.
`;

page.addChoice(new Choice('다음', 15));

window.book.addPage(12, page);
