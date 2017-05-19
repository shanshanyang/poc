# ES6, SCSS, Lib

Lib: gsap

## Basics

- How to create a component
- How to create component template
- How to create component API
- How to style a component
- How to unit test a component

## Maybe
- How to style snappoints and mobile

## Container Component

- Preload / Lazyload Images
- DIVA page source parser

## Best Practices

- Lazy load assets ( scripts, images, videos, templates )
- Unbind event handlers before binding ( unbind() )
- Minimize DOM manipulation done in JS
- Set Default width and height for page elements
- Prefer CSS animation over JS manipulation ( apply to most cases)

## Performance bottlenecks 

- Excessive DOM changes that force the page to re-render / re-flow
- Events that get fired all the time (for example, resizing/scrolling)
- Lots of HTTP requests (and even this is becoming less important).

## Discussion

- Seperation of concern: Container Component vs Presentation Component
- Render() 
- Use ES6 class
   - http://2ality.com/2015/02/es6-classes-final.html
   - http://2ality.com/2016/01/private-data-classes.html
