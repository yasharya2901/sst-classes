import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
import { useState, useEffect } from "react";
function Products() {
    // const products = [
    //       {
    //         id: 1,
    //         title: "Apple iPhone 14",
    //         price: "Rs. 1,00,000"
    //       },
    //       {
    //         id: 2,
    //         title: "Apple iPhone 13",
    //         price: "Rs. 70,000"
    //       },
    //       {
    //         id: 3,
    //         title: "Google Pixel 7",
    //         price: "Rs. 50,000"
    //       },
    //       {
    //         id: 4,
    //         title: "Nokia 1100",
    //         price: "Rs. 2,000"
    //       },
    //       {
    //         id: 5,
    //         title: "Samsung Galaxy S10",
    //         price: "Rs. 1,00,000"
    //       },
    //       {
    //         id: 6,
    //         title: "Sony Xperia S10",
    //         price: "Rs. 1,00,000"
    //       }
    // ];
  // let products = [];

  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/279c028e-f492-4e0f-932b-51dbed1b1dce").then(
      (response) => {
        return response.json();
      }
    ).then((res) => {
      console.log(res);
      setProducts(res);
    })
  }, [])

  
    return (
      <div>
          <div><Effect /></div>
            {
                products.map(function (item) {
                  return (<ProductCard key={item.id}  title={item.title} price={item.price} />)
                })
            }
        </div>
    )
}
export let a = 10;
export let b = 20;
export default Products;
// Javascript XML 

//ProductCard(title)
//named export 
//default export
// One default export
// multiple named exports

//   return (
//     <div>
//       <ul id="ul" className="list">
//         <li id="item-1"><a>Item 1</a></li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//         {show && <li>Item 4</li>}
//       </ul>
//       <button onClick={() => setShow(!show)}>
//         Toggle
//       </button>
//     </div>
//   )
// }


// VDOM -> JSON reprentation of DOM
// let currentVdom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }

// let newVDom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 4'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }

// diff = diffAndApplyChanges(vDom, newVdom);
// {
//   action: 'addNode',
//   nodeDetails: {
//     nodeName: 'li',
//     properties: {
//       children: [
//         'Item 4'
//       ]
//     }
//   }
// }

// 