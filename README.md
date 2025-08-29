
# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 **getElementById** is used to select an element through a specific id. An id should be used only once in an   HTML file.

 **getElementByClassName** is used to select one or all elements inside an HTML file based on a specific class name. Using this, any function applied will work on all elements with the same class name inside the HTML file. It returns an HTMLCollection. The collection looks like an array, but it is not actually an array. Methods like *forEach()*, *map()*, *filter()* cannot be used on it.

 **querySelector** uses a CSS selector to select the first element it finds. Even if there are multiple selectors with the same name, it will only select the first one. It can be used with id, class, tag, etc.

 **querySelectorAll** uses a CSS selector to select all elements with the same name. It returns a NodeList. The NodeList works like an array. Methods like *forEach()* can be used on it.



# 2. How do you create and insert a new element into the DOM?

First, an HTML tag has to be created using document.createElement(). Then a value needs to be added inside the HTML tag. After that, using appendChild, a div/section has to be considered as the parent, and the HTML tag has to be added inside it.



# 3. What is Event Bubbling and how does it work?
**Event bubbling** is like bubbles. When a nested element is clicked, the event goes to its direct parent element, then to its parent’s parent element. This continues until it reaches the document object.


# 4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a process of event handling where children are arranged like a tree. In the case of many deeply nested children, instead of adding separate listeners to each of them, a common parent is given an event listener. Then, through event bubbling, the event reaches the parent, and the targeted child can be accessed.

## Why is it useful?

1. Adding many separate listeners for multiple children puts pressure on memory. In this case, event delegation is very convenient.

2. Events can be handled dynamically.

3. If extra listeners are not added, browser performance becomes much faster.



## 5. What is the difference between preventDefault() and stopPropagation() methods?
**preventDefault()** stops the default behavior of an event. When a link is clicked, the browser usually navigates to that link’s URL. If you want to block this default behavior, then event.preventDefault() is used.

**stopPropagation()** stops the bubbling or capturing process of an event. When an event is triggered on an element, it spreads up or down the DOM Tree. If stopPropagation() is used, the event remains limited to that specific element only and cannot reach its parent or child elements.