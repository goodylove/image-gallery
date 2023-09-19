import { useContext, useState } from "react";
import NavBar from "../../components/NavBar";
import Card from "../../components/card";
import { Images } from "./../../data/index";
import { useRef } from "react";

function Home() {
  const [image, setImage] = useState(Images);
  const [searchValue, setSearchValue] = useState("");
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchValue(value);

    if (searchValue === " ") {
      setImage(Images);
      return;
    }

    const searchItem = Images.filter((image) => {
      if (image.tag.toLowerCase().includes(searchValue.toLowerCase())) {
        return image;
      }
    });
    setImage(searchItem);
  };

  const handleDragActivite = () => {
    const items = [...image];

    const dragContent = items.splice(dragItem.current, 1)[0];
    items.splice(dragOverItem.current, 0, dragContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setImage(items);
  };

  console.log(image);
  console.log(searchValue);
  return (
    <main className="text-white font-serif h-screen flex justify-center flex-col items-center">
      <NavBar value={searchValue} handleSearch={handleSearch} />

      <section className="h-[800px] flex flex-col items-center mt-[25rem]   md:mt-[30rem] ">
        {image.length > 0 && (
          <div className="mt-10 grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-3  grid-cols-2  md:gap-4  gap-2 justify-items-center">
            {image.map((item, index) => {
              return (
                <div
                  key={index}
                  draggable
                  onDragStart={(e) => {
                    dragItem.current = index;
                  }}
                  onDragEnd={handleDragActivite}
                  onDragEnter={() => {
                    dragOverItem.current = index;
                  }}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <Card key={index} item={item} id={index} />
                </div>
              );
            })}
          </div>
        )}
        {image.length < 1 && <div>No image found</div>}
      </section>
    </main>
  );
}

export default Home;
