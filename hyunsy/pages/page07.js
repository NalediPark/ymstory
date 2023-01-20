var page = new Page();

page.text = `
폭팔 덕분에 살았다.
`;

page.addChoice(new Choice('계속하기', 8));
page.addChoice(new Choice('처음으로 돌아가기', 0));

window.book.addPage(7, page);
