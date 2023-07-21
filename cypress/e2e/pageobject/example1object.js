class Example1{

    getsidePanel(){
        return cy.get('[aria-label="Sidepanel"]')
    }
    getpageHeading(){
        return cy.get('.oxd-topbar-header-breadcrumb')
    }
    
  }
  
  export default Example1;