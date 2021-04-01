const element = require('../elements/elements.js');
module.exports = {
    
    goHomePage:function(){
        cy.visit('/');
        cy.get(element.closeModal).click();
    },
    scrollDown:function(){
        cy.scrollTo('bottom');
    },
    clickMaxPrice: function(){
        cy.contains(element.discountMaximumElement).click();
    },
    checkValue:function(){
        cy.get(element.productValue,{ timeout: 10000 }).then(items=>{
            cy.get(element.maximumValue,{ timeout: 10000 }).invoke('text').should((text2) => {
                var maximumValueText=text2.substr(8,2)
                
                for(var i=0;i<items.length;i++){           
                    
                    var productValueText=items[i].innerText.substr(3,2)
                    
                    expect(productValueText<=maximumValueText).to.be.true
                }
              })     
            
        })      
        
    }
}