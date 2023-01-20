var page = new Page();

page.text = `
숙제가 너무 많이 남았다...
       실   패
`;

page.addChoice(new Choice('넘어가기', 7));


window.book.addPage(6, page);
