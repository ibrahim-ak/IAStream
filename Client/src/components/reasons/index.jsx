import StarHand from '../../assets/icons/StarHand.jsx';
import ShakeHand from '../../assets/icons/ShakeHand.jsx';
import Monitor from '../../assets/icons/Monitor.jsx';
import Heart from '../../assets/icons/Heart.jsx';

const reason = [
  {
    id: 1,
    content: "Stories tailored to your taste",
    icon: <StarHand />
  },
  {
    id: 2,
    content: "Cancel or switch plans anytime",
    icon: <ShakeHand />
  },
  {
    id: 3,
    content: "A place just for kids",
    icon: <Heart />
  },
  {
    id: 4,
    content: "For your phone, tablet, laptop, Desktop",
    icon: <Monitor />
  }
]

const Reasons = () => {
  return (
    <div className="lg:flex lg:justify-center">
    <div className="overflow-x-hidden text-sm font-semibold sm:text-md lg:text-lg select-none font-sans lg:w-5/6 flex justify-center items-center my-8">
      <div className="w-5/6 lg:w-full">
        <h1 className="lg:text-4xl text-lg font-bold mb-5">More reason to join</h1>
        <div className="flex flex-col md:flex-row md:gap-4">
        {
          reason && reason.length > 0 ?
          reason.map((data, i) => {
            return (
                <div key={i} className="flex items-center justify-between bg-faqBlack border border-2 border-borderBlack mb-2 p-4 rounded-xl md:pb-20 md:relative md:w-1/2 md:text-md md:items-start">
                  <div>{data.content}</div>
                  <div className="pl-5 md:absolute md:bottom-2 md:right-4">{data.icon}</div>
                </div>
            )
          })
          :
          <div>Data Not Found</div>
        }
        </div>
      </div>
    </div>
  </div>
  )
}

export default Reasons;