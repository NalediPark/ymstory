var page = new Page();

page.text = `
Zzz... Zzz...
좋은 꿈을 꾸나 봅니다.
꿈에서 깨지 않을 것 같아요!
(HAPPY END)
`;

page.addChoice(new Choice('처음으로', 0));
page.addChoice(new Choice('이전 단계', 6));

window.book.addPage(10, page);
