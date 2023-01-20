var page = new Page();

page.text = `
8시 55분!
겨우 지각을 피했네요!
친구들이 반겨줍니다.
(HAPPY END)
`;

page.addChoice(new Choice('처음부터', 0));
page.addChoice(new Choice('이전 단계', 2));

window.book.addPage(11, page);
