


describe('Chỉnh sửa đơn hàng Airtime Eload', () => {
  beforeEach(()=>
  {
    cy.viewport(1920,1024);
    cy.visit('http://192.168.100.192:1999/');
     //login
     cy.get('#exampleInputEmail1').type('hangptdv');
     cy.get('#exampleInputPassword1').type('123456');
     cy.get('.btn-success').click();
     cy.wait(300);
     //click list order
    
     cy.get('.app-sidebar__heading').contains('Mua/Bán hàng hoá Viễn thông');
     cy.get('li:contains("Đơn hàng Airtime, Eload")').click()
     .children('ul.mm-collapse')
     .invoke('css', 'display', 'block')
     .find('a:contains("Danh sách")')
     .click();
     cy.wait(300);
  })
  it.skip('Chỉnh sửa đơn hàng thành trạng thái Mới tạo', () => {
    //Lọc đơn Lưu tạm
    cy.get('#status_chosen').click().type('Mới tạo{enter}');
    cy.get('#searchListOrder').click();
    cy.wait(300);
    //Chọn chỉnh sửa
    cy.get('td.text-center').eq(0).click();

    cy.wait(300);

   
   cy.get('#inputProduct_chosen').click().type('Mobifone 100.000 {enter}');



   //Nhập số lượng
   cy.get('.product-row').each(($row, index) => {
    cy.wrap($row)
      .find('.product-value')
      .then(($price) => {
        if ($price.text().includes("10,000")) 
        {
          cy.get('.quantity-' + index).click().clear().type('4');

        } else if ($price.text().includes("20,000"))
        {
          cy.get('.quantity-' + index).click().clear().type('5');
        }
        else if ($price.text().includes("30,000"))
        {
          cy.get('.quantity-' + index).click().clear().type('6');
        }
        else if ($price.text().includes("50,000"))
        {
          cy.get('.quantity-' + index).click().clear().type('7');
        }
        
        
      });
  });

  //Nhập chiết khấu
  cy.get('.product-row').each(($row, index) => {
    cy.wrap($row)
      .find('.product-value')
      .then(($price) => {
        if ($price.text().includes("10,000")) 
        {
          cy.get('.commission-' + index).clear().type('1');

        } else if ($price.text().includes("20,000"))
        {
          cy.get('.commission-' + index).clear().type('1.5');
        }
        else if ($price.text().includes("30,000"))
        {
          cy.get('.commission-' + index).clear().type('2.5');
        }
        else if ($price.text().includes("50,000"))
        {
          cy.get('.commission-' + index).clear().type('2.6');
        }
        
      });
  });
  
  // click button 'Gửi duyệt'
  cy.get('button').contains('Lưu tạm').click();


  });

  it('Chỉnh sửa đơn hàng thành trạng thái Gửi duyệt', () => {
    //Lọc đơn Lưu tạm
    cy.get('#status_chosen').click().type('Mới tạo{enter}');
    cy.get('#searchListOrder').click();
    cy.wait(300);
    //Chọn chỉnh sửa
    cy.get('td.text-center').eq(0).click();
   
    cy.wait(300);

   cy.get('#inputProduct_chosen').click().type('Mobifone 100.000 {enter}');



   //Nhập số lượng
   cy.get('.product-row').each(($row, index) => {
    cy.wrap($row)
      .find('.product-value')
      .then(($price) => {
        if ($price.text().includes("10,000")) 
        {
          cy.get('.quantity-' + index).clear().type('4');

        } else if ($price.text().includes("20,000"))
        {
          cy.get('.quantity-' + index).clear().type('5');
        }
        else if ($price.text().includes("30,000"))
        {
          cy.get('.quantity-' + index).clear().type('6');
        }
        else if ($price.text().includes("50,000"))
        {
          cy.get('.quantity-' + index).clear().type('7');
        }
        
        
      });
  });

  //Nhập chiết khấu
  cy.get('.product-row').each(($row, index) => {
    cy.wrap($row)
      .find('.product-value')
      .then(($price) => {
        if ($price.text().includes("10,000")) 
        {
          cy.get('.commission-' + index).click().type('1');

        } else if ($price.text().includes("20,000"))
        {
          cy.get('.commission-' + index).click().type('1.5');
        }
        else if ($price.text().includes("30,000"))
        {
          cy.get('.commission-' + index).click().type('2.5');
        }
        else if ($price.text().includes("50,000"))
        {
          cy.get('.commission-' + index).click().type('2.6');
        }
        
      });
  });
  
  // click button 'Gửi duyệt'
  cy.get('button').contains('Gửi duyệt').click();


  });



})