function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNum = getRandomInt(1, 100);
// get date
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Month is zero-based, so add 1
const day = currentDate.getDate();

// Format the date as per your requirements
const formattedDate = `${day}/${month}/${year}`;


describe('Tạo đơn hàng Airtime Eload', () => {
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
     .find('a:contains("Thêm mới")')
     .click();
     cy.wait(300);
  })
  it('Tạo đơn hàng với trạng thái Mới tạo', () => {
   cy.get('#providerId_chosen').click().type('Mobifone{enter}');
   cy.wait(500);
   cy.get('#inputProduct_chosen').click().type('Mobifone 10.000 {enter}');
   cy.get('#inputProduct_chosen').click().type('Mobifone 20.000 {enter}');
   cy.get('#inputProduct_chosen').click().type('Mobifone 30.000 {enter}');
   cy.get('#inputProduct_chosen').click().type('Mobifone 50.000 {enter}');

   //Chọn pháp nhân bán
   cy.get('#merchantSale_chosen').click().type('IMEDIA {enter}');
   cy.get('#merchantBuy_chosen').click().type('VISION{enter}');

   //Nhập số lượng
   cy.get('.product-row').each(($row, index) => {
    cy.wrap($row)
      .find('.product-value')
      .then(($price) => {
        if ($price.text().includes("10,000")) 
        {
          cy.get('.quantity-' + index).click().type('2');

        } else if ($price.text().includes("20,000"))
        {
          cy.get('.quantity-' + index).click().type('2');
        }
        else if ($price.text().includes("30,000"))
        {
          cy.get('.quantity-' + index).click().type('2');
        }
        else 
        {
          cy.log('Sản phẩm k có trong đơn hàng');
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
          cy.get('.commission-' + index).click().type('2.5');

        } else if ($price.text().includes("20,000"))
        {
          cy.get('.commission-' + index).click().type('2.6');
        }
        else if ($price.text().includes("30,000"))
        {
          cy.get('.commission-' + index).click().type('2.8');
        }
        else 
        {
          cy.log('Sản phẩm k có trong đơn hàng');
        }
      });
  });
  cy.get('#sale-note').type('Hangptt test xuất hóa đơn airtime' + " "+ randomNum + randomNum + " ngày " + formattedDate);
  // click button 'Gửi duyệt'
  // cy.get('button').contains('Lưu tạm').click();
  cy.get('button').contains('Gửi duyệt').click();
  cy.wait(500);


  });



})