# yes i learn how to push code


# npm init done 

# we create the fod delivery app 
 user interface 
 component in our app

->Header
  ->Logo
  ->Nav items
->Body
 ->Search
    -> Search input
    ->Seacrh logo
  ->Restaurant container
    ->Restaurant Cards   
      -> img 
      -> name of restaurant, start rating ,cuisine ,delivery time  
->Footer
  ->copyright
  ->link
  ->address
  ->contact


 we take some restaurant data from swiggy app
 
 # two type of exports 
 --> default export 
 --> named export 

  # hook function = normal javascript utility function
   some important hooks 
  ->useState() //
  ->useEffect()

  # how ui take data from live api 
  using fetch function in useEffect hook 

# Shimmer - fake ui to show user that you content is loading
increase user expericence

 # how create route for our pages 
 using react router dom library
 it has many router but we use createbrowserRouter router  for create configuration ( it has info for path to which page to which path)
 and we need one more component from react router dom for render 
 which is routerprovider 9 it has attribute to provide our config
 
 # useRouteError hook from react router dom 
  it has all info about error which occur in routing due to wrong address or anything else 

  # dynamic route for page 
  we can do it by given path like this "/:some id" 
  Here (:) is ued for dynamic path 
  and after that we can give that component (which we want to show in our application) 
   in element key in configuration 
 # useParams
   we can take tha dynamic route in local variable by using USEPARAMS hook from react router dom
   use it accordingly 
   like we use it dynamic restaurant id to show rspect restaurant menu  

# class based component 

 -> it extend the class React.Component
 -> React.Component is import from react 
 -> to return some piece of jsx code it use render () function 
 -> for props
    -> pass props normally as in functional component
    -> but for recieve in class-based  component. There is constructor who take as argument 
     and in constructor we use super(props) keyword
     after that we can use it anywhere by written like this (this.props)  
# dynamic bundling 
 lazy function from react
 suspense component from react

# custom hooks
we can make our custom hook  for ease of use and modularity in our component 
