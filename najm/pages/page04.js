var page = new Page();

page.text = `
엥벙랜드에 온 영희! 하지만 영희는 배가 고프네요... 영희의 선택은?
`;

page.addChoice(new Choice('민트색 케챱이 뿌려져있는 핫도그', 5));
page.addChoice(new Choice('초콜렛도 안 들어있는 민트 아이스크림', 06));
page.addChoice(new Choice('안해', 15));

window.book.addPage(4, page);
