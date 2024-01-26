describe('test', () => {
/* Заход на сайт */
    it('passes', () => {
    cy.visit('https://skillbox.ru/')
  })
/* меню тест */
  it('menu test', () => {
    cy.visit('https://skillbox.ru/')

    cy.get('.ui-header__menu-toggle').click()
  })
/* Кнопки в массиве с професиями */
  it('list test', () => {
    cy.visit('https://skillbox.ru/')

    cy.get('a').contains('Программирование').click()
  })
/* Кнопка search bar */
  it('search test', () => {
    cy.visit('https://skillbox.ru/')

    cy.get('.ui-search-button').click()

  })
/* Кнопка узнать больше */
  it('popular button test', () => {
    cy.visit('https://skillbox.ru/')

    cy.get('.popular__button').click()
  })
/* Кнопка Академические программы */
  it('catalog button test', () => {
    cy.visit('https://skillbox.ru/')
    
    cy.get('.catalog-card-wide__link').click()
  })
})


