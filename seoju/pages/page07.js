var page = new Page();

page.text = `
-용이 내려 올때 까지 기다린다.
기다리다가 용의 브레스의 죽었다.

`;

page.addChoice(new Choice('처음으로', 0));


window.book.addPage(7, page);
