var page = new Page();

page.text = `
그런데 공부를 하지 않고 시험을 봤다.
그래서 50점을 맞았다. 안 돼!!!

`;

page.addChoice(new Choice('다음으로', 7));


window.book.addPage(6, page);
