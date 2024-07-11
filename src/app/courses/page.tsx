import CourseCollection from "@/components/CourseCollection/CourseCollection";
import PageIntro from "@/components/PageIntro/PageIntro";

export default function CoursesPage() {
  return (
    <main>
      <PageIntro
        heading='Our Courses'
        copy='Here are some of our best courses that are included in the packages we have to offer.'
        videoSrc='./videos/video6.mp4'
        textAlign='center'
      />
      <CourseCollection />
    </main>
  );
}
