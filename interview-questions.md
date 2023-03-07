# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: I dont remember exactly what the acronym is.. but I know its Javascript 'something'(that is actually just another acryonym) but it essentially allows you to use html inside of Javascript using JSX fragments represented by opening <> and closing with </>. 

Researched answer: Javascript XML (JSX) is a syntax extension within Javascript. It allows you to use the full power of Javascript with HTML. React does not require the use of JSX but it is helpful when working with Javascript UI and it also shows more useful error messages and warnings when debugging and trying to fix broken code. After you have compiled you can actually use JSX inside of if statements and for loops, assign it to variables, or use it in arguments and returns from functions. 
source: https://reactjs.org/docs/introducing-jsx.html

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yarn is a package manager for your code. It essentially does a lot of the leg work for you that other people created specific to certain files that you need within your own work. It allows you to pull all of the essential files at once rather than having to do it manually on your own. It goes both ways so that when you want to send packaged data that you have created other people can pull your work as well.  As far as what files are modified, im not sure exactly which ones are, I know it adds package.json and I think the node modules file.

Researched answer: Yarn is one of the main package managers for Javacript alongside NPM. Yarn was created by facebook Meta for Node.js. It was originally created to be a safer, more consistent and more secure alternative to some of the competing package managers.  Yarn allows users to create rules for dependencies they create across scoped workplaces. You can add more functionality in the form of plugins through Yarn allowing you to do more with it such as adding new resolvers, fetchers and commands. Users can write their own plugins for Yarn and customize it depending on their own needs. 
Source: https://engineering.fb.com/2016/10/11/web/yarn-a-new-package-manager-for-javascript/

3. What is a React component?

Your answer: I know that react components are reusable in your code and are elements used within your code or app. I think there are a few different types of components but im not sure on exactly what they all are. I know there are logic components and display components, and that they basically do exactly what they say they are. Display components main function is to display the data that is given and logic components are what contain logic inside of then.

Researched answer: Javascript react components are resuable bits of code and are independent. They are used in the same way that you use functions, but work seperately and return HTML. Components have 2 different types, Class components and Funtion components. Class components seem to be an older thing for react and I am having trouble finding much information about it, I am guessing its not as widely used as function components anymore. That said, function components work the same way as class components but are much more efficient, easier to understand and are the preferred method these days. Components can be passed as props and used as if they are function arguments. When using components it is best practice to store each one inside of it own file inside of a created Components folder.
Source: https://www.w3schools.com/react/react_components.asp

4. What is the difference between state values and props in React?

Your answer: So the way I understand state is thats its an object where you store values that are inside of a component, and when you change that state it updates the component. So like our examples this week when you wanted to order something off of the food menu we created, the state was set as ordered: false, and when you pressed the order button it updated that value to be true, changing the state of it and updating it. Props or properties are also values but they are used to pass data between components. So like in the example I used above if the state was defined as the ordered button, props would be the actual item that was ordered, or the price that the item would have cost. 

Researched answer: You can store property values inside of State objects, and as many as you would like, and that ties those 2 together, so you can reference them later. For example if you created the state this.state = {brand: "ford"
                        model: "mustang"
                        color: "red"
                        year: "1964"
                        };
the items inside of the curly brackets would be considered the properties tied to the state that you created, and you dan reference them in functions by passing them through as {this.state.color} and you would get red since the value assigned to color is red. You can also change the state of the items inside of curly brackets with onClick button usage. 
Source: https:www.w3schools.com/react/react_state.asp

5. What is the DOM?

Your answer: Something something Module, from my very limited understanding it shows you that something is actually happening when you update your code. Its a visual representation of what you are writing in your code. 

Researched answer: Document Object Module (DOM) everytime a web page is a loaded a DOM is created within that page. There are 3 different parts to the DOM, Core DOM which is the standard model for all document types the XML DoM which is used for XML docs, and the HTML DOM which is for HTML docs, the DOM is basically the platform interface that lets programs and written scripts be dynamically access and update everything within the document. 
Source: https://www.w3schools.com/js/js_htmldom.asp

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: I know that div tags are used to create a dividing line in your page you can manipulate the line to form shapes such as boxes to store stuff in, or just leave them blank to create a gap in the page for more space. You can put styling and other various things inside of div tags. I am not going to lie I have no heard anything about span tags. but if I had to throw out a best guess, I would say span tags are similar to div tags but you can include more in them, the name to me suggests that it covers more than a div tag would. 

Researched answer: The main difference between span tags and div tags is that div tags are a block-level element and the span tag is an inline element. div is mostly used to divide the page into blocks meaning it starts a new line. It is also commonly used to group related parts of a page togther, you may see multiple paragraph articles grouped together in a div. Span tags are generally used to apply styling to a specific section of text. Inline elements dont start a new line and only take up the space specified by the content inside of the tag. Span tags will be used on small portions of texts, links, images or other html elements. Both are used to group elements for styling.
Source: https://blog.hubspot.com/website/span-vs-div?hubs_content=blog.hubspot.com%2Fwebsite%2Fhtml-span&hubs_content-cta=full%20explanation%20of%20span%20versus%20div%20in%20HTML

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: OOP is a paradigm of programming that relies more on the concept of objects and classes over functions and logic. 

2. Ruby: Ruby is another type of programming language, it has been around since the 90s and supports multiple different programming paradigms. It is heavily focused on simplicity and EVERYTHING is an object. Sounds fun, I like objects.

3. Implicit return: I actually used this in my 3rd question on code challenges section, implicit return is basically the use of arrow syntax => that signifies the return of the statement without the actually usage of the word return.

4. Ruby blocks: Blocks are methods for Ruby, its the same thing, it just doesnt belong to an object.

5. Ruby hashes: Hashes are similar to arrays, it is a data structure that maintains a set of objects (keys) that each  have their own value. The difference between hashes and arrays is that arrays identify the item position within the arry by index, and hashes use objects. 
