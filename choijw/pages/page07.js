var page = new Page();

page.text = `
수학시험0점
으악악악!

`;

page.addChoice(new Choice('다음', 0));
 
window.book.addPage(7, page);
