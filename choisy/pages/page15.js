var page = new Page();

page.text = `
당신은 무인도를 탈출하지 못했습니다 !
`;

page.addChoice(new Choice('처음으로', 0));


window.book.addPage(15, page);
