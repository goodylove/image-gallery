function Card({ item, id }) {
  const captitalizeFirstLetterTittle = (text) => {
    const arr = text.split(" ");
    const formate = [];
    for (let n of arr) {
      formate.push(n[0].toUpperCase() + n.slice(1));
    }
    return formate.join(" ");
  };

  return (
    <div className="lg:w-[300px]  border-[1px] rounded shadow-full w-[300px] md:w-[290px] cursor-move">
      <img src={item.photo} alt="" className="w-full h-[300px] object-cover" />
      <h3 className="p-3 text-[10px]">
        {captitalizeFirstLetterTittle(item.tag)}
      </h3>
    </div>
  );
}

export default Card;
