var page = new Page();

page.text = `
-화살을 검들 듯이 들고 싸운다.
화살을 드니 몸안에서 무언의 힘이 솟구쳐 용을 손쉽게 베었다.
-끝- 만든이: 서정우
`;

page.addChoice(new Choice('끝', 0));


window.book.addPage(4, page);
