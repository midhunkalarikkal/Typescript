// Type unknown
// -----------------

let result : unknown;

result = "midhun";
// console.log(result.length)  

// this will make an error because the type is unknown
//to resolve this

console.log((result as string).length)


// Example with array
// ----------------------

let nums : unknown;
nums = [1,2,3]

// const sum = nums.reduce((a : number,b : number)=>{
//     a + b
// },0)
// console.log("sum of nums : ",sum)

// This will make an error becuase the type of nums is unknown
// to resolve this

//This is called type assertion
const newsum = (nums as number[]).reduce((a : number, b : number)=> a + b ,0)
console.log("sum of nums : ",newsum)


// Handling External Data
// -------------------------

//  first   define a function fetchData that calls API from a URL and returns JSON data. 
// Since the shape of the returned data is not known, the function returns a Promise<unknown> value:

const fetchData = async(url : string) : Promise<unknown> =>{
    const response = await fetch(url)
    return await response.json()
}

// Second, define the showPosts() function that uses the fetchData() 
// function to call an API from the endpoint https://jsonplaceholder.typicode.com/posts:

const showPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const posts = await fetchData(url); // unknown type
      (
         posts as { userId: number; id: number; title: string; body: string }[]      /* this is the type checking here */
      ).map((post) => console.log(post.title));
    } catch (err) {
      console.log(err);
    }
  };

  showPosts();