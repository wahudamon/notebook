---
title: "State"
metaTitle: "State"
metaDescription: "Tentang state dan state management"
---

- When it comes to client-side JavaScript applications, I like to think of state as “the outcome of all of the actions that the user has taken since the page is loaded or rendered”.
- A state is a representation of a system in a given time. State refers to the data stored in Application in the form of a string, array, object, etc.
- For example, I load a page. I click a button which makes an HTTP request. The HTTP request fails, and the screen now shows an error.
- What is the action? A button was clicked, it sent off a request, and the request failed.
- What is the outcome? An error message.
- If we were to describe that state as an object, it might look like this:
```javascript
const state = {
  errors: ["Sorry, we couldn't save your article, try again later"]
}
```
- State management is a method of managing the state. As an application grows, complexity of managing the state increases as well. In a big application where we have a good number of views/components, managing their state is a big pain. The main job of any UI Library or framework is to take application state and turn it into DOM nodes, that's why arranging state in a better way lifts the overall health of the application.
- when you run your application user interacts with it, it does some changes on the UI controls, fetches data from the server, runs animation, opens a side panel, etc. So, every time when the user is interacting or doing some changes, changing the state of an application. Managing all these changes/ state requires some management, that’s where State management comes to rescue you, it helps you manage your different state which keeps changing over time, it helps you scale your application with better control over it.
- **Two important principles of State Management**
  - The first principle is **immutability**, which means that we should never mutate data directly without creating a new reference of that object. If we mutate data directly, our application becomes unpredictable and it’s really hard to trace bugs. An immutable object is an object whose state cannot be modified after it is created. If you want to modify some property of an object you have to do it on a copy of the object.
  - The second principle is **Unidirectional data flow**. It is also known as one-way data flow, which means the data has one, and only one way to be transferred to other parts of the application. In a nutshell, this means that we should never use two-way data binding on state. It is the absolute owner of that specific piece of state that is in charge of updating it (immutable of course). In essence, this means child components are not able to update the data that is coming from the parent component
- **How it works**, state is passed to the view and to child components -> actions are triggered by the view -> actions can update the state -> the state change is passed to the view and to child components -> repeat step 2
- **Types of state**:
  - **Persistent State** - this one lives on the server and it is accessible, for example, via a REST endpoint
  - **Navigation State** - where is the user in the application? Is he on the sign-in page, the sign-up page or the profile page?
  - **Local UI State** - what is the colour of the button? Is the panel expanded or not? Is the modal open?
  - **Client State** - you can think of the filters selected by the user when dealing with a large list of items, the current page in the list of items


### Links
- [State Management in JavaScript](https://codeburst.io/state-management-in-javascript-15d0d98837e1)
- [Understanding State Management in Front-End Paradigm](https://www.linkedin.com/pulse/understanding-state-management-front-end-paradigm-jitendrasinh-gohil/)
- [How To Simplify Your Application State Management](https://hackernoon.com/how-to-simplify-your-application-state-management-as6n3wz8)
- [What is state? Why do I need to manage it?](https://app.egghead.io/articles/what-is-state-why-do-i-need-to-manage-it)
