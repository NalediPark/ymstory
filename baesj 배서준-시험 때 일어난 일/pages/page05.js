var page = new Page();

page.text = `

엄마가 나를 칭찬해 주셨다.


`

page.addChoice(new Choice('처음으로 돌아가기', 0));


window.book.addPage(5, page);
