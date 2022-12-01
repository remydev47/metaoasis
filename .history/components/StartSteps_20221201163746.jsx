import styles from "../styles";

const StartSteps = ({number, text}) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bod text-[24px] text-white">{number}</p>
    </div>
  </div>
);

export default StartSteps;
