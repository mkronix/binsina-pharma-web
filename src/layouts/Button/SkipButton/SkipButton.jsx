import Link from "next/link";
import { string } from "prop-types";

import styles from "@/components/Button/SkipButton/SkipButton.module.css";
const SkipButton = ({ path }) => {
  return (
    <div className={styles.SkipButton}>
      <Link href={path}>Skip</Link>
    </div>
  );
};
SkipButton.propTypes = {
  path: string,
};
export default SkipButton;
