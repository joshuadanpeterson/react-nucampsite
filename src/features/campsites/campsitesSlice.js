import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => CAMPSITES;

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectedFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
}

