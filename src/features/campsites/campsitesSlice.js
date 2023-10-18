import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => CAMPSITES;

export const selectRandomCampsite = () => {
  const randomIndex = Math.floor(Math.random() * CAMPSITES.length);
  return CAMPSITES[randomIndex];
};