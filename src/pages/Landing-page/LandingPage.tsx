import RecruiterCard from "../components/Cards/RecruiterCard/RecruiterCard"
import LendingCard from "../components/Cards/lendingCard/LendingCard"
import { heading, lendingCards, recruiter } from "../components/props"
import styles from "./styles.module.css"

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {lendingCards?.map(item => <LendingCard {...item} />)}
      </div>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.container}>
        {recruiter.map(item => (
          <RecruiterCard {...item} />
        ))}
      </div>
    </div>
  )
}

export default LandingPage
