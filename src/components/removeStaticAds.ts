export const removeStaticAds = () => {
  const topBannerAd = document.querySelector(
    'iframe.ad-banner'
  ) as HTMLIFrameElement;
  topBannerAd.style.visibility = 'hidden';
};
