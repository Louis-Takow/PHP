import Example1 from "./pageobject/example1object";

const examplePage = new Example1()

describe('OrangeHRM', () => {
  it.only('Login', () => {
    cy.visit('');
    cy.Orangelogin('Admin','admin123');

    cy.get('.oxd-navbar-nav').contains('Admin').click();
    cy.get(':nth-child(2) > .oxd-input').type('Louis');
    cy.get('div[class="oxd-select-text-input"]').contains('Select').click({force:true});
    cy.get('div[role = "listbox"]').contains('Admin').click();
  })
 
 
 
  // it('Admin',()=>{
  //   cy.visit('');
  //   cy.Orangelgin('Admin','admin123');

  //   examplePage.getsidePanel().contains('Admin').click();
  //   examplePage.getpageHeading()
  //   .should('contain.text', 'AdminUser Management');
  // })
  it('PIM', ()=>{
    cy.visit('');
    cy.Orangelogin('Admin','admin123');
  
    examplePage.getsidePanel().contains('PIM').click();
    examplePage.getpageHeading().should('contain.text','PIM');

    cy.xpath("//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]")
    .click({force:true});
    cy.get('div[role ="listbox"]').contains('Freelance').click();
  })
})