import { useState } from "react";

import NavBar from "../../components/NavBar";
import Card from "../../components/card";

import { Images } from "./../../data/index";
import { useRef } from "react";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Home() {
  const [image, setImage] = useState(Images);
  const [searchValue, setSearchValue] = useState("");

  const [drag, setDrag] = useState(Images);

  const handleDrag = (result) => {
    if (!result.destination) return;
    const item = Array.from(image);
    const [removed] = item.splice(result.source.index, 1);
    item.splice(result.destination.index, 0, removed);
    setImage(item);
  };

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchValue(value);

    if (searchValue === "") {
      setImage(Images);
      return;
    }

    const searchItem = Images.filter((image) => {
      if (image.tag.toLowerCase().match(searchValue.toLowerCase())) {
        return image;
      }
    });

    setImage(searchItem);
  };

  // handle drag and drop

  return (
    <main className="text-white font-serif h-screen flex justify-center flex-col items-center">
      <NavBar value={searchValue} handleSearch={handleSearch} />

      <section className="h-[800px] flex flex-col items-center mt-[25rem]   md:mt-[30rem] ">
        {image.length > 0 && (
          <>
            <h2 className="text-[14px] font-serif bg-white text-purple-500 p-2 m-2">
              Hello friend feel free to play around with your favorite image by
              dragging it to a different position 😊🎭
            </h2>
            <DragDropContext onDragEnd={handleDrag}>
              <Droppable droppableId="list">
                {(provided) => (
                  <div
                    className=" grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-3  grid-cols-2  md:gap-4  gap-5 justify-items-center"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {image.map((item, index) => {
                      return (
                        <Draggable
                          draggableId={item.id.toString()}
                          index={index}
                          key={item.id}
                        >
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <Card
                                key={index}
                                item={item}
                                id={index}
                                setImage={setImage}
                                image={image}
                              />
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </>
        )}
        {image.length < 1 && <div>No image found</div>}
      </section>
    </main>
  );
}

export default Home;
