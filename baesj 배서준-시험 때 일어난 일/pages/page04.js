var page = new Page();

page.text = `
공부를 해서 시험을 보았다.
그런데 100점을 맞았다.

`;

page.addChoice(new Choice('다음으로', 5));


window.book.addPage(4, page);
