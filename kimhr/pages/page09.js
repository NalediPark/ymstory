var page = new Page();

page.text = `
바이러스를 치료하지 못해 내몸은 완전히 좀비가 되었고 나의 영혼은 몸체에서 빠져나와 귀신이 되었다.. 다시시도해보자
`;

page.addChoice(new Choice('처음으로', 0));

window.book.addPage(9, page);
