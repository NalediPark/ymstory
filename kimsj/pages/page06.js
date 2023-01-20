var page = new Page();

page.text = `
넘어간다.
며칠 뒤 시험 시간.나는 30점을 맞고 엄마한테 혼났다.근데 엄마의 주먹이 모였다.주먹이 날라온다는 소리다!!
피할까? 맞을까?
`;

page.addChoice(new Choice('피한다', 11));
page.addChoice(new Choice('맞는다', 10));

window.book.addPage(6, page);
