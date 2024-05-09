import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderSeven from "@/layout/header/header-seven";
import HeroBannerSeven from "@/components/hero-banner/hero-banner-seven";
import BlockFeatureThirteen from "@/components/block-feature/block-feature-thirteen";
import BlockFeatureFourteen from "@/components/block-feature/block-feature-fourteen";
import FeedbackSeven from "@/components/feedback/feedback-seven";
import FancyBannerSeven from "@/components/fancy-banner/fancy-banner-seven";
import BlockFeatureFifteen from "@/components/block-feature/block-feature-fifteen";
import HomeBlogs from "@/components/blogs/home-blogs";
import FancyBannerEight from "@/components/fancy-banner/fancy-banner-eight";
import FooterTwo from "@/layout/footer/footer-two";

export const metadata: Metadata = {
  title: "Home Page Seven",
};

export default function HomePageSeven() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <div className="box-layout mb-0 position-relative border-40 overflow-hidden">
          {/* header start */}
          <HeaderSeven />
          {/* header end */}

          {/* hero banner start */}
          <HeroBannerSeven />
          {/* hero banner end */}
        </div>

        {/* block feature start */}
        <BlockFeatureThirteen />
        {/* block feature end */}

        {/* block feature start */}
        <BlockFeatureFourteen />
        {/* block feature end */}

        {/* feedback start */}
        <FeedbackSeven />
        {/* feedback end */}

        {/* fancy banner start */}
        <FancyBannerSeven />
        {/* fancy banner end */}

        {/* block feature start */}
        <BlockFeatureFifteen />
        {/* block feature end */}

        {/* blog grid area start */}
        <HomeBlogs cls="mt-150 lg-mt-80 pb-130 lg-pb-80" />
        {/* blog grid area end */}

        {/* fancy banner start */}
        <FancyBannerEight/>
        {/* fancy banner end */}
      </div>
      {/* footer start */}
      <FooterTwo bg={false}/>
      {/* footer end */}
    </Wrapper>
  );
}
