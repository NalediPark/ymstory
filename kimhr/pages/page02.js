var page = new Page();

page.text = `
헉..좀비라고..? 집에 식량이 얼마 없는데,,,
`;

page.addChoice(new Choice('더 심해지기전에 밖에나가 식량을 구한다.', 4));
page.addChoice(new Choice('조금잠잠해질때까지 집에서 기다린다.', 5));

window.book.addPage(2, page);
