var page = new Page();

page.text = `
-검을 던진다.
검이 빗나가 용의 브레스의 죽었다.

`;

page.addChoice(new Choice('처음으로', 0));


window.book.addPage(6, page);
