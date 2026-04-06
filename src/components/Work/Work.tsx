import { getWorkItems, type WorkItem } from "@/sanity/queries";
import Image from "next/image";
import Link from "next/link";
import styles from "./Work.module.css";

export default async function Work() {
  const workItems = await getWorkItems();

  return (
    <section className={styles.work} id="work">
      <ul className={styles.workList}>
        {workItems
          .filter((item: WorkItem) => item.slug) // Ensure item.slug exists
          .map((item: WorkItem, index: number) => (
            <li key={item._id} className={styles.workItem}>
              {index === 0 && <div className={styles.horizontalLine} />}
              <Link href={`/work/${item.slug}`} className={styles.workContent}>
                <div className={styles.workInfo}>
                  <span></span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <svg
                    width="80px"
                    height="80px"
                    viewBox="0 -0.5 17 17"
                    className={styles.arrowIcon}
                  >
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        d="M6.077,1.162 C6.077,1.387 6.139,1.612 6.273,1.812 L10.429,8.041 L6.232,14.078 C5.873,14.619 6.019,15.348 6.56,15.707 C7.099,16.068 7.831,15.922 8.19,15.382 L12.82,8.694 C13.084,8.3 13.086,7.786 12.822,7.39 L8.233,0.51 C7.873,-0.032 7.141,-0.178 6.601,0.181 C6.26,0.409 6.077,0.782 6.077,1.162 L6.077,1.162 Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <span className={styles.stack}>
                    {item.stack?.join(", ") || "No stack specified"}
                  </span>
                </div>
                {item.videoUrl ? (
                  <video
                    src={item.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.media}
                  />
                ) : (
                  item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={item.imageMetadata?.width || 480}
                      height={item.imageMetadata?.height || 640}
                      className={styles.media}
                      style={{ height: "auto" }}
                      sizes="min(100vw, 30rem)"
                      priority={index < 2}
                    />
                  )
                )}
              </Link>
              <div className={styles.horizontalLine} />
            </li>
          ))}
      </ul>
    </section>
  );
}
