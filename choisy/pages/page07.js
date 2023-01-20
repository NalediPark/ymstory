var page = new Page();

page.text = `
휴대폰을 찾았다 ! 근데 , 통신이 안되잖아 !
`;

page.addChoice(new Choice('다음으로', 15));


window.book.addPage(7, page);
