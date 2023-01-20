var page = new Page();

page.text = `
x꼬에 찔렸다
`;

page.addChoice(new Choice('처음으로 돌아가기', 0));
window.book.addPage(13, page);
