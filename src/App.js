
import classes from './App.module.css';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar.js';

function App() {

//   const api =()=>{
// fetch('https://jsonplaceholder.typicode.com/posts').then((result)=>{
//   return result.json();
// })
// .catch((ERROR)=>{
//   console.log(ERROR);
// }).then((result)=>{
//   console.log(result);
// })
   
//   }

  return (
    <div className="App">
{/* <button onClick={api}>api call</button> */}
 <header className="App-header">
        <Topbar />
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview />
        </div>

        <div className={classes.ProductData}>
          <ProductDetails />
        </div>
      </div>

    </div>
  );
}

export default App;
