# onAnyClick code

### Hello, everybody. Im so lazy to remake code for click eveytime, so i did it.
### How to use:
### FIRST: you need to donwload my onAnyClick.js and include it to your project.
### If you use modules you can import it
```js
  import {onAnyClick} from 'any-folder/onAnyClick.js';
```

### SECOND: You have big options to work with code like data-attribute:
1. data-click-btn - just put it to your any button. And add data-click-section to section that should add .show class.
You have 2 options: 
    a. Add any class to data-click-btn
 ```html
    <div class=".filter" data-click-section>
    </div>
    <button type="button" data-click-btn=".filter">Click me, i'll add class .show to div .filter</button>
```
    b. Dont add class. Then you need to put button into div with attribute data-click-section.
```html
    <div class=".filter" data-click-section>
        <button type="button" data-click-btn>Click me, i'll add class .show to parent element with data-click-section</button>
    </div>
```

2. data-click-option="ADD / TOGGLE / REMOVE" - just choose any one. Its method. Or it remove show class from div or add or toggle.
```html
    <div class=".filter" data-click-section>
        <button type="button" data-click-btn data--click-option="toggle">Now you click on me i will add the ".show" class and if it's already there, i will delete it</button>
    </div>
```
3. data-click-body="no-scrolling, dark" - sometimes we nneed to add some class to body. It made it.

```html
    <div class=".filter" data-click-section>
        <button type="button" data-click-btn data--click-option="toggle" data-click-body="no-scrolling, darken">Add classes to body yet</button>
    </div>
```

4. data-click-fixed="true" -The whole code is made so that when you click on something outside the modal section or button, the show class is removed from the modal section, but this function allows you to fix the section and not remove the show class from the section

```html
    <div class=".filter" data-click-section>
        <button type="button" data-click-btn data--click-option="toggle" data-click-fixed="true">Now its fixed. Its not gonna delete while you wont click on button again</button>
    </div>
```

5. data-click-close - exactly you need to close the section sometimes. It can do it.

```html
    <div class=".filter" data-click-section>
    </div>
        <button type="button" data-click-close="filter">Click me and i delete class ".show" from .filter div</button>
```
    b. If u have data-click-close button into data-click-section, you can delete show without class'

```html
    <div class=".filter" data-click-section>
        <button type="button" data-click-close>Click me and i'll find the parent elemnent with data-click-section attribute and will delete class .show</button>
    </div>
```

### Thanks:)