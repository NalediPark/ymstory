var page = new Page();

page.text = `
으악 ! 뗏목이 부서졌잖아 !
`;

page.addChoice(new Choice('다음으로', 15));


window.book.addPage(10, page);
