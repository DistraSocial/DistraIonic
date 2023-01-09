import { Profile, Post } from "../../types";

export const testProfiles:Profile[] = [
  {
    userName: 'Allison Frederick',
    userPicture: 'https://randomuser.me/api/portraits/women/39.jpg',
    userBackground: 'https://picsum.photos/id/25/1500/3000',
    userAddress: 'allison@distra.social',
    bio: 'This is a really cool bio for allie',
    createdAt: new Date(),
    updatedAt: new Date(),
    birthday: new Date('11/25/2000'),
    followers: [
      {userName: 'Andy 👋', userAddress: 'andydamico@distra.social'}
    ],
    posts: [{
      postAddress: '1'
    }]
  },
  {
    userName: 'Andy 👋',
    userAddress: 'andydamico@distra.social',
    userPicture: 'https://randomuser.me/api/portraits/men/58.jpg',
    userBackground: 'https://picsum.photos/id/24/1500/3000',
    bio: 'This is a really cool bio for andy',
    createdAt: new Date(),
    updatedAt: new Date(),
    birthday: new Date('03/17/1999'),
    posts: [{
      postAddress: '2'
    }]
  },
  {
    userName: 'Mark T. Cooper',
    userAddress: 'mtc@distra.social',
    userPicture: 'https://randomuser.me/api/portraits/men/40.jpg',
    userBackground: 'https://picsum.photos/id/23/1500/3000',
    bio: 'NOTHING OF INTEREST',
    createdAt: new Date(),
    updatedAt: new Date(),
    birthday: new Date(),
    posts: [{
      postAddress: '3'
    }]
  },
  {
    userName: 'Shay 💻',
    userAddress: 'shay223@distra.social',
    userPicture: 'https://randomuser.me/api/portraits/women/89.jpg',
    userBackground: 'https://picsum.photos/id/27/1500/3000',
    bio: '23 (she/they)',
    createdAt: new Date(),
    updatedAt: new Date(),
    birthday: new Date(),
    posts: [{
      postAddress: '4'
    }]
  }
]

export const testPosts:Post[] = [
  {
    postAddress: '1',
    userName: 'Allison Frederick',
    userAddress: 'allison@distra.social',
    userPicture: 'https://randomuser.me/api/portraits/women/39.jpg',
    mediaText: "I have nothing to say",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    postAddress: '2',
    userName: 'Andy 👋',
    userAddress: 'andydamico@distra.social',
    userPicture: 'https://randomuser.me/api/portraits/men/58.jpg',
    mediaText: "me neither",
    createdAt: new Date(),
    updatedAt: new Date(),
    replyTo: {
      postAddress: '1',
      userAddress: 'allison@distra.social'
    },
  },
  {
    postAddress: '3',
    userName: 'Mark T. Cooper',
    userAddress: 'mtc@distra.social',
    userPicture: 'https://randomuser.me/api/portraits/men/40.jpg',
    mediaText: "really cool post",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    postAddress: '4',
    userName: 'Shay 💻',
    userAddress: 'shay223@distra.social',
    userPicture: 'https://randomuser.me/api/portraits/women/89.jpg',
    mediaText: "example post",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    postAddress: '5',
    userName: 'Andy 👋',
    userAddress: 'andydamico@distra.social',
    userPicture: 'https://randomuser.me/api/portraits/men/58.jpg',
    mediaText: "This is not a reply",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]