var page = new Page();

page.text = `
당신은 보스에 도전했다.
도망을 부르는 비쥬얼 이다.

`;

page.addChoice(new Choice('다음', 11));


window.book.addPage(5, page);
