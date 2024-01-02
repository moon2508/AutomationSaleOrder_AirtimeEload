describe('Danh sách đơn hàng Airtime Eload', () => {
  beforeEach(() => {
    cy.viewport(1920, 1024);
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
  })
  it.skip('Lọc tìm kiếm mã đơn hàng', () => {
    cy.get('#keySearch').type('BH281220235435{enter}');

    //Kiểm tra danh sách có mã này không
    cy.get('td.text-center')
      .each(($column) => {
        const text = $column.text();
        if (text.includes("BH281220235435")) {
          cy.wrap($column).parent('tr').then(($row) => {
            cy.log("Tìm kiếm đúng mã đơn hàng");
            cy.log($row.text());
          });
        }
        else {
          cy.log("Không tìm thấy dữ liệu trong hàng");

        }
      });

  })

  it.skip('Lọc tìm kiếm Pháp nhân bán', () => {
    cy.get('#merchantSaleId_chosen').click().type('HLS1{enter}');
    cy.get('#searchListOrder').click();

    //Kiểm tra danh sách có mã này không
    cy.get('td.text-left')
      .each(($column) => {
        const text = $column.text();
        if (text.includes("HLS1")) {
          cy.wrap($column).parent('tr').then(($row) => {
            cy.log("Tìm kiếm đúng Pháp nhân bán");
            cy.log($row.text());
          });
        }
        else {
          cy.log("Không tìm thấy dữ liệu trong hàng");

        }
      });

  });

  it.skip('Lọc tìm kiếm khách hàng', () => {
    cy.get('#merchantBuyId_chosen').click().type('VISION2{enter}');
    cy.get('#searchListOrder').click();

    //Kiểm tra danh sách có mã này không
    cy.get('td.text-left')
      .each(($column) => {
        const text = $column.text();
        if (text.includes("VISION2")) {
          cy.wrap($column).parent('tr').then(($row) => {
            cy.log("Tìm kiếm đúng Pháp nhân bán");
            cy.log($row.text());
          });
        }
        else {
          cy.log("Không tìm thấy dữ liệu trong hàng");

        }
      });

  });


  it.skip('Lọc tìm kiếm nhà cung cấp', () => {
    cy.get('#providerId_chosen').click().type('Mobifone{enter}');
    cy.get('#searchListOrder').click();

    //Kiểm tra danh sách có mã này không
    cy.get('td.text-left')
      .each(($column) => {
        const text = $column.text();
        if (text.includes("Mobifone")) {
          cy.wrap($column).parent('tr').then(($row) => {
            cy.log("Tìm kiếm đúng dữ liệu theo nhà cung cấp ");
            cy.log($row.text());
          });
        }
        // else {
        //   cy.log("Không tìm thấy dữ liệu trong hàng");

        // }
      });

  });


  it.skip('Lọc tìm kiếm trạng thái', () => {
    cy.get('#status_chosen').click().type('Đã duyệt{enter}');
    cy.get('#searchListOrder').click();

    //Kiểm tra danh sách có mã này không
    cy.get('td.text-center')
      .each(($column) => {
        const text = $column.text();
        if (text.includes("Đã duyệt")) {
          cy.wrap($column).parent('tr').then(($row) => {
            cy.log("Tìm kiếm đúng dữ liệu theo trạng thái ");
            cy.log($row.text());
          });
        }
        // else {
        //   cy.log("Không tìm thấy dữ liệu trong hàng");

        // }
      });

  });

  it.skip('Lọc tìm kiếm ngày tạo', () => {

    //filter about order code
    cy.get('#from').clear().type('2023-12-15');
    cy.get('#to').clear().type('2023-12-20');
    cy.get('#searchListOrder').click();
    cy.wait(400);

    cy.get('td.text-left')
      .each(($time) => {
        const create_date_text = $time.text();
        const create_date = new Date(create_date_text);
        const startTime = new Date('2023-12-15T00:00:00');
        const endTime = new Date('2023-12-20T23:59:59');

        if (create_date >= startTime && create_date <= endTime) {
          cy.wrap($time).parent('tr').then(($row) => {
            cy.log("Đúng khoảng thời gian:");
            cy.log($row.text());
          });
        }
        // else {
        //   cy.log("Nằm ngoài khoảng thời gian");

        // }
      });


  });

  it.skip('Lọc tìm kiếm ngày duyệt', () => {

    //filter about order code
    cy.get('#fromApprove').clear().type('2023-12-15');
    cy.get('#toApprove').clear().type('2023-12-28');
    cy.get('#searchListOrder').click();
    cy.wait(400);

    cy.get('td.text-left')
      .each(($time) => {
        const create_date_text = $time.text();
        const create_date = new Date(create_date_text);
        const startTime = new Date('2023-12-15T00:00:00');
        const endTime = new Date('2023-12-28T23:59:59');

        if (create_date >= startTime && create_date <= endTime) {
          cy.wrap($time).parent('tr').then(($row) => {
            cy.log("Đúng khoảng thời gian:");
            cy.log($row.text());
          });
        }
        // else {
        //   cy.log("Nằm ngoài khoảng thời gian");

        // }
      });


  });





})