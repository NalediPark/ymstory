var page = new Page();

page.text = `
너무 뜨거워ㅓㅓㅓㅓㅓㅓ

당신은 재빨리 물에서 나와 왼쪽으로 갔다
`;

page.addChoice(new Choice('슬라임 죽였으면 여기 클릭', 14));
page.addChoice(new Choice('안 죽였으면 여기 클릭', 46));

window.book.addPage(44, page);
