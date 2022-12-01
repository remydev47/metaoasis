import styles from "../styles";

const StartSteps = ({number, text}) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">0{number}</p>
      <p className="font-normal flex-1 ml-[30px] text-[18px]"></p>
    </div>
  </div>
);

export default StartSteps;
