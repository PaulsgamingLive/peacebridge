const container = document.querySelector('.container');
let currentPage = document.querySelector('.page.active');

function navigateToPage(newPageId: string) {
  const newPage = document.getElementById(newPageId);
  if (newPage && newPage !== currentPage) {
    // Add exit classes to the current page
    currentPage.classList.add('page-exit');
    setTimeout(() => {
      currentPage.classList.add('page-exit-active');
    }, 0);

    // Add enter classes to the new page
    newPage.classList.add('page-enter');
    setTimeout(() => {
      newPage.classList.add('page-enter-active');
    }, 0);

    // Remove classes after animation
    newPage.addEventListener('transitionend', () => {
      currentPage.classList.remove('page-exit', 'page-exit-active', 'active');
      newPage.classList.remove('page-enter', 'page-enter-active');
      newPage.classList.add('active');
      currentPage = newPage;
    }, { once: true });
  }
}

// Example usage: Navigate to page with ID 'page2'
navigateToPage('page2');
