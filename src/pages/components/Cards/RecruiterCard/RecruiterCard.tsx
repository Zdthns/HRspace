import React from "react"
import StarRatings from "react-star-ratings"
import styles from "./styles.module.css"

export type recruiterTypes = {
  name: string
  job: string
  city: string
  rating: number
  image: string
}

const RecruiterCard = (recruiter: recruiterTypes) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.image_wrapper}>
          <img
            className={styles.image_small}
            src={recruiter.image}
            alt="альтернативный текст"
          />
        </div>
        <div className={styles.wrapper_caption}>
          <div className={styles.caption}>
            <span>{recruiter.name}</span>
          </div>
          <div className={styles.caption}>{recruiter.job}</div>
          <div className={styles.rating}>
            <StarRatings
              rating={recruiter.rating}
              starRatedColor="blue"
              numberOfStars={5}
              name="rating"
              starDimension="15px"
              starSpacing="3px"
            />{" "}
            <div className={styles.caption}>{recruiter.city}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecruiterCard
