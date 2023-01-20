var page = new Page();

page.text = `
바다가 아름답다
`;

page.addChoice(new Choice('처음으로 돌아가기', 0));


window.book.addPage(6, page);
