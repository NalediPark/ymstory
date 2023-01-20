var page = new Page();

page.text = `
피한다.
샥! 피했지만 한쪽 주먹만 피했다... 다른 주먹은 예상하지 못했다
3초 뒤 장면을 상상하면.......
`;

page.addChoice(new Choice('다음', 14));

window.book.addPage(11, page);
