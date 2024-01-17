# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Code Highlight](#code-highlight)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![Design preview for the Results summary component coding challenge](./images/design_preview.png)

### Links

- [Solution URL:](https://github.com/edpau/FM_Results_summary_component/settings/pages)
- [Live Site URL:](https://edpau.github.io/FM_Results_summary_component/)

## My process

### Built with

- Semantic HTML5 markup
- BEM CSS methodology
- Flexbox
- CSS Grid
- Mobile-first workflow

### Code Highlight

- use grid inside grid 
In summary div, I placed the summary__pills into one div, so the gap between each items can be different to the Summary h2 and the continue-btn.

- result_score purple circle 
```css
.result__score {
  width: 8.5rem;
  height: 8.5rem;
  border-radius: 50%;
  background-image: linear-gradient(hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0));
  /* center the circle in the div */
  justify-self: center;
  align-self: start;
  /* center the number inside the circle */
  display: flex;
  justify-content: center;
  align-items: center;
}
```

- summary__pill background color 
it is 0.1 alpha (opacity)
```css
.summary__pill--verbal {
  background-color: hsl(166, 100%, 37%, 0.1);
}
```


Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```


### Useful resources

- [Kevin Powell youtube](https://www.youtube.com/watch?v=KqFAs5d3Yl8&t=947s) - Kevin gives good thought processes on how he starts on the task.
- [Kevin Powell github](https://github.com/kevin-powell/results-summary-component-main) - Good set up on CSS variables.


## Author

- Website - [Edward Pau](https://www.edpau.me)
- Frontend Mentor - [@edpau](https://www.frontendmentor.io/profile/edpau)


## Acknowledgments

Big thank you to Kevin Powell





