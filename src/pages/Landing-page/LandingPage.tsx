import React from "react"
import styles from "./styles.module.css"
import LendingCard from "./components/Cards/lendingCard/LendingCard"
import RecruiterCard from "./components/Cards/RecruiterCard/RecruiterCard"
import { heading, recruiter, lendingCard } from "./components/props"

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {lendingCard?.map(item => <LendingCard {...item} />)}
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
