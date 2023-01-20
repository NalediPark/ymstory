var page = new Page();

page.text = `
계속 본다.
며칠 뒤 시험 시간. 내가 열공한 덕에 내 머리는 터질 것 같았지만 그 결과는 100점!! 매으으으우 만족스러웠다.
집에 가서 엄마한테 자랑했더니 엄마가 잘했다며 10000원을 주셨다.
다음 시험 시간을 노리며 또 공부할까? 아니면 놀까?
`;

page.addChoice(new Choice('논다', 13));
page.addChoice(new Choice('공부한다', 12));

window.book.addPage(7, page);
