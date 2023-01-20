var page = new Page();

page.text = `
유튜브 보는 척 하면서 게임!재밌다ㅎㅎ
`;

page.addChoice(new Choice('처음으로', 0));
page.addChoice(new Choice('1탄 시작하기', 1));

window.book.addPage(11, page);
