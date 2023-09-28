/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    })


    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ajax Full-Zip Sweatshirt')
            .click()
    })

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    })

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Abominable', 'M', 'Blue', 3)
    })

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Abominable', 'XS', 'Green', 5)
    })

})

