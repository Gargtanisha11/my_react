// create element have three parameter first is tag which you want  second for attribute you wannna to pass and third is for content inside tag like children 
const heading = React.createElement("div",{id: "abc"},[     // here div is not html elemnt it is react object 
    React.createElement("h1",{id:"a1"},"hello form h1"),
    React.createElement("h2",{id:"a"},"hello from h2")
]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 
// in create element function  at last parameter  we can pass childrens or siblings with the help of array
//   ther can be only one root element in react dom but component tree rendered within that root can be as complex and modular as needed. 