import iphone11 from 'assets/owl.glb';
import macbookPro from 'assets/apple-vision-pro.glb';
import TraditionalMedia from 'assets/TraditionalMedia.glb';

export const ModelAnimationType = {
  SpringUp: 'spring-up',
  LaptopOpen: 'laptop-open',
};

export const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp,
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp,
    author: 'This work is based on Apple Vision Pro (https://sketchfab.com/3d-models/apple-vision-pro-3341d1f3f75e41b59fcedd1f46f03d56) by DextonOfficial (https://sketchfab.com/DextonOfficial) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)', // Add author information here

  },
  Classics: {
    url: TraditionalMedia,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp,
  },
};
