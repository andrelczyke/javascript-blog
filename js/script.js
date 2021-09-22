'use strict';

function titleClickHandler(event){
  console.log('Link was clicked!');

  /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    
    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }
  /* add class 'active' to the clicked link - Mamy już odniesienie do klikniętego linka, zapisane w stałej clickedElement. Twoim zadaniem jest dodanie mu klasy active.*/
    const clickedElement = this;
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

  /* remove class 'active' from all articles - Zmień selektor .titles a.active na odpowiedni dla artykułów znajdujących się w naszym blogu.*/
    const activeArticles = document.querySelectorAll('article.post.active');

    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }
  /* get 'href' attribute from the clicked link */
    const hrefValue = clickedElement.getAttribute('href').replace('#','');
    const articleToActivate = document.getElementById(hrefValue);
    articleToActivate.classList.add('active');

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}