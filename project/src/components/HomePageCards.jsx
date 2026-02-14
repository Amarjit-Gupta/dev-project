const HomePageCards = ({txt1,txt2,label1,label2,label3}) => {
    return (
        <div className=" p-4 w-80 md:w-91 h-54 flex flex-col justify-between bg-card1">
            <div className="">
                <h1 className="text-24 text-primary font-semibold">{txt1}</h1>
                <p className="text-16 text-primary font-regular">{txt2}</p>
            </div>
            <div className=" flex gap-2">
                <div className="border-text-secondary text-13 text-primary font-regular px-2 py-0.5 bg-surface">{label1}</div>
                <div className="border-text-secondary text-13 text-primary font-regular px-2 py-0.5 bg-surface">{label2}</div>
                <div className="border-text-secondary text-13 text-primary font-regular px-2 py-0.5 bg-surface">{label3}</div>
            </div>
        </div>
    );
};
export default HomePageCards;