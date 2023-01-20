var page = new Page();

page.text = `
당신은 너무큰 대대대대대대대대대검을 이용해서
깔려 죽었다...

`;

page.addChoice(new Choice('다시하기', 0));


window.book.addPage(12, page);
