var page = new Page();

page.text = `
-마지막 한발까지 쏜다.
마지막 한발이 바람의 날아가 용의 브레스의 죽었다.

`;

page.addChoice(new Choice('처음으로', 0));


window.book.addPage(5, page);
