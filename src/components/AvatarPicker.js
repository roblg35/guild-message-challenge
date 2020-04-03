import React from 'react';

import Avatar from 'avataaars';

const AvatarPicker = () => {
  const top = [
    'LongHairStraight',
    'LongHairCurly',
    'WinterHat1',
    'LongHairFro',
    'ShortHairFrizzle',
    'ShortHairRound',
  ];
  const accessories = ['Blank', 'Kurt', 'Round'];
  const hair = ['PastelPink', 'Black', 'Blonde'];
  const facialHair = ['Blank', 'BeardMagestic', 'BeardMedium'];
  const avatarGenerator = item => item[Math.floor(Math.random() * item.length)];

  return (
    <Avatar
      avatarStyle="Circle"
      topType={avatarGenerator(top)}
      accessoriesType={avatarGenerator(accessories)}
      hairColor={avatarGenerator(hair)}
      facialHairType={avatarGenerator(facialHair)}
      facialHairColor="BrownDark"
      clotheType="BlazerShirt"
      eyeType="Default"
      eyebrowType="Default"
      mouthType="Default"
      skinColor="Light"
    />
  );
};

export default AvatarPicker;
