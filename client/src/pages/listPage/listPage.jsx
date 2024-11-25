import { Await, useLoaderData } from "react-router-dom";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/filter";
import Map from "../../components/map/Map";
import "./listPage.scss";
import { Suspense } from "react";

function ListPage() {
const data = useLoaderData();
console.log(data);
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
         <Suspense fallback={<p>Loading...</p>}>
          <Await resolve={data.postResponse}
          errorElement={<p>Error Loading posts!</p>}>
            {(postResponse)=> postResponse.data.map((post)=>(
              <Card key={post.id} item={post}/>
            ))}
          </Await>
         </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        {/* <Map items={posts}/> */}
        <Suspense fallback={<p>Loading...</p>}>
          <Await resolve={data.postResponse}
          errorElement={<p>Error Loading posts!</p>}>
            {(postResponse)=> <Map items={postResponse.data}/>
            }
          </Await>
         </Suspense>
      </div>
    </div>
  );
}

export default ListPage;
