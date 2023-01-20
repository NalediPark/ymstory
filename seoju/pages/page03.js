var page = new Page();

page.text = `
-검
아무리 발악을 해도 사거리가 짧아 용에게 공격을 못하고 있다.
어떤 방법으로 싸우시겠습니까?
`;

page.addChoice(new Choice('검을 던진다.', 6));
page.addChoice(new Choice('용이 내려올때까지 기다린다.', 7));

window.book.addPage(3, page);
