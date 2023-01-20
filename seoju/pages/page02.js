var page = new Page();

page.text = `
-활과 화살
공격을 하다 보니 화살이 다 떨어져 간다.
어떤 방법으로 싸우시겠습니까?
`;

page.addChoice(new Choice('화살을 검들듯이 들고 싸운다.', 4));
page.addChoice(new Choice('마지막 한발 까지 쏜다.', 5));

window.book.addPage(2, page);
