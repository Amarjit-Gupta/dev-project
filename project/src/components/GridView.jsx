import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const GridView = ({ listData }) => {

    const navigate = useNavigate();

    return (
        <>
            {/* card */}
            {listData?.map((data, i) => {
                return (
                    <div className="border h-102 xl:w-auto bg-surface" key={data.report_id}>
                        <div className="border border-red-500 h-[42%]">
                            <div className=" px-3 pt-3">
                                {/* <h1 className='border text-primary text-20 font-medium'>{data?.title}</h1> */}
                                <h1 className='h-27 border text-primary text-20 font-medium wrap-break-word'>{(data?.title).length>52?(data?.title).slice(0,50)+" ...":data?.title}</h1>
                            </div>
                            <div className="mt-3 flex px-4 py-1 justify-between border">
                                <span className='text-primary text-16 font-regular'>${data?.full_price}</span>
                                <button className='flex gap-2 items-center cursor-pointer border' onClick={()=>navigate(`/report-name/${data.report_version_id}`)}>
                                    <span className='text-primary text-15 font-medium'>Download Report</span>
                                    <span><IoIosArrowForward /></span>
                                </button>
                            </div>
                        </div>

                        <div className="relative h-[58%]">
                            <img src={data?.image_path} alt="image" className='border h-full w-full' />
                            <div className=" absolute flex gap-2 px-4 bottom-4">
                                <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Market Study</div>
                                <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Importers</div>
                                <div className='bg-surface border-text-secondary px-2 py-0.5 text-13 text-primary font-regular'>Pricing</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};
export default GridView;
