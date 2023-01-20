var page = new Page();

page.text = `
소리 때문에 들켰다.

`;

page.addChoice(new Choice('처음으로 돌아가기', 0));

window.book.addPage(11, page);
