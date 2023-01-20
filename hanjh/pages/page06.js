var page = new Page();

page.text = `
정말 좋은 선택입니다!!!
`;

page.addChoice(new Choice('처음으로 돌아가기', 1));
page.addChoice(new Choice('전 페이지로 돌아가기',3));

window.book.addPage(6, page);
