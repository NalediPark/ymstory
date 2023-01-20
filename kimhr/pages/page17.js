var page = new Page();

page.text = `
나는 포상금으로 부자가 되었고 지나가는 곳마다 나를 알아보고 인사해주었다.행복이란게 이런거구나.도움을 주면 언젠가는 반드시 댓가가 찾아온다. 내가 받은 댓가는 돈도 인기도 아닌 행복인것 같다. -the end-
`;

page.addChoice(new Choice('다른엔딩보기(처음으로)', 0));

window.book.addPage(17, page);
