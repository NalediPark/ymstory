var page = new Page();

page.text = `
당신은 탈락 입니다.
`;

page.addChoice(new Choice('처음으로 돌아가기', 0));


window.book.addPage(8, page);
