var page = new Page();

page.text = `
오! 박사였다니!! 다행이다.
`;

page.addChoice(new Choice('빨리백신을 만들어 주세요!!', 14));

window.book.addPage(13, page);
