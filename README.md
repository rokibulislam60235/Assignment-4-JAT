1. What is the difference between getElementById, Returns a single element, and querySelector / querySelectorAll?
   = getElementById : it finds one specific element using its unique id and Returns a single element.
   =getElementsByClassName:it finds all elements that have a specific class and Return a list.
   =querySelector : it finds the first element that matches a CSS-style selector and return one single elements.
   =querySelectorAll : it finds all elements matching a CSS selector and returns a list.
   
2.How do you create and insert a new element into the DOM?
  =Create a new DOM element using document.createElement(), set its content/attributes, then insert it into the document using methods
  like appendChild() (or append() / insertBefore()) on the target parent element.

3.What is Event Bubbling? And how does it work?
  =Event Bubbling is a process in JavaScript where an event starts from the target element and then moves upward through its parent elements in the DOM.
  -When an element is clicked, the event first occurs on that element, then it automatically propagates (bubbles) to its parent, grandparent, and continues up
  to the document.

4.What is Event Delegation in JavaScript? Why is it useful?
  =Event Delegation is a technique in JavaScript where a single event listener is added to a parent element to handle events for its child elements.
  -It is usefull beacuse it can reduces the number of event listeners and improves performance.it works for dynamically added elements and makes code easier to manage.

5. What is the difference between preventDefault() and stopPropagation() methods?
   = preventDefault() :
      it can stops the browser’s default behavior of an element.
       Example: Prevents form submission or link navigation.

    stopPropagation() :
     it stops the event from bubbling or propagating to parent elements.
    Prevents parent event handlers from running.
