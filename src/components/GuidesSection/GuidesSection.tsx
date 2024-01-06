import { FC } from "react";
import { BlogData, BlogSectionProps } from "@/lib/interface";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./GuidesSection.module.css";
import BlogPreviewLarge from "../BlogPreviewLarge/BlogPreviewLarge";
import BlogPreviewMedium from "../BlogPreviewMedium/BlogPreviewMedium";
import BlogPreview from "../BlogPreview/BlogPreview";

const GuidesSection: FC<BlogSectionProps> = ({ blogData }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>Guides</h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              {blogData.slice(0, 3).map((x: BlogData, index: number) => (
                <BlogPreviewMedium key={index} mapData={x} />
              ))}
            </div>
            <div className={styles.right}>
              {blogData.slice(0, 1).map((x: BlogData, index: number) => (
                <BlogPreview key={index} mapData={x} tan2='tan2' />
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default GuidesSection;
