var page = new Page();

page.text = `
봉인볼을 던졌다.

`;

page.addChoice(new Choice('다음', 10));


window.book.addPage(7, page);
