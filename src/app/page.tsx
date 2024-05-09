import Wrapper from "@/layout/wrapper";
import HeaderOne from "@/layout/header/header-one";
import HeroBannerOne from "@/components/hero-banner/hero-banner-one";
import TextFeatureTwo from "@/components/text-feature/text-feature-two";
import BlockFeatureFour from "@/components/block-feature/block-feature-four";
import TextFeatureThree from "@/components/text-feature/text-feature-three";
import BlockFeatureFive from "@/components/block-feature/block-feature-five";
import FeedbackTwo from "@/components/feedback/feedback-two";
import FaqSectionTwo from "@/components/faq/faq-section-two";
import HomeBlogs from "@/components/blogs/home-blogs";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import FooterTwo from "@/layout/footer/footer-two";

export default function HomePage() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <HeroBannerOne />
          {/* hero banner end */}

          {/* text feature start */}
          <TextFeatureTwo />
          {/* text feature end */}

          {/* block feature four start */}
          <BlockFeatureFour />
          {/* block feature four end */}

          {/* text feature start */}
          <TextFeatureThree />
          {/* text feature end */}

          {/* block feature five start */}
          <BlockFeatureFive />
          {/* block feature five end */}

          {/* feedback two start */}
          <FeedbackTwo/>
          {/* feedback two end */}

          {/* project faq area start */}
          <FaqSectionTwo/>
          {/* project faq area end */}

          {/* blog item start */}
          <HomeBlogs/>
          {/* blog item end */}

          {/* fancy banner three start */}
          <FancyBannerThree/>
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterTwo/>
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
