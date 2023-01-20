var page = new Page();

page.text = `
이야기속 나 가 빈 소원은 세상모든 사람들이 다른 힘든 사람을 봤을때 도움을 줄수있도록, 도움을 주고 뿌듯함과 행복함을 느낄수 있도록 해달라는 소원이다.
`;

page.addChoice(new Choice('다른엔딩보기(처음으로)', 0));

window.book.addPage(22, page);
