var page = new Page();

page.text = `
조준하다 드레곤 마왕에게 사망하였습니다.


`;

page.addChoice(new Choice('다시하기', 0));


window.book.addPage(13, page);
