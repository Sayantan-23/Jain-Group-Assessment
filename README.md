# Jain Group Assessment

### General Questions:

**Q1. What motivated you to pursue full-stack development?**

**_Ans_** - I was motivated to pursue a career in full-stack web development due to my genuine passion for technology and problem-solving. My journey began when I created a project website, and I was captivated by the ability to turn design to a web page. I was inspired during my learning journey at iNeuron, where excellent course and mentors reinforced my choice. It's a field that offers constant learning and the chance to impact the digital world, making it a perfect fit for me.

**Q2. Describe the MVC (Model-View-Controller) design pattern.**

**_Ans_** - MVC is an acronym for Model-View-Controller. It is a design pattern for software projects. The advantage of this is it helps in focusing on a specific part of the application name, the ways information is presented to and accepted from, the user. It helps in allowing for efficient code reuse and the parallel development of the application.

**Model** - Model represents the structure of data, the format and the constraints with which it is stored. It maintains the data of the application. Essentially, it is the database part of the application.

**View** - View is what is presented to the user. Views utilize the Model and present data in a form in which the user wants. A user can also be allowed to make changes to the data presented to the user. They consist of static and dynamic pages which are rendered or sent to the user when the user requests them.

**Controller** - Controller controls the requests of the user and then generates appropriate response which is fed to the viewer. Typically, the user interacts with the View, which in turn generates the appropriate request, this request will be handled by a controller.

So, basically -

- **Model** is data part.
- **View** is User Interface part.
- **Controller** is request-response handler.

**Q3. What is the difference between GET and POST HTTP methods? Can you provide an example of when you might use each?**

**_Ans_** - The GET and POST methods are two of the most commonly used HTTP methods, but they serve different purposes and have distinct characteristics -

- **GET** - GET is primarily used for requesting data from a specified resource. Data is appended to the URL as query parameters. This means that data is visible in the URL, which can have privacy and security implications. The amount of data that can be sent in a GET request is limited by the URL length, which varies between browsers and servers.

- **POST** - POST is used for submitting data to be processed to a specified resource. It is often used when data needs to be sent to the server for further processing or when sensitive information should not be visible in the URL. Data is sent in the request body, which is not visible in the URL. This makes it suitable for sending larger amounts of data and for transmitting sensitive information like passwords. The amount of data that can be sent in a POST request is not as constrained as in GET requests. It can handle larger payloads.

- **Example** -

  - GET - When I am implementing a search functionality in my project. Then I can use the GET request.

  - POST - When I am implementing a sign up/log in functionality then I have to use the POST request because we are submitting a sensitive information like password while logging in.

**Q4. How would you explain responsive design to someone who isn't familiar with web development?**

**_Ans_** - Responsive design is a web development approach that ensures a site looks and works well on all devices, from large desktop screens to tiny mobile phones. Responsive design adjusts the layout, text, images, and interactions of a website to fit the screen it's viewed on. This means users get an optimal experience, whether they're on a computer, tablet, or smartphone, without needing a separate site for each device. It's about making the web accessible and user-friendly, regardless of the device people use to access it.

### Technical Tests:

**Q5. HTML/CSS Test: Create a basic webpage layout using HTML and CSS. This should have a header, a main content area, and a footer. Bonus points for responsiveness.**

**_Ans_** -

Folder Link - [Click here](./Q5.%20HTML%20Page/)

Live Link - [https://golden-cassata-eb391c.netlify.app](https://golden-cassata-eb391c.netlify.app)

**Q6. JavaScript Basics: Write a function that takes an array of numbers and returns the sum of all even numbers.**

**_Ans_** -

```javascript
const sumOfEvenNumbers = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }

  return sum;
};

const numbers = [1, 2, 3, 4, 5, 6];
const result = sumOfEvenNumbers(numbers);
console.log(result); // Output will be 12 (2 + 4 + 6)
```

**Q7. Basic Interaction: Create a form that collects user input, validates the input, and then displays it on the page using JavaScript.**

**_Ans_** - Folder Link - [Click Here](./Q7.%20Form%20Validation/)

**Q8. Simple Logic Test: Write a function that determines whether a given string is a palindrome.**

**_Ans_** -

```javascript
const checkPalindrome = (string) => {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
};

const string = "abbbba";
const value = checkPalindrome(string);
console.log(value);
```

**Q9. Basic Database Query: Given a database table structure, write an SQL query to fetch specific data (e.g., all users aged 25).**

**_Ans_** - The basic syntax of the query will be `SELECT column1, column2 FROM table1, table2 WHERE column2='value';`

If we take the example of all users aged 25 then the query will be like this -

```sql
SELECT * FROM users
WHERE age = 25;
```

**Q10. API Basics: Explain what you understand by RESTful API and why it's used.**

**_Ans_** - A RESTful API (Representational State Transfer) is an architectural style for designing networked applications. It uses a set of constraints to create web services that are scalable, stateless, and easy to understand. RESTful APIs are widely used because they enable efficient communication between client and server applications over the HTTP protocol. They use standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources represented as URLs. This simplicity and adherence to HTTP standards make RESTful APIs a popular choice for building web services, allowing systems to interact, exchange data, and achieve interoperability, making them a fundamental part of modern web and mobile app development.

