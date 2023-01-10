import { Profile, Post, Reaction } from "../../types";

export const testProfiles:Profile[] = [
  {
    userName: 'Allison Frederick',
    userPicture: 'https://64.media.tumblr.com/6605b713bcba4aa308d5db4e170ea192/6ae1e10f7f090caf-0d/s128x128u_c1/608d4cd8e8ea8226429dd78930b413ef46668227.pnj',
    userBackground: 'https://pbs.twimg.com/profile_banners/1500230586488827907/1661567107/1500x500',
    userAddress: 'allison@distra.social',
    bio: '(she/her) This place looks familiar',
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
    userPicture: 'https://pbs.twimg.com/profile_images/1494457005888749571/qfqAyr-U_400x400.jpg',
    userBackground: 'https://pbs.twimg.com/profile_banners/3139104614/1559091675/1500x500',
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

export const testReactions:Reaction[] = [
  {
    emoji: '🤨',
    count: '100',
  },
  {
    emoji: '😂',
    count: '23',
  },
  {
    emoji: '❤️',
    count: '300',
  },
  {
    emoji: '🧐',
    count: '10',
  },
]

export const testPosts:Post[] = [
  {
    postAddress: '1',
    userName: 'Allison Frederick',
    userAddress: 'allison@distra.social',
    userPicture: 'https://64.media.tumblr.com/6605b713bcba4aa308d5db4e170ea192/6ae1e10f7f090caf-0d/s128x128u_c1/608d4cd8e8ea8226429dd78930b413ef46668227.pnj',
    mediaText: "Who needs drugs when you have a prescription strength vitamin D supplement.",
    createdAt: new Date(),
    updatedAt: new Date(),
    reactions: testReactions.slice(1,2)
  },
  {
    postAddress: '2',
    userName: 'Andy 👋',
    userAddress: 'andydamico@distra.social',
    userPicture: 'https://pbs.twimg.com/profile_images/1494457005888749571/qfqAyr-U_400x400.jpg',
    mediaText: "Exactly.",
    createdAt: new Date(),
    updatedAt: new Date(),
    replyTo: {
      postAddress: '1',
      userAddress: 'allison@distra.social'
    },
    reactions: testReactions.slice(2,3)
  },
  {
    postAddress: '6',
    userName: 'Andy 👋',
    userAddress: 'andydamico@distra.social',
    userPicture: 'https://pbs.twimg.com/profile_images/1494457005888749571/qfqAyr-U_400x400.jpg',
    mediaText: "this is another cool reply",
    createdAt: new Date(),
    updatedAt: new Date(),
    replyTo: {
      postAddress: '1',
      userAddress: 'allison@distra.social'
    },
    reactions: testReactions.slice(1,2)
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
    reactions: testReactions.slice(1,3)
  },
  {
    postAddress: '5',
    userName: 'Andy 👋',
    userAddress: 'andydamico@distra.social',
    userPicture: 'https://pbs.twimg.com/profile_images/1494457005888749571/qfqAyr-U_400x400.jpg',
    mediaText: "This is not a reply",
    createdAt: new Date(),
    updatedAt: new Date(),
    reactions: testReactions.slice(0,2)
  },
]

